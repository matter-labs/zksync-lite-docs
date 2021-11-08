# Getting started

In this tutorial we will demonstrate how to:

1. Connect to the zkSync network.
1. Deposit assets from Ethereum into zkSync.
1. Make transfers.
1. Withdraw funds back to Ethereum mainnet.

## Installation

ZkSyncSDK can be installed (preferably in a virtualenv) using pip as follows:

```
$ pip install git+https://github.com/zksync-sdk/zksync-python.git
```

Unfortunately, currently, SDK is not published on PyPI, thus installation through the git repository is
the only option.

## Setup crypto library

For using this library:

1.  You have to download zksync-crypto-library from <https://github.com/zksync-sdk/zksync-crypto-c/releases>
2.  Set env variable `ZK_SYNC_LIBRARY_PATH` with a path to the downloaded library

## Initialize crypto library

```python
from zksync_sdk import ZkSyncLibrary

lib = ZkSyncLibrary()
```

## Connecting to zkSync network

To interact with zkSync network users need to know the endpoint of the operator node.

```python
from zksync_sdk import HttpJsonRPCTransport, ZkSyncProviderV01, network

provider = ZkSyncProviderV01(provider=HttpJsonRPCTransport(network=network.rinkeby))
```

## Ethereum signer

Ethereum signer is mandatory for sending both L1 and L2 transactions since L2 transactions require an Ethereum
signature as a part of 2-factor authentication scheme. It is possible to create a wallet without an Ethereum private
key, but such a wallet will only be able to perform read requests to the zkSync server.

Ethereum signer is represented by the `EthereumSignerInterface` abstract class from `zksync_sdk.ethereum_signer.interface`.

By default, there is an implementation for web3 signer.

```python
from zksync_sdk import EthereumSignerWeb3
from web3 import Account

account = Account.from_key("PRIVATE_KEY")
ethereum_signer = EthereumSignerWeb3(account=account)

```

## Creating a Wallet

To control your account in zkSync, use the `Wallet` object. It can sign transactions with keys stored in
`ZkSyncSigner` and send a transaction to zkSync network using `ZkSyncProviderInterface`.

To create a `Wallet` object, you have to initialize `ZkSyncSigner`

```python
from web3 import Account
from zksync_sdk import ZkSyncSigner, network, ZkSyncLibrary
library = ZkSyncLibrary()
# Initialization from ethereum private key
account = Account.from_key("PRIVATE_KEY")
signer_v1 = ZkSyncSigner.from_account(account, library, network.rinkeby.chain_id)
# Initialization from zksync seed
signer_v2 = ZkSyncSigner.from_seed(library, b"seed")
# Initialization from zksync private key
signer_v3 = ZkSyncSigner(library, b"private_key")
```

For creating `Wallet` we have to create:
`EthereumProvider`, `ZkSyncLibrary`, `ZkSyncProvider`, `EthereumSigner`, `ZkSyncSigner` .

```python
from web3 import Web3, HTTPProvider, Account
from zksync_sdk import ZkSyncProviderV01, HttpJsonRPCTransport, network, ZkSync, EthereumProvider, Wallet, ZkSyncSigner, EthereumSignerWeb3, ZkSyncLibrary
# Load crypto library
library = ZkSyncLibrary()
# Create Zksync Provider
provider = ZkSyncProviderV01(provider=HttpJsonRPCTransport(network=network.rinkeby))
# Setup web3 account
account = Account.from_key("PRIVATE_KEY")
# Create EthereumSigner
ethereum_signer = EthereumSignerWeb3(account=account)
# Load contract addresses from server
contracts = await provider.get_contract_address()
# Setup web3
w3 = Web3(HTTPProvider(endpoint_uri="GETH_ENDPOINT" ))
# Setup zksync contract interactor
zksync = ZkSync(account=account, web3=w3,
                zksync_contract_address=contracts.main_contract)
# Create ethereum provider for interacting with ethereum node
ethereum_provider = EthereumProvider(w3, zksync)

# Initialize zksync signer, all creating options were described earlier
signer = ZkSyncSigner.from_account(account, library, network.rinkeby.chain_id)
# Initialize Wallet
wallet = Wallet(ethereum_provider=ethereum_provider, zk_signer=signer,
                eth_signer=ethereum_signer, provider=provider)
```

## Depositing assets from Ethereum into zkSync

Depositing requires `Wallet` object to be created with access to the Ethereum signer.

We are going to deposit `1.0 USDT` to our zkSync account.

```python
# Find token for depositing
token = await wallet.resolve_token("USDT")
# Approve Enough deposit using token contract
await wallet.ethereum_provider.approve_deposit(token, Decimal(1))

# Deposit money from contract to our address
deposit = await wallet.ethereum_provider.deposit(token, Decimal(1),
                                                 account.address)
```

You don't need to approve a deposit to transfer ETH.

## Unlocking zkSync account

To control assets in zkSync network, an account must register a separate public key once.

```python
if not await wallet.is_signing_key_set():
    tx = await wallet.set_signing_key("ETH", eth_auth_data=ChangePubKeyEcdsa())
    status = await tx.await_committed()
```

## Checking zkSync account balance

```python

# Committed state is not final yet
committedETHBalance = await wallet.get_balance("ETH", "committed")

# Verified state is final
verifiedETHBalance = await wallet.get_balance("ETH", "verified")
```

To list all tokens of this account at once, use `account_info`:

```python
account_state = await wallet.get_account_state()
committed_eth_balance = account_state.committed.balances.get("ETH")
verified_dai_balance = account_state.verified.balances.get("DAI")
```

## Making a transfer in zkSync

For making transfer to another account you just need to set receiver amount and token

```python
tx = await wallet.transfer("0x21dDF51966f2A66D03998B0956fe59da1b3a179F",
                           amount=Decimal("0.01"), token="USDC")
status = await tx.await_committed()
```

If you want more control over the transaction, you can optionally provide `nonce` and `fee`

## Swapping tokens

To swap tokens, first call the `get_order` or `get_limit_order` method on a wallet, to create and sign an order.

When 2 signed orders are collected, they can be submitted by anyone using the `swap` method.

```python
orderA = await walletA.get_order('USDT', 'ETH', Fraction(1500, 1), RatioType.token, Decimal('10.0'))
orderB = await walletB.get_order('ETH', 'USDT', Fraction(1, 1200), RatioType.token, Decimal('0.007'))
tx = await submitter.swap((orderA, orderB), 'ETH')
status = await tx.await_committed()
```

For detailed information, visit [Swaps tutorial](../../../dev/swaps.md) or [API reference](../js/accounts.md#swaps-in-zksync).

## Withdrawing funds back to Ethereum

```python
tx = await wallet.withdraw("0x21dDF51966f2A66D03998B0956fe59da1b3a179F",
                           Decimal("0.001"), "USDT")
status = await tx.await_committed()
```

Assets will be withdrawn to the target wallet after the zero-knowledge proof of zkSync block with this operation is
generated and verified by the mainnet contract.

## NFTs

For detailed information, visit the [NFT tutorial](../../../dev/nfts.md).

### Minting

To mint an NFT, provide a 32-byte content hash, recipient address and token which will be used to pay fees.

```python
tx = await wallet.mint_nft("0x0000000000000000000000000000000000000000000000000000000000000123",
                           "0x21dDF51966f2A66D03998B0956fe59da1b3a179F", "USDC")
status = await tx.await_committed()
```

Note that before transfering or withdrawing a freshly-minted NFT, this operation has to be verified (not just committed).

### Checking owned and minted NFTs

To check your minted NFTs, use `nfts` and `minted_nfts` fields on the committed or verified account state.

```python
account_state = await wallet.get_account_state()
owned_nfts = account_state.committed.nfts
# Minted nfts can only be used after verification of the mint_nft transaction
minted_nfts = account_state.verified.minted_nfts
```

### Transfering

To transfer an NFT, provide address to transfer to, NFT itself and token which will be used to pay fees.

```python
await self.wallet.transfer_nft("0x995a8b7f96cb837533b79775b6209696d51f435c", first_value, "USDC")
```

### Withdrawing

To withdraw an NFT, provide address to withdraw to, NFT itself and token which will be used to pay fees.

```python
tx = await wallet.withdraw_nft("0x21dDF51966f2A66D03998B0956fe59da1b3a179F", nft, "USDC")
status = await tx.await_committed()
```

## Getting information about zkSync transaction

For getting information about tx we have to use ZkSyncProviderV01

```python
provider = ZkSyncProviderV01(provider=HttpJsonRPCTransport(network=network.rinkeby))
tx = await provider.get_tx_receipt("0x95358fcedf9debc24121261d0c508eece61f8f20dfc36b1e5dbe3d33841b30fd")
```

Currently, most of the wallet methods return `Transaction` object wrapped around the transaction hash. This object has the following methods:

* `await_committed` <br>
**Description**: Consequently, this method waits until the transaction state becomes committed on the server-side.<br> But there is a possibility to set amount of attempts and timeout between attempts

* `await_verified` <br>
**Description**: This method by default waits until the transaction state becomes verified on the server-side.<br> it could take a while and it also accepts limited amount of attempts and timeout between them as parameters

**Example**:

```python
# build wallet object as described above
...
tr = await wallet.transfer(self.receiver_address, amount=Decimal("0.01"), token="USDC")
result = await tr.await_committed(attempts=20, attempts_timeout=100)
```

### Batch builder

There is a more advanced method for the execution of many ZkSync transactions by single call. For this has been added `BatchBuilder` class.<br>
To create an instance, you should provide `wallet` and current `nonce` where `nonce`, in simple words, is the counter of executed transactions. it can be got as simple as that:
```python
nonce = await wallet.zk_provider.get_account_nonce(wallet.address())
```
> **INFO**: When transactions are executed in batch current nonce is changed on the amount of them and it's highly recommented get current nonce by the provided method above

`BatchBuilder` accepts the following list of transaction types to be batched:

* `add_withdraw`
* `add_mint_nft`
* `add_withdraw_nft`
* `add_swap`
* `add_transfer`
* `add_change_pub_key`
* `add_force_exit`

After the `BatchBuilder` object accumulated different transactions and when it's needed to execute them `build` method must be called.<br>It returns `BatchResult` object. It contains: singed transactions objects, etherium signature, and total fees
For execution there must be called `submit_batch_builder_txs_batch` method of `ZkSyncProviderInterface` object.

**Usage examples**:

```python
# change pub key and transfer example:

nonce = await wallet.zk_provider.get_account_nonce(wallet.address())
builder = BatchBuilder.from_wallet(self.wallet, nonce)
builder.add_change_pub_key("ETH", eth_auth_type=ChangePubKeyEcdsa())
builder.add_transfer(receiver_address, "USDT", Decimal("0.001"))
build_result = await builder.build()
print(f"Total fees: {build_result.total_fees}")
transactions = await wallet.zk_provider.submit_batch_builder_txs_batch(build_result.transactions,
                                                                            build_result.signature)

# swap example:

nonce1 = await wallet1.zk_provider.get_account_nonce(wallet1.address())
nonce2 = await wallet2.zk_provider.get_account_nonce(wallet2.address())
builder = BatchBuilder.from_wallet(wallet1, nonce1)
test_n = 2
for i in range(test_n):
    order1 = await wallet1.get_order('USDT',
                                     'ETH',
                                      Fraction(1500, 1),
                                      RatioType.token,
                                      Decimal('0.1'),
                                      nonce=nonce1 + i
                                      )
    order2 = await wallet2.get_order('ETH',
                                     'USDT',
                                      Fraction(1, 1200),
                                      RatioType.token,
                                      Decimal('0.00007'),
                                      nonce=nonce2 + i)
    builder.add_swap((order1, order2), 'ETH')

build_result = await builder.build()
print(f"Total fees: {build_result.total_fees}")
transactions = await wallet1.zk_provider.submit_batch_builder_txs_batch(build_result.transactions,
                                                                        build_result.signature)
```

## Waiting for transaction commitment and finalization

To wait for transaction commitment into a zkSync block, use

```python
await tx.await_committed()
```

To wait for transaction finalization on L1, use

```python
await tx.await_verified()
```

# Getting started

In this tutorial we will demonstrate how to:

1. Connect to the zkSync network.
1. Deposit assets from Ethereum into zkSync.
1. Make transfers.
1. Withdraw funds back to Ethereum mainnet.

## Installation

ZkSyncSDK can be installed (preferably in a virtualenv) using pip as follows:

```
pip install git+https://github.com/zksync-sdk/zksync-python.git
```

Unfortunately, currently, SDK is not published on PyPI, thus installation through the git repository is the only option.

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

Ethereum signer is mandatory for sending both L1 and L2 transactions since L2 transactions require an Ethereum signature
as a part of 2-factor authentication scheme. It is possible to create a wallet without an Ethereum private key, but such
a wallet will only be able to perform read requests to the zkSync server.

Ethereum signer is represented by the `EthereumSignerInterface` abstract class from
`zksync_sdk.ethereum_signer.interface`.

By default, there is an implementation for web3 signer.

```python
from zksync_sdk import EthereumSignerWeb3
from web3 import Account

account = Account.from_key("PRIVATE_KEY")
ethereum_signer = EthereumSignerWeb3(account=account)

```

## Creating a Wallet

To control your account in zkSync, use the `Wallet` object. It can sign transactions with keys stored in `ZkSyncSigner`
and send a transaction to zkSync network using `ZkSyncProviderInterface`.

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

For creating `Wallet` we have to create: `EthereumProvider`, `ZkSyncLibrary`, `ZkSyncProvider`, `EthereumSigner`,
`ZkSyncSigner` .

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
# NOTE: Please ensure that the web3 provider and zksync provider match.
# A mainnet web3 provider paired with a testnet zksync provider will transact on mainnet!!
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
from decimal import Decimal

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
from zksync_sdk.types import ChangePubKeyEcdsa

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

To list all tokens of this account at once, use `get_account_state`:

```python
account_state = await wallet.get_account_state()
committed_eth_balance = account_state.committed.balances.get("ETH")
verified_dai_balance = account_state.verified.balances.get("DAI")
```

## Making a transfer in zkSync

For making transfer to another account you just need to set receiver amount and token

```python
from decimal import Decimal

tx = await wallet.transfer("0x21dDF51966f2A66D03998B0956fe59da1b3a179F",
                           amount=Decimal("0.01"), token="USDC")
status = await tx.await_committed()
```

If you want more control over the transaction, you can optionally provide `nonce` and `fee`

## Swapping tokens

To swap tokens, first call the `get_order` or `get_limit_order` method on a wallet, to create and sign an order.

When 2 signed orders are collected, they can be submitted by anyone using the `swap` method.

```python
from fractions import Fraction
from decimal import Decimal
from zksync_sdk.types import RatioType

orderA = await walletA.get_order('USDT', 'ETH', Fraction(1500, 1), RatioType.token, Decimal('10.0'))
orderB = await walletB.get_order('ETH', 'USDT', Fraction(1, 1200), RatioType.token, Decimal('0.007'))
tx = await submitter.swap((orderA, orderB), 'ETH')
status = await tx.await_committed()
```

For detailed information, visit [Swaps tutorial](/dev/swaps) or
[API reference](../../js/accounts/#swaps-in-zksync).

## Withdrawing funds back to Ethereum

```python
from decimal import Decimal

tx = await wallet.withdraw("0x21dDF51966f2A66D03998B0956fe59da1b3a179F",
                           Decimal("0.001"), "USDT")
status = await tx.await_committed()
```

Assets will be withdrawn to the target wallet after the zero-knowledge proof of zkSync block with this operation is
generated and verified by the mainnet contract.

## NFTs

For detailed information, visit the [NFT tutorial](/dev/nfts).

### Minting

To mint an NFT, provide a 32-byte content hash, recipient address and token which will be used to pay fees.

```python
tx = await wallet.mint_nft("0x0000000000000000000000000000000000000000000000000000000000000123",
                           "0x21dDF51966f2A66D03998B0956fe59da1b3a179F", "USDC")
status = await tx.await_committed()
```

Note that before transfering or withdrawing a freshly-minted NFT, this operation has to be verified (not just
committed).

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
from zksync_sdk import ZkSyncProviderV01, HttpJsonRPCTransport, network

zk_sync_provider = ZkSyncProviderV01(provider=HttpJsonRPCTransport(network=network.rinkeby))
tx = await zk_sync_provider.get_tx_receipt("0x95358fcedf9debc24121261d0c508eece61f8f20dfc36b1e5dbe3d33841b30fd")
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

## Supporting Two-Factor Authentication for Wallet

Two factor authentification is an additional protection layer enforced by zkSync server. You can read more about it
[here](/dev/payments/sending_transactions/#_2-factor-authentication).

The 2FA can be turned on or turned off using the following methods of the `Wallet` class:

- enable_2fa
- disable_2fa

Both methods return `True` in case of success and `False` otherwise. Example:

```python
# Enable 2FA
result = await self.wallet.enable_2fa()
if result:
    account_state = await self.wallet.get_account_state()
    # here account_state.account_type == AccountTypes.OWNED

# Disable 2FA but only to a specific pub_key_hash
# If you want to disable 2FA for the account entirely, then simply don't provide the `pub_key_hash`
pub_key_hash = self.wallet.zk_signer.pubkey_hash_str()
result = await self.wallet.disable_2fa(pub_key_hash)
if result:
    account_state = await self.wallet.get_account_state()
    # here account_state.account_type == AccountTypes.No2FA
```

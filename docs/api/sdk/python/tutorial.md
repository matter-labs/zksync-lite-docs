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

Unfortunately, currently SDK is not published on <pip>, thus install the dependency through the repository is
the only option.

## Setup library
For using this library:
 1. You have to download zksync-crypto-library from <https://github.com/zksync-sdk/zksync-crypto-c/releases>
 2. Set env variable `ZK_SYNC_LIBRARY_PATH` with path to the downloaded library 

## Initialize library
```
from zksync_sdk import ZkSyncLibrary

lib = ZkSyncLibrary()
```

## Connecting to zkSync network

To interact with Sync network users need to know the endpoint of the operator node.

```python
from zksync_sdk import HttpJsonRPCTransport, ZkSyncProviderV01, network

provider = ZkSyncProviderV01(provider=HttpJsonRPCTransport(network=network.rinkeby))
```

## Ethereum signer

Ethereum signer is mandatory for sending both L1 and L2 transactions, since L2 transactions require an Ethereum
signature as a part of 2-factor authentication scheme. It is possible to create a wallet without an Ethereum private
key, but such a wallet will only be able to perform read requests to the zkSync server.

Ethereum signer is represented by the `EthereumSignerInterface` abstract class from `zksync_sdk.ethereum_signer.interface`.

By default, there exist implementation for web3 version of signer.

```python
from zksync_sdk import EthereumSignerWeb3
from web3 import Account

account = Account.from_key("PRIVATE_KEY")
ethereum_signer = EthereumSignerWeb3(account=account)

```

## Creating a Wallet

To control your account in zkSync, use the `Wallet` object. It can sign transactions with keys stored in
`ZkSyncSigner` and send transaction to zkSync network using `ZkSyncProviderInterface`.

In order to create a `Wallet` object, you have to initialize `ZkSyncSigner`

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

For creating `Wallet` we have to create `EthereumProvider`.

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

Depositing requires `Wallet` object to be created with an access to the Ethereum signer.

We are going to deposit `1.0 USDT` to our zkSync account.

```python
# Find token for depositing
token = await wallet.resolve_token("USDT")
# Approve Enough deposit using token contract 
await wallet.ethereum_provider.approve_deposit(token, Decimal(1))

# Deposit money from contract to our address
res = await wallet.ethereum_provider.deposit(token, Decimal(1),
                                             account.address)
```

You don't need to approve a deposit to transfer ETH.

## Unlocking zkSync account

To control assets in zkSync network, an account must register a separate public key once.

```python
if not wallet.is_signing_key_set():
    await wallet.set_signing_key("ETH", eth_auth_data=ChangePubKeyEcdsa())
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
verified_dai_balance = account_state.balance.balances.get("DAI")
```

## Making a transfer in zkSync

For making transfer to another account you just need to set receiver amount and token 
```python
tr = await wallet.transfer("0x21dDF51966f2A66D03998B0956fe59da1b3a179F",
                           amount=Decimal("0.01"), token="USDC")

```
For better controlling you can optionally provide `nonce` and `fee`

## Withdrawing funds back to Ethereum

```python
await wallet.withdraw("0x21dDF51966f2A66D03998B0956fe59da1b3a179F",
                       Decimal("0.001"), "USDT")
```

Assets will be withdrawn to the target wallet after the zero-knowledge proof of zkSync block with this operation is
generated and verified by the mainnet contract.

# Basic Concepts

[[toc]]

## Operations

There are two types of operations in zkSync:

1. Priority operations
2. Transactions

### Priority operations

Priority operations are initiated directly on the Ethereum mainnet. For example, the user creates a deposit transaction
to move funds from Ethereum to zkSync. A priority operation can be identified with a numeric ID or hash of the ethereum
transaction that created it.

Currently, there are the following types of priority operations:

- `Deposit`: Moves funds from the Ethereum network to the designated account in the zkSync network. If the recipient
  account does not exist yet on the zkSync network, it will be created and a numeric ID will be assigned to the provided
  address.
- `FullExit`: Withdraws funds from the zkSync network to the Ethereum network without interacting with the zkSync
  server. This operation can be used as an emergency exit in case of detected censorship from the zkSync server node, or
  to withdraw funds in the situation where the signing key for an account in zkSync network cannot be set (e.g. if the
  address corresponds to a smart contract).

### Transactions

Transactions must be submitted via zkSync operator using the API.

Transactions are identified by the hash of their serialized representation.

Currently, there are the following types of transactions:

- `ChangePubKey`: Sets (or changes) the signing key associated with the account. Without a signing key set, no operation
  (except for priority operations) can be authorized by the corresponding account.
- `Transfer`: Transfers funds from one zkSync account to another zkSync account. If the recipient account does not exist
  yet on the zkSync network, it will be created and a numeric ID will be assigned to the provided address.
- `Swap`: Atomically swaps funds between two existing zkSync accounts.
- `Withdraw`: Withdraws funds from the zkSync network to the Ethereum network.
- `ForcedExit`: Withdraws funds from the "target" L2 account that doesn't have a signing key set, to the same "target"
  address on the Ethereum network. This operation can be used to withdraw funds in the situation where the signing key
  for account in zkSync network cannot be set (e.g. if address corresponds to a smart contract).
- `MintNFT`: Mints an NFT based on provided content hash to the provided "recipient".
- `WithdrawNFT`: Withdraw an NFT from the zkSync network to the Ethereum network.

## Blocks

All operations inside zkSync are arranged in blocks. After zkSync operator creates a block, it is pushed to the zkSync
smart contract on the Ethereum mainnet with a `Commit` transaction. When a block is committed, its state is not yet
final. After a couple of minutes, the ZK proof for the correctness of this block is produced. This proof is published on
Ethereum using the `Verify` transaction. Only after the `Verify` tx was mined, the new state is considered final.
Multiple blocks can be committed but not verified yet.

However, the execution model is slightly different: in order to not make users wait for the block finalization,
transactions are grouped into "mini-blocks" with a much smaller timeout. So, the blocks are being partially applied with
a small interval, so that shortly after receiving the transaction it is executed and L2 state is updated
correspondingly.

It means that after sending a transaction, the user has to wait for neither block commitment nor verification, and
transferred funds can be used immediately after corresponding transaction execution.

## Flow

This section describes typical use-cases of zkSync in a sequential manner.

### Creating an account

Accounts in zkSync can be created by either doing a deposit of funds from Ethereum or by transferring funds in zkSync to
the desired address. Any of these options will create a new account in the zkSync network if it doesn't exist.

However, newly created accounts are not capable of authorizing any transactions from it yet. In order to do so, the
account owner must set the signing key for their account.

### Setting the signing key

By default, the signing key for each account is set to the zero value, which marks account as "unowned". It's a
requirement because of the following reasons:

- If a transfer to some address is valid in Ethereum, it's also valid in zkSync.
- Not every address can have a private key (e.g. some smart contracts).
- Transfers to a user's account may happen before they've been interested in zkSync.

Thus, in order to make an account capable of initiating L2 transactions, the user must set a signing key for it via
`ChangePubKey` transaction.

This transaction has to have two signatures:

- zkSync signature of the transaction data, so that it won't be possible to mutate transaction contents.
- Ethereum signature proving account ownership.

Ethereum signature should be a signature of some pre-defined message. Also, it is possible to authorize `ChangePubKey`
operation on-chain by sending a corresponding transaction to the zkSync smart contract. Ownership of account will be
checked by both zkSync server and smart contract for better security guarantees.

The zkSync signature on all transaction fields must correspond to the public key provided in the transaction.

::: warning

If your solution supports multiple chains ( for example mainnet & rinkeby ), please check that the user is signing ChangePubKey after the transition to the correct network. Otherwise, user will have ChangePubKeys errors when he'll try to use zkWallet or other zkSync products and should pay for CPK one more time.

:::

#### Example of network validation
```javascript
try {
    await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ethereumChainId }],
    });
} catch (e) {
    throw new Error("Wrong chain. Cannot sign in.");
}
```

### Transferring funds

As mentioned above, any transfer that is valid in Ethereum, is also valid in zkSync.

Users may transfer any amount of funds in either Ether or any supported ERC-20 token. A list of supported tokens can be
found on the [corresponding explorer page](https://zkscan.io/explorer/tokens). It is also exposed via [API](/api).

However, transfer to a non-existent account requires slightly more data to be sent on the smart contract (we have to
include information about the new account), thus the fee for such transfers is slightly higher than the fee for
transfers to existing accounts.

### Fees

zkSync requires fees for transactions in order to cover expenses for network maintenance.

Fees for each kind of transaction are calculated based on three main factors:

- Amount of data that will be sent to the Ethereum network.
- Current gas price.
- Cost of computational resources to generate a proof for a block with the transaction.

Since we include many transactions in one block, the cost is amortized among all the included transactions, which
results in very small fee values.

Additionally, our API provides all the input data used for fee calculation via corresponding [API method][api_fee].

[api_fee]: /api/v0.1.md#get-tx-fee

### Withdrawing funds

Currently, there are three ways to withdraw funds from zkSync to an Ethereum account.

First one is `Withdraw` transaction.

It is an L2 transaction that can be used to request a withdrawal from your account to any Ethereum address. Same way as
transfers, it has to be signed by the correct zkSync private key.

This method is preferred for situations when you own your account and have a private key for it.

Second one is `ForcedExit` transaction.

It is an L2 transaction that can be used to request a withdrawal from any unowned account (one that does not have a
signing key set). Neither Ethereum address or amount can be chosen in this transaction: the only option is to request a
withdrawal of **all** available funds of a certain token from the target L2 address to the target L1 address.

Also, the transaction initiator should cover the fee, which is exactly the same as for `Withdraw` operation.

This method is preferred if funds should be withdrawn from an account that cannot set the signing key (i.e. smart
contract account), and there exists an L2 account which can send this type of transaction.

Third one is `FullExit` priority operation.

This kind of operation is called a "priority operation" since it's initiated from L1 and the smart contract provides
[guarantees](/userdocs/security.md#security-overview) that either this request will be processed within a reasonable
time interval, or network will be considered compromised / dead, and the contract will enter an exodus mode.

This method is preferred if the user will ever experience censorship from the network operator.

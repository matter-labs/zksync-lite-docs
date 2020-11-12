# Basic Concepts

## Operations

There are two types of operations in zkSync:

1. Priority operations
2. Transactions

### Priority operations

Priority operations are initiated directly on the Ethereum mainnet. For example, the user creates a deposit transaction
to move funds from Ethereum to zkSync. Priority operation can be identified with a numerical id or hash of the ethereum
transaction that created it.

Currently there are the following types of priority operations:

- `Deposit`: Moves funds from the Ethereum network to the desired account in the zkSync network. If recipient account
  does not exist yet in the zkSync network, it will be created and a numeric ID will be assigned to the provided
  address.
- `FullExit`: Withdraws funds from the zkSync network to the Ethereum network without interacting with the zkSync
  server. This operation can be used as an emergency exit in case of detected censorship from the zkSync server node, or
  to withdraw funds in the situation when the signing key for account in zkSync network cannot be set (e.g. if address
  corresponds to the smart contract).

### Transactions

Transactions must be submitted via zkSync operator using the API.

Transactions are identified by the hash of their serialized representation.

Currently there are the following types of transactions:

- `ChangePubKey`: Sets (or changes) the signing key associated with the account. Without signing key set, no operation
  (except for priority operations) can be authorized by the corresponding account.
- `Transfer`: Transfers funds from the one zkSync account to another zkSync account. If recipient account does not exist
  yet in the zkSync network, it will be created and a numeric ID will be assigned to the provided address.
- `Withdraw`: Withdraws funds from the zkSync network to the Ethereum network.
- `ForcedExit`: Withdraws funds from the "target" account in zkSync network that doesn't have signing key set, to the
  same "target" address in the Ethereum network. This operation can be used to withdraw funds in the situation when the
  signing key for account in zkSync network cannot be set (e.g. if address corresponds to the smart contract).

## Blocks

All operations inside zkSync are arranged in blocks. After zkSync operator creates a block, it is pushed to zkSync smart
contract on the Ethereum mainnet with a `Commit` transaction. When a block is committed, its state is not yet final.
After a couple of minutes, the ZK proof for the correctness of this block is produced. This proof is published to
Ethereum using the `Verify` transaction. Only after the `Verify` tx was mined, the new state is considered final.
Multiple blocks can be committed but not verified yet.

However, the execution model is slightly different: in order to not make users wait for the block finalization,
transactions are grouped into "miniblocks" with a much smaller timeout. So, the blocks is being partially applied with a
small interval, so that shortly after receiving the transaction is is executed and L2 state is updated correspondingly.

It means that after sending the transaction, user doesn't have to wait for neither block commitment or verification, and
transferred funds can be used immediately after corresponding transaction execution.

## Flow

This section describes an typical use-cases of zkSync in a sequential manner.

### Creating an account

Account in zkSync can be created by either doing a deposit of funds from Ethereum or by transferring funds
in zkSync to the desired address. Any of these options will create a new account in zkSync network if it didn't exist.

However, created account will not be capable of authorizing any transactions from it yet. In order to do so, account
owner must set the signing key for the account.

### Setting the signing key

By default, the signing key for each account is set to the zero value, which marks account as "unowned". It's a
requirement because of the following reasons:

- If transfer to some address is valid in Ethereum, it's also valid in zkSync.
- Not every address can have a private key (e.g. some smart contract).
- Transfer to some user's account may happen before they've been interested in zkSync.

Thus, in order to make account capable of initiating L2 transactions, user must set a signing key for it via
`ChangePubKey` transaction.

This transaction has to have two signatures:

- zkSync signature of the transaction data, so that it won't be possible to mutate transaction contents.
- Ethereum signature proving account ownership.

Ethereum signature may be either common Ethereum signature of some pre-defined message, or EIP-1271 signature. Also
it is possible to authorize `ChangePubKey` operation on-chain by sending a corresponding transaction to the zkSync smart
contract. Ownership of account will be checked by both zkSync server and smart contract for better security guarantees.

zkSync signature of all the transaction fields must correspond to the public key provided in the transaction.

### Transferring funds

As it was said above, any transfer that is valid in Ethereum, is also valid in zkSync.

User may transfer any amount of funds in either Ether or any supported ERC-20 token.
List of supported tokens can be found on the [corresponding explorer page](https://zkscan.io/tokens).
It is also exposed via [API](../api).

However, transfer to non-existent account requires slightly more data to be sent on the smart contract (we have to 
include information about new account), thus fee for such transfers is slightly higher than fee for transfers to the
existing account.

### Fees

zkSync requires fees for transactions in order to cover expenses for the network maintenance.

Fees for each kind of transaction is calculated based on two main factors:

- Amount of data we will have to send to the Ethereum.
- Current gas price.
- Cost of computational resources to generate a proof for a block with transaction.

Since we include many transaction in one block, cost is amortized among all the included transactions, which results in
very small fee values.

Additionally, our API provides all the input data used to fee calculation via corresponding [API method][api_fee].

[api_fee]: ../api/v0.1.md#get-tx-fee

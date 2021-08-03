# Basic Concepts

[[toc]]

## Operations

There are two types of operations in zkSync:

1. Priority operations
2. Transactions

### Priority operations

Priority operations are initiated directly on the Ethereum mainnet; for example, the user creates a deposit transaction
to move funds from Ethereum to zkSync. A priority operation is identified with a numeric ID or hash of the Ethereum
transaction that created it.

Currently there are two types of priority operations:

- `Deposit`: Moves funds from the Ethereum network to the recipient account in the zkSync network. If the recipient
  account does not yet exist on the zkSync network, zkSync creates it and assigns a numeric ID to the address provided.
- `FullExit`: Withdraws funds from the zkSync network to the Ethereum network without interacting with the zkSync
  server. This operation is used: 
   - As an emergency exit if censorship is detected from the zkSync server node
   - To withdraw funds if the signing key for an account in the zkSync network cannot be set (for example, if the address corresponds to a smart contract).

### Transactions

The user must submit transactions via the zkSync operator using the API. zkSync identifies transactions by the hash ID of their serialized representation. The current transaction types are:

- `ChangePubKey`: Sets or changes the signing key associated with the account. Without a signing key set, the account cannot authorize operations (except for priority operations).
- `Transfer`: Transfers funds from one zkSync account to another zkSync account. If the recipient account does not yet exist
  on the zkSync network, zkSync creates it and assigns a numeric ID to the address provided.
- `Swap`: Atomically swaps funds between two existing zkSync accounts.
- `Withdraw`: Withdraws funds from the zkSync network to the Ethereum network.
- `ForcedExit`: Withdraws funds from the "target" L2 account, that doesn't have a signing key set, to the same "target"
  address on the Ethereum network. This operation withdraws funds when the signing key for the account on the zkSync network cannot be set (for example, if the address corresponds to a smart contract).
- `MintNFT`: Mints an NFT for the user based on the content hash provided.
- `WithdrawNFT`: Withdraws an NFT from the zkSync network to the Ethereum network.

## Blocks

zkSync arranges all operations inside blocks. After the zkSync operator creates a block, it pushes it to the zkSync smart contract on the Ethereum mainnet using a `Commit` transaction. Once a block is committed, its state is not yet final. After a couple of minutes, zkSync produces the ZKProof for the correctness of this block. This proof is published on the Ethereum mainnet using the `Verify` transaction. Only after the `Verify` transaction is mined is the new state considered final. Multiple blocks can be committed but not yet verified

However, the execution model functions differently: users don’t have to wait for the block finalization as transactions are grouped into "mini-blocks" that have a much shorter timeout. Blocks are partially applied with a small interval so that shortly after receiving the transaction, zkSync executes it and updates the L2 state accordingly.

This means that, after sending a transaction, the user does not have to wait for a block commitment or verification and they can use the transferred funds immediately once the corresponding transaction has been executed.

## Flow

This section describes typical use-cases of zkSync in a sequential manner.

### Creating an account

Users create accounts in zkSync by either depositing funds from Ethereum or by transferring funds in zkSync to the desired address. Any of these options will create a new account in the zkSync network if it does not already exist.

However, newly created accounts are not capable of authorizing any transactions yet. To authorize transactions, the account owner must set the signing key for their account.

### Setting the signing key

The signing key value for each account is set to zero by default, which marks the account as "unowned". This is required for the following reasons:

- If a transfer to an address is valid in Ethereum, it is also valid in zkSync.
- Not every address can have a private key (for example, some smart contracts).
- Transfers to a user's account may happen before they've used zkSync.

To facilitate an account to initiate L2 transactions, the user must set a signing key for it using a `ChangePubKey` transaction. This transaction needs the following two signatures:

- zkSync signature of the transaction data, so transaction content cannot be altered.
- Ethereum signature proving account ownership.

The Ethereum signature should be a signature of some pre-defined message, for example:

     Set signing key: 0x32112121212
     Fee: 1.1 DAI

It is also possible to authorize the `ChangePubKey` transaction on-chain by sending a corresponding transaction to the zkSync smart contract. Both the zkSync server and smart contract check ownership of the account to ensure the highest security.

The zkSync signature on all transaction fields must correspond to the public key provided in the transaction.

### Transferring funds

Any transfer that is valid in Ethereum is also valid in zkSync. Users may transfer any amount of funds in either Ether or any supported ERC-20 token. A list of supported tokens can be found on the [explorer page](https://zkscan.io/explorer/tokens). It is also exposed via the [API](/api).

A transfer to a non-existent account requires slightly more data to be sent on the smart contract (the transfer includes information about the new account), so the fee for such transfers is slightly higher than the fee for transfers to existing accounts.


### Fees

zkSync requires fees for transactions to cover expenses for network maintenance.

Fees for each kind of transaction are calculated based on three main factors:

- Amount of data that will be sent to the Ethereum network.
- Current gas price.
- Cost of computational resources to generate a proof for a block with the transaction.

Since we include many transactions in one block, the cost is amortized among all transactions included in the block, which in turn reduces transaction fees.

Additionally, our API provides all the input data used for fee calculation via the corresponding [API method][api_fee].

[api_fee]: /api/v0.1.md#get-tx-fee

### Withdrawing funds

Currently, there are three ways to withdraw funds from zkSync to an Ethereum account.

1.`Withdraw`

This is an L2 transaction used to request a withdrawal from your account to any Ethereum address. As with transfers, it must be signed by the correct zkSync private key. This is the preferred method for when you own your account and have a private key for it.

2.`ForcedExit`

This is an L2 transaction used to request a withdrawal from any unowned account (one that does not have a signing key set). Neither the Ethereum address nor the amount is defined in this transaction: the only option is to request a withdrawal of **all** available funds of a certain token from the target L2 address to the target L1 address. Whoever initiates the transaction covers the fee, which is the same as for the `Withdraw` transaction. This method is preferred when withdrawing funds from an account that cannot set the signing key (such as a smart contract account) and where an L2 account exists that can send this type of transaction.

3.`FullExit`

This kind of operation is called a "priority operation" since it is initiated on L1 and the smart contract [guarantees](/faq/security.md#security-overview) that either this request will be processed within a reasonable time interval or the network is considered compromised/dead, triggering the contract into exodus mode. This method is used if the user experiences censorship from the network operator.

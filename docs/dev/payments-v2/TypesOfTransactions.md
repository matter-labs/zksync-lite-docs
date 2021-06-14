# Types of Transactions

Below we describe different types of transactions needed to make payments with zkSync.

## Creating an account

You can create an account in the zkSync network by depositing funds from Ethereum to zkSync or by transferring funds from an existing zkSync 
account. 

[`Deposit`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#5-deposit) moves funds from the Ethereum network to the 
designated account in the zkSync network. 

[`Transfer`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#3-transfer-to-new) moves funds from an existing zkSync account 
to the to-be-created zkSync account. 

If the recipient account does not yet exist, it will automatically be created and a numeric ID will be assigned to the provided address.

A transfer from an existing zkSync account to the to-be-created account requires slightly more data to be sent on the smart contract since 
the information about the newly created account needs to be included.  Fees for such transfers are therefore slightly higher than fees for 
transfers made to existing accounts.

The newly created account can’t authorize any transactions yet. You still have to set a signing key.

## Setting the signing key

By default, the signing key for each account is set to zero to mark it as unowned because:

- if a transfer to some address is valid in Ethereum, it is also valid in zkSync,
- not every address can have a private key (e.g. smart contracts can’t have one),
- transfers to the user's account might happened before they got interested in zkSync.

Thus, for an account to initiate L2 transactions, the user must set a signing key for it.

[`ChangePubKey`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#7-change-pubkey) sets (or changes) the signing key for 
an account. Without a set signing key, an account can authorize only priority operations, that is operations initiated directly on the Ethereum 
mainnet, but not the transactions initiated on the zkSync network.

[`ChangePubKey`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#7-change-pubkey) needs two signatures:

- zkSync signature of the transaction data, so that it won't be possible to mutate this data, and
- Ethereum signature to prove the ownership of the account. 

You can also authorize a [`ChangePubKey`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#7-change-pubkey) transaction
on-chain by sending a corresponding transaction to the zkSync smart contract. Both zkSync server and smart contract will then check the 
ownership of the account, resulting in better security.

## Transferring funds

[`Transfer`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#2-transfer) moves funds from one zkSync account to 
another zkSync account.

Any transfer that is valid in Ethereum, is also valid in zkSync.

Users may transfer any amount of funds in either Ether or any supported ERC-20 token. The list of supported tokens can be found on 
the [explorer page](https://zkscan.io/tokens) or via [API](/api).

## Fees

zkSync requires transaction fees to cover expenses for network maintenance.

Fees for each kind of transaction are calculated based on:

- amount of data to be sent to the Ethereum network,
- current gas price,
- costs of computations for generating a ZK proof for the block containing the transaction.

Since in one block many transactions are included, the cost is spread among all of them, resulting in very small fees.

Our API provides a [method](/api/v0.1.md#get-tx-fee) describing all the input data used for fee calculation.

## Withdrawing funds

There are three ways to withdraw funds from zkSync to an Ethereum account:

[`Withdraw`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#4-withdraw-partial-exit) requests a withdrawal from an 
owned account with a set signing key to any Ethereum address. As with transfers, it has to be signed by the correct zkSync private key. 

The transaction initiator covers the fees.

Use [`Withdraw`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#4-withdraw-partial-exit) when you own your account and 
have a private key for it.

[`ForcedExit`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#8-forced-exit) withdraws funds from any unowned 
account without a set signing key. Neither Ethereum address, nor a particular amount can be chosen in this transaction. You can only request the withdrawal 
of all available funds of a certain token from the target L2 address to the target L1 address.

The transaction initiator covers the fees.

Use [`ForcedExit`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#8-forced-exit) to withdraw funds from an 
account for which one can’t set the signing key (i.e. smart contract account), when there exists an owned L2 account with a set private 
key that can initiate such a transaction.

[`FullExit`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#6-full-exit) is initiated directly on the Ethereum mainnet 
to withdraw funds from the zkSync network to the Ethereum network without interacting with the zkSync server. 

[`FullExit`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#6-full-exit) can be used as an emergency exit when censorship is
detected from the zkSync server node, or to withdraw funds when the signing key for an zkSync account cannot be set.

The smart contract on the L1 guarantees that either this request will be processed within a reasonable time, or 
the network will be considered compromised/dead, and the contract will enter the exodus mode.

Use [`FullExit`](https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#6-full-exit) if you ever experience censorship from 
the zkSync server node.


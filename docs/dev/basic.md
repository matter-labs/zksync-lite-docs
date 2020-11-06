# Basic concepts

## Operations

There are two types of operations in zkSync:

1. Priority operations
2. Transactions

### Priority operations

Priority operations are initiated directly on the Ethereum mainnet. For example, the user creates a deposit transaction
to move funds from Ethereum to zkSync. Priority operation can be identified with a numerical id or hash of the ethereum
transaction that created it.

### Transactions

Transactions must be submitted via zkSync operator using the API.

Transactions are identified by the hash of their serialized representation.

## Blocks

All operations inside zkSync are arranged in blocks. After zkSync operator creates a block, it is pushed to zkSync smart
contract on the Ethereum mainnet with a `Commit` transaction. When a block is committed, its state is not yet final.
After a couple of minutes, the ZK proof for the correctness of this block is produced. This proof is published to
Ethereum using the `Verify` transaction. Only after the `Verify` tx was mined, the new state is considered final.
Multiple blocks can be committed but not verified yet.

# Getting started

To use zkSync, users need funds in the zkSync network. There are two ways to obtain funds:

1. Depositing from Ethereum network using a transaction to the zkSync smart contract on the mainchain.
2. Receiving funds from anyone that already has funds in the network.

All transactions in the zkSync network are authorized with a signature using private keys. Public keys and addresses can be derived from the private key. Public address in the zkSync network is required to receive funds. For convenience, it is possible to use Ethereum private key to derive a zkSync private key.

All operations inside zkSync are arranged in blocks. After network operator creates block it gets published to Ethereum with a `Commit` transaction. When a block is committed, its state is not final. After a couple of minutes, ZK proof for the correctness of this block is produced. This proof is published to Ethereum using `Verify` transaction and after that state is considered final. Multiple blocks can be committed but not verified yet.

There are two types of operations:

1. Priority operations
2. Transactions

Priority operations are initiated from the Ethereum network using transactions. For example, the user creates a deposit transaction to move funds from Ethereum to zkSync. Priority operation can be identified with a numerical id or hash of the ethereum transaction that created it. Priority operations can't be ignored by the network. 

Transactions are signed by some accounts in the zkSync network and should be delivered to the network operator node. 

Transactions are identified by the hash of its serialized representation.

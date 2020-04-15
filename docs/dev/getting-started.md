# Getting started

To operate zkSync, users require digital currency. There are two ways to obtain the currency:

1. Depositing from Ethereum network by making a transaction to a zkSync smart contract on the mainchain.
2. Receiving funds from anyone who already has funds in the network.

All transactions in the zkSync network are authorized with a signature using private keys. Public keys and addresses can be derived from the private key. A public address in the zkSync network must be able to receive funds. For convenience, it is possible to use Ethereum private key to derive a zkSync private key.

All operations inside zkSync are arranged in blocks. After network operator creates block it gets published to Ethereum with a `Commit` transaction. The finality of a committed block is probabilistic until a zero-knowledge (ZK) proof verifies its correctness in a few minutes. This proof then gets published to Ethereum using `Verify` transaction and making the state of the block final. Multiple blocks can be committed but not verified.

There are two types of operations:

1. Priority operations
2. Transactions

Priority operations are initiated from the Ethereum network using transactions. For example, the user creates a deposit transaction to move funds from Ethereum to zkSync. A priority operation can be identified with a numerical id or hash of the Ethereum transaction that created it. Priority operations can't be ignored by the network. Otherwise, an exodus mode is triggered.

Transactions are signed by some accounts in the zkSync network and should be delivered to the network operator node. 

Transactions are identified by the hash of their broadcasted representation.

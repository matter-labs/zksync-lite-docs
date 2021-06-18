# Execution of transactions

All operations inside zkSync are arranged in blocks. After zkSync operator creates a block, it is pushed with a 
Commit transaction to the zkSync smart contract on the Ethereum mainnet. 

The fact that the block is committed, does not however mean that its state is final. A few minutes are still needed for the Zero Knowledge proof of the block’s 
correctness to be produced. 

When obtained the ZK proof is published on Ethereum with the Verify transaction. It is only after the Verify transaction is mined, that the new state is 
considered to be final. Multiple blocks can be committed but not verified yet. 

The execution model for transactions is slightly different though. For the users not to wait till the block is finalized, 
transactions are grouped into "mini-blocks" with a much smaller timeout. The blocks are then partially applied with a small interval, so that shortly 
after the transaction is received, it is executed and L2 state is updated correspondingly.

It means that after sending a transaction, the user does not have to wait for block commitment or verification. 
The transferred funds can be used immediately after the transaction is executed.

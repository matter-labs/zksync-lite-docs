# Sending a transaction batch
A transaction batch is a set of transactions that are sent togehter and should all succeed. If one transaction in hte batch fails, all other transactions will also fail.

A batch is guaranteed to successfully process a max of 50 transactions.

::: warning

### Security note
Currently, the transaction batch is a server-side abstraction. Successful execution is checked 
pre-circuit, and information about batch is not passed into the circuit. If you therefore use a 
transaction batch to pay fees in a different token, put the fee payment transaction at the last position 
in the batch so that the server will be unable even in theory to ignore other transactions and only execute the last one. 
In the future, the batches will be enforced in the circuit in order to increase the overall security of this feature. 

:::

You can send a transaction batch like this:
```typescript
import * as zksync from "zksync";
const syncHttpProvider = await zksync.getDefaultProvider("rinkeby");
const firstTransferTx = {
  accountId: 13, // id of the sender account in the zkSync
  type: "Transfer",
  from: "0x..address1",
  to: "0x..address2",
  token: 0, // id of the ETH token
  amount: "1000000000000000000", // 1 Ether in Wei
  fee: "10000000000000000", // 0.01 Ether in Wei
  nonce: 0,
  signature: {
    pubKey: "dead..", // hex encoded packed public key of signer (32 bytes)
    signature: "beef..", // hex encoded signature of the tx (64 bytes)
  },
};
const firstTransferEthSignature = "0xdddaaa...1c"; // Ethereum ECDSA signature for the first message
const secondTransferTx = {
  type: "Transfer",
  // ...other fields omitted
};
const secondTransferEthSignature = "0xaaaddd...ff"; // Ethereum ECDSA signature for the second message
const batch = [
  { tx: firstTransferTx, signature: firstTransferEthSignature },
  { tx: secondTransferTx, signature: secondTransferEthSignature },
];
// List of transaction hashes
const transactionHashes = await syncHttpProvider.submitTxsBatch(batch);
```

For more details check our [SDK section](https://zksync.io/api/sdk/js/).
## Send a transaction batch via API

To send a batch of transactions via API you should:
-	prepare and encode the transaction data for each transaction as per [zkSync Rollup Protocol]( https://github.com/matter-labs/zksync/blob/master/docs/protocol.md).  
- create a zkSync signature for each encoded transaction with the zkSync private key  as per [cryptography specs]( https://zksync.io/api/sdk/crypto.html). 
-	provide an EIP-1271 signature or create an Ethereum signature for the following description of the transaction batch:

In transaction batches you do not have to provide an Ethereum signature for each individual transaction. One Ethereum signature per batch is enough.

```js
// Assuming that `transactions` variable holds an array of batch transactions, and
// `serializeTx(...)` encodes transaction into bytes as per zkSync protocol.
// Obtain concatenated byte representations of each transaction.
const bytes = concat(transactions.map((tx) => serializeTx(tx)));
// Calculate `keccak256` hash of this byte sequence.
const hash = ethers.utils.keccak256(bytes).slice(2);
// Decode it into a byte sequence.
const message = Uint8Array.from(Buffer.from(hash, "hex"));
```
Since some of the Ethereum signers add the \x19Ethereum Signed Message:\n${messageBytes.length} prefix to the signed messages, you will have to add this prefix manually to the batch, if it was not added automatically.  

After you have the array of signed transactions and one Ethereum signature for the whole batch, you can send your batch of transactions via [submit_txs_batch]( https://zksync.io/api/v0.1.html#submit-txs-batch ) API method.
## Fees
You do not have to individually set a fee for each transaction in the batch. It is only required for the sum of fees to be equal or greater than the sum of fees for each transaction if set individually. 

When using transaction batches it is therefore possible to pay the transaction fee with a token other than the one which is transferred. Just create a batch of two transactions:
-	Make a transfer in token FOO (the token that you actually want to transfer) to the recipient with the transaction fee set to 0.
-	Make a transfer in token BAR (the token that you want to pay the fee with) to your own account with the amount of the token set to 0, and the fee set at an amount which is enough to cover the two transfers.

ZKSync server node will check whether the sum of the two fees (0 in the first transaction + 2x of expected fee in the second transaction) is enough to cover the processing of the two transfers and will execute the batch.

# Transferring funds
`Transfer` transaction can move funds between two existing  zkSync accounts.

Users may transfer any amount of funds in either Ether or any supported ERC-20 token. The list of supported tokens can be found on the 
[explorer page](https://zkscan.io/tokens) or via [API](https://zksync.io/api/v0.1.html#tokens). 

After installing [dependencies](https://zksync.io/api/sdk/js/tutorial.html#adding-dependencies), creating an account, 
and setting the public key, you can transfer funds between two existing zkSync accounts like this:
```typescript
// Check if the account is created 
 if ((await syncWallet.getAccountId()) == undefined) {
    throw new Error("Unknown account");
 }
// Check if the Signing key is set 
  if ((await syncWallet.isSigningKeySet ()) == undefined) {
    throw new Error("Signing key not set");
  }
//Create a second account
const ethWallet2 = ethers.Wallet.fromMnemonic(MNEMONIC2).connect(ethersProvider);
const syncWallet2 = await zksync.SyncWallet.fromEthSigner(ethWallet2, syncProvider);
// Transfer `0.999 ETH`
const amount = zksync.utils.closestPackableTransactionAmount(ethers.utils.parseEther("0.999"));
// Pay `0.001 ETH`
// Setting fee manually is not required. If `fee`  field is omitted, SDK will choose the lowest possible fee
acceptable by the server 
const fee = zksync.utils.closestPackableTransactionFee(ethers.utils.parseEther("0.001"));
const transfer = await syncWallet.syncTransfer({
  to: syncWallet2.address(),
  token: "ETH",
  amount,
  fee,
});
// Wait till the transaction is committed
const transferReceipt = await transfer.awaitReceipt();
```
For more details check our [SDK section](https://zksync.io/api/sdk/js/).

## Transferring funds via API

To send the `Transfer` transaction via API you should: 

-	prepare and encode the transaction data as per [zkSync Rollup Protocol]( https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#2-transfer ).  
- create a zkSync signature for the obtained bytes with the zkSync private key  as per [cryptography specs]( https://zksync.io/api/sdk/crypto.html). 
-	provide an EIP-1271 signature or create an Ethereum signature for the following description of your transaction:
```js
// Amount and fee must be encoded into formatted string, e.g. by `ethers.utils.formatUnits` method
// with respect to the token decimals value.
// Token must be represented as a token symbol, e.g. `ETH` or `DAI`.
const transferEthMessage =
  `Transfer ${stringAmount} ${stringToken}\n` +
  `To: ${transfer.to.toLowerCase()}\n` +
  `Nonce: ${transfer.nonce}\n` +
  `Fee: ${stringFee} ${stringToken}\n` +
  `Account Id: ${this.accountId}`; 
```
Since some of the Ethereum signers add the \x19Ethereum Signed Message:\n${messageBytes.length} prefix to the signed messages, you will have to add this prefix manually, if it was not added automatically.  

Once you have a signed Transfer transaction and an Ethereum signature of its description , use the [`tx_submit`]( https://zksync.io/api/v0.1.html#tx-submit) API 
method to send your transaction to the zkSync server for it to be executed. 

You can also [include the Transfer transaction into a batch](https://github.com/LesKukh/zksync-docs/blob/LesKukh-patch-2-1/docs/dev/payments-v2/batch.md) so that it will be sent together with other transactions.

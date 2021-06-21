# Setting the Signing Key
By default, the signing key for each account is set to zero to mark it as unowned. Thus, for an account to initiate L2 transactions, the user must set a signing key for it.

`ChangePubKey` transaction sets (or changes) the signing key for an account. 


After installing [dependencies](https://zksync.io/api/sdk/js/tutorial.html#adding-dependencies) and creating an account, set a signing key like this:
```typescript
// Check if the Signing key is not already set, and the account is already created
if (!(await syncWallet.isSigningKeySet())) {
  if ((await syncWallet.getAccountId()) == undefined) {
    throw new Error("Unknown account");
  }
}
// As any other kind of transaction, `ChangePubKey` transaction requires fees.
// Optionally, users can specify the fee amount. If omitted, the library will query zkSync node for the lowest possible amount.
const changePubkey = await syncWallet.setSigningKey({
  feeToken: "ETH",
  ethAuthType: "ECDSA",
});
// Wait till transaction is committed
await changePubkey.awaitReceipt();
```
For more details check our [SDK section](https://zksync.io/api/sdk/js/).
## Setting the Signing key via API 
To send the `ChangePubKey` via API transaction you should : 

-	prepare and encode the transaction data as per [zkSync Rollup Protocol]( https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#7-change-pubkey ).  
- create a zkSync signature for the obtained bytes with the zkSync private key as per [cryptography specs]( https://zksync.io/api/sdk/crypto.html). 
-	provide an EIP-1271 signature or create an Ethereum signature for the following description of your transaction:
```js
// Amount and fee must be encoded into formatted string, e.g. by `ethers.utils.formatUnits` method
// with respect to the token decimals value.
// Token must be represented as a token symbol, e.g. `ETH` or `DAI`.
const msgNonce = utils.hexlify(serializeNonce(nonce));
const msgAccId = utils.hexlify(serializeAccountId(accountId));
const pubKeyHashHex = pubKeyHash.replace("sync:", "").toLowerCase();
const changePubKeyEthMessage =
  `Register zkSync pubkey:\n\n` + `${pubKeyHashHex}\n` + `nonce: ${msgNonce}\n` + `account id: ${msgAccId}\n\n` + `Only sign this message for a trusted client!`;
```
Since some of the Ethereum signers add the \x19Ethereum Signed Message:\n${messageBytes.length} prefix to the signed messages, you will have to add this prefix manually, 
if it was not added automatically.  

Once you have a signed `ChangePubKey` transaction and an Ethereum signature of its description you can use the [`tx_submit`]( https://zksync.io/api/v0.1.html#tx-submit) API method to send the transaction to the zkSync server for it to be validated and committed. 

You can also [include the ChangePubKey transaction into a batch]() so that it will be sent together with other transactions. 

It is also possible to authorize a ChangePubKey transaction on-chain by sending it to the zkSync smart contract. 
Both zkSync server and smart contract will then check the ownership of the account, resulting in better security.

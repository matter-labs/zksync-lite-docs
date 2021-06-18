# Withdrawing funds
Below we will show you how to:
-	[withdraw funds to Ethereum from a zkSync account which has the signing key]() 
-	[withdraw funds to Ethereum from a zkSync account which does not have the signing key]()
-	[withdraw funds to Ethereum without interacting with the zkSync server]()
## Withdrawing funds to Ethereum from a zkSync account which has the signing key
`Withdraw` transaction requests a withdrawal from an owned account with a set signing key to any Ethereum address. 

The initiator of the transaction covers the fees.

After installing [dependencies](https://zksync.io/api/sdk/js/tutorial.html#adding-dependencies),  creating an account, and 
setting the signing key for it, you can withdraw the funds to an Ethereum account from an zkSync account which has the signing key like this: 
```typescript
// Check if the account is created 
 if ((await syncWallet.getAccountId()) == undefined) {
    throw new Error("Unknown account");
 }

// Check if the Signing key is set 
  if ((await syncWallet.isSigningKeySet ()) == undefined) {
    throw new Error("Signing key not set");
  }

//withdraw 0.45 ETH
const withdraw = await syncWallet.withdrawFromSyncToEthereum({
  ethAddress: ethWallet.address,
  token: "ETH",
  amount: ethers.utils.parseEther("0.45"),
});

//Assets will be withdrawn after ZKP verification is complete

await withdraw.awaitVerifyReceipt();
```
For more details check our [SDK section](https://zksync.io/api/sdk/js/).
### Sending the `Withdraw` transaction via API
To send the `Withdraw` transaction via API you should: 
-	prepare and encode the transaction data as per [zkSync Rollup Protocol]( https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#4-withdraw-partial-exit ).  
- create a zkSync signature for the obtained bytes with the zkSync private key as per [cryptography specs]( https://zksync.io/api/sdk/crypto.html). 
-	provide an EIP-1271 signature or create an Ethereum signature for the following description of your transaction:
```js
// Amount and fee must be encoded into formatted string, e.g. by `ethers.utils.formatUnits` method
// with respect to the token decimals value.
// Token must be represented as a token symbol, e.g. `ETH` or `DAI`.

const withdrawEthMessage =
  `Withdraw ${stringAmount} ${stringToken}\n` +
  `To: ${withdraw.ethAddress.toLowerCase()}\n` +
  `Nonce: ${withdraw.nonce}\n` +
  `Fee: ${stringFee} ${stringToken}\n` +
  `Account Id: ${this.accountId}`;
```
Since some of the Ethereum signers add the \x19Ethereum Signed Message:\n${messageBytes.length} prefix to the signed messages, 
you will have to add this prefix manually, if it was not added automatically.  

Once you have a signed `Withdraw` transaction and an Ethereum signature of its description you can use the [`tx_submit`]( https://zksync.io/api/v0.1.html#tx-submit) 
API method to send the transaction to the zkSync server for it to be executed. 

You can also [include the `Withdraw` transaction into a batch]() so that it will be sent together with other transactions.
## Withdrawing funds to Ethereum from a zkSync account which does not have the signing key
`ForcedExit` transaction withdraws funds from any unowned account without a set signing key.

There should be another zkSync account with the signing key which can initiate this transaction.

Neither Ethereum address, nor the amount of the funds can be chosen in `ForcedExit`. You can only request the withdrawal of all available 
funds of a certain token from the target L2 address to the target L1 address.

After installing [dependencies](https://zksync.io/api/sdk/js/tutorial.html#adding-dependencies),  creating an account, and setting the signing key for it, 
you can withdraw the funds to an Ethereum account from an zkSync account which does not have a signing key like this: 
```typescript
// Check if the Signing key is not already set for the account that you want to withdraw from
if (!(await syncWallet.isSigningKeySet())) {
  if ((await syncWallet.getAccountId()) == undefined) {
    throw new Error("Unknown account");
  }
} 
// Check if the Signing key is set for the account that will initiate the transaction
if ((await syncWallet2.getAccountId()) == undefined) {
    throw new Error("Unknown account");
 }
if ((await syncWallet2.isSigningKeySet ()) == undefined) {
    throw new Error("Signing key not set");
  }
}
// With syncWallet2 initiate the withdrawal of all syncWallet funds to the target syncWallet’s  Ethereum address
const forcedExitTransaction = await syncWallet2.syncForcedExit({
    target: "0x9de880ac69f3ed1e4d6870fcdabf07cbbed6f85c",
    token: "ETH",
    fee: ethers.utils.parseEther("0.001")
});
// Wait till the transaction is verified
const transactionReceipt = await forcedExitTransaction.awaitVerifyReceipt();
```
For more details check our [SDK section]( https://zksync.io/api/sdk/js/accounts.html#initiate-a-forced-exit-for-an-account).
### Sending the `ForcedExit` transaction via API
To send the `ForcedExit` transaction via API you should: 
-	prepare and encode the transaction data as per [zkSync Rollup Protocol]( https://github.com/matter-labs/zksync/blob/master/docs/protocol.md#8-forced-exit ).  
- create a zkSync signature for the obtained bytes with the zkSync private key as per [cryptography specs]( https://zksync.io/api/sdk/crypto.html). 
-	provide an EIP-1271 signature or create an Ethereum signature for the following description of your transaction:
```js
// Amount and fee must be encoded into formatted string, e.g. by `ethers.utils.formatUnits` method
// with respect to the token decimals value.
// Token must be represented as a token symbol, e.g. `ETH` or `DAI`.

const forcedExitEthMessage =
  `ForcedExit ${forcedExit.stringToken} to: ${forcedExit.target.toLowerCase()}\n` +
  `Nonce: ${withdraw.nonce}\n` +
  `Fee: ${forcedExit.stringFee} ${forcedExit.stringToken}`;
```
Since some of the Ethereum signers add the \x19Ethereum Signed Message:\n${messageBytes.length} prefix to the signed messages, you will have to add this prefix manually, if it was not added automatically.  

Once you have a signed `ForcedExit` transaction and an Ethereum signature of its description you can use the [`tx_submit`]( https://zksync.io/api/v0.1.html#tx-submit) 
API method to send the transaction to the zkSync server for it to be executed. 

The initiator of the transaction covers the fees.

You can also [include the`ForcedExit` transaction into a batch]() so that it will be sent together with other transactions.

Use `ForcedExit` to withdraw funds from an account for which one can’t set the signing key (i.e. smart contract account), 
when there exists an owned L2 account with a set signing key which can initiate such a transaction.

## Withdrawing funds to Ethereum without interacting with the zkSync server 
`FullExit` withdraws funds from the zkSync network to the Ethereum network without interacting with the zkSync server. 
This is a priority operation meaning that it is initiated directly on the Ethereum mainnet as a L1 smart contract method.

To perform a full exit, user must first register an exit request via `fullExit` contract call:

```js
/// @notice Register full exit request - pack pubdata, add priority request
/// @param _accountId Numerical id of the account in the zkSync network
/// @param _token Token address, 0 address for ether
function fullExit (uint32 _accountId, address _token) external nonReentrant;
```

Then complete the exit request via `completeWithdrawals` call.

```js

/// @notice executes pending withdrawals
/// @param _n The number of withdrawals to complete starting from oldest
function completeWithdrawals(uint32 _n) external nonReentrant;
```

The smart contract on the L1 guarantees that either the exit request will be processed within a reasonable time, 
or the network will be considered compromised/dead, and the contract will enter the exodus mode.

`FullExit` can be used as an emergency exit when censorship is detected from the zkSync server node, 
or to withdraw funds when the signing key for an zkSync account cannot be set.

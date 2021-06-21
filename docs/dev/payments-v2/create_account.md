# Creating an account
Below we will show you how to:
- [creat a zkSync account by depositing from Ethereum]()
- [creat a zkSync account by transferring funds from an existing zkSync account]().
## Creating a zkSync account by depositing from Ethereum

`Deposit` moves funds from the Ethereum network to the designated account in the zkSync network.

After installing [dependencies](https://zksync.io/api/sdk/js/tutorial.html#adding-dependencies), create a zkSync account by depositing from Ethereum like this:
```typescript
//import zkSync library
import * as zksync from "zksync"; 

// Connect to zkSync network
const syncProvider = await zksync.getDefaultProvider("rinkeby");

// Connect to Ethereum network
const ethersProvider = ethers.getDefaultProvider("rinkeby");     

// Create ethereum wallet using ethers.js
const ethWallet = ethers.Wallet.fromMnemonic(MNEMONIC).connect(ethersProvider);

// Derive zksync.Signer from ethereum wallet.
const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);

// Deposit assets from Ethereum into zkSync
const deposit = await syncWallet.depositToSyncFromEthereum({
  depositTo: syncWallet.address(),
  token: "ETH",
  amount: ethers.utils.parseEther("1.0"),
});

// Await confirmation from the zkSync operator
// Completes when a promise is issued to process the tx
const depositReceipt = await deposit.awaitReceipt();

// Await verification
// Completes when the transaciton reaches finality on Ethereum
const depositReceipt = await deposit.awaitVerifyReceipt();
```
For more details check our [SDK section](https://zksync.io/api/sdk/js/).

The newly created account, however, can’t authorize any transactions on the zkSync network. You still have to [set a signing key] for it().
### Creating a zkSync account by depositing from Ethereum via smart contract
`Deposit` is a priority operation. Unlike zkSync transaction which are invoked directly on the zkSync network, priority opeartions are invoked as smart contract methods on the Ethereum mainnet. 

The signature of smart contract method for `Deposit` looks like this:
```js
/// @notice Deposit ETH to Layer 2 - transfer ether from user into contract, validate it, register deposit
/// @param _franklinAddr The receiver Layer 2 address
function depositETH(address _franklinAddr) external payable nonReentrant;

/// @notice Deposit ERC20 token to Layer 2 - transfer ERC20 tokens from user into contract, validate it, register deposit
/// @param _token Token address
/// @param _amount Token amount
/// @param _franklinAddr Receiver Layer 2 address
function depositERC20(IERC20 _token, uint104 _amount, address _franklinAddr) external nonReentrant;
```

## Creating an account by transferring funds from an existing zkSync account
`Transfer` transaction can move funds from an existing zkSync account to the to-be-created zkSync account.

If the recipient account does not yet exist on the zkSync network, it will automatically be created and a numeric ID will be assigned to the provided address.

A transfer from an existing zkSync account to the to-be-created account requires slightly more data to be sent on the smart contract since the information about the newly created account needs to be included.  
Fees for such transfers are therefore slightly higher than fees for transfers made to existing accounts.

After installing [dependencies](https://zksync.io/api/sdk/js/tutorial.html#adding-dependencies), creating  a zkSync account, and setting the signing key for it, you can create another account like this:
```typescript
// Check if the account which will transfer funds is created 
 if ((await syncWallet.getAccountId()) == undefined) {
    throw new Error("Unknown account");
 }
// Check whether the account which will transfer funds has the signing key 
  if ((await syncWallet.isSigningKeySet ()) == undefined) {
    throw new Error("Signing key not set");
  }
//Set the amount to be transferred
const amount = zksync.utils.closestPackableTransactionAmount(ethers.utils.parseEther("0.999"));

// Pay `0.001 ETH` of fee
// Setting fee manually is not required. If `fee`  field is omitted, SDK will choose the lowest possible fee
acceptable by the server 
const fee = zksync.utils.closestPackableTransactionFee(ethers.utils.parseEther("0.001"));
const transfer = await syncWallet.syncTransfer({
  to: “0x9de880ac69f3ed1e4d6870fcdabf07cbbed6f85c”, //the Ethereum address you want to make a zkSync account for
  token: "ETH",
  amount,
  fee,
});
// Wait till the transaction is committed
const transferReceipt = await transfer.awaitReceipt();
```
For more details check our [SDK section](https://zksync.io/api/sdk/js/).

After creating an account set a [signing key for it]().

### Creating an account by transferring funds from an existing zkSync account via API
To send the Transfer transaction via API you should: 
-	prepare and encode the transaction data as per [zkSync Rollup Protocol]( https://github.com/matter-labs/zksync/blob/master/docs/protocol/#3-transfer-to-new).  
- create a zkSync signature for the obtained bytes with the zkSync private key as per [cryptography specs]( https://zksync.io/api/sdk/crypto.html). 
-	provide an EIP-1271 signature or create an Ethereum signature for the following description of your transaction:
```js
// Amount and fee must be encoded into formatted string, e.g. by `ethers.utils.formatUnits` method
// with respect to the token decimals value.
// Token must be represented as a token symbol, e.g. `ETH` or `DAI`.

const transferEthMessage =
  `Transfer ${stringAmount} ${stringToken}\n` +
  `To: ${transfer.to.toLowerCase()}\n` +
  `Nonce: ${transfer.nonce}\n` +
  `Fee: ${stringFee} ${stringToken}\n` 
```
Since some of the Ethereum signers add the \x19Ethereum Signed Message:\n${messageBytes.length} prefix to the signed messages, you will have to add this prefix manually, if it was not added automatically.  

Once you have a signed `Transfer` transaction and an Ethereum signature of its description you can use the [`tx_submit`]( https://zksync.io/api/v0.1.html#tx-submit) API method to send the transaction to the zkSync server for it to be executed. 

You can also [include the Transfer transaction into a batch]() so that it will be sent together with other transactions. 

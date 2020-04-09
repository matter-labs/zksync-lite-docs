# Tutorial

Here we show how to

1. Connect to the zkSync network.
2. Create a private key in the zkSync. 
3. Move funds from Ethereum to the zkSync.
4. Make fast transfers.
5. Move funds from the zkSync to Ethereum.

## Adding dependencies

```bash
yarn add zksync
yarn add ethers # For interactions with ETH network, ethers is peer dependency of zksync.
```

Add imports.

```typescript
import {ethers} from "ethers";
import * as zksync from "zksync";
```

Alternatively.

```javascript
const ethers = require("ethers");
const zksync = require("zksync");
```

## Wasm

We use [Wasm](https://en.wikipedia.org/wiki/WebAssembly) for the cryptography-related calculations.
For the `node.js` environment the instructions from the previous chapter remain intact,
but if `zksync.js` is going to be used in the browser, several additional steps are required:

1. Consult your bundler documentation about using wasm.
2. Make sure that your server correctly serves wasm files.

> Example of how we configure our basic web client.

```js
const zksync_promise = import('zksync');

// In the async function that does initialization in your project call:

const zksync = await zksync_promise;
```

> Example of the nginx.conf entry adding support for the Wasm content type

```
location ~ ^/client {
    include /etc/nginx/mime.types;
    types {
        application/wasm                      wasm;
    }
    //..
}
```

## Connecting to the Sync network

To interact with Sync network users have to know the endpoint of the operator node.

```typescript
const syncProvider = await zksync.getDefaultProvider("testnet");

// When using WebSocket provider connection should be closed manually when needed using.
await syncProvider.disconnect();
```

The alternative provider is an HTTP provider.

```typescript
const syncProvider = await zksync.SyncProvider.newHttpProvider("https://testnet.zksync.dev/jsrpc");
```

Most operations require some read-only access to the Ethereum network.
We use `ethers` library to interact with Ethereum. 

Addresses of the Sync network contracts should be known in advance, 
for convenience now we can get these addresses from Sync network operator using `syncProvider`. 



```typescript
const ethersProvider = new ethers.getDefaultProvider('rinkeby');
```

## Creating Wallet

To use zkSync network we provide `Wallet` object. It can be used to sign transactions 
with keys stored in `Signer` and send transaction to the zkSync network using connection provided by `Provider`.

Wallet is wrapper around `ethers.Signer` object that is used to sign ethereum transactions, zksync transactions signed using `Signer`.

For convenience signer keys can be derived from ethereum signature of the specific message.

```typescript
// Create ethereum wallet using ethers.js
const ethWallet = ethers.Wallet.fromMnemonic( MNEMONIC ).connect(ethersProvider);
```

```typescript
// Derive zksync.Signer from ethereum wallet.
const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);
```

## Moving funds from ethereum to the Sync network

We are going do deposit some funds from our ethereum wallet into sync account.
For that we should create specific ethereum transaction. We can create this transaction using `depositToSyncFromEthereum` function. 

Here we are moving "ETH" token. To transfer supported ERC20 token we should use ERC20 address or ERC20 symbol instead of "ETH".

We are going to deposit `1.0 ETH` to our account, and we are going to pay at most `0.1 ETH` in fees (depends on the gas price). 
zkSync account will receive `1.0 ETH`.

```typescript
const deposit = await syncWallet.depositToSyncFromEthereum({
    depositTo: syncWallet.address(),
    token: "ETH",
    amount: ethers.utils.parseEther("1.0"),
    maxFeeInETHCurrency: ethers.utils.parseEther("0.1")
});
```

After transaction is submitted to the Ethereum we can track its progress using returned object.


```typescript
// If we want to wait until deposit is processed by the SyncNetwork.
const depositReceipt = await deposit.awaitReceipt();

// If we want to wait until deposit is processed and finalized using ZKP.
const depositReceipt = await deposit.awaitVerifyReceipt();
```

## Unlocking sync wallet

To send funds inside zkSync network, account should have zksync key pair associated with it. It can be done
using [change public key transaction](#changing-account-public-key).

```typescript
if (! await syncWallet.isSigningKeySet()) {
    if (await syncWallet.getAccountId() == undefined) {
        throw new Error("Account should be registered in the zkSync network (i.e. have had funds at least once)");
    } 

    const changePubkey = await syncWallet.setSigningKey();

    // Wait till transaction is committed
    await changePubkey.awaitReceipt();
}
```

## Get balance in the zkSync network

To get balance of the zkSync account you can use `getBalance` method.
Committed state is last state of the account that may or may not be finalized by ZK proof.
Verified is referred to finalized by ZK proof state of the account. 

```typescript
const committedETHBalance = await syncWallet.getBalance("ETH");
const verifiedETHBalance = await syncWallet.getBalance("ETH", "verified");
```

To get all tokens of this account you can use `getAccountState`.

```typescript
const state = await syncWallet.getAccountState();

const committedBalances = state.committed.balances;
const committedETHBalance = committedBalances["ETH"];

const verifiedBalances = state.verified.balances;
const committedETHBalance = verifiedBalances["ETH"];
```

## Get balance in the Ethereum network

For convenience, there is a method with a similar signature that can be used to query balance in the Ethereum network. 

```typescript
const onchainETHBalance = await syncWallet.getEthereumBalance("ETH");
```

## Moving funds inside zkSync network

Let's create a second wallet and transfer funds to it.

```typescript
const ethWallet2 = ethers.Wallet.fromMnemonic( MNEMONIC2 ).connect(ethersProvider);
const syncWallet2 = await zksync.SyncWallet.fromEthSigner(ethWallet2, syncProvider);
```

To transfer funds from one Sync account to another we can use the `syncTransfer` method.
We are going to transfer `0.999 ETH` to another account and pay `0.001 ETH` as a fee to the operator. 
(zkSync balance of the sender is going to be decreased by `0.999 + 0.001 ETH`).


```typescript
// significant digits in the transfer transaction is limited, that is why we use utils to check/strip significant digits. 
const amount = zksync.utils.closestPackableTransactionAmount(ethers.utils.parseEther("0.999")); 
const fee = zksync.utils.closestPackableTransactionFee(ethers.utils.parseEther("0.001")); 

const transfer= await syncWallet.syncTransfer({
    to: syncWallet2.address(),
    token: "ETH",
    amount,
    fee,
});
```

To track progress of this transaction we can use returned transaction.

```typescript
const transferReceipt = await transfer.awaitReceipt();
```

## Moving funds out of the Sync network

To withdraw funds from Sync account to ethereum account we can use the `withdrawTo` method.

We are going to withdraw `0.998 ETH` from the second sync account to the second ethereum wallet and pay `0.001 ETH` as a fee. 
(zkSync balance is going to be decreased by `0.998 + 0.001 ETH` ).


```typescript
// significant digits for fee in the withdraw transaction is limited, that is why we use utils to check/strip significant digits. 
const fee = zksync.utils.closestPackableTransactionFee(ethers.utils.parseEther("0.001")); 

const withdraw= await syncWallet2.withdrawTo({
    ethAddress: ethWallet2.address,
    token: "ETH",
    amount: ethers.utils.parseEther("0.998"),
    fee,
});
```

Funds will be withdrawn to the target wallet after ZKP for sync block with this operation is produced and verified.
We can wait until ZKP verification is completed using a returned transaction. 


```typescript
await withdraw.awaitVerifyReceipt();
```

# Tutorial

In this guide, we illustrate how to:

1. Connect to the zkSync network;
2. Create a private key in zkSync;
3. Move funds from Ethereum to zkSync;
4. Make fast transfers;
5. Move funds from zkSync to Ethereum.

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
For the `node.js` environment, the instructions from the previous chapter remain intact.
If `zksync.js` is going to be used in a browser, several additional steps are required:

1. Consult your bundler documentation on using Wasm.
2. Make sure that your server handles wasm files correctly.

> Example of how we configure our basic web client.

```js
const zksync_promise = import('zksync');

// In a zkSync function, this starts initializing in your project call:

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

## Connecting to the zkSync network

To interact with the zkSync network, users have to know the endpoint of the operator node.

```typescript
const syncProvider = await zksync.getDefaultProvider("testnet");

// When using WebSocket, provider connection should be closed manually.
await syncProvider.disconnect();
```

The alternative provider is an HTTP provider.

```typescript
const syncProvider = await zksync.SyncProvider.newHttpProvider("https://testnet.zksync.dev/jsrpc");
```

Most operations require some read-only access to the Ethereum network.
We use `ethers` library to interact with Ethereum. 

Contract addresses on the zkSync network need to be known in advance. 
One can get these addresses from a zkSync operator using `syncProvider`. 

```typescript
const ethersProvider = new ethers.getDefaultProvider('rinkeby');
```

## Creating Wallet

To operate the zkSync network, we provide `Wallet` object. One uses it to sign transactions with keys stored in `Signer` and send transactions to the zkSync network through a connection offered by `Provider`.

Wallet is a wrapper around `ethers.Signer` object that is used to sign Ethereum transactions. zkSync transactions are signed using `Signer`.

For convenience, signer keys can be derived from the Ethereum signature of a specific message.

```typescript
// Create an Ethereum wallet using ethers.js
const ethWallet = ethers.Wallet.fromMnemonic( MNEMONIC ).connect(ethersProvider);
```

```typescript
// Derive zksync.Signer from ethereum wallet.
const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);
```

## Moving funds from Ethereum to the zkSync network

We are going to deposit some funds from our Ethereum wallet into a zkSync account.
First, we should create a specific Ethereum transaction. We can do this by using `depositToSyncFromEthereum` function. 

There, we are moving the "ETH" token. To transfer a supported ERC20 token, one should use an ERC20 address or ERC20 symbol instead of "ETH".

We are going to deposit `1.0 ETH` to our account. We will pay at most `0.1 ETH` in fees (depends on the gas price). 
The zkSync account will receive `1.0 ETH`.

```typescript
const deposit = await syncWallet.depositToSyncFromEthereum({
    depositTo: syncWallet.address(),
    token: "ETH",
    amount: ethers.utils.parseEther("1.0"),
    maxFeeInETHCurrency: ethers.utils.parseEther("0.1")
});
```

After a transaction is submitted to the Ethereum, we can track its progress using the returned object.


```typescript
// If we want to wait until deposit is processed by the SyncNetwork.
const depositReceipt = await deposit.awaitReceipt();

// If we want to wait until deposit is processed and finalized using ZKP.
const depositReceipt = await deposit.awaitVerifyReceipt();
```

## Unlocking a zkSync wallet

To send funds inside the zkSync network, an account should have s zkSync key pair associated with it. It can be done
using a [change public key transaction](#changing-account-public-key).

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

To obtain a balance of the zkSync account, one can use `getBalance` method. 
`Committed` state is the last state of the account that may or may not be finalized by ZK proof.
`Verified` is referred to as a finalized by ZK proof state of the account. 

```typescript
const committedETHBalance = await syncWallet.getBalance("ETH");
const verifiedETHBalance = await syncWallet.getBalance("ETH", "verified");
```

To view the token balance of a certain account, one can use `getAccountState`.

```typescript
const state = await syncWallet.getAccountState();

const committedBalances = state.committed.balances;
const committedETHBalance = committedBalances["ETH"];

const verifiedBalances = state.verified.balances;
const committedETHBalance = verifiedBalances["ETH"];
```

## Get balance in the Ethereum network

There is a method with a similar signature that can be used to query balance in the Ethereum network. 

```typescript
const onchainETHBalance = await syncWallet.getEthereumBalance("ETH");
```

## Moving funds inside the zkSync network

Let's create the second wallet and transfer funds there.

```typescript
const ethWallet2 = ethers.Wallet.fromMnemonic( MNEMONIC2 ).connect(ethersProvider);
const syncWallet2 = await zksync.SyncWallet.fromEthSigner(ethWallet2, syncProvider);
```

To transfer funds from one zkSync account to another, we can use the `syncTransfer` method.
We are going to transfer `0.999 ETH` to another account and pay `0.001 ETH` as a fee to the operator. 
(zkSync balance of the sender is going to be decreased by `0.999 + 0.001 ETH`).


```typescript
// significant digits in the transfer transaction are limited; this is why we use utils to check/strip significant digits. 
const amount = zksync.utils.closestPackableTransactionAmount(ethers.utils.parseEther("0.999")); 
const fee = zksync.utils.closestPackableTransactionFee(ethers.utils.parseEther("0.001")); 

const transfer= await syncWallet.syncTransfer({
    to: syncWallet2.address(),
    token: "ETH",
    amount,
    fee,
});
```

To track the progress of this transaction, we can use a returned transaction.

```typescript
const transferReceipt = await transfer.awaitReceipt();
```

## Moving funds from the zkSync network

To withdraw funds from a zkSync account to an Ethereum account, one can use the `withdrawTo` method.

We are going to withdraw `0.998 ETH` from the second zkSync account to the second Ethereum wallet and pay `0.001 ETH` as a fee. 
(zkSync balance is going to decrease by `0.998 + 0.001 ETH` ).


```typescript
// significant digits for the fee in the withdrawal transaction are limited; this is why we use utils to check/strip significant digits. 
const fee = zksync.utils.closestPackableTransactionFee(ethers.utils.parseEther("0.001")); 

const withdraw= await syncWallet2.withdrawTo({
    ethAddress: ethWallet2.address,
    token: "ETH",
    amount: ethers.utils.parseEther("0.998"),
    fee,
});
```

The funds will be withdrawn to the target wallet after ZKP for a zkSync block with this operation is produced and verified.
We can wait until ZKP verification is completed using a returned transaction. 


```typescript
await withdraw.awaitVerifyReceipt();
```

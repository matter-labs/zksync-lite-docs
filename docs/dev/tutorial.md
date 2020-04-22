# Getting started

In this tutorial we will demonstrate how to:

1. Connect to the zkSync network.
1. Deposit assets from Ethereum into zkSync.
1. Make transfers.
1. Withdraw funds back to Ethereum mainnet.

## Adding dependencies

```bash
yarn add zksync
yarn add ethers # ethers is a peer dependency of zksync
```

## Adding imports (to asynchronously load cryptographic wasm libraries):

```js
const zksync = await import('zksync');
```

## Connecting to zkSync network

To interact with Sync network users need to know the endpoint of the operator node.

```typescript
const syncProvider = await zksync.getDefaultProvider("testnet");
```

Most operations require some read-only access to the Ethereum network. We use `ethers` library to interact with Ethereum. 

```typescript
const ethersProvider = new ethers.getDefaultProvider('rinkeby');
```

## Creating a Wallet

To control your account in zkSync, use the `zksync.Wallet` object. It can sign transactions with keys stored in `zksync.Signer` and send transaction to zkSync network using `zksync.Provider`.

`zksync.Wallet` is a wrapper around 2 objects:

- `ethers.Signer` to sign Ethereum transactions.
- `zksync.Signer` to sign native zkSync transactions.

The private key used by `zksync.Signer` is implicitly derived from Ethereum signature of a special message.

```typescript
// Create ethereum wallet using ethers.js
const ethWallet = ethers.Wallet.fromMnemonic(MNEMONIC).connect(ethersProvider);

// Derive zksync.Signer from ethereum wallet.
const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);
```

## Depositing assets from Ethereum into zkSync

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

"ETH" stands for native Ether. To transfer supported ERC20 token use ERC20 address or ERC20 symbol instead of "ETH".

After the tx is submitted to the Ethereum node, we can track its status using the returned object:

```typescript
// Await confirmation from the zkSync operator
// Completes when a promise is issued to process the tx
const depositReceipt = await deposit.awaitReceipt();

// Await verification
// Completes when the tx reaches finality on Ethereum
const depositReceipt = await deposit.awaitVerifyReceipt();
```

## Unlocking sync wallet

To control assets in zkSync network, an account must register a separate public key once ([more details here](#changing-account-public-key)).

```typescript
if (! await syncWallet.isSigningKeySet()) {
    if (await syncWallet.getAccountId() == undefined) {
        throw new Error("Unknwon account");
    } 

    const changePubkey = await syncWallet.setSigningKey();

    // Wait until the tx is committed
    await changePubkey.awaitReceipt();
}
```

## Checking zkSync account balance

```typescript
// Committed state is not final yet
const committedETHBalance = await syncWallet.getBalance("ETH");

// Verified state is final
const verifiedETHBalance = await syncWallet.getBalance("ETH", "verified");
```

To list all tokens of this account at once, use `getAccountState`:

```typescript
const state = await syncWallet.getAccountState();

const committedBalances = state.committed.balances;
const committedETHBalance = committedBalances["ETH"];

const verifiedBalances = state.verified.balances;
const committedETHBalance = verifiedBalances["ETH"];
```

## Making a transfer in zkSync

Now, let's create a second wallet and transfer some funds into it.

```typescript
const ethWallet2 = ethers.Wallet.fromMnemonic( MNEMONIC2 ).connect(ethersProvider);
const syncWallet2 = await zksync.SyncWallet.fromEthSigner(ethWallet2, syncProvider);
```

We are going to transfer `0.999 ETH` to another account and pay `0.001 ETH` as a fee to the operator (zkSync account balance of the sender is going to be decreased by `0.999 + 0.001 ETH`). The use of `closestPackableTransactionAmount()` and `closestPackableTransactionFee()` is necessary because the precision of transfer in zkSync is limited (see docs below).

```typescript
const amount = zksync.utils.closestPackableTransactionAmount(
    ethers.utils.parseEther("0.999")); 
const fee = zksync.utils.closestPackableTransactionFee(
    ethers.utils.parseEther("0.001")); 

const transfer= await syncWallet.syncTransfer({
    to: syncWallet2.address(),
    token: "ETH",
    amount,
    fee,
});
```

To track the status of this transaction:

```typescript
const transferReceipt = await transfer.awaitReceipt();
```

## Withdrawing funds back to Ethereum

```typescript
const fee = zksync.utils.closestPackableTransactionFee(
    ethers.utils.parseEther("0.001")); 

const withdraw= await syncWallet2.withdrawTo({
    ethAddress: ethWallet2.address,
    token: "ETH",
    amount: ethers.utils.parseEther("0.998"),
    fee,
});
```

Assets will be withdrawn to the target wallet after the zero-knowledge proof of zkSync block with this operation is generated and verified by the mainnet contract.

We can wait until ZKP verification is complete:

```typescript
await withdraw.awaitVerifyReceipt();
```
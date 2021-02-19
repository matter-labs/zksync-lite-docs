# Getting started

In this tutorial we will demonstrate how to integrate basic zkSync checkout flow into any website:

1. Check if the user has sufficient balance to pay for the goods.
2. Proceed to checkout.
3. Verify that the transactions have been completed.

## Adding dependencies

```bash
yarn add zksync-checkout
yarn add ethers # ethers is a peer dependency of zksync-checkout
```

Even though the library requires the `ethers` as its peer dependency there is no need to deal with connecting web3
providers onto your website. The library by itself is sufficient to receive payments in crypto, the rest is handled by
zkSync.

See [Appendix A](appendix-a.md) for how to add library to web project directly from
[https://unpkg.com](https://unpkg.com) CDN.

**Please note, that the library works only in browser environment, since the user is guided through zkCheckout via a
popup**

## Structure of the tutorial

This tutorial does not cover back-end or front-end code that is needed for a website but focuses solely on how to use
the `zksync-checkout` library.

This tutorial will show the basic checkout flow by putting all the action inside a single function:

```ts
import { Types } from 'zksync-checkout';

async function checkoutUser(
  // The list of payments the user has to do
  transactions: Types.ZkSyncTransaction[],
  // The token in which the user will pay the fee
  feeToken: Types.TokenLike,
  // The app can accept payments whether you know the address of the user or you don't
  address?: string
) {
  // Here will go the code
}
```

Let's say that the user has to make two payments: one for some apples worth 23 DAI and one for the bananas worth 55.5
DAI, also the user should pay the zkSync fee in DAI. Then you could call the function the following way:

```ts
const transactions = [
  {
    to: '<your-eth-address>',
    token: 'DAI',
    // The amount should be specified in wei
    amount: '23000000000000000000',
    description: 'For apples'
  },
  {
    to: '<your-eth-address>',
    token: 'DAI',
    amount: '55500000000000000000',
    description: 'For bananas'
  }
];

// Here we assume that we don't know the address of the user
checkoutUser(transactions, 'DAI');
```

## Creating checkout manager

For each checkout we need to create a separate `CheckoutManager` object which handles all the necessary internals needed
for the checkout:

```ts
import { CheckoutManager } from 'zksync-checkout';

// ..

// 'ropsten' and 'rinkeby' are also supported
const checkoutManager = new CheckoutManager('mainnet');
```

## Checking user's balance

If the user's address is known, we should check if the user has sufficient funds to proceed with the payment. This
can be done easily with the following piece of code:

```ts
// For testing purposes, the default providers could be used
// but for the production, it is preferred to use custom providers
// (e.g. Infura, Alchemy, etc)
const ethProvider = ethers.providers.getDefaultProvider('mainnet');

// ...

// Checks that sum of L1 + L2 balances of the user are sufficient to pay
// for the transactions
const hasEnoughBalance = await checkoutManager.checkEnoughBalance(transactions, feeToken, address, ethProvider);

// Notify the user that she does not hold enough funds
if (!hasEnoughBalance) {
  throw new Error('Not enough balance!');
}
```

## Proceed to checkout

```ts
// Proceeding to the checkout, retrieving the transactions' hashes
const txHashes = await checkoutManager.zkSyncBatchCheckout(transactions, feeToken);

// Waiting until the transactions complete
const receipts = await checkoutManager.wait(txHashes, 'COMMIT');
```

zkSync will guide the user through the process of the payment.

The app has to wait until the transactions complete to be sure that they were successful.

::: warning

It is always a good practice to validate the data received from the front-end on the back-end.

So make sure to check on the server side that the transactions were valid and have been completed. This can be easily
done through the SDKs for the supported languages. Here is
[an example from JS SDK](/sdk/js/providers#wait-for-transaction-receipt). If there is no zkSync SDK for your backend
language you can easily check the transaction status [via our API](/api/v0.1.md#transaction-details).

:::

## Full example

Here is the code of the full user checkout flow:

```tsx
import { Types, CheckoutManager } from 'zksync-checkout';

// For the testing purposes the default providers could be used
// but for the production it is preferred to use custom providers
// (e.g. Infura, Alchemy, etc)
const ethProvider = ethers.providers.getDefaultProvider('mainnet');

async function checkoutUser(
  // The list of payments the user has to do
  transactions: Types.ZkSyncTransaction[],
  // The token in which the user will pay the fee
  feeToken: Types.TokenLike,
  // The app can accept payments whether you know the address of the user or you don't
  address?: string
) {
  const checkoutManager = new CheckoutManager('mainnet');

  if (address) {
    // Checks that sum of L1 + L2 balances of the user are sufficient to pay
    // for the transactions
    const hasEnoughBalance = await checkoutManager.checkEnoughBalance(transactions, feeToken, address, ethProvider);

    if (!hasEnoughBalance) {
      throw new Error('Not enough balance!');
    }
  }

  // Proceeding to the checkout, retrieving the transactions' hashes
  const txHashes = await checkoutManager.zkSyncBatchCheckout(transactions, feeToken);

  // Waiting until the transactions complete
  const receipts = await checkoutManager.wait(txHashes, 'COMMIT');

  // Now we now that the transactions have completed and
  // we can send the payment info to be processed on the back-end of your app
}

const transactions = [
  {
    to: '<your-eth-address>',
    token: 'DAI',
    // The amount should be specified in wei
    amount: '23000000000000000000',
    description: 'For apples'
  },
  {
    to: '<your-eth-address>',
    token: 'DAI',
    amount: '55500000000000000000',
    description: 'For bananas'
  }
];

// Here we assume that you don't know the address of the user
checkoutUser(transactions, 'DAI');
```

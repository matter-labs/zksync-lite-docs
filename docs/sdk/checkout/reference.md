# Reference

## Interface overview

The library provides a convenient way to integrate zkSync checkout flow into any website.

The main export of the library is the `CheckoutManager` class, which must be instantiated separately for each checkout.

The library also exports `Constants`, `Types`, `Utils`. These export constants, type definitions and type guards, as
well as some utility functions.

It also exports functions that might be commonly used:

- `estimateBatchFee` is used to estimate the fee for a batch of transactions.
- `wait` is used to wait until a batch of transactions is either committed or verified.
- `getState` is used to get the state of a zkSync account.
- `checkEnoughBalance` is used to check if the user has sufficient balance to proceed to the checkout.

Note that the library might also export other functions or classes. However, you should not use functions or classes
that are not mentioned in the reference. These are exported for internal use and are unstable, so they can be removed at
any moment.

## Types

### ZkSyncTransaction

Every transaction that is passed into `zkSyncBatchCheckout` or `estimateBatchFee` should adhere to the following
interface:

```tsx
interface ZkSyncTransaction {
  // If the address specified differs from the one that the
  // user logs in to zkSync with, the user will be asked to re-login
  from?: string;
  to: string;
  token: TokenLike;
  amount: string;
  semanticType?: 'Transaction' | 'FeeOrCommission';
  description?: string;
}
```

- `from` — this field contains the Ethereum address of the transaction sender. The field can be omitted since the user
  has to log in to zkSync before continuing the checkout process. But if this field is specified and the account from
  which the user logs in to zkSync differs from any of the `from` fields of the transactions, the zkSync checkout page
  will notify the user about that and will ask her to log in to the appropriate account.
- `to` — this field contains the Ethereum address of the recipient of the transaction.
- `token` — the symbol of the token in which the transaction will be done.
- `amount` — amount of tokens in wei to be transferred.
- `semanticType` — semantic type of the transaction, it is used to help the zkSync checkout popup provide better UX. For
  instance, if your website collects fees in a certain transaction, you should set `semanticType` to
  `'FeeOrCommission'`. The default value is `'Transaction'`.

**Note** that if you set `semanticType` to `'FeeOrCommission'` then you also MUST provide a non-empty `description`. If
you don't, the checkout will fail with `RECEIVED_INVALID_DATA_ERROR`.

- `description` — the transaction description. For now, it is only used when `semanticType` is set to
  `'FeeOrCommission'`, and is ignored otherwise.

### TokenLike

Just a string. Has a special type name to clarify that the string should be equal to some token symbol.

```tsx
type TokenLike = string;
```

### EthereumNetwork

The type which specifies an Ethereum network.

```tsx
type EthereumNetwork = 'rinkeby' | 'mainnet' | 'ropsten' | 'localhost';
```

## Checkout Manager

The main class that is used by the library users. Any time you want to start a checkout, you instantiate a new
`CheckoutManager` object and call the `zkSyncBatchCheckout` method.

Example of using a `CheckoutManager` can be found in the tutorial.

### Class instantiation

The `CheckoutManager`'s constructor has the following interface:

```tsx
constructor(network: EthereumNetwork, customPopupOrigin?: string)
```

It takes an Ethereum network name as a parameter. Creates a `CheckoutManager` instance that will work with the supplied
network.

Note, that if you specify `localhost` as the network, the library will expect the zkSync side of the checkout flow to be
running at `localhost:8080`.

The second parameter is the address of the zkSync page which handles the checkout. This parameter should be omitted.

### zkSyncBatchCheckout

```tsx
async zkSyncBatchCheckout(
  transactions: ZkSyncTransaction[],
  feeToken: TokenLike,
  userAddress?: string
): Promise<string[]>
```

Gets an array of the zkSync transactions for the flow and token in which the zkSync fee will be paid. Also,
`userAddress` is the optional parameter, which, if supplied, will be used to check that the user logs in with the
correct address.

Returns a promise that resolves with the array of the hashes of the transactions in the same order as the transactions
were supplied.

**Note, that you should NOT add the fee transaction by yourself.** Just specify the `feeToken` and everything else will
be handled by us.

### estimateBatchFee

```tsx
async estimateBatchFee(
  transactions: ZkSyncTransaction[],
  feeToken: TokenLike,
): Promise<string>
```

```tsx
// The following is the generalized version of the method.
// Might be used if you just have some array of transactions
// that you want to estimate fee for.
async function estimateBatchFee(
  transactions: ZkSyncTransaction[],
  feeToken: TokenLike,
  network: EthereumNetwork
): Promise<string>;
```

Gets an array of the zkSync transactions for the flow and the token in which the zkSync fee will be paid.

Returns the promise that resolves with the number of `feeToken` (in wei) that will be paid by the user.

Note, that the value that the method returns does not take into account the amount of the gas fee that will be paid by
the user in process of depositing the tokens she lacks on L2 to proceed to checkout. But it DOES take into account the
fact that one transaction will be added to pay the fee. You can read more on the optional additional fee transaction in
batches [here](/dev/sending_transactions.md#sending-transaction-batches).

### wait

```tsx
async wait(
  txHashes: string[],
  type: 'COMMIT' | 'VERIFY' = 'COMMIT'
): Promise<TransactionInfo[]>
```

```tsx
// The following is the generalized version of the method.
// Might be used if you just have some array of transactions
// that you want to wait for.
async function wait(
  txHashes: string[],
  type: 'COMMIT' | 'VERIFY' = 'COMMIT',
  network: EthereumNetwork
): Promise<TransactionInfo[]>;
```

Gets an array of the zkSync transactions' hashes and resolves with a list of the transactions' receipts.
`TransactionInfo` is a zkSync type specified [here](https://zksync.io/dev/providers.html#get-transaction-receipt),
extended with the transaction hash.

### getState

```tsx
async getState(
  address: string
): Promise<AccountState>
```

```tsx
// The following is the generalized version of the method.
// Might be used if you want to get the state of
// an account on an arbitrary Ethereum network,
// supported by zkSync.
async function getState(address: string, network: EthereumNetwork): Promise<AccountState>;
```

Gets the Ethereum address of a zkSync account as a parameter and returns its state. The `AccountState` type is
re-exported from zkSync. You can read more about it
[here](https://zksync.io/dev/providers.html#get-account-state-by-address).

### checkEnoughBalance

```tsx
async checkEnoughBalance(
  transactions: ZkSyncTransaction[],
  feeToken: string,
  senderAddress: string,
  ethProvider: ethers.providers.BaseProvider
): Promise<boolean>
```

```tsx
// The following is the generalized version of the method.
// Might be used if you want to check the balance of
// an account on an arbitrary Ethereum network,
// supported by zkSync.
async function checkEnoughBalance(
  transactions: ZkSyncTransaction[],
  feeToken: string,
  senderAddress: string,
  ethProvider: ethers.providers.BaseProvider,
  network: EthereumNetwork
): Promise<boolean>;
```

Gets a list of transactions, token to pay the fee with, and the address of the user as parameters. Also takes an ethers
provider as a parameter. It is needed for checking the L1 balance of the user.

Returns a promise that resolves with `true` if the user has combined balance on L1 + L2 sufficient to do all the
transactions and pay the fee, and `false` otherwise.

The function can throw `FAILED_TO_GET_ONCHAIN_BALANCE` if it fails to get the on-chain balance of the user.

## Constants

A collection of all the important constants.

The majority of the constants are for internal use but some of them might be useful.

### CheckoutErrors

An object that contains the text messages of all the errors that might be thrown during the checkout flow.

<!--
  There were some spelling mistakes in the library itself.
  There is a task to correct them and update the docs (ZKS-497)
-->
<!-- cSpell:ignore enviroment occured retreive -->

```tsx
export const CheckoutErrors = {
  NOT_IMPLEMENTED_ERROR: 'This functionality is not implemented',
  NOT_IN_BROWSER_ERROR: 'The library is intended for use in browser enviroment only!',
  OPENING_TIMEOUT_ERROR: 'Took too long for the zkSync page to open',
  FAILED_TO_OPEN_ZKSYNC: 'Failed to open zkSync page',
  NO_OPENER_ERROR: 'ZkSync manager object should be instantiated only if the window is a popup',
  LOGICAL_ERROR: 'An unknown error occured.',
  ZKSYNC_CLOSED_ERROR: 'User closed zkSync',
  CHECKOUT_NOT_STARTED_ERROR: 'The checkout has not been started',
  CLIENT_CLOSED_ERROR: "The client's page has been closed",
  INVALID_SENDER_ERROR:
    'Either the `sender` supplied into the checkout or some of the `from` parameters differ from each other',
  FAILED_TO_GET_ONCHAIN_BALANCE: "Failed to retreive the user's onchain balance"
} as const;
```

### Client-side errors vs zkSync-side errors

The `CheckoutErrors` contains the errors of which might happen both on the zkSync side and on the client's side.

#### Common errors

- `NOT_IMPLEMENTED_ERROR`. When the library is complete, there should be no places, where such an error could be thrown,
  but for the time of development, this error is thrown in the places which have not been properly implemented yet.
- `LOGICAL_ERROR`. This error is thrown if something that should never happen happens. That means that there is a bug in
  the library's code.
- `INVALID_SENDER_ERROR`. This error is thrown if the `userAddress` argument (if supplied) of the `zkSyncBatchCheckout`
  function is different from any of the supplied `from` fields of the transactions, or if any supplied `from` field of
  the transactions is different from any other. In other words, that error is thrown if the consistency of the sender
  address is broken.
- `FAILED_TO_GET_ONCHAIN_BALANCE`. This error is thrown if the library fails to retrieve the user's Ethereum balance.

#### Client-side errors

- `NOT_IN_BROWSER_ERROR`. This error is thrown because the library is intended to be used only in the browser
  environment. Particularly, the error is thrown if the `window` global object is not defined.
- `OPENING_TIMEOUT_ERROR`. This error is thrown if the zkSync page takes too long to load. Used to tackle the case when
  the user opens the checkout page, but then closes it quickly.
- `FAILED_TO_OPEN_ZKSYNC`. This error is thrown if the client's page fails to open the zkSync page. (Technically
  speaking, when the `window.open` returns null)
- `ZKSYNC_CLOSED_ERROR`. This error is thrown when the user closes the zkSync checkout page without initiating any
  transactions.

#### zkSync-side errors

- `NO_OPENER_ERROR`. This error is thrown if the checkout page is opened without an opener (basically that means, that
  the page was opened directly, but not as a popup). That's why you may see the gray screen if you open the checkout
  page directly in the browser.
- `CHECKOUT_NOT_STARTED_ERROR`. This error is thrown if the checkout page tries to retrieve the state (e,g, list of
  transactions, fee token, etc) of the checkout before the data has been received.
- `CLIENT_CLOSED_ERROR`. This error is thrown when the user closes the client's page. This is used to prevent the user
  from starting the transfer because the client's page won't be able to receive the transactions hashes.

### SemanticTypes

An object that contains all the possible semantic types.

```tsx
export const SemanticTypes = {
  Transaction: 'Transaction',
  FeeOrCommission: 'FeeOrCommission'
} as const;
```

## Protocol

Due to modern web-browsers' security measures, the opening of the tab with the checkout flow internally might look like
a connection establishment via an exchange of `postMessage`-s.

The protocol follows
[web security best practices](https://developer.mozilla.org/en-US/docs/Web/library/Window/postMessage#Security_concerns),
associated with cross-origin communication.

The internal part of the checkout will consist of the following stages:

1. The client calls `zkSyncBatchCheckout`.
2. When the tab is open, the zkSync page will send the `ZKSYNC_OPENED` message. If it fails to do within
   `OPENING_TIMEOUT` ms, the checkout promise resolves with `OPENING_TIMEOUT_ERROR`. After receiving the `ZKSYNC_OPEN`
   message, the client's page will send a `START_SESSION` message to the zkSync page. The message contains:
   - Array of the transactions, specified by the user.
   - Token to pay the fee with.
   - The origin of the opener. Must be equal to the origin of the opener (zkSync checks it on its side).
   - The checkout id — a feature that enables multiple checkouts at the same time.
3. If at least in one transaction the `from` field differs from the user's one, the zkSync page will tell the user about
   it and will offer him to log in with the other account.

The zkSync page will remember the client's origin. Now, all the `postMessage`-s sent from the zkSync page will only go
to the remembered origin. 4. Every `CLOSE_POLL_INTERVAL` ms the client's page will check if the zkSync page is closed.

If the zkSync page is closed without starting the transactions, the client waits for `FOLLOWUP_HASHES_TIMEOUT` ms in
case the hashes were sent to the client, but the browser was too slow. If the hashes don't arrive within this time, the
checkout promise will be rejected with `ZKSYNC_CLOSED_ERROR`.

On the other hand, every `OPENER_CLOSED_POLL_INTERVAL` ms the zkSync page checks if the client's page is closed. If it
is closed before the transactions' hashes were sent, there is a danger that the hashes that the zkSync page will send
won't be processed by the client. To prevent this from happening the zkSync page will warn the user about that and
advice her not to continue the checkout. 5. When the user clicks on transfer, the zkSync page sends the opener the array
of hashes of the transactions. 6. (Optional for the client) After the client receives the transactions, he can either
wait until they are committed or verified using the `wait` function.

**Time constants (all in ms):**

- `OPENING_TIMEOUT` — 10000
- `CLOSE_POLL_INTERVAL` — 3000
- `FOLLOWUP_HASHES_TIMEOUT` — 500
- `OPENER_CLOSED_POLL_INTERVAL` — 300

### Making sure that the user knows about an error

In order to prevent the situation, where the checkout promise was rejected on the client's webpage, but the user does
not know it, the following measures are taken:

If the checkout promise is rejected, an `ABORT_CHECKOUT` message is sent to the zkSync page. The message is then handled
by the zkSync page accordingly (show a modal with the error message and suggest the user not to continue the checkout).

# Constants

A collection of all the important constants.

The majority of the constants are for internal use but some of them might be useful.

## CheckoutErrors

An object that contains the text messages of all the errors that might be thrown during the checkout flow.

<!--
  There were some spelling mistakes in the library itself.
  There is a task to correct them and update the docs (ZKS-497)
-->
<!-- cSpell:ignore enviroment occured retreive -->
<!-- markdownlint-disable MD013 -->

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

## Client-side errors vs zkSync-side errors

The `CheckoutErrors` contains the errors of which might happen both on the zkSync side and on the client's side.

### Common errors

- `NOT_IMPLEMENTED_ERROR`. When the library is complete, there should be no places where such an error could be thrown,
  but for the time of development, this error is thrown in the places which have not been properly implemented yet.
- `LOGICAL_ERROR`. This error is thrown if something that should never happen happens. That means that there is a bug in
  the library's code.
- `INVALID_SENDER_ERROR`. This error is thrown if the consistency of the sender address is broken. That is, if either
  the `userAddress` argument (if supplied) of the `zkSyncBatchCheckout` function is different from any of the supplied
  `from` fields of the transactions, or if any supplied `from` field of the transactions is different from any other. In
  other words,
- `FAILED_TO_GET_ONCHAIN_BALANCE`. This error is thrown if the library fails to retrieve the user's Ethereum balance.

### Client-side errors

- `NOT_IN_BROWSER_ERROR`. This error is thrown because the library is intended to be used only in the browser
  environment. Particularly, the error is thrown if the `window` global object is not defined.
- `OPENING_TIMEOUT_ERROR`. This error is thrown if the zkSync page takes too long to load. It is used to tackle the case
  when the user opens the checkout page, but then closes it quickly.
- `FAILED_TO_OPEN_ZKSYNC`. This error is thrown if the client's page fails to open the zkSync page. (Technically
  speaking, when the `window.open` returns null)
- `ZKSYNC_CLOSED_ERROR`. This error is thrown when the user closes the zkSync checkout page without initiating any
  transactions.

### zkSync-side errors

- `NO_OPENER_ERROR`. This error is thrown if the checkout page is opened without an opener (basically this means that
  the page was opened directly, but not as a popup). That's why you may see a gray screen if you open the checkout page
  directly in the browser.
- `CHECKOUT_NOT_STARTED_ERROR`. This error is thrown if the checkout page tries to retrieve the state (e.g. list of
  transactions, fee token, etc) of the checkout before the data has been received.
- `CLIENT_CLOSED_ERROR`. This error is thrown when the user closes the client's page. This is used to prevent the user
  from starting the transfer because the client's page won't be able to receive the transactions hashes.

## SemanticTypes

An object that contains all the possible semantic types.

```tsx
export const SemanticTypes = {
  Transaction: 'Transaction',
  FeeOrCommission: 'FeeOrCommission'
} as const;
```

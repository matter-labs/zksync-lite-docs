# Checkout Manager

The main class that is used by the library users. Any time you want to start a checkout, you instantiate a new
`CheckoutManager` object and call the `zkSyncBatchCheckout` method.

Example of using a `CheckoutManager` can be found in the tutorial.

## Class instantiation

The `CheckoutManager`'s constructor has the following interface:

```tsx
constructor(network: EthereumNetwork, customPopupOrigin?: string)
```

It takes an Ethereum network name as a parameter. Creates a `CheckoutManager` instance that will work with the supplied
network.

Note, that if you specify `localhost` as the network, the library will expect the zkSync side of the checkout flow to be
running at `localhost:8080`.

The second parameter is the address of the zkSync page which handles the checkout. This parameter should be omitted.

## zkSyncBatchCheckout

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

## estimateBatchFee

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

## wait

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

## getState

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

## checkEnoughBalance

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

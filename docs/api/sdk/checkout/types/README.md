# Types

## ZkSyncTransaction

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
- `amount` — the number of tokens in wei to be transferred.
- `semanticType` — semantic type of the transaction, it is used to help the zkSync checkout popup provide better UX. For
  instance, if your website collects fees in a certain transaction, you should set `semanticType` to
  `'FeeOrCommission'`. The default value is `'Transaction'`.

**Note** that if you set `semanticType` to `'FeeOrCommission'` then you also MUST provide a non-empty `description`. If
you don't, the checkout will fail with `RECEIVED_INVALID_DATA_ERROR`.

- `description` — the transaction description. For now, it is only used when `semanticType` is set to
  `'FeeOrCommission'`, and is ignored otherwise.

## TokenLike

Just a string. Has a special type name to clarify that the string should be equal to a token's symbol.

```tsx
type TokenLike = string;
```

## EthereumNetwork

The type which specifies an Ethereum network.

```tsx
type EthereumNetwork = 'goerli' | 'mainnet';
```

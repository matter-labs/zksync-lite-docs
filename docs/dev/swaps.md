# Swaps and Limit Orders

[[toc]]

## Atomic swaps

Atomic swaps let you safely and cheaply swap funds with an existing zkSync account.

There are 3 steps required to successfully make a swap:

- Sign an order that confirms that you want perform a certain swap
- Acquire a signed order of the same format from the account that you want to swap with
- Submit both orders with a fee to the zkSync server

### Signing an order

To sign an order, you need the following info:

- token you want to swap
- token you want to swap for
- amount of the token that you want to swap
- ratio of the swapped tokens, relevant to one another

Ratios are 15-byte integers that represent the proportion in which tokens are swapped.

To sign an order, use the [`getOrder`](../api/sdk/js/accounts.md#signing-orders) method of `Wallet`:

```typescript
const order = await wallet.getOrder({
  tokenSell: 'ETH',
  tokenBuy: 'USDT',
  amount: tokenSet.parseToken('ETH', '2.5'),
  ratio: utils.tokenRatio({
    ETH: 1,
    USDT: '4234.5'
  })
});
```

An order can also include:

- `recipient` - an address of an existing account, to which the result of a swap should be transferred, in case you want
  to perform a swap-and-transfer. Defaults to self
- `validFrom` and `validUntil` Unix timestamps which limit a timespan where a block with a swap can be processed
- `nonce` that is going to be used for the swap

### Submitting a swap

Anyone can submit 2 orders for a swap if they meet the following limitations:

- orders have matching tokens: if `orderA` specifies `tokenA -> tokenB`, then `orderB` should specify `tokenB -> tokenA`
- ratios in orders are compatible: `1/orderB.ratio <= orderA.amount/orderB.amount <= orderA.ratio`
- if orders have recipients, their accounts already exist in zkSync

Fee is paid by the submitter, and the token it is paid in should be specified. After a swap is executed, nonce is
incremented on both swapping accounts and the submitter. If swap was submitted from one of the swapping accounts, nonce
is incremented only once.

If the user wishes to cancel the swap that has not yet been submitted, they simply have to increment their nonce (e.g.
send a zero-transfer).

To submit a swap, use the [`syncSwap`](../api/sdk/js/accounts.md#submitting-a-swap) method of `Wallet`:

```typescript
const swap = await wallet.syncSwap({
  orders: [orderA, orderB],
  feeToken: 'wBTC'
});
```

## Limit orders

Limit orders provide a way to exchange a certain token for another at a certain price. They are designed to be used
primarily by other platforms that want to provide trustless and scalable exchange services.

The differences between an atomic swap and a limit order are:

- limit orders infer the amount that can be exchanged directly from the balance
- limit orders can be partially filled
- limit orders do not increment account's nonce when partially filled

::: warning This means that once a limit order is signed for a certain token, the whole balance can potentially be
exchanged for another token (at a specified ratio). There is no way to limit the amount to be exchanged other than use a
special trading account. :::

### Trading accounts

A trading account is an ordinary account that can be used to sign a limit order. It's function is to limit the amount of
a certain token that a user wants to exchange.

To do this, user has to:

1. Transfer the desired amount of a desired token to a new account.
2. Set a signing key for the account.
3. Sign a limit order.

This way the limit order will exchange at most the amount you transferred to the trading account. Remaining balance on
the main account will be left untouched.

### Signing limit orders

To sign a limit order, use the [`getLimitOrder`](../api/sdk/js/accounts.md#signing-orders) method of `Wallet`:

```typescript
const order = await wallet.getLimitOrder({
  tokenSell: 'ETH',
  tokenBuy: 'USDT',
  ratio: utils.tokenRatio({
    ETH: 1,
    USDT: 3900
  })
});
```

### Filling a limit order

Limit order itself represents only a half of the swap operation. In order to be filled, the following criteria must be
met:

- There exists a counterpart order (a normal order _or_ a limit order) that fits the original order's tokens and
  buy/sell ratio.
- There exists someone willing to combine both orders into a swap operation and submit it.

Amounts that are being filled should be specified in the swap operation. Limit orders can be partially filled, so
amounts can be different from actual balances, although must be compatible with the ratios specified in the orders. For
details, see [example](#example).

```typescript
const swap = await wallet.syncSwap({
  orders: [orderA, orderB],
  amounts: [tokenSet.parseToken('ETH', '2'), tokenSet.parseToken('UDST', '7800')],
  feeToken: 'wBTC'
});
```

### Note on limit order matching

Performing atomic swaps is as simple as sharing a signed order message with a party that you want to swap with.

On the other hand, collecting and matching limit orders should probably be performed by platform(s) with an already
existing userbase by some kind of matching engine. zkSync tries to be as generic as possible, so creating matching
engines is not considered - we will only provide an L2 framework that other platforms can integrate with.

### Suggestions

Trading accounts can be created as CREATE2 accounts. This approach has the following benefits:

- Setting a signing key on a CREATE2 account is cheaper
- Salt argument in CREATE2 can be used to deterministically generate trading account addresses for a certain main
  account
- Same L2 private key can be used for all trading accounts and the main account if desired. Although this bears some
  risks (compromising a single account would mean compromising all of them), key management can be inconvenient in some
  situations.

Should a platform decide to use CREATE2 for trading accounts, it will have to choose a contract bytecode to be used for
address calculation. The contract should be open-source and have full exit and withdrawal functionality since in the
rare case of censorship users will have to deploy it to rescue their funds.

It is also suggested to reuse trading accounts on which orders were filled or cancelled since this way a signing key
would not have to be set again.

### Example

This section provides an example of how ratios specified in orders affect account balances.

Let the swap consist of 2 limit orders:

```typescript
// walletA wants to swap wBTC for ETH at a ratio 2:5
const orderA = await walletA.getLimitOrder({
  tokenSell: 'wBTC',
  tokenBuy: 'ETH',
  ratio: utils.tokenRatio({
    wBTC: 2,
    ETH: 5
  })
});

// walletB wants to swap ETH for wBTC at a ratio 4:1
const orderB = await walletB.getLimitOrder({
  tokenSell: 'ETH',
  tokenBuy: 'wBTC',
  ratio: utils.tokenRatio({
    wBTC: 1,
    ETH: 4
  })
});
```

Specified ratios mean that:

- `walletA` expects to get 2.5 ETH for each wBTC (or more)
- `walletB` expects to get 0.25 wBTC for each ETH (or more)

Ratios are compatible, because at either ratio (or in between), both parties will be happy:

- at `orderB`'s ratio `walletA` will get 4 ETH per wBTC, which is more than expected
- at `orderA`'s ratio `walletB` will get 0.4 wBTC per ETH, which is more than expected

Now let's actually submit the swap, and pick a ratio in between - 3 ETH per wBTC:

```typescript
const swap = await walletC.syncSwap({
  orders: [orderA, orderB],
  amounts: [tokenSet.parseToken('wBTC', '100'), tokenSet.parseToken('ETH', '300')],
  feeToken: 'USDT'
});
```

This will exchange 100 wBTC from `walletA` for 300 ETH from `walletB`. For detailed information, see table below.

|                          | `walletA` | `walletB` |
| ------------------------ | --------- | --------- |
| wBTC before swap         | 100       | 0         |
| ETH before swap          | 0         | 300       |
| ETH expected after swap  | 0         | 75        |
| wBTC expected after swap | 250       | 0         |
| ETH actually after swap  | 0         | 100       |
| wBTC actually after swap | 300       | 0         |

## Utils

To construct a ratio, use either of the two utility functions:

- `tokenRatio` constructs a ratio relevant to the tokens themselves, so `{ ETH: 4, wBTC: 1 }` would mean you want 4 ETH
  for each wBTC.
- `weiRatio` constructs a ratio relevant to the _lowest denomination_ of the token, so `{ ETH: 4, wBTC: 1 }` would mean
  you want 4 wei (10<sup>-18</sup> ETH) for each satoshi (10<sup>-8</sup> wBTC).

If tokens symbols or IDs are contained in variables, use the following syntax to pass them into ratio objects:

```typescript
utils.tokenRatio({
  [tokenA]: valueA,
  [tokenB]: valueB
});
```

For more information, visit the [API reference](../api/sdk/js/accounts.md#ratios).

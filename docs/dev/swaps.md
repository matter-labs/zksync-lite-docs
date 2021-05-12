# Swaps and Limit Orders

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

To sign an order, use the [`getOrder`](../api/sdk/js/accounts.md#signing-orders) method of `Wallet`:

```typescript
const order = await wallet.getOrder({
    tokenSell: 'ETH',
    tokenBuy: 'USDT',
    amount: 2,
    ratio: utils.ratio({
        tokenSell: 1,
        tokenBuy: 4000,
    })
});
```

An order can also include:
- `recipient` - an address of an existing account, to which the result of a swap should be transferred, in case you want to perform a swap-and-transfer. Defaults to self
- `validFrom` and `validUntil` Unix timestamps which limit a timespan where a block with a swap can be processed
- `nonce` that is going to be used for the swap

### Submitting a swap

Anyone can submit 2 orders for a swap if they meet the following limitations:
- tokens that accounts wish to swap with match
- ratios in orders are compatible, meaning that the swap is beneficial for both parties at either of the two ratios
- if orders have recipients, their accounts already exist in zkSync

Fee is paid by the submitter, and the token it is paid in should be specified.
After a swap is executed, nonce is incremented on both swapping accounts and the submitter.
If swap was submitted from one of the swapping accounts, nonce is incremented only once.

If the user wishes to cancel the swap that has not yet been submitted, they simply have to increment their nonce (e.g. send a zero-transfer).

To submit a swap, use the [`syncSwap`](../api/sdk/js/accounts.md#submitting-a-swap) method of `Wallet`:

```typescript
const swap = await wallet.syncSwap({
    orders: [orderA, orderB],
    feeToken: 'wBTC',
});
```

## Limit orders

Limit orders provide a way to exchange a certain token for another at a certain price.
They are designed to be used primarily by other platforms that want to provide trustless and scalable exchange services.

The differences between an atomic swap and a limit order are:
- limit orders infer the amount that can be exchanged directly from the balance
- limit orders can be partially filled
- limit orders do not increment account's nonce when partially filled

::: warning 
This means that once a limit order is signed for a certain token, the whole balance can potentially be exchanged for another token (at a specified ratio).
There is no way to limit the amount to be exchanged other than use a special trading account.
:::

### Trading accounts

A trading account is an ordinary account that can be used to sign a limit order. 
It's function is to limit the amount of a certain token that a user wants to exchange.

To do this, user has to:
1. Transfer the desired amount of a desired token to a new account
2. Set a signing key for the account
3. Sign a limit order

This way the limit order will exchange at most the amount you transferred to the trading account. 
Remaining balance on the main account will be left untouched.

### Signing limit orders

To sign a limit order, use the [`getLimitOrder`](../api/sdk/js/accounts.md#signing-orders) method of `Wallet`:

```typescript
const order = await wallet.getLimitOrder({
    tokenSell: 'ETH',
    tokenBuy: 'USDT',
    ratio: utils.ratio({
        tokenSell: 1,
        tokenBuy: 3900,
    })
});
```

### Filling a limit order

To fill a limit order, anyone that has a compatible order (a normal order _or_ a limit order) can submit them.
Additionally, amounts that are being filled should be specified.
Amounts should be compatible with the ratios specified in the orders.

```typescript
const swap = await wallet.syncSwap({
    orders: [orderA, orderB],
    amounts: [2, 7800]
    feeToken: 'wBTC',
});
```

### Note on limit order matching

Performing atomic swaps is as simple as sharing a signed order message with a party that you want to swap with.

On the other hand, collecting and matching limit orders should probably be performed by platform(s)
with an already existing userbase by some kind of matching engine. zkSync tries to be as generic as possible,
so creating matching engines is not considered - we will only provide an L2 framework that other platforms can integrate with.

### Suggestions

Trading accounts can be created as CREATE2 accounts, as it has following benefits:

- Setting a signing key on a CREATE2 account is cheaper
- Salt argument in CREATE2 can be used to deterministically generate trading account addresses for a certain main account
- Same L2 private key can be used for all trading accounts and the main account if desired.
  Although this bears some risks (compromising a single account would mean compromising all of them), key management can be inconvenient in some situations. 

If a platform should decide to use CREATE2 for trading accounts, it will have to choose a contract bytecode to be used for address calculation.
The contract should be open-source and have full exit and withdrawal functionality since in the rare case of censorship users will have to deploy it to rescue their funds.

It is also suggested to reuse trading accounts on which orders were filled or cancelled since this way a signing key would not have to be set again.


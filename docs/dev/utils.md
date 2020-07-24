# Utils

## Working with tokens

Tokens are identified with 

1. symbol (e.g. 'ETH', 'DAI') 
2. address ('0x0000000000000000000000000000000000000000' for 'ETH' or '0xFab46E002BbF0b4509813474841E0716E6730136' for ERC20).

To simplify conversions `TokenSet` class can be used, token set can be obtained from [zkSync provider](#current-token-set).

### Resolve token ID

Get numerical token id using its identifier.

> Signature

```typescript
public resolveTokenId(tokenLike: TokenLike): number;
```

### Resolve token Address

Get token address using its identifier.

> Signature

```typescript
public resolveTokenAddress(tokenLike: TokenLike): TokenAddress;
```

### Resolve token Symbol

Get token symbol using its identifier.

> Signature

```typescript
public resolveTokenSymbol(tokenLike: TokenLike): TokenSymbol;
```

### Resolve token decimals

Get token decimals (e.g. Ether has 18 decimals, meaning `1.0` ETH is `1e18` wei).

> Signature

```typescript
public resolveTokenDecimals(tokenLike: TokenLike): number;
```

### Format amount for token

Format `BigNumberish` amount to a human-readable string with respect to decimals value for given token.

> Signature

```typescript
public formatToken(tokenLike: TokenLike, amount: BigNumberish): string;
```

> Example

```typescript
provider.tokenSet.formatToken('ETH', '1000000000'); // '0.000000001'
provider.tokenSet.formatToken('USDC', '1000000000'); // '1000.0'
```

### Parse amount for token

Parse a human-readable string to a `BigNumber` with respect to decimals value for given token.

> Signature

```typescript
public parseToken(tokenLike: TokenLike, amount: string): BigNumber;
```

> Example

```typescript
provider.tokenSet.parseToken('ETH', '0.000000001'); // '1000000000'
provider.tokenSet.parseToken('USDC', '1000.0'); // '1000000000'
```

## Amount packing


### Check if amount is packable

Transfers amount should be packable to 5-byte long floating-point representation.
This function is used to check if this amount can be used as a transfer amount.

> Signature

```typescript
export function isTransactionAmountPackable(
    amount: utils.BigNumberish
): boolean;
```


### Closest packable amount

Transfers amount should be packable to 5-byte long floating-point representation.
This function returns the closest packable amount by setting the least significant digits to zero.

> Signature

```typescript
export function closestPackableTransactionAmount(
    amount: ethers.utils.BigNumberish
): ethers.utils.BigNumber;
```

### Check if fee is packable

All fees paid in transfers and withdraws should be packable to 2-byte long floating-point representation.
This function is used to check if this amount can be used as a fee.

> Signature

```typescript
export function isTransactionFeePackable(amount: utils.BigNumberish): boolean;
```

### Closest packable fee

All fees paid in transfers and withdraws should be packable to 2-byte long floating-point representation.
This function returns the closest packable amount by setting the least significant digits to zero.

> Signature

```typescript
export function closestPackableTransactionFee(
    fee: ethers.utils.BigNumberish
): ethers.utils.BigNumber;
```

### Check if formatted amount is packable for token

All amounts paid in transfers should be packable to 5-byte long floating-point representation.
`isTokenTransferAmountPackable` function allows to check if formatted amount can be used as a transfer amount.

> Signature

```typescript
public isTokenTransferAmountPackable(
    tokenLike: TokenLike,
    amount: string
): boolean;
```

### Check if formatted fee is packable for token

All fees paid in transfers and withdraws should be packable to 2-byte long floating-point representation.
`isTokenTransactionFeePackable` function is used to check if formatted amount can be used as a fee.


> Signature

```typescript
public isTokenTransactionFeePackable(
    tokenLike: TokenLike,
    amount: string
): boolean;
```

## Awaiting for operation completion

It is often useful to be able to wait until the transaction is committed or verified.
It is possible to do that using objects returned from methods that submit transactions.

It is possible to wait until the transactions like Transfer is either:

1. Committed (with `awaitReceipt`) when the state is updated in the zkSync network
1. Verified (with `awaitVerifyReceipt`) when the state is finalized on the Ethereum

It is possible to wait until the operations like Deposit is either:

1. Mined on the Ethereum network (with `awaitEthereumTxCommit`)
1. Committed (with `awaitReceipt`) when the state is updated in the zkSync network
1. Verified (with `awaitVerifyReceipt`) when the state is finalized on the Ethereum

Commit comes first, but there is no need to wait for commit if you are interested in the verify since await for verifying
implies await for commit.

> Awaiting for transaction.

```typescript
import * as zksync from 'zksync';
const wallet = ..; // create zkSync Wallet

// see transfer example for details
const transfer = wallet.syncTransfer({..}); 

// this function will return when deposit is committed to the zkSync chain
const receiptAfterCommit = await transfer.awaitReceipt();

// this function will return when deposit is verified with ZK proof.
const receiptAfterVerify = await transfer.awaitVerifyReceipt();
```

> Awaiting for priority operation

```typescript
import * as zksync from 'zksync';

// see deposit example for details
const deposit = zksync.depositFromETH({..}); 

// this function will return when deposit request is accepted to the Ethereum.
const txMinedCommit = await deposit.awaitEthereumTxCommit();

// this function will return when deposit is committed to the zkSync chain
const receiptAfterCommit = await deposit.awaitReceipt();

// this function will return when deposit is verified with ZK proof.
const receiptAfterVerify = await deposit.awaitVerifyReceipt();
```

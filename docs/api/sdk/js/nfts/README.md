---
sidebarDepth: 3
---

# NFTs

This API reference provides descriptions for all functions regarding NFTs in zkSync Lite. It is recommended that you
begin with our [NFT tutorial](/dev/nfts) and come back here to reference specific functions.

- [Connecting to Rinkeby testnet](#connect-to-the-rinkeby-testnet)
- [Mint NFT](#mint-nft)
- [Transfer NFT](#transfer-nft)
- [Swap NFT](#swap-nft)
- [Withdraw NFT](#withdraw-nft)
  - [Emergency Withdraw](#emergency-withdraw)
- [Utility Functions](#utility-functions)
  - [Calculate Transaction Fee](#calculate-transaction-fee)
  - [View NFT](#view-an-nft)
  - [Get NFT](#get-an-nft)
  - [Get a receipt](#get-a-receipt)

## Connect to the Rinkeby testnet

The NFTs are also supported on `mainnet` and `ropsten` networks. For the purposes of this tutorial, we will use the
`rinkeby` testnet.

```typescript
const syncProvider = await zksync.getDefaultProvider('rinkeby');
```

## Mint NFT

You can mint an NFT by calling the `mintNFT` function from the `Wallet` class..

> Signature

```typescript
async mintNFT(mintNft: {
    recipient: string;
    contentHash: string;
    feeToken: TokenLike;
    fee?: BigNumberish;
    nonce?: Nonce;
}): Promise<Transaction>
```

| Name        | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| recipient   | the recipient address represented as a hex string                                           |
| contentHash | an identifier of the NFT represented as a 32-byte hex string (e.g. IPFS content identifier) |
| feeToken    | name of token in which fee is to be paid (typically ETH)                                    |
| fee         | transaction fee                                                                             |

Example:

```typescript
const contentHash = '0xbd7289936758c562235a3a42ba2c4a56cbb23a263bb8f8d27aead80d74d9d996';
const nft = await syncWallet.mintNFT({
  recipient: syncWallet.address(),
  contentHash,
  feeToken: 'ETH',
  fee
});
```

After an NFT is minted, it can be in two states: committed and verified. An NFT is committed if it has been included in
a rollup block, and verified when a zero knowledge proof has been generated for that block and the root hash of the
rollup block has been included in the smart contract on Ethereum mainnet.

## Transfer NFT

An NFT can only be transferred after the block with it's mint transaction is verified. This means the newly minted NFT
may have to wait a few hours before it can be transferred. This only applies to the first transfer; all following
transfers can be completed with no restrictions.

You can transfer an NFT by calling the `syncTransferNFT` function:

```typescript
async syncTransferNFT(transfer: {
    to: Address;
    token: NFT;
    feeToken: TokenLike;
    fee?: BigNumberish;
    nonce?: Nonce;
    validFrom?: number;
    validUntil?: number;
}): Promise<Transaction[]>
```

| Name     | Description                                              |
| -------- | -------------------------------------------------------- |
| to       | the recipient address represented as a hex string        |
| feeToken | name of token in which fee is to be paid (typically ETH) |
| token    | NFT object                                               |
| fee      | transaction fee                                          |

The `syncTransferNFT` function works as a batched transaction under the hood, so it will return an array of transactions
where the first handle is the NFT transfer and the second is the fee.

```typescript
const handles = await sender.syncTransferNFT({
  to: receiver.address(),
  feeToken,
  token: nft,
  fee
});
```

## Swap NFT

Swaps for NFTs use the same functions as fungible tokens. For more information, see
[API reference](../accounts/#swaps-in-zksync).

## Withdraw NFT

Under normal conditions use a layer 2 operation, `withdrawNFT`, to withdraw the NFT.

> Signature

```typescript
withdrawNFT(withdrawNFT: {
    to: string;
    token: number;
    feeToken: TokenLike;
    fee?: BigNumberish;
    nonce?: Nonce;
    fastProcessing?: boolean;
    validFrom?: number;
    validUntil?: number;
}): Promise<Transaction>;
```

| Name           | Description                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| to             | L1 recipient address represented as a hex string                                                        |
| feeToken       | name of token in which fee is to be paid (typically ETH)                                                |
| token          | id of the NFT                                                                                           |
| fee            | transaction fee                                                                                         |
| fastProcessing | pay additional fee to complete block immediately, skip waiting for other transactions to fill the block |

```typescript
const withdraw = await wallet.withdrawNFT({
  to,
  token,
  feeToken,
  fee,
  fastProcessing
});
```

### Emergency Withdraw

In case of censorship, users may call for an emergency withdrawal. Note: This is a layer 1 operation, and is analogous
to our [fullExit mechanism](/dev/payments/basic/#withdrawing-funds).

> Signature

```typescript
async emergencyWithdraw(withdraw: {
  token: TokenLike;
  accountId?: number;
  ethTxOptions?: ethers.providers.TransactionRequest;
}): Promise<ETHOperation>
```

| Name                 | Description             |
| -------------------- | ----------------------- |
| token                | id of the NFT           |
| accountId (Optional) | account id for fullExit |

## Utility Functions

### Calculate Transaction Fee

To calculate the transaction fee for minting an NFT, the `getTransactionFee` method from the `Provider` class now
supports transaction type `'MintNFT'`.

> Signature

```typescript
async getTransactionFee(
    txType: 'Withdraw' | 'Transfer' | 'FastWithdraw' | 'MintNFT' | ChangePubKeyFee | LegacyChangePubKeyFee,
    address: Address,
    tokenLike: TokenLike
): Promise<Fee>
```

Example:

```typescript
const { totalFee: fee } = await syncProvider.getTransactionFee('MintNFT', syncWallet.address(), feeToken);
```

### View an NFT

To view an account's NFTs:

```typescript
// Get state of account
const state = await syncWallet.getAccountState('<account-address>');
// View committed NFTs
console.log(state.committed.nfts);
// View verified NFTs
console.log(state.verified.nfts);
```

### Get an NFT

You may also find the `getNFT` function from the `Wallet` class useful.

> Signature

```typescript
async getNFT(tokenId: number, type: 'committed' | 'verified' = 'committed'): Promise<NFT>
```

### Get a Receipt

There are slight variations in getting the receipt of different actions.

To get a receipt for a minted NFT:

```typescript
// mint nft
const nft = await wallet.mintNFT({...});
// get receipt
const receipt = await nft.awaitReceipt();
```

To get a receipt for a transfer:

```typescript
// transfer nft
const handles = await sender.syncTransferNFT({...});
// get receipt
const receipt = await handles[0].awaitReceipt();
```

To get a receipt for a swap:

```typescript
// swap nft
const swap = await submitter.syncSwap({...});
// get receipt
const receipt = await swap.awaitReceipt();
```

To get a receipt for withdrawal:

```typescript
// normal withdraw
const withdrawal = await wallet.withdrawNFT({...});
const receipt = await withdrawal.awaitReceipt();
// emergency withdraw
const emergencyWithdraw = await wallet.emergencyWithdraw({...});
const receipt = await emergencyWithdraw.awaitReceipt();
```

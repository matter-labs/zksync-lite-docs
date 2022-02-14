# NFTs in zkSync 1.x

Support for NFTs on zkSync 1.x is here! Functions include minting, transferring, and atomically swapping NFTs. Users will also be able to withdraw NFTs to Layer 1.

This page demonstrates how NFTs are implemented in zkSync 1.x and provides a tutorial for you to integrate NFTs into your project.

- [Overview](#overview)
- [Setup](#setup)
- [Mint](#mint)
- [Transfer](#transfer)
- [Swap](#swap)
- [Withdrawal to Layer 1](#withdrawal-to-layer-1)

## Overview

NFT addresses will encode NFT content and metadata as follows:

```typescript
address = truncate_to_20_bytes(rescue_hash(creator_account_id || serial_id || content_hash));
```

This cryptographically ensures two invariants:

- NFT addresses serve as a unique commitment to the creator, serial number of the NFT, and its content hash.
- NFT addresses can not be controlled by anyone or have smart contract code on mainnet.

NOTICE: In zkSync 1.x, multiple NFTs can be minted with the same content hash.

## Setup

Please read our [Getting Started](../api/sdk/js/tutorial.md#getting-started) guide before beginning this tutorial.

### Install the zkSync library

```bash
yarn add zksync
```

### Connect to zkSync network

For this tutorial, let's connect to the Rinkeby testnet. The steps for mainnet and Ropsten would be identical.

```typescript
const syncProvider = await zksync.getDefaultProvider("rinkeby");
```

## Mint

To mint an NFT, we will introduce a new opcode `MINT_NFT` with arguments:

- creator_account_id
- content_hash
- recipient_account_id

By passing in `recipient_account_id`, we allow creators to choose whether to mint to themselves or directly to others.

### Enforcing Uniqueness

To enforce uniqueness of NFT **token IDs**, we use the last account in the zkSync balance tree to track token IDs. This account, which we will refer to as `SpecialNFTAccount`, will have a balance of `SPECIAL_NFT_TOKEN` representing the `token_id` of the latest mint.

```typescript
// token ID is represented by:
SpecialNFTAccount[SPECIAL_NFT_TOKEN];
// for every mint, we increment the token ID of the NFT account
SpecialNFTAccount[SPECIAL_NFT_TOKEN] += 1;
```

To enforce uniqueness of NFT **token addresses**, recall `serial_id` is an input in the hash that generates the address. Creator accounts will have a balance of `SPECIAL_NFT_TOKEN` representing the `serial_id`, the number of NFTs that have been minted by the creator.

```typescript
// serial ID is represented by:
CreatorAccount[SPECIAL_NFT_TOKEN];
// for every mint, we increment the serial ID of the creator account
CreatorAccount[SPECIAL_NFT_TOKEN] += 1;
```

zkSync servers will maintain a mapping of NFT token addresses to token IDs.

### Calculate Transaction Fee

To calculate the transaction fee for minting an NFT, you can use the `getTransactionFee` method from the `Provider` class.

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
const { totalFee: fee } = await syncProvider.getTransactionFee("MintNFT", syncWallet.address(), feeToken);
```

### Mint the NFT

You can mint an NFT by calling the `mintNFT` function from the `Wallet` class.

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
const contentHash = "0xbd7289936758c562235a3a42ba2c4a56cbb23a263bb8f8d27aead80d74d9d996";
const nft = await syncWallet.mintNFT({
  recipient: syncWallet.address(),
  contentHash,
  feeToken: "ETH",
  fee,
});
```

### Get a Receipt

To get a receipt for the minted NFT:

```typescript
const receipt = await nft.awaitReceipt();
```

Receipt format is as follows:

```typescript
pub struct TxReceiptResponse {
    pub tx_hash: String,
    pub block_number: i64,
    pub success: bool,
    pub verified: bool,
    pub fail_reason: Option<String>,
    pub prover_run: Option<ProverRun>,
}
```

### View the NFT

After an NFT is minted, it can be in two states: committed and verified. An NFT is committed if it has been included in a rollup block, and verified when a zero knowledge proof has been generated for that block and the root hash of the rollup block has been included in the smart contract on Ethereum mainnet.

To view an account's NFTs:

```typescript
// Get state of account
const state = await syncWallet.getAccountState("<account-address>");
// View committed NFTs
console.log(state.committed.nfts);
// View verified NFTs
console.log(state.verified.nfts);
```

You may also find the `getNFT` function from the `Wallet` class useful.

> Signature

```typescript
async getNFT(tokenId: number, type: 'committed' | 'verified' = 'committed'): Promise<NFT>
```

## Transfer

Users can transfer NFTs to existing accounts and transfer to addresses that have not yet registered a zkSync account. `TRANSFER` and `TRANSFER_TO_NEW` opcodes will work the same.

An NFT can only be transferred after the block with it's mint transaction is verified. This means the newly minted NFT may have to wait a few hours before it can be transferred. This only applies to the first transfer; all following transfers can be completed with no restrictions.

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

The `syncTransferNFT` function works as a batched transaction under the hood, so it will return an array of transactions where the first handle is the NFT transfer and the second is the fee.

```typescript
const handles = await sender.syncTransferNFT({
  to: receiver.address(),
  feeToken,
  token: nft,
  fee,
});
```

### Get a Receipt

To get a receipt for the transfer:

```typescript
const receipt = await handles[0].awaitReceipt();
```

## Swap

The swap function can be used to atomically swap:

1. one NFT for another NFT
2. one NFT for fungible tokens (buying the NFT)

### Swap NFTs

To swap 2 NFTs, each party will sign an order specifying the NFT ids for the NFT they are selling and the NFT they are buying.

Using the [`getOrder`](../api/sdk/js/accounts.md#signing-orders) method:

```typescript
const order = await wallet.getOrder({
  tokenSell: myNFT.id,
  tokenBuy: anotherNFT.id,
  amount: 1,
  ratio: utils.tokenRatio({
    [myNFT.id]: 1,
    [anotherNFT.id]: 1,
  }),
});
```

Note: when performing an NFT to NFT swap, the ratios will always be set to one.

After 2 orders are signed, anyone can initiate the swap by calling the [`syncSwap`](../api/sdk/js/accounts.md#submitting-a-swap) method:

```typescript
// whoever initiates the swap pays the fee
const swap = await submitter.syncSwap({
  orders: [orderA, orderB],
  feeToken: "ETH",
});
```

To get a receipt:

```typescript
const receipt = await swap.awaitReceipt();
```

### Buy / Sell NFTs

To buy or sell an NFT for fungible tokens, each party will sign an order specifying the NFT id and the name of the token they are spending/receiving. In the example, pay special attention to the ratio parameter. You can find a list of available tokens and their symbols in our [explorer](https://zkscan.io/explorer/tokens).

```typescript
const buyingNFT = await walletA.getOrder({
  tokenBuy: nft.id,
  tokenSell: "USDT",
  amount: tokenSet.parseToken("USDT", "100"),
  ratio: utils.tokenRatio({
    USDT: 100,
    [nft.id]: 1,
  }),
});

const sellingNFT = await walletB.getOrder({
  tokenBuy: "USDT",
  tokenSell: nft.id,
  amount: 1,
  ratio: utils.tokenRatio({
    USDT: 100,
    [nft.id]: 1,
  }),
});
```

## Withdrawal to Layer 1

Withdrawals to L1 will require 3 actors:

- Factory: L1 contract that can mint L1 NFT tokens
- Creator: user which _mints_ NFT on L2
- NFTOwner: user which _owns_ NFT on L2

This guide will demonstrate 2 types of withdrawals: normal and emergency, and explain under what conditions each type should be used. It also explains the architecture of the NFT token bridge between zkSync and L1, and what is needed if protocols want to implement their own NFT factory contract on L1.

### Withdraw NFT

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
  fastProcessing,
});
```

Get the receipt:

```typescript
const receipt = await withdraw.awaitReceipt();
```

### Emergency Withdraw

In case of censorship, users may call for an emergency withdrawal. Note: This is a layer 1 operation, and is analogous to our [fullExit mechanism](https://zksync.io/dev/payments/basic.html#withdrawing-funds).

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

```typescript
const emergencyWithdrawal = await wallet.emergencyWithdraw({ token, accountId });
const receipt = await emergencyWithdrawal.awaitReceipt();
```

### Factory and zkSync Smart Contract Interaction

We have a default factory contract that will handle minting NFTs on L1 for projects that do not want to implement their own minting contract. Projects with their own minting contracts only need to implement one minting function: `mintNFTFromZkSync`.

```typescript
mintNFTFromZkSync(creator_address: address, creator_id: uint32, serial_id: uint32, content_hash: bytes, recipient_address: address, token_id: uint32)
```

zkSync will maintain a mapping from creator address to L1 factory contract address. Creators have the option to change from one factory contract to another at arbitrary points in time. To do so, call `registerFactory`, a function implemented in the zkSync Governance contract. 

```typescript
registerFactory(creator_address: address, signature: bytes)
```

The NFT object will include the L1 factory contract for the NFT, and will be displayed. When users call `withdrawNFT()` with the token_id, the zkSync smart contract will verify ownership, burn the token on L2, and call `mintNFTFromZkSync` on the factory corresponding to the creator. 

### Factory Registration

1. To register a factory, creators will sign the following message with data `factory_address` and `creator_address`.

```
"\x19Ethereum Signed Message:\n141",
"\nCreator's account ID in zkSync: {creatorIdInHex}",
"\nCreator: {CreatorAddressInHex}",
"\nFactory: {FactoryAddressInHex}"
```

2. The factory contract calls `registerFactory` on the zkSync L1 smart contract with the signature.
3. zkSync smart contract validates the signature and emits an event with `factory_address` and `creator_address`.

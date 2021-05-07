# NFTs in zkSync 1.x

Support for NFTs on zkSync 1.x is here! Functions include minting, transferring, and atomically swapping NFTs. Users will also be able to withdraw NFTs to Layer 1.

Functionality is currently in testnet on Rinkey-beta and Ropsten-beta.

This page demonstrates how NFTs are implemented in zkSync 1.x and provides a tutorial for you to integrate NFTs into your project. 

- [What's Live](https://zksync.io/dev/nfts.html#whats-live)
- [Overview](https://zksync.io/dev/nfts.html#overview)
- [Setup](https://zksync.io/dev/nfts.html#setup)
- [Mint](https://zksync.io/dev/nfts.html#minting)
- [Transfer](https://zksync.io/dev/nfts.html#)
- [Withdrawal and Full Exit](https://zksync.io/dev/nfts.html#)

## What's Live

Functions currently available on Rinkeby-beta and Ropsten-beta testnet: 

[x] Minting

[x] Transferring

[ ] Swapping

[ ] Withdrawal to L1

Swapping and withdrawals are coming soon!

## Overview

NFT addresses will encode NFT content and metadata as follows: 

```typescript
address = truncate_to_20_bytes(rescue_hash(creator_account_id || serial_id || content_hash))
```

This cryptographically ensures two invariants:

- NFT addresses serve as a unique commitment to the creator, serial number of the NFT, and its content hash. 
- NFT addresses can not be controlled by anyone or have smart contract code on mainnet. 

NOTICE: In zkSync 1.x, multiple NFTs can be minted with the same content hash. 

## Setup

Please read our [Getting Started](https://zksync.io/api/sdk/js/tutorial.html#getting-started) guide before beginning this tutorial. 

### Install the zkSync@beta library

```bash
yarn add zksync@beta
```

### Connect to the Rinkeby-beta testnet

For this tutorial, let's connect to the Rinkeby-beta testnet. You can also use Ropsten-beta.

```typescript
const syncProvider = await zksync.getDefaultProvider("rinkeby-beta");
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
SpecialNFTAccount[SPECIAL_NFT_TOKEN] 
// for every mint, we increment the token ID of the NFT account
SpecialNFTAccount[SPECIAL_NFT_TOKEN] += 1
```

To enforce uniqueness of NFT **token addresses**, recall `serial_id` is an input in the hash that generates the address. Creator accounts will have a balance of `SPECIAL_NFT_TOKEN` representing the `serial_id`, the number of NFTs that have been minted by the creator. 

```typescript
// serial ID is represented by:
CreatorAccount[SPECIAL_NFT_TOKEN] 
// for every mint, we increment the serial ID of the creator account
CreatorAccount[SPECIAL_NFT_TOKEN] += 1
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

You can mint an NFT by calling the `mintNFT` function from the `Wallet` class, now available in the zksync@beta version.

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

| Name        | Description                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------- |
| recipient   | the recipient address represented as a hex string                                                   |
| contentHash | the unique identifier of the NFT represented as a 32-byte hex string (e.g. IPFS content identifier) |
| feeToken    | name of token in which fee is to be paid (typically ETH)                                            |
| fee         | transaction fee                                                                                     |


Example: 

```typescript
const contentHash = "0xbd7289936758c562235a3a42ba2c4a56cbb23a263bb8f8d27aead80d74d9d996"
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

### View the NFT

After an NFT is minted, it can be in two states: committed and verified. An NFT is committed if it has been included in a rollup block, and verified when a zero knowledge proof has been generated for that block and the root hash of the rollup block has been included in the smart contract on Ethereum mainnet.

To view an account's NFTs:

```typescript
// Get state of account
const state = await syncProvider.getAccountState('<account-address>');
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
| token    | address of the NFT                                       |
| fee      | transaction fee                                          |

The `syncTransferNFT` function works as a batched transaction under the hood, so it will return an array of transactions where the first handle is the fee and the second is the NFT transfer itself.  

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
## Withdrawal and Full Exit

A [Full Exit](https://zksync.io/dev/payments/basic.html#flow) is a trustless withdrawal: a Layer 1 contract call provided in the rare case your transaction is being censored. 

Withdrawals to L1 will require 3 actors:

- Factory: L1 contract that can mint L1 NFT tokens
- Creator: user which *mints* NFT on L2
- NFTOwner: user which *owns* NFT on L2

Withdrawing is not available in testnet yet. The general architecture is detailed below.

### Factory and zkSync Smart Contract Interaction

We will have a default factory contract that will handle minting NFTs on L1 for projects that do not want to implement their own minting contract. Projects with their own minting contracts only need to implement one minting function: `mintFromZkSync`. 

Note: The name of this function is subject to change.

```typescript
mintFromZkSync(creator_address: address, content_hash: bytes, recipient_address: address, token_id: uint256)
```

The zkSync Governance contract will implement a function `registerFactory` that will register creators as a trusted minter on L2 for the factory contract. 

```typescript
registerFactory(creator_address: address, signature: bytes)
```

To withdraw, users call `withdrawNFT()` with the token_id. The zkSync smart contract will verify ownership, burn the token on L2, and call mintFromZkSync on the factory corresponding to the creator. 

### Factory Registration

1. To register a factory, creators will sign a message with data `factory_address` and `creator_address`.
2. The factory contract calls `registerFactory` on the zkSync L1 smart contract with the signature.
3. zkSync smart contract validates the signature and emits an event with `factory_address` and `creator_address`.


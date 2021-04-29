# NFTs in zkSync 1.0
## Overview
NFT addresses will encode NFT content and metadata as follows: 

```typescript
address = truncate_to_20_bytes(rescue_hash(creator_account_id || serial_id || content_hash))
```

This cryptographically ensures two invariants:

- NFT addresses serve as a unique commitment to the creator, serial number of the NFT, and its content hash. 
- NFT addresses can not be controlled by anyone or have smart contract code on mainnet. 

NOTICE: In zkSync 1.x, multiple NFTs can be minted with the same content hash. 

You can currently try out minting and transferring NFTs with our [SDK](INSERT LINK) on Rinkeby testnet.

## Minting

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

## Transfer and Swap
Users can transfer NFTs to existing accounts, transfer to addresses that have not yet registered a zkSync account, and atomically swap NFTs. `TRANSFER`, `TRANSFER_TO_NEW`, and `SWAP` opcodes will work the same. 

## Withdrawals and FullExits (Trustless Withdrawal)

Withdrawals to L1 will require 3 actors:

- Factory: L1 contract that can mint L1 NFT tokens
- Creator: user which *mints* NFT on L2
- NFTOwner: user which *owns* NFT on L2

### Factory and zkSync Smart Contract Interaction

Factory contracts only need to implement one minting function: `mintFromZkSync`.

```typescript
mintFromZkSync(creator_address: address, content_hash: bytes, recipient_address: address, token_id: uint256)
```

The zkSync contract will implement a function `registerFactory` that will register creators as a trusted minter on L2 for the factory contract. 

```typescript
registerFactory(creator_address: address, signature: bytes)
```

To withdraw, users call `withdrawNFT()` with the token_id. The zkSync smart contract will verify ownership, burn the token on L2, and call mintFromZkSync on the factory corresponding to the creator. 

### Factory Registration

1. To register a factory, creators will sign a message with data `factory_address` and `creator_address`.
2. The factory contract calls `registerFactory` on the zkSync L1 smart contract with the signature.
3. zkSync smart contract validates the signature and emits an event with `factory_address` and `creator_address`.
4. zkSync server listens for this event, and enables withdrawal from L2 to L1.


# NFTs in zkSync 1.0

## Overview
NFTs in zkSync 1.0 are treated like accounts. These account addresses will encode NFT content and metadata as follows: 

```typescript
address = truncate_to_20_bytes(rescue_hash(creator_account_id || serial_id || content_hash))
```

This cryptographically ensures two invariants:

- NFT addresses serve as a unique commitment to the creator, serial number of the NFT, and its content hash. Having a serial number allows creators to introduce arbitrary verifiable scarcity policies.
- NFT addresses can not be controlled by anyone or have smart contract code on mainnet.

Each NFT account will have a corresponding token, where token_id = account_id, with a max total supply of exactly 1 wei. 

NOTICE: In zkSync 1.0, one address can theoretically exist under multiple account_ids. This does not have any impact on security and instead, the uniqueness is enforced by our minting process. We will enforce uniqueness in circuit starting with zkSync 2.0. 

You can currently try out minting and transferring NFTs with our [SDK](INSERT LINK) on Rinkeby testnet.

## Minting

To enforce uniqueness of NFTs, ownership of the NFT is represented by a balance of 1 wei, not by the account itself. Each address has 1 wei of 1 token. The account is only used to encode the metadata in its address. 

We will introduce a new opcode `MINT_NFT` with arguments:

- creator_account_id
- content_hash
- recipient_account_id

Tokens will have a token_id `NFT_SERIAL_TOKEN_ID` that stores the total number of minted NFTs for each creator account. 

### Minting Workflow Example
Alice opens an account in zkSync, which gets an id = 777001.

She mints her first NFT to herself with a content hash 8B8e847806B43A1584B82482f91D71d750Ea0C99.

This creates a new account with:

- account_id = 777002.
- address = `rescue_hash(777001 || 0 || 8B8e847806B43A1584B82482f91D71d750Ea0C99)`

Now Alice has a balance of 1 wei for token_id=777002:

`accounts[777001].balances[777002] == 1`

Next, Alice transfers this NFT to Bob. Bob didn't have a zkSync account previously, so a new account will be created for him with account_id=777003. After the transfer, the balances look as follows:

`accounts[777001].balances[777002] == 0`

`accounts[777003].balances[777002] == 1`

Note: Alice could have also minted the NFT directly to Bob.

## Transfer and Swap
Users can transfer NFTs to existing accounts, transfer to addresses that have not yet registered a zkSync account, and atomically swap NFTs. TRANSFER, TRANSFER_TO_NEW, and SWAP opcodes will work the same. 

## Withdrawals and FullExits (Trustless Withdrawal)

Withdrawals to L1 will require 3 actors:

- Fabric: L1 contract that can mint L1 NFT tokens
- Creator: user which *mints* NFT on L2
- NFTOwner: user which *owns* NFT on L2

### Fabric and zkSync Smart Contract Interaction

Fabric contracts should implement a function `mintFromZkSync`.

```typescript
mintFromZkSync(creator_address: address, content_hash: bytes, recipient_address: address)
```

The zkSync contract will implement a function that will register creators as a trusted minter on L2 for the fabric contract. 

```typescript
registerFabric(creator_address: address, signature: bytes)
```

To withdraw, users call `withdrawNFT()` with the token_id. The zkSync smart contract will verify ownership, burn the token on L2, and call mintFromZkSync on the fabric corresponding to the creator. 

### Fabric Registration

1. To register a fabric, creators will sign a message with data `fabric_address` and `creator_address`.
2. The fabric contract calls `registerFabric` on the zkSync L1 smart contract with the signature.
3. zkSync smart contract validates the signature and emits an event with `fabric_address` and `creator_address`.
4. zkSync server listens for this event, and enables withdrawal from L2 to L1.


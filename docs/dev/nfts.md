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

The existing mechanisms of withdrawals and full exits are kept the same with a tiny modification: in addition to passing the token_id from the circuit to the L1 smart contract, we also pass the full NFT metadata (creator_acc_id, serial_id, content_hash) for any NFT account.  

*Note: this will slightly increase the cost of every withdrawal and full exit.*

For every withdrawal of 1 wei, the L1 smart contract will assume it is an NFT, and will not call the `ERC20.transfer()` function. 

Users can calls `withdrawNFT()` to mint on L1, passing the following arguments:

- msg.sender 
- nft_minting_contract
- creator_account_id
- serial_id
- content_hash

`withdrawNFT()` will verify ownership and metadata encoding, and will pass the call to `nft_minting_contract` of the NFT factory, which will perform the minting logic on L1.

## Deposits

For deposits of NFTs we will introduce a new function `depositNFT()` 

NFTs previously withdrawn from zkSync are tracked on-chain with a separate mapping, and will simply deposit 1 wei of the NFT's token id. *To discuss with partners if necessary.*

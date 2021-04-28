# NFTs

NFTs is currently in testnet. This guide demonstrates how to mint and transfer NFTs.

## 1. Setup

### 1.1 Install Dependencies

Install zkSync’s official libraries so you can access the API from your application:

```bash
yarn add zksync@beta
yarn add ethers # ethers is a peer dependency of zksync
```

### 1.2 Add Imports

Import the Wallet class from the zkSync beta library:

```typescript
import { Wallet } from "zksync";
```

Alternatively, you can import the entire zkSync beta library:

```typescript
import * as zksync from "zksync";
```

### 1.3 Connect To zkSync Network

To interact with the zkSync network, users need to know the endpoint of the operator node. In this example, let's connect to the Rinkeby-beta testnet.

```typescript
const syncProvider = await zksync.getDefaultProvider("rinkeby-beta");
```

Most operations will require read-only access to the Ethereum network. We use the `ethers` library to interact with Ethereum.

```typescript
const ethersProvider = ethers.getDefaultProvider("rinkeby");
```

### 1.4 Create a Wallet

The `zksync.Wallet` object is your account in zkSync. It can sign transactions with keys stored in `zksync.Signer` and send transaction to zkSync network using `zksync.Provider`.

`zksync.Wallet` is a wrapper around 2 objects:

- `ethers.Signer` to sign Ethereum transactions.
- `zksync.Signer` to sign native zkSync transactions.

The private key used by `zksync.Signer` is implicitly derived from the Ethereum signature of a special message.

```typescript
// Create ethereum wallet using ethers.js
const ethWallet = ethers.Wallet.fromMnemonic(MNEMONIC).connect(ethersProvider);

// Derive zksync.Signer from ethereum wallet
const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);
```

## 2. Mint NFT

2.1 Calculate Transaction Fee

To mint an NFT, we first need to calculate the transaction fee.

> Signature

```typescript
async getTransactionFee(
        txType: 'Withdraw' | 'Transfer' | 'FastWithdraw' | 'MintNFT' | ChangePubKeyFee | LegacyChangePubKeyFee,
        address: Address,
        tokenLike: TokenLike
    ): Promise<Fee>
```

To calculate the fee:

```typescript
let { totalFee: fee } = await syncProvider.getTransactionFee("MintNFT", syncWallet.address(), feeToken);
```

2.2 Mint the NFT

You can mint an NFT by calling the `mintNFT` function:

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

The `mintNFT` function has the following parameters:

| Name        | Description                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------- |
| receiver    | the recipient address represented as a hex string                                                 |
| contentHash | the unique identifier of the NFT represented as a 32-byte hex string (eg IPFS content identifier) |
| feeToken    | name of token in which fee is to be paid (typically ETH)                                          |
| fee         | transaction fee                                                                                   |

To mint an NFT:

```typescript
const nft = await syncWallet.mintNFT({
  receiver,
  contentHash,
  feeToken,
  fee,
});
```

2.3 Get a Receipt

If you would like, you can also receive a receipt for the minted NFT.

```typescript
const receipt = await nft.awaitReceipt();
```

2.4 View an NFT

After an NFT is minted, it can be in two states: committed and verified. An NFT is committed if it has been included in a rollup block, and verified when a zero knowledge proof has been generated for that block and the root hash of the rollup block has been included in the smart contract on Ethereum mainnet.

To view an account's NFTs:

```typescript
// Get state of account
const state = await syncProvider.getAccountState(<account-address>);
// View verified NFTs
console.log(state.verified.nfts);
```

To get an NFT, you can also use this function:

> Signature

```typescript
async getNFT(tokenId: number, type: 'committed' | 'verified' = 'committed'): Promise<NFT>
```

## 3. Transfer NFT

An NFT can only be transferred after the block with the MintNFT transaction is verified. In other words, the NFT must be in the verified state.

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

The `syncTransferNFT` function has the following parameters:

| Name     | Description                                              |
| -------- | -------------------------------------------------------- |
| to       | the recipient address represented as a hex string        |
| feeToken | name of token in which fee is to be paid (typically ETH) |
| token    | address of the NFT                                       |
| fee      | transaction fee                                          |

To transfer an NFT:

```typescript
const handles = await sender.syncTransferNFT({
  to: receiver.address(),
  feeToken,
  token: nft,
  fee,
});
```

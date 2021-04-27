# NFTs

NFTs is currently in testnet. This guide demonstrates how to  

## 1. Setup

### 1.1 Install Dependencies

Install zkSync’s official libraries so you can access the API from your application:
```bash
npm install zksync@beta
npm install ethers # ethers is a peer dependency of zksync
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

You can mint an NFT by calling the `mintNFT` function with the following parameters:

| Name           | Type | Description                                                                           |
| -------------- | -------| ------------------------------------------------------------------------------------- |
| receiver            | ? |the recipient address represented as a hex string                        |
| contentHash     | string | the unique identifier of the NFT represented as a 32-byte hex string (eg IPFS content identifier) |
| feeToken | string | name of token in which fee is to be paid (typically ETH)                        |
| fee      | ?  |           ...                        |


To calculate the fee: 
```typescript
let { totalFee: fee } = await this.syncProvider.getTransactionFee(
    MintNFT,  
    syncWallet.address(), 
    feeToken);
```

`mintNFT` returns ...
```typescript
const nft = await syncWallet.mintNFT({
        receiver,
        contentHash,
        feeToken,
        fee
    });
```
To receive a receipt:
```typescript
const receipt = await nft.awaitReceipt();
```

To view an account's NFTs:
```typescript
// Get state of account
const state = await receiver.getAccountState();

state.verified.nfts ...
```

## 3. Transfer NFT

You can transfer an NFT by calling the `syncTransferNFT` function with the following parameters:

| Name           | Type | Description                                                                           |
| -------------- | -------| ------------------------------------------------------------------------------------- |
| to            | ? |the recipient address represented as a hex string                        |
| feeToken | ? | name of token in which fee is to be paid (typically ETH)                        |
| token     | ? | address of the NFT |
| fee      | ?  |           ...                        |

```typescript
const handles = await sender.syncTransferNFT({
        to: receiver.address(),
        feeToken,
        token: nft,
        fee
    });
```

NOTICE: an NFT can only be transferred after the block with the MintNFT transaction is verified.
---
sidebarDepth: 4
---

# JSON-RPC API for reading state

## Limitations

- `indexed` event parameters are not supported. (Even the ERC20/ERC721 events will not have the `indexed` event parameters).
- Some methods are not supported (the exact list of supported methods can be found below).
- The calldata will not be simulated, i.e. the `input` field of any transaction will be empty.
- The signature part of the transactions may not be valid, since zkSync 1.x uses a different signature scheme.

:::warning
It is only possible to read state, not write to it (sending transactions is only possible through our original [API](https://zksync.io/api/))
:::

## Supported Methods

All these methods should behave according to [https://eth.wiki/json-rpc/API](https://eth.wiki/json-rpc/API)

### Returning constant values:

- `web3_clientVersion`
- `net_version`
- `eth_protocolVersion`
- `eth_mining`
- `eth_hashrate`
- `eth_gasPrice` - always 0
- `eth_accounts` - returns an empty list
- `eth_getUncleCountByBlockHash` - always 0
- `eth_getUncleCountByBlockNumber` — always 0

### Trivial methods:

- `eth_blockNumber` — returns the number of the latest verified block.
- `eth_getBalance` — returns ETH balance of an account
- `eth_getBlockTransactionCountByHash` — number of transactions in a block
- `eth_getBlockTransactionCountByNumber` — number of transactions in a block

### Advanced reading methods

- `eth_getLogs` — get logs matching a particular event.
- `eth_getBlockByHash` — get information about a block with particular hash.
- `eth_getTransactionByHash` — get information about a transaction by its hash.
- `eth_getBlockByNumber(latest)` - with and without transactions.
- `eth_getTransactionReceipt`
- `eth_call` - compliant with EIP-1898.

### Emulating ETH

In order to make the process simpler, we can assume that ETH is an ERC-20 token with contract address `0x000...0000`.

### Special addresses

- `0x0000....0000` — the address of the ERC-20 smart contract of ETH.
- `0x1000....0000` — the address which indicates the `ZkSyncProxy` smart contract (more details can be read below).

### Smart contracts for L2

There are no smart contracts on zkSync 1.x, but we need to support reading blockchain *as if* there were smart contracts. So we need to understand which exact smart contracts will be emulated.

All of the interactions will go through the `ZkSyncProxy` contract, which will have an unlimited allowance for each user's tokens and so it will be able to process the ERC-20/NFT transfers on behalf of the users.

### Note on Input

The `input` parameter of the transactions returned by our API is always empty, but it is possible to potentially introduce it in the future. The following simply describes how the data would look like if it was implemented. But it does describe the events.

#### zkSync Transfer

```typescript
function transfer(address from, address to, address token, uint256 amount, uint256 fee)
```

transfers funds from the account `from` to the account `to` and sends the `fee` from the `from` account to the fee collector. 

**Emits:**

```typescript
ZkSyncTransfer(address from, address to, address token, uint256 amount, uint256 fee)`.
```

It also emits an ERC20/ERC721 `Transfer` event, during the funds transfer. Note that there is no event about paying the fee.

#### ZkSync Withdraw

```typescript
function withdraw(address from, address to, address token, uint256 amount, uint256 fee)
```

Burns funds on the `from` address and emits the event.

**Emits:**

```typescript
ZkSyncWithdraw(address from, address to, address token, uint256 amount, uint256 fee)
```

It also emits an ERC20 `Transfer` event to the `0x000..000` address. Note that there is no event about paying the fee.

#### zkSync ForcedExit

```typescript
function forcedExit(address initiator, address target, address token, uint256 fee)
```

Burns the funds on the `target` account.

**Emits:**

```typescript
ZkSyncForcedExit(address initiator, address target, address token, uint256 fee)
```

It also emits an ERC20/ERC721`Transfer` event to the `0x000..000` address. Note that there is no event about paying the fee.

#### zkSync ChangePubKey

```typescript
function changePubKey(address accountAddress, address newPubKeyHash, address token, uint256 fee)
```

Just emits the event about the transaction and pays the fee.

**Emits:**

```typescript
ZkSyncChangePubKey(address accountAddress, bytes20 newPubKeyHash, address token, uint256 fee)
```

#### zkSync Deposit

```typescript
function deposit(address from, address to, address token, uint256 amount)
```

Mints the funds in the `to` address.

**Emits:**

```typescript
ZkSyncDeposit(address from, address to, address token, uint256 amount)
```

It also emits an ERC20 `Transfer` event from the `0x000..000` address to the `to` address. Note that there is no event about paying the fee.

Please note that the `from` address is the address that deposited the funds on Layer 1. The transaction does not have to affect this account on zkSync in any way.

  

#### ZkSync FullExit

```typescript
function fullExit(address accountAddress, address token, uint256 amount)
```

Burns the funds on the zkSync on the `account`.

**Emits:**

```typescript
ZkSyncFullExit(address accountAddress, address token, uint256 amount)
```

It also emits an ERC20/ERC721`Transfer` event to the `0x000..000` address. Note that there is no event about paying the fee.

#### zkSync MintNFT

```typescript
function mintNFT(uint32 tokenId, uint32 creatorId, address creatorAddress, bytes32 contentHash, address recipient, uint256 fee, address feeToken)
```

Mints the NFT and pays the fee.

**Emits:**

```typescript
ZkSyncMintNFT(uint32 tokenId, uint32 creatorId, address creatorAddress, bytes32 contentHash, address recipient, uint256 fee, address feeToken)
```

It also emits an ERC721 `Transfer` event from the `0x000..000` address to the `to` address. Note that there is no event about paying the fee.

#### zkSync WithdrawNFT

```typescript
function withdrawNFT(address from, address to, uint32 tokenId, address tokenAddress, address feeToken, uint256 fee, uint32 creatorId, address creatorAddress, uint32 serialId, bytes32 contentHash)
```

Burns the NFT on L2 and mints the events

**Emits:**

```typescript
ZkSyncWithdrawNFT(address from, address to, uint32 tokenId, address tokenAddress, address feeToken, uint256 fee, uint32 creatorId, address creatorAddress, uint32 serialId, bytes32 contentHash)
```

It also emits an ERC721`Transfer` event to the `0x000..000` address. Note that there is no event about paying the fee.

#### zkSync Swap

```typescript
function swap(address initiator, Order order1, Order order2, uint256 amount1, uint256 amount2, address feeToken, uint256 fee)
```

Executes the swap. The initiator pays for the fee.

**Emits:**

```typescript
ZkSyncSwap(address initiator, address accountAddress1, address accountAddress2, address recipient1, address recipient2, address feeToken, address token1, address token2, uint256 fee, uint256 amount1, uint256 amount2)
```

It also emits two ERC20/ERC721 `Transfer` events, during the funds' transfers.

### A note on another transaction information

Since the signature scheme and the data which we sign in the transactions is fundamentally different from the data/signatures in ETH transactions, there is no guarantee that the signatures provided with the transactions are correct and they sign the exact data which is supplied with the transactions. Thus, the `v` `r` and `s` parts of the transactions' data will be wrong and may as well be just some random bytes. 

- `gasLimit` is always equal `50000`. This number does not actually matter and can be anything non-zero.
- `gasPrice` is equal to 0.

### Emulating ERC-20 smart contracts

[https://eips.ethereum.org/EIPS/eip-20](https://eips.ethereum.org/EIPS/eip-20)

- `name`, `symbol`, `decimals`, `balanceOf` are implemented trivially by the standard.
- `totalSupply` returns `2^256-1`. It is always equal to infinity.
- `allowance` is always equal to `2^256-1` to justify the ability for the other smart contracts to interact with the users' tokens.
- `approve` method can not be called.
- `transfer` method can not be called.
- `transferFrom` method can not be called directly. Used only when we simulate the smart contract interaction with user's funds.
- The balance of the `0x0000...0000` account is always equal to `2^256-1`.

#### Events:

- `Transfer` should be emitted each time some token is transferred from one account to another (using either `transfer` or `transferFrom` methods).
- `Approval` event is never emitted.

### Emulating ERC-721 smart contracts

#### Events:

- `Transfer` should be emitted each time some token is transferred from one account to another
- `Approval` is never emitted.
- `ApprovalForAll` is never emitted.

#### Methods:

- `balanceOf`, `ownerOf` are trivial to implement.
- `safeTransferFrom` with any parameters can not be called.
- `approve` can not be called.
- `setApprovalForAll` can not be called.
- `getApproved` will return the address of the `ZkSyncProxy` contract.
- `transferFrom` can not be called.

#### Not mentioned by the ERC-721 spec:

- `mint` will be used to emulate the calls for the contract to mint nfts.
- `creatorId` method will return the creator of an NFT
- `creatorAddress` method will return the creator of an NFT
- `serialId` method will return the nft serial id.
- `contentHash` method will return the content hash of the NFT
- `tokenURI` method will return the ipfs link to the content of the NFT.
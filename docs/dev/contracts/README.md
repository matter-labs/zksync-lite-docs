---
sidebarDepth: 3
---

# Smart contracts

zkSync is on track to introduce highly efficient, secure, Turing complete, multilanguage smart contracts.

[[toc]]

<!-- spell-checker:disable -->

## Programming model

The zkSync smart contract programming model inherits that of Ethereum.

Solidity will be supported first, so you can use unbounded loops, recursion, vectors and maps of arbitrary length, and
so on. Local variables are stored on the stack or the heap, whereas the contract storage is accessed globally. Contracts
call one another via strongly typed interfaces and have access to public storage fields.

## Composability

zkSync smart contracts are able to call one another just like Ethereum smart contracts can. Each call transaction tree
is atomic, regardless of the number of contract instances involved.

Any DeFi project can be migrated to zkSync, since most of the existing Solidity code can be deployed without changes.

## zkEVM

The zkEVM is a highly efficient, Turing complete, SNARK-friendly virtual machine for executing smart contracts.

State-of-the-art optimizations are applied to smart contract bytecode, while the virtual machine itself is optimized for
high load, allowing it to execute transactions in the blink of an eye.

The machine is SNARK-friendly; that is, the execution trace can be proven in SNARKs. However, it does not require one
circuit per program. A single circuit can be used instead, which needs to be audited only once.

The target proof system of the Sync VM is [PLONK](https://eprint.iacr.org/2019/953).

## Solidity

### Porting Smart Contracts

Most DeFi and NFT projects will work with no code changes. However, in the first version, calls to SHA256 and Keccak256
will be replaced with a circuit friendly hash function automatically by the compiler. A few other cryptographic
primitives are currently also unsupported, for example ecrecover and the cryptographic precompiles.

### UI Interaction

You can interact completely with smart contracts and the zkSync network via our Web3 API and Ethers SDK:

- For _read_ requests: any web3-compliant framework in any language will work out of the box, with additional optional
  zkSync L2 specific functionality.
- For _write_ requests (sending transactions): due to fundamental differences between L1 and L2, you will have to write
  some additional code (for example, zkSync supports paying fees in any token, so sending a transaction will involve
  choosing a token to pay fees).

You can ask questions and get assistance in our [Discord](https://discord.com/invite/px2aR7w) developer chat room.

### Submitting Transactions

For interactions with smart contracts, users will sign an EIP712 message with a hash of the calldata. Since EIP712 is
based on a native Ethereum signature, all wallets, even hardware wallets, will work without any extensions required.

### Deployment

zkSync 2.0 Testnet is here! To get started visit the [zkSync 2.0 Documentation](https://v2-docs.zksync.io/dev/).

## Zinc

[Zinc](https://github.com/matter-labs/zinc) is an emerging framework for developing smart contracts and SNARK circuits
on the zkSync platform.

Existing ZKP frameworks lack functionality specific to smart contracts. Since smart contracts deal with valuable
financial assets, security and safety are crucial. That's why designers of modern smart contract languages, such as
Simplicity or Libra's Move, favored safety and formal verifiability of the code over expressiveness.

Zinc is created to fill the gap between these two worlds by providing a simple, reliable smart contract language that is
optimized for ZKP circuits and is easy for developers to learn.

The framework includes a simple, Turing complete, safety-focused, general-purpose language designed specifically for
developing smart contracts and zero-knowledge proof circuits with a flat learning curve. The syntax and semantics
closely follow that of [Rust](https://www.rust-lang.org/).

The Zinc compiler uses LLVM as its middle-end and back-end, which provides a powerful set of solutions for code
optimization.

**We are currently fully focused on a
[Solidity-first approach](https://medium.com/matter-labs/unisync-a-port-of-uniswap-v2-on-the-zkevm-b12954748504). We
will resume work on Zinc after Solidity is released!**

## Getting help

Most questions are answered in our [zkEVM FAQ](/zkevm/README.md) and major concepts are outlined on our
[Medium](https://medium.com/matter-labs).

You can ask questions and get assistance in our [Discord](https://join.zksync.dev/) developer chat room.

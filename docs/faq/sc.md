# Smart contracts

<!-- spell-checker:disable -->

[[toc]]

## Intro

zkSync is on track to bring Turing-complete smart contracts.

## Programming model

- Conceptually same as Ethereum: Von Neumann Architecture, mem, storage, ...

## ZincVM

- Turing-complete
- SNARK-friendly: execution trace can be proven in SNARKs
  - Only requires a fixed set of circuits, not a circuit per program.
  - Needs to be audited once.
- Optimized for high-load.
- Target proof system: PLONK (link to PLONK explaination in the security section).

## Composability

- Contracts can call each other just like in ETH
- Atomic tx spanning across multiple contracts
- Entire Defi ecosystems can migrate to zkSync

## Programming Smart Contracts

### Overview

- Zinc: short descr
- Solidity: ...

Explain how to decide what to pick:

- for existing Solidity code: wait, to minize porting effort.
- for new code: recommend to embrace Zinc today.

### Zinc

[Zinc](https://github.com/matter-labs/zinc) is a framework for SNARK circuits and smart contracts for the zkSync
platform. It includes a simple, safe and efficient Rust-based programming language for defining zero-knowledge circuits,
and a ZKP-friendly runtime execution environment. Zinc is designed to make developing scalable and privacy-preserving
smart contracts easy.

[Get started](https://zinc.zksync.io/).

The testnet for smart contracts on zkSync is live with Curve Finance as the first resident dapp! Check out the
[intro post](https://medium.com/@matterlabs/5a72c496b350).

### Solidity

- Link to transpiler docker (just to show some progress)
- Explain what will be supported (no ASM, what else?)
- What will be different?
- What can they do now to keep their code compatible?

## Deploying contracts

### Testnet

- Link to Zandbox
- Link to Curve demo

### Mainnet

- Explain that it's coming soon simultaneously for Zinc and Solidity
- ETA: live in 2021

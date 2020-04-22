# Introduction

[[toc]]

## Overview

**zkSync** is a trustless scaling solution for Ethereum. It uses zero-knowledge proof cryptography to secure its operation. This allows **zkSync** protocol to keep the assets as safe as in the underlying L1 mainnet. At the same time, transaction throughput is significantly increased.

Today, you can use it for secure, user-friendly **ETH and ERC20 token transfers** at high volumes (up to 3500 TPS) and a negligible cost per transaction (see the [Speed](/faq/speed/) section).

Soon, **zkSync** will support [Smart contracts](/faq/sc) and [Privacy](/faq/privacy).

## How it works: zkRollup

The architecture employed by **zkSync** is called **zkRollup**. 

All funds are held by a smart contract on the mainchain, while computation and storage are performed off-chain. In a nutshell, it works as follows:

1. Users sign transactions and submit them to validators. 
2. Validators roll up thousands of transactions together in a single block and submit a cryptographic commitment (the root hash) of the new state to the smart contract on mainnet along with a cryptographic proof (a SNARK) that this new state is indeed the result of the application of some correct transactions to the old state.
3. Additionally to the proof, the state ∆ (a small amount of data for every transaction) is also published over the mainchain network as cheap `calldata`. This enables anyone to reconstruct the state at every moment.
4. The proof and the state ∆ is verified by the smart contract, thus verifying both the validity of all the transactions included in the block and block data availability. 

The SNARK verification is much cheaper than verifying every transaction individually, and storing the state off-chain is much cheaper than storing it in EVM. Hence a huge boost of scalability (~100-200x mainnet capacity) and tx cost savings.

zkRollup architecture provides the following guarantees:

- Validators can never corrupt the state or steal funds (unlike Sidechains).
- Users can always retrieve the funds from the zkRollup even if validator(s) stop cooperating because the data is available (unlike Plasma).
- Neither users nor a single trusted third party needs to be online to monitor zkRollup blocks in order to prevent fraud (unlike fraud-proof systems, such as payment channels or Optimistic Rollups).

In other words, zkRollup strictly inherits the security guarantees of the underlying L1.

Here are some links to explore the topic of zkRollups:

- [Original idea proposal by Vitalik Buterin](https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477)
- [Matte Labs' zkRollup talk at Zcon1 (video)](https://www.youtube.com/watch?v=QyM9qdFKsEA)
- [Awesome Zero-Knowledge Proofs materials](https://github.com/matter-labs/awesome-zero-knowledge-proofs)
- [zkRollup vs. Optimistic Rollup deep dive](https://medium.com/matter-labs/optimistic-vs-zk-rollup-deep-dive-ea141e71e075)
- [Validity proofs (zkRollup) vs. fraud proofs](https://medium.com/starkware/validity-proofs-vs-fraud-proofs-4ef8b4d3d87a)

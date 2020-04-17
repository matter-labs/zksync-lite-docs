# Functionality

[[toc]]

## What is zkSync?

zkSync is a trustless scaling solution for Ethereum.

Today, you can use it for secure, user-friendly **ETH and ERC20 token transfers** at high volumes (up to 3500 TPS) and a negligable cost per transaction (see the [Speed](/faq/speed/) section).

In the near future, zkSync will add [Smart contracts](/faq/sc) and [Privacy](/faq/privacy).

## How does it work?

All funds are held by a smart contract on the mainchain, while computation and storage are performed off-chain. In a nutshell it works as follows:

- Users sign transactions and submit them to validators. 
- Validators roll up thousands of transactions together in a single block and submit a cryptographic commitment (the root hash) of the new state to the smart contract on mainnet along with a cryptographic proof (a SNARK) that this new state is need the result of the application of a number of correct transactions to the old state.
- Additionally to the proof, the state ∆ (a small amount of data for every transaction) is also published over the mainchain network as cheap `calldata`. This enables anyone to reconstruct the state at every moment.
- The proof and the state ∆ is verified by the smart contract, thus verifying both the validity of all the transactions included in the block and block data availability. 

This architecture is called **zkRollup**. The SNARK verification is much cheaper than verifying every transaction individually, and storing the state off-chain is much cheaper than storing it in EVM. Hence a huge boost of scalability (~100-200x mainnet capacity) and tx cost savings.

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

## What tokens are supported?

Users can use **zkSync** to transfer ether (ETH) and ERC20 tokens.

## How high are the tx fees?

In **zkSync** the cost of every transaction has two components:

- **Off-chain part (storage + prover costs)**: the cost of the state storage and the SNARK (zero-knowledge proof) generation. This part depends on the use of hardware resources and is therefore invariable. Our benchmarks give estimates of ~0.001 USD per transfer.
- **On-chain part (gas costs)**: for every zkSync block, the validator must pay Ethereum gas to verify the SNARK (~400k gas, amortized across all transactions in the block), plus additionally ~0.4k gas per transaction to publish the state ∆. The on-chain part is variable because it depends on the current gas price in the Ethereum network. However, this part is orders of magnitude cheaper than the cost of normal ETH/ERC20 transfers.

As of today (Apr 17, 2020) the full transfer price is estimated to be ~0.004 USD.

## How do users pay tx fees?

Transfers in zkSync work as "gasless metatransactions": users pay transaction fees in the tokens being transferred. Thus, for example, if you want to transfer DAI stablecoin, there is no need for you to own ETH or any other tokens. Just pay your fees in a fraction of DAI.

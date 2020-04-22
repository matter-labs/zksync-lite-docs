# Tokens & fees

[[toc]]

## Supported tokens

**zkSync** can be used to transfer ether (ETH) and ERC20 tokens. Initially, new tokens need to be manually whitelisted by the operator. In the future adding new tokens will be permissionless.

## Fee costs

In **zkSync** the cost of every transaction has two components:

- **Off-chain part (storage + prover costs)**: the cost of the state storage and the SNARK (zero-knowledge proof) generation. This part depends on the use of hardware resources and is therefore invariable. Our benchmarks give estimates of ~0.001 USD per transfer.
- **On-chain part (gas costs)**: for every **zkSync** block, the validator must pay Ethereum gas to verify the SNARK (~400k gas, amortized across all transactions in the block), plus additionally ~0.4k gas per transaction to publish the state ∆. The on-chain part is variable because it depends on the current gas price in the Ethereum network. However, this part is orders of magnitude cheaper than the cost of normal ETH/ERC20 transfers.

As of today (Apr 17, 2020) the full transfer price is estimated to be ~0.004 USD.

## How fees are payed

Transfers in **zkSync** work as "gasless meta-transactions": users pay transaction fees in the tokens being transferred. Thus, for example, if you want to transfer DAI stable-coin, there is no need for you to own ETH or any other tokens. Just pay your fees in a fraction of DAI.

# Tokens & fees

[[toc]]

## Fee costs

## Supported tokens

**zkSync** can be used to transfer ether (ETH) and ERC20 tokens. Initially, new tokens need to be manually whitelisted by the operator. In the future adding new tokens will be permissionless.

## Listing a token

To submit a token listing support, please fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLScZmS5LJLbHwrc1JFaipOgwu0A31i8BJyxRUMA2dWg-7c5G6Q/viewform?usp=sf_link).

We can immediately list tokens with the price tracked at coinmarketcap.

Tokens without a liquid price tracker will be listed as soon as we implement an option to pay fees in a different token (see below).

In **zkSync** the cost of every transaction has two components:

- **Off-chain part (storage + prover costs)**: the cost of the state storage and the SNARK (zero-knowledge proof) generation. This part depends on the use of hardware resources and is therefore invariable. Our benchmarks give estimates of ~0.001 USD per transfer.
- **On-chain part (gas costs)**: for every **zkSync** block, the validator must pay Ethereum gas to verify the SNARK (~400k gas, amortized across all transactions in the block), plus additionally ~0.4k gas per transaction to publish the state ∆. The on-chain part is variable because it depends on the current gas price in the Ethereum network. However, this part is orders of magnitude cheaper than the cost of normal ETH/ERC20 transfers.

## How fees are payed

Transfers in **zkSync** support "gasless meta-transactions": users pay transaction fees in the tokens being transferred. Thus, for example, if you want to transfer DAI stable-coin, there is no need for you to own ETH or any other tokens. Just pay your fees in a fraction of DAI.

For tokens without a liquid market price, we will soon add an option to pay fees in a different token.

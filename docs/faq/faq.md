# FAQ

[[toc]]

## Will there be a token?

Yes

## When will the token be released?

The focus of the team is to work on scalability for Ethereum. Any announcements from zkSync can be found on [Discord](https://discord.com/invite/px2aR7w), [Telegram](https://t.me/zksync), and [Twitter](https://twitter.com/zksync). 

## How do I make swaps on zkSync?

Currently, there is no UI available to make swaps, but the [infrastructure](/dev/swaps.md#swaps-and-limit-orders) is available for teams to build on top of zkSync. Paraswap, 1inch, and others will be providing a zkSync liquidity provider solution for projects that do not have their own liquidity providers.

## Why are fees so high?

zkSync fees are in direct correlation with Ethereum gas prices. Layer 2 scaling solutions rely on posting data to Layer 1 to inherit the security of Ethereum, so fees will vary based on gas prices on Layer 1. 

## How long are withdrawal times?

Withdrawal times can take from 30 minutes to 7 hours. Layer 2 Rollup solutions amortize fees by submitting transactions in batches. So, when network activity increases, blocks fill up faster and withdrawal times decrease. 

## I withdrew my funds, but don't see them in my L1 account.

If your withdrawal is marked as "Complete" in zkScan, but the funds have not arrived in your wallet, here are a few steps you should take:

1. Make sure that enough time has passed. A withdrawal takes 30 minutes to 7 hours, depending on the usage of the zkSync network.

2. Check for your transaction in "Internal Txs" on Etherscan.
Open Etherscan and go to your address page
Go to "Internal Txs". 
There will be a list of all transactions to your account from smart contracts. In there you should see a transaction coming from the zkSync smart contract. You should see your transaction from zkSync. You may have to add that token to your wallet for it to display.
<!-- add image -->

3. If the account balance is not the same as on Etherscan, contact Support for your wallet. 

4. If none of the steps above have helped you, please send us an email at withdraw@zksync.io describing your problem. It MUST contain the following info:

	1. Your zkSync wallet address.
	2. What wallet are you using (e.g. Trust)?
	3. What problems did you encounter?
	4. The more information you provide, the faster your problem will be solved!
	

## I used "Transfer" instead of "Withdraw" to get my funds onto mainnet

If you attempted to withdraw your zkSync funds to L1 but used the "Transfer" option instead of "Withdraw", you should try:

	1. Log in to zkSync with the wallet that received the funds. 
	2. If that's not possible, then use the alternative withdrawals tool on the [zkSync.io](https://zksync.io/) webpage under "zkTools". 
		 *Please note, that for the tool to be able to withdraw funds from your account, all of the following must be true:*

			- The account is at least 24 hours old.
			- The account has never been unlocked (i.e. nonce is zero)

<!-- add image -->

## What is the activation fee?

The Account Activation is a one-time fee to register your account with zkSync. This will only happen on your first zkSync Layer 2 transaction.

More technically, zkSync accounts are defined over a different elliptic curve than Ethereum's that is better suited for zero-knowledge proofs. Activating your account generates and publishes a new private-public key pair over this curve, which is associated with your Ethereum address. 

If you are using an ERC-1271 compatible wallet (like Argent), this one-time cost becomes greater because of higher interaction with the zkSync smart contract. On the other hand, if you are using a CREATE2 smart contract-based wallet, this operation is cheaper.

# FAQ

[[toc]]

## Will there be a token?

Yes

## When will the token be released?

The team’s focus is to work on scalability for Ethereum. You can find any announcements from zkSync can be found on [Discord](https://discord.com/invite/px2aR7w), [Telegram](https://t.me/zksync), and [Twitter](https://twitter.com/zksync). 

## How do I swap tokens on zkSync?

Currently, there is no UI available to make swaps, but the [infrastructure](/dev/swaps.md#swaps-and-limit-orders) is accessible for teams to build on top of zkSync. Paraswap, 1inch, and others will be providing a zkSync liquidity provider solution for projects that do not have liquidity providers.

## Why are fees so high?

Fees vary based on Layer 1 gas prices because Layer 2 scaling solutions rely on posting data to Layer 1—this is how to inherit the security of Ethereum.

## How long are withdrawal times?

Withdrawal times can take from 30 minutes to 7 hours. Rollups amortize fees by submitting transactions in batches. When network activity increases, blocks fill up faster, and withdrawal times decrease.

## I withdrew my funds but don't see them in my L1 account.

If your withdrawal is marked as "Complete" in zkScan, but the funds have not arrived in your wallet, here are a few steps you should take:

1. Make sure that enough time has passed. A withdrawal takes 30 minutes to 7 hours, depending on the usage of the zkSync network.

2. Check for your transaction in "Internal Txns" on Etherscan.

    1. Open Etherscan and go to your address page
    2. Go to "Internal Txns".   
    3. You’ll find a list of all transactions from smart contracts.   
    4. The list should have your transaction coming from the zkSync smart contract. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/int-txns.png">
</p>
</br>  

3. If the account balance is not the same as on Etherscan, contact Support for your wallet. 

4. Depending on your wallet, you may have to add that token for it to display.

5. If none of the steps above have helped you, please email us at withdraw@zksync.io describing your problem. It **MUST** contain the following info:

	1. Your zkSync wallet address.
	2. What wallet are you using (e.g., Trust)?
	3. What problem(s) did you encounter?
	4. The more information you provide, the faster we can solve your problem!
	

## I used "Transfer" instead of "Withdraw" to get my funds onto mainnet.

If you attempted to withdraw your zkSync funds to L1 but used the "Transfer" option instead of "Withdraw,” you should try logging in to zkSync with the wallet that received the funds. 

If you cannot log in to the zkSync wallet, you will use the “Alternative Withdrawal” tool. To be able to withdraw funds from your account using “Alternative Withdrawal,” use zkScan to check that all of the following is true:

- 1. The account is at least 24 hours old.
- 2. The account has never been activated (i.e., nonce is zero).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/nonce.png">
</p>
</br>

If the steps above are true, you can access the “Alternative Withdrawal” tool on the [zkSync.io](http://zksync.io/) webpage under "zkTools.”

</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/zktools.png">
</p>
</br>

## What is the activation fee?

The Account Activation fee is a one-time fee to register your account with zkSync. This fee only applies to your first zkSync Layer 2 transaction.

On a deeper level, to be better suited for zero-knowledge proofs, zkSync accounts are defined over a different elliptic curve than Ethereum's. Activating your account generates and publishes a new private-public key pair over this curve associated with your Ethereum address. 

The registration process happens directly on the Ethereum smart contract and is an L1 transaction, so the activation fee is to pay the Ethereum miners and not zkSync validators.

ERC-1271 compatible wallets (like Argent) increase this one-time fee because of higher interaction with the zkSync smart contract. This operation is cheaper if you are using a CREATE2 smart contract-based wallet.

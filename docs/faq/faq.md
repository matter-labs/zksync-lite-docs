# FAQ

[[toc]]

## Will there be a token?

Yes

## When will the token be released?

The team’s focus is to work on scalability for Ethereum. You can find any announcements from zkSync on [Discord](https://discord.com/invite/px2aR7w), [Telegram](https://t.me/zksync), and [Twitter](https://twitter.com/zksync). 

## How do I swap tokens on zkSync?

While it is possible to make swaps, currently, there is no UI available for it. However the [infrastructure](../dev/swaps.md#swaps-and-limit-orders) is accessible for teams to build on top of zkSync. Paraswap, 1inch, and others will be providing zkSync liquidity solutions for projects that need liquidity providers. 

## Why are the fees so high?

Our fees depend on Layer 1 gas prices because with every Layer 2 transaction, we also post related data on Layer 1 — this allows us to inherit the security of Ethereum.

## How long are withdrawal times?

At peak usage of zkSync, the withdrawal time is about 10 minutes. During lower use, it can take up to 7 hours. Currently, withdrawal times depend on the activity on zkSync, when we finalize blocks, and submit them to Layer 1.

## I withdrew my funds but don't see them in my L1 account.

If your withdrawal is marked as "Complete" on [zkScan](https://zkscan.io/), but the funds have not arrived in your wallet, here are a few steps you should take:

1. Make sure that enough time has passed. A withdrawal takes 10 minutes to 7 hours, depending on the usage of the zkSync network.

2. Check for your transaction in "Internal Txns" on [Etherscan](https://etherscan.io/).

    1. Open Etherscan and go to your address page.
    2. Go to "Internal Txns".   
    3. You’ll find a list of all transactions from smart contracts.   
    4. The list should have your transaction coming from the zkSync smart contract. 
<br>
<p align="center">
<img src="https://raw.githubusercontent.com/matter-labs/zksync-docs/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/int-txns.png">
</p>
<br>  

3. If the account balance is not the same as on Etherscan, contact Support for your wallet. 

4. Depending on your wallet, you may have to add that token for it to display.

5. If none of the steps above have helped you, please email us at withdraw@zksync.io describing your problem. It **MUST** contain the following info:

	1. Your zkSync wallet address.
	2. What wallet are you using (e.g., Trust)?
	3. What problem(s) did you encounter?
	4. The more information you provide, the faster we can solve your problem!
	

## I used "Transfer" instead of "Withdraw" to get my funds onto mainnet.

If you attempted to withdraw your zkSync funds to L1 but used the "Transfer" option instead of "Withdraw,” you should try logging in to zkSync with the wallet that received the funds. 

If you cannot log in to the zkSync wallet, you can use the “Alternative Withdrawal” tool. See the ["Alternative Withdrawal"](docs/faq/tutorials.md#alternative-withdrawal) section on our [Tutorials](docs/faq/tutorials.md) page.

<!-- 1. Enter your address on [zkScan](https://zkscan.io/).
2. Check your account for the following information:
- 1. The account is at least 24 hours old.
- 2. The account has never been activated (i.e., nonce is zero).
<br>
<p align="center">
<img src="https://raw.githubusercontent.com/matter-labs/zksync-docs/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/nonce.png">
</p>
<br>

If your account meets the requirements for using the "Alternative Withdrawal" tool, you can follow the steps below to proceed.

1. Go to [Alternative Withdrawal](https://withdraw.zksync.io/).
- *You can also access the “Alternative Withdrawal” tool on the [zkSync.io](http://zksync.io/) webpage under "zkTools.”*
2. Enter the zkSync address that you want the funds moved to Ethereum L1. 
3. Select the token you want to be withdrawn.
4. Choose your method of paying the fee.
5. Complete the fee payment process on your wallet.
6. The funds should be in your designated wallet from step 4 within 24 hours and can be see under "Internal Txns" on [Etherscan](https://etherscan.io/).
- If you do not see your funds within 24 hours, please email us at withdraw@zksync.io with the following information:
  - 1. Your zkSync address from step 4.
  - 2. The amount and token.
  - 3. The Ethereum Transaction Hash from Etherscan from step 6.
 
-->
## What is the activation fee?

The account activation fee is a one-time fee to register your account with zkSync. This fee only applies to your first zkSync Layer 2 transaction.

On a deeper level, to be better suited for zero-knowledge proofs, zkSync accounts are defined over a different elliptic curve than Ethereum's. Activating your account generates and publishes a new private-public key pair over this curve associated with your Ethereum address. 

The registration process happens directly on the Ethereum smart contract and is an L1 transaction, so the activation fee is to pay the Ethereum miners and not zkSync validators.

ERC-1271 compatible wallets (like Argent) increase this one-time fee because of higher interaction with the zkSync smart contract. This operation is cheaper if you are using a CREATE2 smart contract-based wallet.
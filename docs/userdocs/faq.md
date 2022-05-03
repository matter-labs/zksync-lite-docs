# FAQ

[[toc]]

## Will there be a token?

Yes

## When will the token be released?

The team’s focus is to work on scalability for Ethereum. You can find any announcements from zkSync on
[Discord](https://discord.com/invite/px2aR7w), [Telegram](https://t.me/zksync), and
[Twitter](https://twitter.com/zksync).

## Why are the fees so high?

Our fees depend on Ethereum Layer 1 (L1) gas prices because with every zkSync Layer 2 (L2) transaction, we post related
data on Layer 1 — this allows us to inherit the security of Ethereum.

## How long are withdrawal times?

At peak usage of zkSync, the withdrawal time is about 10 minutes. During lower use, it can take up to 7 hours.
Currently, withdrawal times depend on the activity on zkSync, when we finalize blocks, and submit them to L1.

## I withdrew my funds but don't see them in my L1 account

If your withdrawal is marked as "Complete" on [zkScan](https://zkscan.io/), but the funds have not arrived in your
wallet, here are a few steps you should take:

1. Make sure that enough time has passed. A withdrawal takes 10 minutes to 7 hours, depending on the usage of the
    zkSync network.

2. Check for your transaction in "Internal Txns" on [Etherscan](https://etherscan.io/).

        1. Open Etherscan and go to your address page.
        2. Go to "Internal Txns."
        3. You’ll find a list of all transactions from smart contracts.
        4. The list should have your transaction coming from the zkSync smart contract.

<br>

![Internal Txns Etherescan](/int-txns.png)

<br>
<br>

3.  If the account balance is not the same as on Etherscan, contact support for your wallet.

4.  Depending on your wallet, you may have to add that token for it to display.

5.  If none of the steps above have helped you, please email us at withdraw@zksync.io describing your problem. It
    **MUST** contain the following info:

    1. Your zkSync wallet address.
    2. The wallet are you using (e.g., Trust).
    3. The problem(s) you encountered.

- The more information you provide, the faster we can solve your problem!

## I used "Transfer" instead of "Withdraw" to get my funds onto L1

If you attempted to withdraw your zkSync funds to L1 but used the "Transfer" option instead of "Withdraw," you should
try logging in to zkSync with the wallet that received the funds.

If you cannot log in to the zkSync wallet, you can use the "Alternative Withdrawal" tool. See the
[Alternative Withdrawal](./tutorials.md#alternative-withdrawal) section on our [Tutorials](./tutorials.md) page.

## What is the account activation fee?

The account activation fee is a one-time fee to register your account with zkSync. This fee only applies to your first
zkSync transaction.

On a deeper level, to be better suited for zero-knowledge proofs, zkSync accounts are defined over a different elliptic
curve than Ethereum's. Activating your account generates and publishes a new private-public key pair over this curve
associated with your Ethereum address.

The registration process happens directly on the Ethereum smart contract and therefore it is an L1 transaction, so the
activation fee is to pay the Ethereum miners and not zkSync validators.

ERC-1271 compatible wallets (like Argent) increase this one-time fee because of higher interaction with the zkSync smart
contract. This operation is cheaper if you are using a CREATE2 smart-contract-based wallet.

## What is the difference between an Initiated, Committed, and Verified transaction on zkScan?

**Initiated**: the zkSync server has received and processed the transaction. If the transaction is a transfer, it is
ready for immediate use.

**Committed**: the transaction appears in a block that is _committed_ to the L1 smart contract.

**Verified**: the transaction’s block has been proven and verified on the L1 smart contract.

# Frequently Asked Questions

[[toc]]

## 1. Will there be a token and when will it be released?

The team’s focus is to work on scalability for Ethereum. You can find any announcements on [Discord](https://discord.com/invite/px2aR7w), [Telegram](https://t.me/zksync), and [Twitter](https://twitter.com/zksync).

## 2. How do I swap tokens on zkSync?

Currently, there is no UI available to make swaps, but the infrastructure is accessible for teams to build on top of zkSync.

## 3. Why are fees so high?

Fees vary based on Layer 1 gas prices because Layer 2 scaling solutions rely on posting data to Layer 1—this is how to inherit the security of Ethereum.

## 4. How long are withdrawal times?

Withdrawal times can take from 30 minutes to 7 hours. Rollups amortize fees by submitting transactions in batches. When network activity increases, blocks fill up faster, and withdrawal times decrease.

## 5. I withdrew my funds but don't see them in my L1 account.

If your withdrawal shows as "Complete" in zkScan, but the funds have not arrived in your wallet, here are a few steps you should take:

1. Make sure that enough time has passed. A withdrawal takes 30 minutes to 7 hours, depending on the usage of the zkSync network.

2. Check for your transaction in "Internal Txs" on Etherscan.
- Open Etherscan and go to your address page
- Go to "Internal Txs.” 
- You’ll find a list of all transactions from smart contracts. 
- The list should have your transaction coming from the zkSync smart contract.
           
![faq 5 image](https://zksync.io/5faqetherscan.png)
           
3. If the account balance is not the same as on Etherscan, contact Support for your wallet. 

4. Depending on your wallet, you may have to add that token for it to display.

5. If none of the steps above have helped you, please email us at <withdraw@zksync.io> describing your problem. It MUST contain the following info:

   1. Your zkSync wallet address.
   2. Which wallet are you using (e.g., Trust)?
   3. What problem(s) did you encounter?
   4. The more information you provide, the faster we can solve your problem!
   
## 6. I used "Transfer" instead of "Withdraw" to get my funds onto mainnet

If you attempted to withdraw your zkSync funds to L1 but used the "Transfer" option instead of "Withdraw,” you should try logging in to zkSync with the wallet that received the funds. 

If you cannot log in to the zkSync wallet, you will use the “Alternative Withdrawal” tool. To be able to withdraw funds from your account using “Alternative Withdrawal,” use [zkScan](https://zkscan.io/) to check that all of the following is true:

   1. The account is at least 24 hours old.
   2. The account has never been activated (i.e., nonce is zero).

![faq 6 image 1](https://zksync.io/6faqaccountinfo.png)


If the steps above are true, you can access the “Alternative Withdrawal” tool on the zkSync.io webpage under "zkTools.”

![faq 6 image 2](https://zksync.io/6alternativewithdrawal.png)


## 7. What is the Account Activation fee?

The Account Activation fee is a one-time fee to register your account with zkSync. This fee only applies to your first zkSync Layer 2 transaction.

On a deeper level, to be better suited for zero-knowledge proofs, zkSync accounts are defined over a different elliptic curve than Ethereum's. Activating your account generates and publishes a new private-public key pair over this curve associated with your Ethereum address. 

The registration process happens directly on the Ethereum smart contract and is an L1 transaction, so the activation fee is to pay the Ethereum miners and not zkSync validators.

ERC-1271 compatible wallets (like Argent) increase this one-time fee because of higher interaction with the zkSync smart contract. This operation is cheaper if you are using a CREATE2 smart contract-based wallet.

## 8. How is it possible to pay a fee with no Eth? How is gas paid? 

Transfers in zkSync support "gasless meta-transactions": users pay transaction fees in the tokens being transferred. Thus, for example, if you want to transfer DAI stable-coin, there is no need for you to own ETH or any other tokens. Just pay your fees in a fraction of DAI.

For tokens without a liquid market price, fees are paid in a different token. You can see the tokens available for fees on our tokens page: <https://zkscan.io/explorer/tokens/>

## 9. What is the difference between a "Pending" and "Complete" transaction?

"Pending" indicates the zkSync server has processed your transaction. If it is a transfer it is ready for immediate use.

"Complete" signifies the proof has been produced and submitted to the smart contract on Layer 1.

## 10. What are the configurations to add the zkSync 2.0 Rinkeby Test Network on MetaMask Mobile?

Network Name: zkSync 2.0 Rinkeby Test Network 
New RPC URL: <https://stage2-api.zksync.dev/web3> 
Chain ID: 272 
Currency Symbol (optional): ETH 
Block Explorer URL (optional): <https://zksync2-alpha.zkscan.io/>

![faq 10 image](https://zksync.io/10faqmm.png)


## 11. How do I mint and view an NFT on zkSync?

The zkSync wallet has an option to mint using the CID if you have already hosted your image on IPFS. The CID is 46 characters long and starts with "Qm". 

If you are not familiar with IPFS, you can try these community created frontends. These are not created by the zkSync team and should be researched before using. 
-<https://open-sky.vercel.app/>
-<https://zknft.xyz/#/>

Minting your NFT will take 30 min to 7 hours.

The best option to view your NFT is to use <https://zknft.xyz/#/>

## 12. How do I deposit funds onto zkSync 1.0 mainnet?

1. <https://wallet.zksync.io/> 
2. Connect your wallet.
3. Select the token and amount to deposit.
• If you are depositing a token other than Eth you’ll need to select your approved allowance (unlimited or only the amount selected.)
4. Confirm transaction information on your wallet.
5. Once the transaction has been mined on Ethereum L1, your funds will be visible on zkSync after 10 confirmations.

Notes: 
• Use <https://etherscan.io/> for tracking deposit information. 
• Use <https://zkscan.io/> for tracking funds on zkSync.

## 13. What can I do on zkSync 1.0 mainnet?


Deposit, transfer, withdraw to L1, mint NFTs, and create payment links.


## My question wasn’t answered! ☹️

Join the active [community on Discord](https://discord.gg/fyPna387dU).


































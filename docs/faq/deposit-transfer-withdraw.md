# Deposit, Transfer and Withdraw Funds

[[toc]]

## Deposit to zkSync with MetaMask

In this tutorial, we will be depositing into a zkSync wallet with MetaMask on the Rinkeby test network. To switch your network to Rinkeby on MetaMask, click on the “Ethereum Mainnet” button at the top of Metamask, and then select “Rinkeby.” To get some ETH on the Rinkeby testnet, visit the [faucet](https://faucet.rinkeby.io/).

<!-- add imaged0 -->

1. Go to [https://rinkeby.zksync.io](https://rinkeby.zksync.io/) and connect your wallet.

<!-- add imaged1 -->

2. Signing the message will generate your zkSync Layer 2 private key (It is good practice to read the messages in which you are signing).

<!-- add imaged2 -->

*(Optional): “Get some trial tokens” using the Minting tool to mint other ERC-20 tokens on Rinkeby.*

3. Choose “+ Deposit”.

<!-- add imaged3 -->

4. Select your token, enter the amount, and Deposit.

<!-- add imaged4 -->

5. If you can’t find your token:
- Add support for it by visiting the [Tokens page](https://zkscan.io/explorer/tokens/) and clicking “Submit new token”.
- Some tokens will be referred to by their internal id number on our [Tokens page](https://zkscan.io/explorer/tokens/) instead of their token symbol. (E.g. ERC20-21 = SNT)

<!-- add imaged5 -->

6. Review the transaction information and Confirm.

<!-- add imaged6 -->

7. This should only take a couple of seconds and if you have any difficulties please check Etherscan to monitor the transaction.

<!-- add imaged7 -->
<!-- add imaged8 -->

8. Your deposit is complete. Over time there will be two different symbols next to your balance:
- <!-- add imaged9 --> A single yellow checkmark next to your balance indicates your transaction has been committed (transaction is being processed by zkSync) and ready for immediate use. 
- <!-- add imaged10 --> Two green check marks signal the transaction has been verified (the proof has been produced and submitted to the smart contract on Layer 1).

<!-- add imaged11 -->
<!-- add imaged12 -->

## Transfer in zkSync

In this tutorial, we’ll review how to transfer funds to another zkSync account. 
**These funds are in the zkSync L2 and should be sent to another account that is active on zkSync. Otherwise the recipient will have to withdraw these funds from the zkSync L2 to use on L1.**

1. Go to “Transfer”

<!-- imaget0 -->

2. Sign the message for account activation. The fee for activating your account will be added to the total for your first transaction.

<!-- imaget1 -->
<!-- imaget2 -->

3. Enter the transfer address. 
- *(Optional) If this is an address that is frequently used it can be saved to contacts.*

<!-- imaget3 -->

4. Select the token to transfer and enter the amount. 
- If this is your first transaction on zkSync you will see the Account Activation Fee.
   - **The Account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- Before transferring, you can change the fee token. 
  - *Transfers in zkSync support "gasless meta-transactions", allowing users to pay transaction fees in the token being transferred.*

<!-- imaget4 -->

- **Read the popup carefully to make sure you are trying to transfer and not withdraw your funds.**

<!-- imaget5 -->

5. Sign the request.

<!-- imaget6 -->

6. Your transfer is now complete! 

<!-- imaget7 -->

7. Your balance will reflect the change and over time there will be two different symbols next to your balance:
- <!-- imaged9 --> A single yellow checkmark next to your balance indicates your transaction has been committed (transaction is being processed by zkSync) and ready for immediate use. 
- <!-- add imaged10 --> Two green check marks signal the transaction has been verified (the proof has been produced and submitted to the smart contract on Layer 1).

<!-- imaget8 -->
<!-- imaget9 -->

## Withdraw from zkSync

This tutorial will cover the process of withdrawing funds from zkSync back to the Ethereum Mainchain. 
**This is the correct method for withdrawing funds to your own Ethereum address on L1 so that you can send them to an exchange.** 
*Alternatively, you can take a risk and enter the exchange address when you withdraw, but smart contract transfers are not observed by most exchanges and you must contact their customer support to see your funds on the exchange.*

1. Go to “- Withdraw”. 

<!-- imagew0 -->

2. Your address will auto-populate with your address. 
**If you are entering a different address for withdrawal please check that it accepts smart contract transfers.**

<!-- imagew1 -->

3. Select the token and enter the amount to withdraw.
- If this is your first transaction on zkSync you will see the Account Activation Fee.
   - **The Account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- Before transferring, you can change the fee token. 
  - *Transfers in zkSync support "gasless meta-transactions", allowing users to pay transaction fees in the token being transferred.*

<!-- imagew2 -->

4. Confirm the withdrawal amount, address, fee, and sign the message(It is good practice to read the messages in which you are signing).

<!-- imagew3 -->

5. Your withdrawal to L1 has now been committed to the zkSync contract.

<!-- imagew4 -->

6. You will see an immediate change in your account balance in zkSync, but withdrawal times can take from 30 minutes to 7 hours before being available on L1.
*Layer 2 Rollup solutions amortize fees by submitting transactions in batches. E.g. when network activity increases, blocks fill up faster, and withdrawal times decrease.* 
- <!-- imaged9 --> A single yellow checkmark next to your balance indicates your transaction has been committed (transaction is being processed by zkSync) and ready for immediate use. 
- <!-- add imaged10 --> Two green check marks signal the transaction has been verified (the proof has been produced and submitted to the smart contract on Layer 1).

<!-- imagew5 -->
<!-- imagew6 -->


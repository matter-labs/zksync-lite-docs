# Deposit, Transfer and Withdraw Funds

[[toc]]

## Deposit to zkSync with MetaMask

In this tutorial, we will be depositing into a zkSync wallet with MetaMask on the Rinkeby test network. To switch your network to Rinkeby on MetaMask, click on the “Ethereum Mainnet” button at the top of Metamask, and then select “Rinkeby.” To get some ETH on the Rinkeby testnet, visit the [faucet](https://faucet.rinkeby.io/).  
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged0.png">
</p>
</br>  

1. Go to [https://rinkeby.zksync.io](https://rinkeby.zksync.io/) and connect your wallet.  
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged1.png" width="900">
</p>
</br>

2. Signing the message will generate your zkSync Layer 2 private key (It is good practice to read the messages in which you are signing).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged2.png">
</p>
</br>



3. Choose “+ Deposit”.  
*(Optional): “Get some trial tokens” using the Minting tool to mint other ERC-20 tokens on Rinkeby.*
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged3.png">
</p>
</br>

4. Select your token, enter the amount, and Deposit.  
- *If you can’t find your token:*
  - Add support for it by visiting the [Tokens page](https://zkscan.io/explorer/tokens/) and clicking “Submit new token”.
  - Some tokens will be referred to by their internal id number on our [Tokens page](https://zkscan.io/explorer/tokens/) instead of their token symbol. </br>(E.g. ERC20-21 = SNT)
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged4.png">
</p>
</br>

6. Review the transaction information and Confirm.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged5.png">
</p>
</br>

7. This should only take a couple of seconds and if you have any difficulties please check Etherscan to monitor the transaction.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged6.png" width="500">
</br>
</br>
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged7.png">
</p>
</br>

8. Your deposit is complete. Your transaction has been committed and will be verified in the next 30 min to 7 hours (depending on network usage). 

Committed             |  Verified
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates your transaction has been committed (the transaction is being processed by zkSync) and ready for immediate use. | Two green check marks signal the transaction has been verified (the proof has been produced and submitted to the smart contract on Layer 1).
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged10.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaged11.png" width="400">
</br>

## Transfer in zkSync

In this tutorial, we’ll review how to transfer funds to another zkSync account.   
**These funds are in the zkSync L2 and should be sent to another account that is active on zkSync. Otherwise the recipient will have to withdraw these funds from the zkSync L2 to use on L1.**

1. Go to “Transfer”
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget0.png">
</p>
</br>

2. Sign the message for account activation. The fee for activating your account will be added to the total for your first transaction.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget1.png">
</br>	
</br>
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget2.png">
</p>
</br>

3. Enter the transfer address.    
*(Optional) If this is an address that is frequently used it can be saved to contacts.*
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget3.png">
</p>
</br>

4. Select the token to transfer and enter the amount. 
- *If this is your first transaction on zkSync you will see the Account Activation Fee.*
   - **The Account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before transferring, you can change the fee token.* 
  - Transfers in zkSync support "gasless meta-transactions", allowing users to pay transaction fees in the token being transferred.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget4.png">
</p>
</br>

> **Read the popup carefully to make sure you are trying to transfer and not withdraw your funds.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget5.png" width="500">
</p>
</br>

5. Sign the request.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget6.png">
</p>
</br>

6. This should only take a couple of seconds and if you have any difficulties please check zkScan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget7.png">
</p>
</br>

7. Your transfer is complete! The transaction has been committed and will be verified in the next 30 min to 7 hours (depending on network usage). 

Committed             |  Verified
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates your transaction has been committed (the transaction is being processed by zkSync) and ready for immediate use. | Two green check marks signal the transaction has been verified (the proof has been produced and submitted to the smart contract on Layer 1).
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget8.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget9.png" width="400">
</br>

## Withdraw from zkSync

This tutorial will cover the process of withdrawing funds from zkSync back to the Ethereum Mainchain.</br> 
**This is the correct method for withdrawing funds to your own Ethereum address on L1 so that you can send them to an exchange.**  
*Alternatively, you can take a risk and enter the exchange address when you withdraw, but smart contract transfers are not observed by most exchanges and you must contact their customer support to see your funds on the exchange.*

1. Go to “- Withdraw”. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imagew0.png">
</p>
</br>

2. Your address will auto-populate with your address. 
**If you are entering a different address for withdrawal please check that it accepts smart contract transfers.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imagew1.png" width="900">
</p>
</br>

3. Select the token and enter the amount to withdraw.
- *If this is your first transaction on zkSync you will see the Account Activation Fee.*
   - **The Account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before transferring, you can change the fee token.* 
  - Transfers in zkSync support "gasless meta-transactions", allowing users to pay transaction fees in the token being transferred.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imagew2.png">
</p>
</br>

4. Confirm the withdrawal amount, address, fee, and sign the message (it is good practice to read the messages in which you are signing).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imagew3.png">
</p>
</br>

5. This should only take a couple of seconds and if you have any difficulties please check zkScan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imagew4.png">
</p>
</br>

6. Your withdrawal has been committed to zkSync. You will see an immediate change in your account balance in zkSync, but withdrawal times can take from 30 minutes to 7 hours before being available on L1.
- *Layer 2 Rollup solutions amortize fees by submitting transactions in batches. E.g. when network activity increases, blocks fill up faster, and withdrawal times decrease.* 

Committed             |  Verified
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates your transaction has been committed (the transaction is being processed by zkSync) and ready for immediate use. | Two green check marks signal the transaction has been verified (the proof has been produced and submitted to the smart contract on Layer 1).
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imagew5.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imagew6.png" width="400">
</br>

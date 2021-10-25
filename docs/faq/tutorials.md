# Tutorials

[[toc]]

## Add Funds to zkSync with MetaMask

In this tutorial, we will be depositing into a zkSync wallet with MetaMask on the Rinkeby test network. 

To switch your network to Rinkeby on MetaMask, click on the “Ethereum Mainnet” button at the top of Metamask, and then select “Rinkeby.” To get ETH on the Rinkeby testnet, visit the [faucet](https://faucet.rinkeby.io/).  
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged0.png">
</p>
</br>  

1. Go to [https://wallet.zksync.io/](https://wallet.zksync.io/) and connect your wallet.
- To connect to the Rinkeby test network:
  - Click on the Ethereum symbol in the bottom right.
  - Select Rinkeby. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged1.png" width="900">
</p>
</br>


2. Choose “+ Add Funds.”  

</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged3.png">
</p>
</br>

3. Select your token, enter the amount, and add funds.
- *If you can’t find your token:*
  - Some tokens will be referred to by their internal id number on our [Tokens page](https://zkscan.io/explorer/tokens/) instead of their token symbol. (E.g. on Rinkeby, ERC20-21 = UNI)
  - Add support for your token:  
      1. Click "Can't find your token?"
      2. Use the link to access the [Tokens page](https://zkscan.io/explorer/tokens/)
      3. Click the "Add new token" button in the top right corner and follow the directions.
 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/token-list.png" height="600">
</p>
</br>

4. Review the transaction information and confirm.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged5.png">
</p>
</br>

5. The time to mine the transaction will depend on the usage of Layer 1. If you have any difficulties, please check Etherscan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged6.png" width="500">
</br>
</br>
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged7.png">
</p>
</br>

7. Your deposit is complete. The transaction has been initiated and your funds will be visible in your zkSync wallet within 10 confirmations of your transaction being mined on L1.

**Pending**             |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged10.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged11.png" width="500">
</br>

## Transfer in zkSync

In this tutorial, we’ll review how to transfer funds to another zkSync account. 
Whether an Ethereum user has a zkSync account or not, you can transfer funds to their Ethereum address. 

**Keep in mind these funds will be on L2 so if you want to use these funds on L1, you will have to withdraw from zkSync.**


1. Go to “Transfer.”
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/d0fa98f5ada79eb7d335b215c88a7e35b1d2ff5d/docs/images/imaget0.png">
</p>
</br>

2. Sign the message for account activation. (The fee for activating your account is shown in step 4.)
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget0.png">
</br>	
</br>
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget2.png">
</p>
</br>

3. Enter the transfer address.   
*(Optional) If this is a frequently used address, you can save it to contacts.*
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget3.png">
</p>
</br>

4. Select the token to transfer and enter the amount. 
- *If this is your first transaction on zkSync, you will see the Account Activation Fee.*
  - **The Account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before transferring, you can change the fee token.*  
Users can pay transaction fees in all popular tokens since zkSync supports “gasless meta-transactions.”
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget4.png">
</p>
</br>

> **Read the popup carefully to make sure you are trying to transfer and not withdraw your funds.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget5.png" width="500">
</p>
</br>

5. Signing this message submits the transaction to the zkSync network. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget6.png">
</p>
</br>

6. The transfer should only take a couple of seconds. If you have any difficulties, please check zkScan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget7.png">
</p>
</br>

7. Your transfer is complete! The transaction has been committed and, depending on zkSync network usage, will be verified in the next 30 min to 7 hours. 

**Pending**            |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget8.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget9.png" width="400">
</br>

## Withdraw from zkSync

This tutorial will cover the process of withdrawing funds from zkSync back to the Ethereum Mainchain.
</br>

**These steps follow the correct method for withdrawing funds to your own Ethereum address on L1 so that you can send them to an exchange.**  
*Alternatively, you can take a risk and enter the exchange address when you withdraw, but most exchanges do not observe smart contract transfers, and you must contact their customer support to see your funds on the exchange.*

1. Go to “- Withdraw.” 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew0.png">
</p>
</br>

2. Your address will auto-populate with your address.  
**If you are entering a different address for withdrawal, please check that it accepts smart contract transfers.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew1.png" width="900">
</p>
</br>

3. Select the token to transfer and enter the amount. 
- *If this is your first transaction on zkSync, you will see the Account Activation Fee.*
  - **The Account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before transferring, you can change the fee token.*  
Users can pay transaction fees in all popular tokens since zkSync supports “gasless meta-transactions.”
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew2.png">
</p>
</br>

4. Confirm the withdrawal amount, address, fee, and sign the message (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew3.png">
</p>
</br>

5. On zkSync, the withdrawal should only take a couple of seconds. If you have any difficulties, please check zkScan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew4.png">
</p>
</br>

6. Your withdrawal has been committed. There will be an immediate change in your account balance in zkSync, but withdrawal times can take from 30 minutes to 7 hours before being available on L1.
- *Layer 2 Rollup solutions amortize fees by submitting transactions in batches. For example, when network activity increases, blocks fill up faster, and withdrawal times decrease.* 

**Pending**             |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew5.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew6.png" width="400">
</br>

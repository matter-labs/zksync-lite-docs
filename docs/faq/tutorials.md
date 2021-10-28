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
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D1.png" width="900">
</p>
</br>


2. Choose “+ Add Funds.”  

</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D2%20copy.png">
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
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D3.png" height="600">
</p>
</br>

4. Review the transaction information and confirm.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D5.png">
</p>
</br>

5. The time to mine the transaction will depend on the usage of Layer 1. If you have any difficulties, please check Etherscan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D6.png" width="500">
</br>
</br>
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D7.png">
</p>
</br>

7. Your deposit is complete. The transaction has been initiated, and your funds will be visible in your zkSync wallet within ten confirmations of your transaction being mined on L1.

**Pending**             |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D9.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D10.png" width="500">
</br>

## Send on zkSync

In this tutorial, we’ll review how to transfer funds to another zkSync account. 
Whether an Ethereum user has a zkSync account or not, you can transfer funds to their Ethereum address. 

**Keep in mind these funds will be on L2, so if you want to use these funds on L1, you will have to [Send to Ethereum (L1)](#Send-to-Ethereum-(L1)).**


1. Go to “Send.”
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/S1.png">
</p>
</br>

2. If this is your first transaction after depositing, you will be prompted to "Authorize to Sign account activation." 
- Signing the message will allow access to your zkSync account <!-- generate your zkSync Layer 2 private key --> (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/S3.png">
</p>
</br>

3. Sign the message for account activation. (The fee for activating your account is shown in step 4.)
- Signing the message will generate your zkSync Layer 2 private key (it is good practice to read the messages you sign).
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

<!-- > **Read the popup carefully to make sure you are trying to transfer and not withdraw your funds.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget5.png" width="500">
</p>
</br> -->

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

7. Your transfer is complete! The transaction has been initiated and, depending on zkSync network usage, will be verified in the next 30 minutes to 7 hours.
- *When network activity increases, blocks fill up faster, and withdrawal times decrease.*  

**Pending**            |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget8.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget9.png" width="400">
</br>

## Send to Ethereum (L1)

This tutorial will cover the process of withdrawing funds from zkSync back to the Ethereum Mainchain.
</br>

**These steps follow the correct method for withdrawing funds to your own Ethereum address on L1 so that you can send them to an exchange.**  
*Alternatively, you can take a risk and enter the exchange address when you withdraw, but most exchanges do not observe smart contract transfers, and you must contact their customer support to see your funds on the exchange.*

1. Go to “Send.” 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew0.png">
</p>
</br>

2. Click on "Send to Ethereum (L1)."
</br>
<p align="center">
<img src="">
</p>
</br>

3. Your address will auto-populate with your address.  
**If you are entering a different address for withdrawal, please check that it accepts smart contract transfers.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew1.png" width="900">
</p>
</br>

4. Select the token to send to Ethereum and enter the amount. 
- *If this is your first transaction on zkSync, you will see the Account Activation Fee.*
  - **The Account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before transferring, you can change the fee token.*  
Users can pay transaction fees in all popular tokens since zkSync supports “gasless meta-transactions.”
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew2.png">
</p>
</br>

> **Read the popup carefully to to prevent loss of funds.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget5.png" width="500">
</p>

5. Confirm the withdrawal amount, address, fee, and sign the message (it is good practice to read the messages you sign).
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

6. Your withdrawal has been initiated. There will be an immediate change in your account balance in zkSync, but **withdrawal times can take from 30 minutes to 7 hours before being available on L1.**
- *When network activity increases, blocks fill up faster, and withdrawal times decrease.* 

**Pending**             |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew5.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imagew6.png" width="400">
</br>

## Mint an NFT

The following steps will cover using IPFS desktop to mint an NFT. This process will mint an NFT of where your image is located on IPFS and will not be available for preview at this time. 
To mint an NFT with IPFS location and a preview of the image, consider using one of the community-created frontends like [zkNFT](https://zknft.xyz/#/) or [Open Sky](https://open-sky.vercel.app/). *The community-created frontends are not created by the zkSync team, and any issues with minting will need to be sent to the creators of these frontends.*

1. Visit the [IPFS.io](https://ipfs.io/) and install IPFS Desktop.
</br>
<p align="center">
<img src="">
</p>
</br>

2. Go to "Files", select "+ Import", and choose your image.
</br>
<p align="center">
<img src="">
</p>
</br>

3. Click on the three dots at the end of the row of your imported image and click on "Copy CID."
</br>
<p align="center">
<img src="">
</p>
</br>

4. On your [zkSync wallet](https://wallet.zksync.io/), open the NFTs tab and select "+ Mint NFT."
</br>
<p align="center">
<img src="">
</p>
</br>

5. Authorize to Mint NFT. 
- Signing the message will generate your zkSync Layer 2 private key (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="">
</p>
</br>

6. Enter the copied CID (Content Identifier) in "Content Address" and click "Mint NFT."
- *If this is your first transaction on zkSync, you will see the Account Activation Fee.*
  - **The Account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before minting, you can change the fee token.*  
Users can pay transaction fees in all popular tokens since zkSync supports “gasless meta-transactions.”
</br>
<p align="center">
<img src="">
</p>
</br>

7.Confirm the fee and sign the message (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="">
</p>
</br>

8. Minting your NFT has been initiated and will be available for transfer or withdrawal to L1 once it has been verified in 30 minutes to 7 hours.
- *When network activity increases, blocks fill up faster, and withdrawal times decrease.* 

**Pending**             |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="" width="395">  |  <img src="" width="400">
</br>

<!-- ## Alternative Withdrawal

The Alternative Withdrawal tool is used when funds have been sent to an Ethereum address that cannot connect to the [zkSync wallet](https://wallet.zksync.io/). 

1. Check to see if your account qualifies to use the Alternative Withdrawal tool by entering your address on [zkScan](https://zkscan.io/).
</br>
<p align="center">
<img src="">
</p>
</br>

2. Check your account for the following information:
- 1. The account is at least 24 hours old.
- 2. The account has never been activated (i.e., nonce is zero).
<br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/nonce.png">
</p>
<br>

> **If your account meets the requirements for using the "Alternative Withdrawal" tool, you can follow the steps below to proceed.**

3. Go to [Alternative Withdrawal](https://withdraw.zksync.io/).
- *You can also access the “Alternative Withdrawal” tool on the [zkSync.io](http://zksync.io/) webpage under "zkTools.”*
</br>
<p align="center">
<img src="">
</p>
</br>

4. Enter the address that you want the funds moved from zkSync to Ethereum L1.
</br>
<p align="center">
<img src="">
</p>
</br>
 
5. Select the token you want to be withdrawn.
</br>
<p align="center">
<img src="">
</p>
</br>

6. Choose your method of paying the fee.
</br>
<p align="center">
<img src="">
</p>
</br>

7. Complete the fee payment process on your wallet.
- Once the alternative withdrawal has been completed, check "Internal Txns" on [Etherscan](https://etherscan.io/) for your transaction.
<br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/int-txns.png">
</p>
<br> 

-->

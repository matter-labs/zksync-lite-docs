# Tutorials

[[toc]]

## Add Funds to zkSync with MetaMask

In this tutorial, we will be depositing into a zkSync wallet with MetaMask on the Rinkeby test network. 

To switch your network to Rinkeby on MetaMask, click on the "Ethereum Mainnet" button at the top of Metamask, and then select "Rinkeby." To get ETH on the Rinkeby testnet, visit the [faucet](https://faucet.rinkeby.io/).  
</br>
<p align="center">
<img src="/docs/images/imaged0.png">
<!-- <img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaged0.png"> -->
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


2. Choose "+ Add Funds."  

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
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D3.png" height="300">
</p>
</br>

4. Review the transaction information and confirm.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D5.png">
</p>
</br>

5. The time to mine the transaction will depend on the usage of Layer 1 (L1). If you have any difficulties, please check Etherscan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D6.png" width="500">
</br>
</br>
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D7.png">
</p>
</br>

6. Your deposit is complete. The transaction has been initiated, and your funds will be visible in your zkSync wallet within ten confirmations of your transaction being mined on L1.

**Pending**             |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D9.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/D10.png" width="500">
</br>

## Send on zkSync

In this tutorial, we’ll review how to transfer funds to another zkSync account. 
Whether an Ethereum user has a zkSync account or not, you can transfer funds to their Ethereum address. 

**Keep in mind these funds will be on L2, so if you want to use these funds on L1, you will have to [Send to Ethereum (L1)](#Send-to-Ethereum-L1).**


1. Go to "Send."
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/S1.png">
</p>
</br>

2. If this is your first transaction after depositing, you will be prompted to "Authorize to Sign account activation." 
- Signing the message will generate your zkSync Layer 2 private key (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/319e00383b2c654c05b0bd631366dd79708d309f/docs/images/S2.png">
</p>
</br>
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0b9cae0b5a2a358dcb62e50eb05e628c18ef29e0/docs/images/S3.png">
</p>
</br>

3. Sign the message for account activation. (The fee for activating your account is shown in step 4.)
- Signing the message will activate your account on zkSync (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/S4.png">
</br>	
</br>
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/S5.png">
</p>
</br>

<!-- 3. Enter the address to send funds.   
*(Optional) If this is a frequently used address, you can save it to contacts.*
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/b73d441f03534278b92acf7c7016335c3276753a/docs/images/imaget3.png">
</p>
</br>
-->

4. Enter the address to send funds, select the token to transfer, and enter the amount. 
- *If this is your first transaction on zkSync, you will see the account activation fee below the transaction fee.*
  - **The account activation fee is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before transacting, you can change the fee token.*  
Users can pay transaction fees in all popular tokens since zkSync supports "gasless meta-transactions."
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/S8.png">
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
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/S7.png">
</p>
</br>

6. The transfer should only take a couple of seconds. If you have any difficulties, please check zkScan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/S9.png">
</p>
</br>

7. Your transfer is complete! The transaction has been initiated and the funds are ready for immediate use.
 

**Pending**            |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction. | Two green check marks signal the proof has been produced and submitted to the smart contract on L1.
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/S10.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/S11.png" width="400">
</br>

## Send to Ethereum (L1)

This tutorial will cover the process of withdrawing funds from zkSync back to the Ethereum Mainchain.
</br>

**These steps follow the correct method for withdrawing funds to your own Ethereum address on L1 so that you can send them to an exchange.**  
*Alternatively, you can take a risk and enter the exchange address when you withdraw, but most exchanges do not observe smart contract transfers, and you must contact their customer support to see your funds on the exchange.*

1. Go to "Send." 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se1.png">
</p>
</br>

2. Click on "Send to Ethereum (L1)."
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se2.png">
</p>
</br>

3. Your address will auto-populate with your address.  
**If you are entering a different address for withdrawal, please check that it accepts smart contract transfers.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se.png">
</p>
</br>

> **If you refreshed the page or recently connected your wallet to zkSync, you will be asked to "Authorize to Send to Ethereum."**
> - Signing the message will generate your zkSync Layer 2 (L2) private key (it is good practice to read the messages you sign).
</br>

4. Select the token to send to Ethereum and enter the amount. 
- *If this is your first transaction on zkSync, you will need to sign to authorize account activation, and you will see the account activation fee below the transaction fee.*
  - **The account activation fee is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before transacting, you can change the fee token.*  
Users can pay transaction fees in all popular tokens since zkSync supports "gasless meta-transactions."
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se4.png">
</p>
</br>

> **Read the popup carefully to to prevent loss of funds.**
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se5.png">
</p>

5. Confirm the withdrawal amount, address, fee, and sign the message (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se6.png">
</p>
</br>

<!-- 6. On zkSync, the withdrawal should only take a couple of seconds. If you have any difficulties, please check zkScan to monitor the transaction. 
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se7.png">
</p>
</br>
-->

6. Your withdrawal has been initiated. There will be an immediate change in your account balance in zkSync, but **withdrawal times can take from 30 minutes to 7 hours before being available on L1.**
- *When network activity increases, blocks fill up faster, and withdrawal times decrease.* 

**Pending**             |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction. | Two green check marks signal the proof has been produced and submitted to the smart contract on L1.
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se8.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/se9.png" width="400">
</br>

## Mint an NFT

The following steps will cover using IPFS desktop to mint an NFT. This process will mint an NFT of where your image is located on IPFS and will not be available for preview at this time. 
To mint an NFT with IPFS location and a preview of the image, consider using one of the community-created frontends&ast; like [zkNFT](https://zknft.xyz/#/) or [Open Sky](https://open-sky.vercel.app/). 
</br>

*&ast;The community-created frontends are not created by the zkSync team, and any issues with minting will need to be sent to the creators of these frontends.*

1. Visit the [IPFS.io](https://ipfs.io/) and install IPFS Desktop.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m1.png">
</p>
</br>

2. Go to "Files", select "+ Import", and choose your image.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m2.png" width="900">
</p>
</br>

3. Click on the three dots at the end of the row of your imported image and click on "Copy CID."
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m3.png" width="900">
</p>
</br>

4. On your [zkSync wallet](https://wallet.zksync.io/), open the NFTs tab and select "+ Mint NFT."
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m4.png">
</p>
</br>


> **If you refreshed the page or recently connected your wallet to zkSync, you will be asked to "Authorize to Mint NFT."**
> - Signing the message will generate your zkSync Layer 2 private key (it is good practice to read the messages you sign).
</br>

<!-- 5. Authorize to Mint NFT. 
- Signing the message will generate your zkSync Layer 2 private key (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m5.png">
</p>
</br>
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m6.png">
</p>
</br>
-->

5. Enter the copied CID (Content Identifier) in "Content Address" and click "Mint NFT."
- *If this is your first transaction on zkSync, you will need to sign to authorize account activation, and you will see the account activation fee below the transaction fee.*
  - **The account Activation is a one-time fee to register your account with zkSync. You will only need to pay this on your first transaction with zkSync.**
- *Before minting, you can change the fee token.*  
Users can pay transaction fees in all popular tokens since zkSync supports “gasless meta-transactions.”
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m7.png">
</p>
</br>

6. Confirm the fee and sign the message (it is good practice to read the messages you sign).
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m8.png">
</p>
</br>

7. Minting your NFT has been initiated and will be available for transfer or withdrawal to L1 once it has been verified in 30 minutes to 7 hours.
- *When network activity increases, blocks fill up faster, and verification times decrease.* 

**Pending**             |  **Verified**
:-------------------------:|:-------------------------:
A single yellow checkmark next to your balance indicates the zkSync server has processed your transaction and is ready for immediate use. | Two green check marks signal the proof has been produced and submitted to the smart contract on Layer 1.
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m10.png" width="395">  |  <img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/m11.png" width="400">
</br>

## Alternative Withdrawal

The Alternative Withdrawal tool is used when funds have been sent to an Ethereum address that cannot connect to the [zkSync wallet](https://wallet.zksync.io/). 

1. Check to see if your account qualifies to use the Alternative Withdrawal tool by entering your address on [zkScan](https://zkscan.io/).

2. Check your account for the following information:
- 1. The account is at least 24 hours old.
- 2. The account has never been activated (i.e., nonce is zero).
<br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/nonce.png">
</p>
<br>

> **If your account meets the requirements for using the "Alternative Withdrawal" tool, proceed with the following steps.**

3. Go to [Alternative Withdrawal](https://withdraw.zksync.io/).
- *You can also access the “Alternative Withdrawal” tool on the [zkSync.io](http://zksync.io/) webpage under "zkTools.”*
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/zktools.png" width="900">
</p>
</br>

4. Enter the zkSync address from steps 1 and 2.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/a1.png">
</p>
</br>
 
5. Select the token you want to be withdrawn and our method for paying the fee.
</br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/a3.png">
</p>
</br>

<!-- 6. Choose your method of paying the fee.
</br>
<p align="center">
<img src="">
</p>
</br>
-->

6. Complete the fee payment process on your wallet. 
<br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/0bfd7bc3b1e803c7c449f56ac4eb8a9fb3119655/docs/images/a4.png">
</p>
<br> 

7. The funds should be in your designated wallet from step 4 within 24 hours and can be see under "Internal Txns" on [Etherscan](https://etherscan.io/).
- If you do not see your funds within 24 hours, please email us at withdraw@zksync.io with the following information:
  - 1. Your zkSync address from step 4.
  - 2. The amount and token.
  - 3. The Ethereum Transaction Hash from Etherscan from step 6.
<br>
<p align="center">
<img src="https://github.com/matter-labs/zksync-docs/blob/c669e44d9e3d2be3eb1b5935984578903d647bb8/docs/images/int-txns.png">
</p>
<br> 


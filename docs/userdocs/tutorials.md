# Tutorials

[[toc]]

## Add Funds to zkSync with MetaMask

In this tutorial, we will be depositing into a zkSync wallet with MetaMask.

> While the tutorial shows the MetaMask images for Rinkeby, you can follow the same steps for mainnet.

**There is an account activation fee applied on the first transaction after depositing. Deposit an additional ~$20 to
cover it during high gas fees.** Learn more about the account activation fee in our
[FAQ](./faq.md#what-is-the-account-activation-fee).

<br>

To connect your wallet to the zkSync 1.0 Mainnet select the "Ethereum Mainnet" button at the top of MetaMask.

<p align="center"> 
  <img src="/D1.png" alt="Metamask Ethereum">
</p>
  
<br>

1. Go to [https://wallet.zksync.io/](https://wallet.zksync.io/) and connect your wallet.

- To connect to the zkSync 1.0 Mainnet:
  - Click on the Ethereum symbol at the bottom right.
  - Select Mainnet.
 
<p align="center"> 
  <img src="/D00.png" alt="zkSync wallet homepage">
</p>

<br>

<p align="center"> 
  <img src="/Mainnet.png" alt="Mainnet Selection">
</p>

<br>

2. Choose "+ Top up."

<p align="center"> 
  <img src="/D2.png" alt="Top up">
</p>

<br>

You can choose different methods for adding funds to your zkSync wallet including FIAT onramps, Exchanges, or Bridges. For this tutorial we will use the zkSync bridge.

<br>

<p align="center"> 
  <img src="/Top-up.png" alt="Select zkSync Bridge">
</p>

<br>

3. Select your token, enter the amount, and click "Top up".

<p align="center"> 
  <img src="/Top-up-1.png" alt="zkSync Bridge">
</p>

<br>

- _If you can’t find your token:_
  - Some tokens will be referred to by their internal id number on our [Tokens page](https://zkscan.io/explorer/tokens/)
    instead of their token symbol. (E.g. ERC20-23 = UNI).
  - Add new token to zkSync:
    1. Click "Can't find a token?"
    2. Use the link to access the [Tokens page](https://zkscan.io/explorer/tokens/).
    3. Click "Add New Token" at the top right corner and follow the directions.

<br>

<p align="center">
  <img src="/D3.png" alt="Choose token">
</p>

<br>

| If you add a token that requires approval, you need to pay a gas fee on Ethereum to authorize the deposit to zkSync. You will see the following messages before moving on to step 4. |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![ERC20 approval.png](/ERC20-approval.png)                                  |

<br>

4. Review the transaction information and confirm. 

<p align="center"> 
  <img src="/D5.png" alt="Metamask confirm">
</p>

<br>

5. This is an L1 transaction (as you deposit funds from L1 to L2), and therefore the time for it to appear in a block
   depends on the fee that you set. Your funds will appear on L2 only after your transaction is processed on L1. If you
   have any difficulties, please check [Etherscan](https://etherscan.io/) to monitor the transaction.

<p align="center"> 
  <img src="/D6.png" alt="Add Funds loading">
</p>

<br>

<p align="center"> 
  <img src="/D7.png" alt="Successful Deposit">
</p>

<br>

6. Your deposit is complete. The transaction has been initiated, and your funds will be visible in your zkSync wallet
   within ten confirmations of your L1 transaction.

| **Committed**                                                                                                                                          | **Verified**                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| A single yellow check mark next to your balance indicates the zkSync server has processed your transaction and your funds are ready for immediate use. | Two green check marks signal the proof for the block containing your transaction has been produced and submitted to the smart contract on Layer 1. |
| ![Deposit committed](/D9.png)                                                         | ![Deposit verified](/D10.png)                                                   |

<br>
<br>

## Account Activation

Your first transaction after depositing or funding your account requires a separate action for account activation. For
more information about account activation, see [Account Activation FAQ](./faq.md#what-is-the-account-activation-fee).

1. You will be prompted to "Authorize to Sign account activation" and need to sign the message first to generate
   your zkSync L2 private key.

<p align="center"> 
  <img src="/S2.png" alt="Account activation authorize">
</p>

<br>

<p align="center"> 
  <img src="/S3.png" alt="Signature request">
</p>

2. Then, you will be asked to sign the message for account activation (it is good practice to read the messages you
   sign).

<p align="center"> 
  <img src="/S4.png" alt="Sign account activation">
</p>

<br>

<p align="center"> 
  <img src="/S5.png" alt="Metamask sign">
</p>

> The account activation fee can be seen below the transaction fee when completing your transaction.
>
> - To learn more about the account activation fee check our
>   [Account Activation FAQ](./faq.md#what-is-the-account-activation-fee).

<p align="center"> 
  <img src="/Activation-fee.png" alt="Activation fee">
</p>

<br>
<br>

## Transfer Funds on zkSync

In this tutorial, we’ll review how to transfer funds to another zkSync account. Whether an Ethereum user has a zkSync
account or not, you can send them funds on zkSync to the same address they have on Ethereum.

**Keep in mind these funds will be on Layer 2 (L2), so if you want to use these funds on Layer 1 (L1), you will
[Send to Ethereum](#Transfer-funds-to-Ethereum).**

1. Click on "Transfer"

<p align="center"> 
  <img src="/S1.png" alt="Transfer">
</p>

<br>

|                                                               **If this is your first transaction after depositing or funding your zkSync account, see the [Account Activation](#account-activation) section.**<br>                                                               |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| **If you refreshed the page or recently connected your wallet to zkSync, you will be asked to "Authorize to Send on zkSync."**<br><br> ![Authorize to send on zkSync](/authorize-to-send-zksync.png)<br> - Signing the message will re-generate your zkSync Layer 2 (L2) private key (remember, it is good practice to read the messages you sign). |

<br>

2. Enter the address to send funds to, select the token to transfer, and enter the amount.

- _Before transacting, you can change the fee token._  
  Users can pay transaction fees in all popular tokens since zkSync supports "gasless meta-transactions."

<p align="center"> 
  <img src="/S8.1.png" alt="Send on zkSync">
</p>

<br>

3. Signing this message submits the transaction to the zkSync network. (remember, it is good practice to read the
   messages you sign).

<p align="center"> 
  <img src="/S7.png" alt="Metamask sign">
</p>

<br>

4. The transfer should take no longer than a couple of seconds. If you have any difficulties, please check
   [zkScan](https://zkscan.io/) to monitor the transaction.

<p align="center"> 
  <img src="/S9.png" alt="Successful transfer">
</p>

<br>

5. Your transfer is complete! The transaction has been initiated and the funds are ready for immediate use.

| **Committed**                                                                                                                                          | **Verified**                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| A single yellow check mark next to your balance indicates the zkSync server has processed your transaction and your funds are ready for immediate use. | Two green check marks signal the proof for the block containing your transaction has been produced and submitted to the smart contract on Layer 1. |
| ![Transfer committed](/S10.png)                                                       | ![Transfer verified](/S11.png)                                                   |

<br>
<br>

## Transfer Funds to Ethereum

This tutorial will cover the process of withdrawing funds from zkSync back to the Ethereum main chain. 

**Moving funds to an exchange**: If you want to move your funds from zkSync to an exchange, these steps follow the
**correct method**. _Alternatively, you can take a risk and enter the exchange address when you withdraw, but most
exchanges do not observe smart contract transfers, which may require you to contact their customer support to see your
funds on the exchange._

1. Click on "Transfer"

<p align="center"> 
  <img src="/se1.png" alt="Transfer">
</p>

<br>

2. Click on "Send to Ethereum (L1)."

<p align="center"> 
  <img src="/se2.png" alt="Select send to Ethereum">
</p>

<br>

3. Your address will auto-populate with your address.  
   **If you enter a different address for withdrawal, please check that it accepts smart contract transfers.** 

<p align="center"> 
  <img src="/se.png" alt="Send to Ethereum">
</p>

<br>

|                                                               **If this is your first transaction after depositing or funding your zkSync account, see the [Account Activation](#account-activation) section.**<br>                                                               |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| **If you refreshed the page or recently connected your wallet to zkSync, you will be asked to "Authorize to Send on zkSync."**<br><br> ![Authorize to send on zkSync](/authorize-to-send-zksync.png)<br> - Signing the message will re-generate your zkSync Layer 2 (L2) private key (remember, it is good practice to read the messages you sign). | 

<br>

4. Select the token to send to Ethereum and enter the amount.

- _Before transacting, you can change the fee token._  
  Users can pay transaction fees in all popular tokens since zkSync supports "gasless meta-transactions." <br>

<p align="center"> 
  <img src="/se4.png" alt="Send to Ethereum button">
</p>

<br>

**Read the popup carefully to prevent loss of funds.**  
<br>

<p align="center"> 
  <img src="/SE-Popup.png" alt="Send to Ethereum Popup">
</p>

<br>

5. Confirm the withdrawal amount, address, fee, and sign the message (remember, it is good practice to read the messages
   you sign).

<p align="center"> 
  <img src="/se6.png" alt="Metamask sign">
</p>

6. Your withdrawal has been initiated. There will be an immediate change in your account balance in zkSync, but
   **withdrawal times can take from 10 minutes to 7 hours before being available on L1.**

- _When network activity increases, blocks fill up faster, and withdrawal times decrease._

| **Committed**                                                                                                                                          | **Verified**                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| A single yellow check mark next to your balance indicates the zkSync server has processed your transaction and your funds are ready for immediate use. | Two green check marks signal the proof for the block containing your transaction has been produced and submitted to the smart contract on Layer 1. |
| ![Send to Ethereum committed](/se8.png)                                                       | ![Send to Ethereum verified](/se9.png)                                                   |

<br>
<br>

## Mint an NFT

The following steps will cover using IPFS desktop to mint an NFT.

If you are new to minting an NFT, consider using one of the community-created frontends\* like [Open Sky](https://open-sky.vercel.app/). <br>

> \*The community-created frontends are not created by the zkSync team, and any issues with minting will need to be sent
to the creators of these frontends.

1. Visit the [IPFS.io](https://ipfs.io/) and install IPFS Desktop.

<p align="center"> 
  <img src="/m1.png" alt="Download IPFS">
</p>

<br>

2. Go to "Files", select "+ Import", and choose your image.

<p align="center"> 
  <img src="/m2.png" alt="Import image">
</p>

<br>

3. Click on the three dots at the end of the row of your imported image and click on "Copy CID" (Content Identifier).

<p align="center"> 
  <img src="/m3.png" alt="Copy CID">
</p>

<br>

4. Use the text below to create a metadata.json file or click the link to
   [create your file online](https://codebeautify.org/online-json-editor/cb3f2098).

```json
{
  "name": "Your NFT name",
  "image": "https://ipfs.io/ipfs/CID of Image",
  "description": "Description of your NFT",
  "external_url": "Optional URL",
  "attributes": [
    {
      "trait_type": "Attribute 1",
      "value": "Value 1"
    },
    {
      "trait_type": "Attribute 2",
      "value": "Value 2"
    },
    {
      "trait_type": "Attribute 3",
      "value": "Value 3"
    }
  ]
}
```

<br>
  
5. Enter the CID from step 3 at the end of the `"image": "https://ipfs.io/ipfs/` section and fill out the rest of the
   values as needed.
   > Example metadata.json file:

```json
{
  "name": "zkSync",
  "image": "https://ipfs.io/ipfs/QmX4kiKSy4bBB8PXqj8ZM8gNNmra3Xh1NshiaF5TRk5c2C",
  "description": "zkSync Logo",
  "external_url": "https://zksync.io/",
  "attributes": [
    {
      "trait_type": "Logo",
      "value": "Yes"
    },
    {
      "trait_type": "Color",
      "value": "Yes"
    }
  ]
}
```

<br>
  
6. Save your .json file or download your .json file if you used the link from step 4.

<p align="center"> 
  <img src="/json.png" alt="Download json">
</p>

<br>

7. Import your .json file to IPFS as in step 2 and copy the CID for your .json file.

8. On your [zkSync wallet](https://wallet.zksync.io/), open the NFTs tab and select "+ Mint NFT."

<p align="center"> 
  <img src="/m4.png" alt="Select Mint NFT">
</p>

<br>

|                                                               **If this is your first transaction after depositing or funding your zkSync account, see the [Account Activation](#account-activation) section.**<br>                                                               |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| **If you refreshed the page or recently connected your wallet to zkSync, you will be asked to "Authorize to Mint NFT."**<br><br> ![Authorize Mint NFT](/authorize-mint.png)<br> - Signing the message will re-generate your zkSync Layer 2 (L2) private key (remember, it is good practice to read the messages you sign). | 

<br>

9. Enter the copied CID of your .json file in "Content Address" and click "Mint NFT."

- _Before minting, you can change the fee token._  
  Users can pay transaction fees in all popular tokens since zkSync supports “gasless meta-transactions.” <br>

<p align="center"> 
  <img src="/m7.png" alt="Mint NFT button">
</p>

<br>

10. Confirm the fee and sign the message (remember, it is good practice to read the messages you sign).

<p align="center"> 
  <img src="/m8.png" alt="Metamask sign">
</p>

<br>

11. Minting your NFT has been initiated and will be available for transfer, or withdrawal to L1, once it has been
    verified, which takes between 10 minutes to 7 hours.

- _When network activity increases, blocks fill up faster, and verification times decrease._

| **Committed**                                                                                                                                          | **Verified**                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| A single yellow check mark next to your balance indicates the zkSync server has processed your transaction. | Two green check marks signal the proof for the block containing your transaction has been produced and submitted to the smart contract on Layer 1. |
| ![NFT committed](/m10.png)                                                       | ![NFT verified](/m11.png)                                                   |

<br>
<br>

## Alternative Withdrawal

The Alternative Withdrawal tool is used when funds have been sent to an account that cannot connect to the
[zkSync wallet](https://wallet.zksync.io/). 

_If you sent to a Centralized Exchange, please check with their customer support that they accept smart contract transactions to prevent loss of funds._

1. Check to see if your account qualifies to use the Alternative Withdrawal tool by entering your address on
   [zkScan](https://zkscan.io/).

2. Check your account for the following information:

- 1. The account is at least 24 hours old.
- 2. The account has never been activated (i.e., nonce is zero).

<p align="center"> 
  <img src="/nonce.png" alt="Nonce check">
</p>

  <br>

> **If your account meets the requirements for using the "Alternative Withdrawal" tool, proceed with the following
> steps.**

3. Go to [Alternative Withdrawal](https://withdraw.zksync.io/).

- _You can also access the “Alternative Withdrawal” tool on the [zkSync.io](http://zksync.io/) webpage under "zkTools.”_
  <br>

<p align="center"> 
  <img src="/zktools.png" alt="zkTools">
</p>

<br>

4. Enter the zkSync address from steps 1 and 2.

<p align="center"> 
  <img src="/a1.png" alt="Alternative withdrawal">
</p>

<br>

5. Select the token you want to be withdrawn and the method for paying the fee.

<p align="center"> 
  <img src="/a3.png" alt="Token select">
</p>

<br>

6. Complete the fee payment process on your wallet.

<p align="center"> 
  <img src="/a4.png" alt="Metamask confirm">
</p>

<br>

7. The funds should be in your wallet within 24 hours and can be seen under "Internal Txns" on
   [Etherscan](https://etherscan.io/).

- If you do not see your funds within 24 hours, please email us at withdraw@zksync.io with the following information:

  - 1. Your zkSync address from step 1.
  - 2. The token and the amount.
  - 3. The Ethereum transaction hash of the fee payment.
  
<p align="center"> 
  <img src="/int-txns.png" alt="Etherscan Internal Transactions">
</p>

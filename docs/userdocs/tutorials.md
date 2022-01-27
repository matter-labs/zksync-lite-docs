# Tutorials

[[toc]]

## Add Funds to zkSync with MetaMask

In this tutorial, we will be depositing into a zkSync wallet with MetaMask.

> While the tutorial shows the MetaMask images for Rinkeby, you can follow the same steps for mainnet.

**There is an account activation fee applied on the first transaction after depositing. Deposit an additional ~$20 to cover it during high gas fees.** Learn more about the account activation fee in our [FAQ](./faq.md#what-is-the-account-activation-fee).
</br>
</br>

To connect your wallet to the zkSync 1.0 Mainnet select the "Ethereum Mainnet" button at the top of MetaMask.  
</br>

![Deposit](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/Deposit%201.png)

</br>
</br>

1. Go to [https://wallet.zksync.io/](https://wallet.zksync.io/) and connect your wallet.

- To connect to the zkSync 1.0 Mainnet:
  - Click on the Ethereum symbol at the bottom right.
  - Select Mainnet.

</br>

![D1.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/D1.png)

</br>

</br>

![Mainnet.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/Mainnet.png)
</br>

2. Choose "+ Add Funds."

</br>

![D2.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/D2%20copy.png)

</br>

> For a FIAT onramp choose "Buy Crypto with Ramp" and complete the process with Ramp to save on L1 gas fees.

</br>

![RAMP.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/RAMP.png)

</br>

3. Select your token, enter the amount, and add funds.

- _If you can’t find your token:_
  - Some tokens will be referred to by their internal id number on our [Tokens page](https://zkscan.io/explorer/tokens/) instead of their token symbol. (E.g. ERC20-23 = UNI).
  - Add new token to zkSync:
    1. Click "Can't find a token?"
    2. Use the link to access the [Tokens page](https://zkscan.io/explorer/tokens/).
    3. Click "Add New Token" at the top right corner and follow the directions.

</br>

![D3.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/D3.png)

</br>

> If you add a token that requires approval, you need to pay a gas fee on L1 to authorize the deposit to zkSync. You will see the following messages before moving on to step 4.
> </br>

![approval.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/approval.png)

</br>

4. Review the transaction information and confirm.
   </br>

![D5.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/D5.png)

</br>

5. This is an L1 transaction (as you deposit funds from L1 to L2), and therefore the time for it to appear in a block depends on the fee that you set. Your funds will appear on L2 only after your transaction is processed on L1. If you have any difficulties, please check [Etherscan](https://etherscan.io/) to monitor the transaction.
   </br>

![D6.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/D6.png)

</br>
</br>

![D7.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/D7.png)

</br>

6. Your deposit is complete. The transaction has been initiated, and your funds will be visible in your zkSync wallet within ten confirmations of your L1 transaction.

|                                                                      **Pending**                                                                       |                                                                    **Verified**                                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| A single yellow check mark next to your balance indicates the zkSync server has processed your transaction and your funds are ready for immediate use. | Two green check marks signal the proof for the block containing your transaction has been produced and submitted to the smart contract on Layer 1. |
|
![D9.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/D9.png)
|
![D10.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/D10.png)
|

</br>

## Account Activation

Your first transaction after depositing or funding your account requires a separate action for account activation. For more information about account activation, see [Account Activation FAQ](./faq.md#what-is-the-account-activation-fee).

1. You will be prompted to "Authorize to Sign account activation" and will need to sign the message first to generate your zkSync L2 private key.
   </br>

![S2.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S2.png)

</br>

![S3.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S3.png)


2. Then, you will be asked to sign the message for account activation (it is good practice to read the messages you sign).
   </br>

![S4.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S4.png)

</br>

![S5.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S5.png)


> The account activation fee can be seen below the transaction fee when completing your transaction.
>
> - To learn more about the account activation fee check our [Account Activation FAQ](./faq.md#what-is-the-account-activation-fee).
>   </br> > </br>

![Activation fee.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/Activation%20fee.png)

</br>

## Send Funds on zkSync

In this tutorial, we’ll review how to transfer funds to another zkSync account.
Whether an Ethereum user has a zkSync account or not, you can send them funds on zkSync to the same address they have on Ethereum.

**Keep in mind these funds will be on Layer 2 (L2), so if you want to use these funds on Layer 1 (L1), you will have to [Send to Ethereum](#Send-funds-to-Ethereum).**

1. Go to "Send."
   </br>

![S1.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S1.png)

</br>

> **If this is your first transaction after depositing or funding your zkSync account, see the [Account Activation](#account-activation) section.**

> **If you refreshed the page or recently connected your wallet to zkSync, you will be asked to "Authorize to Send on zkSync."**
>
> - Signing the message will re-generate your zkSync Layer 2 (L2) private key (remember, it is good practice to read the messages you sign).
>   </br>

2. Enter the address to send funds to, select the token to transfer, and enter the amount.

- _Before transacting, you can change the fee token._  
  Users can pay transaction fees in all popular tokens since zkSync supports "gasless meta-transactions."
  </br>

![S8.1.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S8.1.png)

</br>

3. Signing this message submits the transaction to the zkSync network. (remember, it is good practice to read the messages you sign).
   </br>

![S7.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S7.png)

</br>

4. The transfer should take no longer than a couple of seconds. If you have any difficulties, please check [zkScan](https://zkscan.io/) to monitor the transaction.
   </br>

![S9.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S9.png)

</br>

5. Your transfer is complete! The transaction has been initiated and the funds are ready for immediate use.

|                                                                      **Pending**                                                                       |                                                                    **Verified**                                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| A single yellow check mark next to your balance indicates the zkSync server has processed your transaction and your funds are ready for immediate use. | Two green check marks signal the proof for the block containing your transaction has been produced and submitted to the smart contract on Layer 1. |
|
![S10.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S10.png)
|
![S11.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/S11.png)

</br>

## Send Funds to Ethereum

This tutorial will cover the process of withdrawing funds from zkSync back to the Ethereum main chain.
</br>

**Moving funds to an exchange**: If you want to move your funds from zkSync to an exchange, these steps follow the **correct method**.
_Alternatively, you can take a risk and enter the exchange address when you withdraw, but most exchanges do not observe smart contract transfers, which may require you to contact their customer support to see your funds on the exchange._

1. Go to "Send."
   </br>

![se1.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/se1.png)

</br>

2. Click on "Send to Ethereum (L1)."
   </br>

![se2.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/se2.png)

</br>

3. Your address will auto-populate with your address.  
   **If you enter a different address for withdrawal, please check that it accepts smart contract transfers.**
   </br>

![se.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/se.png)

</br>

> **If this is your first transaction after depositing or funding your zkSync account, see the [Account Activation](#account-activation) section.**

> **If you refreshed the page or recently connected your wallet to zkSync, you will be asked to "Authorize to Send to Ethereum."**
>
> - Signing the message will generate your zkSync Layer 2 (L2) private key (remember, it is good practice to read the messages you sign).
>   </br>

4. Select the token to send to Ethereum and enter the amount.

- _Before transacting, you can change the fee token._  
  Users can pay transaction fees in all popular tokens since zkSync supports "gasless meta-transactions."
  </br>

![se4.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/se4.png)

</br>

> **Read the popup carefully to to prevent loss of funds.** > </br>

![se4.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/se4.png)

5. Confirm the withdrawal amount, address, fee, and sign the message (remember, it is good practice to read the messages you sign).
   </br>

![se6.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/se6.png)
</br>

6. Your withdrawal has been initiated. There will be an immediate change in your account balance in zkSync, but **withdrawal times can take from 10 minutes to 7 hours before being available on L1.**

- _When network activity increases, blocks fill up faster, and withdrawal times decrease._

|                                                                      **Pending**                                                                       |                                                                    **Verified**                                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| A single yellow check mark next to your balance indicates the zkSync server has processed your transaction and your funds are ready for immediate use. | Two green check marks signal the proof for the block containing your transaction has been produced and submitted to the smart contract on Layer 1. |
|
![se8.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/se8.png)
|
![se9.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/se9.png)
|

</br>

## Mint an NFT

The following steps will cover using IPFS desktop to mint an NFT.

> If you are new to minting an NFT, consider using one of the community-created frontends\* like [zkNFT](https://zknft.xyz/#/) or [Open Sky](https://open-sky.vercel.app/).
> </br>

_\*The community-created frontends are not created by the zkSync team, and any issues with minting will need to be sent to the creators of these frontends._

1. Visit the [IPFS.io](https://ipfs.io/) and install IPFS Desktop.
   </br>

![m1.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/m1.png)

</br>

2. Go to "Files", select "+ Import", and choose your image.
   </br>

![m2.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/m2.png)

</br>

3. Click on the three dots at the end of the row of your imported image and click on "Copy CID" (Content Identifier).
   </br>

![m3.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/m3.png)

</br>

4. Use the text below to create a metadata.json file or click the link to [create your file online](https://codebeautify.org/online-json-editor/cb3f2098).

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

5. Enter the CID from step 3 at the end of the `"image": "https://ipfs.io/ipfs/` section and fill out the rest of the values as needed.
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

6. Save your .json file or download your .json file if you used the link from step 4.
   </br>

![json.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/json.png)

</br>

7. Import your .json file to IPFS as in step 2 and copy the CID for your .json file.

8. On your [zkSync wallet](https://wallet.zksync.io/), open the NFTs tab and select "+ Mint NFT."
   </br>

![m4.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/m4.png)

</br>

> **If this is your first transaction after depositing or funding your zkSync account, see the [Account Activation](#account-activation) section.**

> **If you refreshed the page or recently connected your wallet to zkSync, you will be asked to "Authorize to Mint NFT."**
>
> - Signing the message will generate your zkSync Layer 2 private key (remember, it is good practice to read the messages you sign).
>   </br>

9. Enter the copied CID of your .json file in "Content Address" and click "Mint NFT."

- _Before minting, you can change the fee token._  
  Users can pay transaction fees in all popular tokens since zkSync supports “gasless meta-transactions.”
  </br>

![m7.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/m7.png)

</br>

10. Confirm the fee and sign the message (remember, it is good practice to read the messages you sign).
    </br>

![m8.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/m8.png)

</br>

11. Minting your NFT has been initiated and will be available for transfer, or withdrawal to L1, once it has been verified, which takes between 10 minutes to 7 hours.

- _When network activity increases, blocks fill up faster, and verification times decrease._

|                                                 **Pending**                                                  |                                                                    **Verified**                                                                    |
| :----------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| A single yellow check mark next to your balance indicates the zkSync server has processed your transaction.  | Two green check marks signal the proof for the block containing your transaction has been produced and submitted to the smart contract on Layer 1. |
|
![m10.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/m10.png)
|
![m11.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/m11.png)
|

</br>

## Alternative Withdrawal

The Alternative Withdrawal tool is used when funds have been sent to an account that cannot connect to the [zkSync wallet](https://wallet.zksync.io/).

1. Check to see if your account qualifies to use the Alternative Withdrawal tool by entering your address on [zkScan](https://zkscan.io/).

2. Check your account for the following information:

- 1. The account is at least 24 hours old.
- 2. The account has never been activated (i.e., nonce is zero).
  <br>

  ![nonce.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/nonce.png)
  
  <br>

> **If your account meets the requirements for using the "Alternative Withdrawal" tool, proceed with the following steps.**

3. Go to [Alternative Withdrawal](https://withdraw.zksync.io/).

- _You can also access the “Alternative Withdrawal” tool on the [zkSync.io](http://zksync.io/) webpage under "zkTools.”_
  </br>

![zktools.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/zktools.png)

</br>

4. Enter the zkSync address from steps 1 and 2.
   </br>

![a1.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/a1.png)

</br>

5. Select the token you want to be withdrawn and the method for paying the fee.
   </br>

![a3.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/a3.png)

</br>

6. Complete the fee payment process on your wallet.
   <br>

![a4.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/a4.png)

<br>

7. The funds should be in your wallet within 24 hours and can be see under "Internal Txns" on [Etherscan](https://etherscan.io/).

- If you do not see your funds within 24 hours, please email us at withdraw@zksync.io with the following information:
  - 1. Your zkSync address from step 1.
  - 2. The token and the amount.
  - 3. The Ethereum transaction hash of the fee payment.
    <br>
    
    ![int-txns.png](https://raw.githubusercontent.com/matter-labs/zksync-docs/master/docs/images/int-txns.png)
    
    <br>

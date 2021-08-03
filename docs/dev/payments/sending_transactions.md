# Sending Transactions

<!-- markdownlint-disable MD013 -->

This section explains the principles of sending transactions into the zkSync network. The examples provided are written in JavaScript but are not associated with any specific SDK.

[[toc]]

## Sending priority operations

Priority operations are invoked by calling the corresponding smart contract methods. The following are signatures of the associated deposit methods:

```js
/// @notice Deposit ETH to Layer 2 - transfer ether from user into contract, validate it, register deposit
/// @param _franklinAddr The receiver Layer 2 address
function depositETH(address _franklinAddr) external payable nonReentrant;

/// @notice Deposit ERC20 token to Layer 2 - transfer ERC20 tokens from user into contract, validate it, register deposit
/// @param _token Token address
/// @param _amount Token amount
/// @param _franklinAddr Receiver Layer 2 address
function depositERC20(IERC20 _token, uint104 _amount, address _franklinAddr) external nonReentrant;
```

Note that prior to depositing ERC20 funds, the fund amounts must be approved for the contract, as in the following example in JavaScript:

```js
erc20contract.approve(zkSyncContractAddress, deposit_amount);
```

To perform a full exit, the user must sequentially register an exit request (via the `fullExit` contract call), and then
complete this request (via the `completeWithdrawals` call).

The following are signatures of other associated methods:

```js
/// @notice Register full exit request - pack pubdata, add priority request
/// @param _accountId Numerical id of the account in the zkSync network
/// @param _token Token address, 0 address for ether
function fullExit (uint32 _accountId, address _token) external nonReentrant;

/// @notice executes pending withdrawals
/// @param _n The number of withdrawals to complete starting from oldest
function completeWithdrawals(uint32 _n) external nonReentrant;
```

## Sending transactions

To send a transaction, the user should:

1. Prepare the transaction data.
2. Encode the transaction data into a byte sequence.
3. Create a zkSync signature for these bytes with the zkSync private key.
4. Either generate an Ethereum signature for transaction description (see details below) or provide an EIP-1271
   signature.
5. Send the transaction via a [corresponding JSON RPC method][send_tx].

Details on transaction data and encoding it into the byte sequence can be found in the [formal protocol
description][protocol]. See [cryptography](/api/sdk/crypto) for programming language support for signing primitives.

Messages for Ethereum signatures depend on the transaction type:

```js
// Amount and fee must be encoded into formatted string, e.g. by `ethers.utils.formatUnits` method
// with respect to the token decimals value.
// Token must be represented as a token symbol, e.g. `ETH` or `DAI`.

// For Transfer:
const transferEthMessage =
  `Transfer ${stringAmount} ${stringToken}\n` +
  `To: ${transfer.to.toLowerCase()}\n` +
  `Nonce: ${transfer.nonce}\n` +
  `Fee: ${stringFee} ${stringToken}\n` +
  `Account Id: ${this.accountId}`;

// For Withdraw:
const withdrawEthMessage =
  `Withdraw ${stringAmount} ${stringToken}\n` +
  `To: ${withdraw.ethAddress.toLowerCase()}\n` +
  `Nonce: ${withdraw.nonce}\n` +
  `Fee: ${stringFee} ${stringToken}\n` +
  `Account Id: ${this.accountId}`;

// For ChangePubKey (assuming it is a stand-alone transaction, for batch see details below):
const msgNonce = utils.hexlify(serializeNonce(nonce));
const msgAccId = utils.hexlify(serializeAccountId(accountId));
const pubKeyHashHex = pubKeyHash.replace("sync:", "").toLowerCase();
const changePubKeyEthMessage =
  `Register zkSync pubkey:\n\n` + `${pubKeyHashHex}\n` + `nonce: ${msgNonce}\n` + `account id: ${msgAccId}\n\n` + `Only sign this message for a trusted client!`;
```

Note that since some Ethereum signers add a prefix `\x19Ethereum Signed Message:\n${messageBytes.length}` to the signed
messages, it may be necessary to add this prefix manually if the signer doesn't do it automatically.

## Sending transaction batches

A transactions batch is a set of transactions that are verified together. If one of the batch transactions fails, all the transactions in this batch will fail as well.

::: warning

### Security

Currently, transaction batches is a server-side abstraction. Successful execution is checked pre-circuit and information about the batch is not passed into the circuit. If this feature is used to pay fees in a different token, you should set the fee payment transaction last (so that the server is unable to execute the last transaction, but also ignores other transactions). In future versions, the batches will be enforced in the circuit to increase the overall security of this feature.

:::

A batch can successfully process a guaranteed maximum of 50 transactions.

The fee does not have to be set in each individual transaction for the transaction batch. The only requirement is that the sum of fees set in transactions must be equal or greater to the sum of fees for all transactions had they been sent individually. This means that it is possible to pay the fee for the transaction using a token other than the one used for the transfer using transaction batches. To do this, you create a batch of two transactions:

- Transfer to the recipient in token `FOO` with fee set to 0.
- Transfer to your own account in token `BAR` (the token you want to pay the fee with) with amount set to 0 and fee set to an amount sufficient to cover two transfers.

The zkSync server will check that the sum of fees (0 in the first transaction and twice the expected fee in the second transaction) is enough to cover the processing of two transfers and will then execute the batch.

### Ethereum signature for batch

You do not need to provide an Ethereum signature for each transaction in a transaction batch. You can provide exactly one signature per batch.

The message for the batch to be signed should be defined as follows:

```js
// Assuming that `transactions` variable holds an array of batch transactions, and
// `serializeTx(...)` encodes transaction into bytes as per zkSync protocol.

// Obtain concatenated byte representations of each transaction.
const bytes = concat(transactions.map((tx) => serializeTx(tx)));
// Calculate `keccak256` hash of this byte sequence.
const hash = ethers.utils.keccak256(bytes).slice(2);
// Decode it into a byte sequence.
const message = Uint8Array.from(Buffer.from(hash, "hex"));
```

Adding a prefix as described under [Sending transactions](/dev/payments/sending_transactions.html) is still necessary.

The signature received can be sent together with the batch via a [corresponding JSON RPC method][send_batch]. None of the batch transactions requires an Ethereum signature.

[send_tx]: /api/v0.1.md#tx-submit
[send_batch]: /api/v0.1.md#submit-txs-batch
[protocol]: https://github.com/matter-labs/zksync/blob/master/docs/protocol.md

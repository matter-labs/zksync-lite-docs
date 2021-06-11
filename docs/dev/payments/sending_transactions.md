# Sending Transactions

<!-- markdownlint-disable MD013 -->

This section explains how transactions are sent in the zkSync network.

The examples provided are written in JavaScript, and aren't tied to any specific SDK.

[[toc]]

## Sending priority operations

Priority operations are invoked by calling the corresponding smart contract methods.

Signatures of these deposit methods:

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

Note that prior to deposit of ERC20 funds, corresponding amount of funds must be approved for contract, e.g. (in JS):

```js
erc20contract.approve(zkSyncContractAddress, deposit_amount);
```

To perform a full exit, user must sequentially register an exit request (via `fullExit` contract call), and then
complete this request (via `completeWithdrawals` call).

Signatures of corresponding methods:

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

To send a transaction, the user has to do the following:

1. Prepare the transaction data.
2. Encode the transaction data into a byte sequence.
3. Create a zkSync signature for the obtained bytes with the zkSync private key.
4. Generate an Ethereum signature for transaction description (see details below) or provide an EIP-1271 signature.
5. Send the transaction via [JSON RPC method][send_tx].

Details on transaction data and its encoding are in the [formal protocol description][protocol].

Programming language support for signing primitives is described in the [cryptography section](/api/sdk/crypto).

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
messages, it may be required to add this prefix manually if used signer doesn't do it automatically.

## Sending transaction batches

Transaction batch is a set of transactions that should all succeed. If one of the batch transactions fails, all other transactions in this batch will also fail.

::: warning

### Security Note

Currently, the transaction batch is a server-side abstraction. Successful execution is checked pre-circuit, and information about batch is not passed into the circuit. If you therefore use a transaction batch to pay fees in a different token, put the fee payment transaction at the last position in the batch so that the server will be unable even in theory to ignore other transactions and only execute the last one. In the future, the batches will be enforced in the circuit in order to increase the overall security of this feature. 

:::

Currently, a batch is guaranteed to successfully process a max of 50 transactions.

You do not have to individually set a fee for each transaction in the batch. It is only required for the sum of fees to be equal or greater than the sum of fees for each transaction if set individually. 

When using transaction batches it is therefore possible to pay the transaction fee with a token other than the one which is transferred. Just create a batch of two transactions:


- Make a transfer in token FOO (the token that you actually want to transfer) to the recipient with the transaction fee set to 0.
- Make a transfer in token BAR (the token that you want to pay the fee with) to your own account with the amount of the token set to 0, and the fee at an amount which is enough to cover the two transfers.

ZKSync server node will check whether the sum of the two fees (0 in the first transaction + 2x of expected fee in the second transaction) is enough to cover the processing of the two transfers and will execute the batch.

### Ethereum signature for batch

In transaction batches you do not have to provide an Ethereum signature for each individual transaction. One Ethereum signature per batch is enough.

The message for the batch to be signed should be formed as follows:


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

Requirement for adding a prefix described above still holds.

The obtained signature can be sent together with the batch via [JSON RPC method][send_batch].

[send_tx]: /api/v0.1.md#tx-submit
[send_batch]: /api/v0.1.md#submit-txs-batch
[protocol]: https://github.com/matter-labs/zksync/blob/master/docs/protocol.md

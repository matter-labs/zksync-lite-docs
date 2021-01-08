# Sending Transactions

This section explains principles of sending transactions into the zkSync network.

Provided examples are written in JavaScript, but aren't tied to any certain SDK.

## Sending priority operations

Priority operations are invoked via calling the corresponding smart contract methods.

Signatures of corresponding deposit methods:

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

In order to send a transaction, user has to do the following steps:

1. Prepare the transaction data.
2. Encode the transaction data into a byte sequence.
3. Create a zkSync signature for these bytes with the zkSync private key.
4. Either generate an Ethereum signature for transaction description (see details below) or provide an EIP-1271
   signature.
5. Send the transaction via [corresponding JSON RPC method][send_tx].

Details on transaction data and encoding it into byte sequence could be found in the [formal protocol
description][protocol].

To see the programming language support for signing primitives, see the [cryptography section](cryptography.md).

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
const pubKeyHashHex = pubKeyHash.replace('sync:', '').toLowerCase();
const changePubKeyEthMessage =
  `Register zkSync pubkey:\n\n` +
  `${pubKeyHashHex}\n` +
  `nonce: ${msgNonce}\n` +
  `account id: ${msgAccId}\n\n` +
  `Only sign this message for a trusted client!`;
```

Note that since some Ethereum signers add a prefix `\x19Ethereum Signed Message:\n${messageBytes.length}` to the signed
messages, it may be required to add this prefix manually if used signer doesn't do it automatically.

## Sending transaction batches

Transactions batch is a set of transactions that should succeed all together. If one of the batch transactions fails,
all the transactions in this batch will fail as well.

::: warning **Note on security:** In the current form, transaction batches is a server-side abstraction. Successful
execution is checked pre-circuit, and information about batch is not passed into the circuit. Thus, if this feature is
being used to pay fees in a different token, it is recommended to set the fee payment transaction last (so that server
even in theory will be unable to execute the last transaction, but ignore other ones). In the future, the batches will
be enforced in the circuit in order to increase the overall security of this feature. 
:::

Currently, a batch is guaranteed to be able to successfully process a max of 50 transactions.

For transaction batch, fee doesn't have to be set in each individual transaction, the only requirement is that sum of
fees set in transactions must be equal or greater than the sum of fees for transactions if they would have been sent
individually.

That is, using transaction batches it is possible to pay the fee for transaction using the token other than used for
transfer. In order to do so, one can create a batch of two transactions:

- Transfer to the recipient in token `FOO` with fee set to 0.
- Transfer to the own account in token `BAR` (the token you want to pay the fee with) with amount set to 0, and fee set
  enough to cover two transfers.

Server will check that sum of fees (0 in the first transaction and 2x expected fee in the second one) is enough to cover
processing of two transfers and will execute the batch.

### Ethereum signature for batch

For transaction batches there is no need to provide an Ethereum signature for each transaction in it, instead, it is
possible to provide exactly one signature per batch.

Message for the batch to be signed should be formed as follows:

```js
// Assuming that `transactions` variable holds an array of batch transactions, and
// `serializeTx(...)` encodes transaction into bytes as per zkSync protocol.

// Obtain concatenated byte representations of each transaction.
const bytes = concat(transactions.map((tx) => serializeTx(tx)));
// Calculate `keccak256` hash of this byte sequence.
const hash = ethers.utils.keccak256(bytes).slice(2);
// Decode it into a byte sequence.
const message = Uint8Array.from(Buffer.from(hash, 'hex'));
```

Requirement for adding a prefix described above still holds.

This obtained signature may be sent together with batch via [corresponding JSON RPC method][send_batch], and none of the
batch transactions is required to have an Ethereum signature.

[send_tx]: ../api/v0.1.md#tx-submit
[send_batch]: ../api/v0.1.md#submit-txs-batch
[protocol]: https://github.com/matter-labs/zksync/blob/master/docs/protocol.md

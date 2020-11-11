# JSON RPC

This section contains the description of endpoints provided by the zkSync server via JSON RPC.

<!-- prettier attempts to break the footnote section here -->
<!-- prettier-ignore-start -->
[^tx]:
    `Transaction` type can be expressed as follows:
    ```ts
    type Transaction = Transfer | Withdraw | ChangePubKey | ForcedExit;
    ```
<!-- prettier-ignore-end -->

## Introduction

The HTTP JSON RPC of zkSync server is available at "\${ZKSYNC_SERVER_ADDRESS}/jsrpc". The WebSocket JSON RPC of zkSync
server is available at "\${ZKSYNC_SERVER_ADDRESS}/jsrpc-ws".

All available API addresses for zkSync:

- `https://rinkeby-api.zksync.io/jsrpc` - JSON RPC for Rinkeby testnet server
- `https://ropsten-api.zksync.io/jsrpc` - JSON RPC for Ropsten testnet server
- `https://api.zksync.io/jsrpc` - JSON RPC for Mainnet server

Descriptions for all types presented below could be found on the [types] page.

[types]: ../../sdk/js/types.md

## Methods

### `account_info`

`account_info` method returns known states of an account:

- Address of the account.
- Numerical ID of the account.
- Depositing balances.
- Committed state.
- Verified state.

#### Inputs parameters

| Parameter | Type      | Description                              |
| --------- | --------- | ---------------------------------------- |
| address   | `Address` | zkSync address of the wallet of interest |

#### Output format

`AccountState`

### `ethop_info`

`ethop_info` method returns the receipt for a Priority Operation.

#### Inputs parameters

| Parameter      | Type     | Description                                      |
| -------------- | -------- | ------------------------------------------------ |
| priority_op_id | `number` | Unique identifier of a zkSync priority operation |

#### Output format

`PriorityOperationReceipt`

### `tx_info`

`tx_info` method returns the receipt for a zkSync transaction.

#### Inputs parameters

| Parameter | Type     | Description                                           |
| --------- | -------- | ----------------------------------------------------- |
| tx_hash   | `string` | Hexadecimal string representation of transaction hash |

#### Output format

`TransactionReceipt`

### `tx_submit`

Submits a new zkSync transaction to the server.

### Input parameters

| Parameter         | Type               | Description                                             |
| ----------------- | ------------------ | ------------------------------------------------------- |
| tx                | `Transaction`[^tx] | Signed zkSync transaction                               |
| ethereumSignature | `TxEthSignature?`  | Ethereum signature required for 2-factor authentication |
| fastProcessing    | `boolean`          | Only for withdrawals: request faster block commitment   |

`fastProcessing` argument is only allowed for withdrawals and will result in a transaction rejection for any other kind
of transaction. Setting this field to `true` for withdrawals will make the block commitment timeout much smaller, so the
funds will be withdrawn faster. Note that fast withdrawals require bigger fee (for manual fee request, `FastWithdraw`
fee type must be chosen).

#### Output format

String representing the hash of the sent transaction.

### `submit_txs_batch`

Submits a batch of zkSync transactions to the server.

Transactions batch is a set of transactions that should succeed all together. If one of the batch transactions fails,
all the transactions in this batch will be considered failed.

For transaction batch, fee doesn't have to be set in each individual transaction, the only requirement is that sum of
fees set in transactions must be equal or greater than the sum of fees for transactions, if they would have been sent
individually.

That is, using transaction batches it is possible to pay the fee for transaction using the token other than used for
transfer. In order to do so, one can create a batch of two transactions:

- Transfer to the recipient in token `FOO` with fee set to 0.
- Transfer to the own account in token `ETH` with amount set to 0, and fee set enough to cover two transfers.

Server will check that sum of fees (0 in first transaction and 2x expected fee in the second one) is enough to cover
processing of two transfers, and will execute batch.

**Note on security:** In the current form, transaction batches is a server-side abstraction. Successfull execution is
checked pre-circuit, and information about batch is not passed into circuit. Thus, if this feature is being used to pay
fees in a different token, it is recommended to set the fee payment transaction last (so that server even in theory will
be unable to execute the last transaction, but ignore other ones). In the future, the batches will be enforced in
circuit in order to increase overall security of this feature.

### Input parameters

| Parameter         | Type                 | Description                         |
| ----------------- | -------------------- | ----------------------------------- |
| txs               | `Transaction[]`[^tx] | Array of signed zkSync transactions |
| ethereumSignature | `TxEthSignature?`    | Ethereum signature for the batch    |

#### Output format

An array of strings representing the hashes of the sent transactions.

### `contract_address`

Returns the address of zkSync smart contract.

### Input parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| -         | -    | -           |

#### Output format

`string`

### `tokens`

Returns the list of tokens supported by zkSync.

### Input parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| -         | -    | -           |

#### Output format

`Tokens`

### `get_tx_fee`

Returns the minimum packable fee required to process the transaction.

### Input parameters

| Parameter | Type         | Description                         |
| --------- | ------------ | ----------------------------------- |
| tx_type   | `TxFeeTypes` | Type of transaction.                |
| address   | `Address`    | Address of transaction recipient.   |
| token     | `TokenLike`  | Token identifier to request fee in. |

`address` field should contain the following addresses depending on the type of transaction:

- For `Transfer`, it should be transaction recipient.
- For `ChangePubKey` and `Withdraw`, it should be the account address.
- For `ForcedExit`, it should be the target account.

#### Output format

`Fee`

### `get_txs_batch_fee_in_wei`

Returns the minimum packable fee required to process the transactions batch.

### Input parameters

| Parameter | Type           | Description                                         |
| --------- | -------------- | --------------------------------------------------- |
| tx_types  | `TxFeeTypes[]` | Type of each transaction in the batch.              |
| addresses | `Address[]`    | Address of each transaction recipient in the batch. |
| token     | `TokenLike`    | Token identifier to request fee in.                 |

#### Output format

`BatchFee`

Details for fee calculation details are omitted in this method.

### `get_token_price`

Returns the token price in USD known to server.

### Input parameters

| Parameter | Type        | Description                            |
| --------- | ----------- | -------------------------------------- |
| token     | `TokenLike` | Token identifier to request price for. |

#### Output format

`number`

Returned number represents the known token price in USD.

### `get_confirmations_for_eth_op_amount`

Returns the amount of confirmations on Ethereum required for priority operation to be processed.

### Input parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| -         | -    | -           |

#### Output format

`number`

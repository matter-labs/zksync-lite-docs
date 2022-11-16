---
sidebarDepth: 4
---

# zkSync API v0.1

Current version of zkSync API consists of two parts:

- JSON RPC, for the read-write operations.
- REST API, for more verbose read-only queries.

::: warning

v0.1 API is considered experimental: while most interfaces were stabilized, we're still working on the interface that
could be declared "stable". Some of the v0.1 parts were designed a lot of time ago and may not be intuitive.

Also, this API may experience breaking changes, even though it usually doesn't happen often.

Stable v1 API is currently being implemented, and as soon as it's released, this API will be declared deprecated and
scheduled for removal.

:::

## JSON RPC

This section contains the description of endpoints provided by the zkSync server via JSON RPC.

<!-- both prettier and markdownlint don't handle footnotes extension well -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable no-space-in-code -->
[^tx]:
    `Transaction` type can be expressed as follows:
    ```ts
    type Transaction = Transfer | Withdraw | ChangePubKey | ForcedExit;
    ```
<!-- markdownlint-enable no-space-in-code -->
<!-- prettier-ignore-end -->

### Introduction

The HTTP JSON RPC of zkSync server is available at `\${ZKSYNC_SERVER_ADDRESS}/jsrpc`.

The WebSocket JSON RPC of zkSync server is available at `\${ZKSYNC_SERVER_ADDRESS}/jsrpc-ws`.

::: warning

Websocket support will be removed soon due to its instability.

:::

All available API addresses for zkSync:

- `https://goerli-api.zksync.io/jsrpc` - JSON RPC for zkSync alpha testnet
- `https://api.zksync.io/jsrpc` - JSON RPC for Mainnet server

Descriptions for all types presented below could be found on the [types] page.

[types]: ../sdk/js/types

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

#### Input parameters

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

For description of transaction batches, see the [corresponding dev docs section][tx_batches].

[tx_batches]: /dev/payments/sending_transactions/#sending-transaction-batches

#### Input parameters

| Parameter         | Type                 | Description                         |
| ----------------- | -------------------- | ----------------------------------- |
| txs               | `Transaction[]`[^tx] | Array of signed zkSync transactions |
| ethereumSignature | `TxEthSignature?`    | Ethereum signature for the batch    |

#### Output format

An array of strings representing the hashes of the sent transactions.

### `toggle_2fa`

Each L2 transaction on zkSync requires 2-Factor Authentication enforced by the server. You can read more about it
[here](/dev/payments/sending_transactions/#_2-factor-authentication).

This function can be called to enable or disable the 2FA for an account.

#### Input parameters

| Parameter | Type               | Description                         |
| --------- | ------------------ | ----------------------------------- |
| request   | `Toggle2FARequest` | Array of signed zkSync transactions |

#### Output format

`Toggle2FAResponse`

### `contract_address`

Returns the address of zkSync smart contract.

#### Input parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| -         | -    | -           |

#### Output format

`string`

### `tokens`

Returns the list of tokens supported by zkSync.

#### Input parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| -         | -    | -           |

#### Output format

`Tokens`

### `get_tx_fee`

Returns the minimum packable fee required to process the transaction.

#### Input parameters

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

#### Example

```json
$ curl -X POST -H 'Content-type: application/json' \
  -d '{
    "jsonrpc":"2.0",
    "id":1, "method": "get_tx_fee",
    "params": ["Transfer", "0xC8568F373484Cd51FDc1FE3675E46D8C0dc7D246", "DAI"]
    }' \
  https://goerli-api.zksync.io/jsrpc
{
  "jsonrpc": "2.0",
  "result": {
    "feeType": "TransferToNew",
    "gasTxAmount": "6862",
    "gasPriceWei": "1000000000",
    "gasFee": "3218935491994987",
    "zkpFee": "5976077341865528",
    "totalFee": "9190000000000000"
  },
  "id": 1
}
```

### `get_txs_batch_fee_in_wei`

Returns the minimum packable fee required to process the transactions batch.

#### Input parameters

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

#### Input parameters

| Parameter | Type        | Description                            |
| --------- | ----------- | -------------------------------------- |
| token     | `TokenLike` | Token identifier to request price for. |

#### Output format

`number`

Returned number represents the known token price in USD.

### `get_confirmations_for_eth_op_amount`

Returns the amount of confirmations on Ethereum required for priority operation to be processed.

#### Input parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| -         | -    | -           |

#### Output format

`number`

## REST API

This section contains the description of endpoints provided by the zkSync server via REST API.

_Note:_ This section is incomplete, thus description of some endpoints may be missing.

### Introduction

The REST API of zkSync server is available at "\${ZKSYNC_SERVER_ADDRESS}/api/v0.1". In the examples below we will use
the `rinkeby` zkSync testnet API, thus URLs will look start `https://rinkeby-api.zksync.io/api/v0.1/`.

All available API addresses for zkSync:

- `https://rinkeby-api.zksync.io/api/v0.1/` - API for Rinkeby testnet server
- `https://ropsten-api.zksync.io/api/v0.1/` - API for Ropsten testnet server
- `https://api.zksync.io/api/v0.1/` - API for Mainnet server

To interact with REST API from javascript one may use any of available packages providing the interface to perform HTTP
requests. One of the simplest ways will be to use `Axios`, and in that case the interaction will look as follows:

```js
import Axios from 'axios';

const url = 'https://rinkeby-api.zksync.io/api/v0.1/status';

const { data } = await Axios.get(url).catch((e) => {
  throw new Error(`Request to ${e.config.url} failed with status code ${e.response.status}`);
});
```

### Transaction details

zkSync API serves two endpoints to get the transactions details:

- `/transactions/{tx_hash}`: Get the details on transaction execution.
- `/transactions_all/{tx_hash}`: Get the transaction itself.

First endpoint should be used, for example, if you sent a transaction and want to check whether it was successfully
executed or rejected.

Second endpoint should be used, for example, if you want to display sent transaction details (like in explorer
interface).

Output formats are:

For `/transactions`:

```js
{
  "tx_hash": string, // Hash of the transaction
  "block_number": number, // Block containing the transaction.
  "success": boolean, // Whether execution was successful or not.
  "verified": boolean, // Whether block with this transaction was already verified.
  "fail_reason": string | null, // If transaction was rejected, this field will contain the description of an error.
  "prover_run": any // Low-level details on proving job for the block containing the transaction
}
```

For `/transactions_all`:

```js
{
  "tx_type": string, // Type of transaction, e.g. "Transfer".
  "from": string, // Transaction initiator.
  "to": string, // Transaction recipient.
  "token": number, // Token ID in the zkSync network.
  "amount": BigNumberish | "unknown amount", // Value associated with transaction.
  "fee": BigNumberish | null, // Fee used in transaction. Will be `null` for priority operations.
  "block_number": number, // Block that includes this transaction.
  "nonce": number, // Used nonce.
  "created_at": string, // Time of transaction creation.
  "fail_reason": string | null, // If transaction was rejected, this field will contain the description of an error.
  "tx": any // Transaction or priority operation representation depends on the operation type.
}
```

Also, there is an alternative endpoint to `/transactions` which can check the priority operation status based on its ID
(operation ID is emitted from the smart contract after request receiving): `/priority_operations/{operation_id}/`. Slash
in the end is mandatory for this endpoint.

Output format for this endpoint is:

```js
{
  "committed": boolean, // Whether block with this operation was committed in L2.
  "verified": boolean, // Whether block with this transaction was already verified.
  "prover_run": any // Low-level details on proving job for the block containing the transaction
}
```

Note that there is no `success` or `fail_reason` fields: if transaction was executed in L1, it **must** succeed in L2.

#### Examples

`ChangePubKey` transaction:

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/transactions/0xe8b239b55804e58c2a55e2b567a9572811c19230d6a0d1f4a7840e7a0952b33d
{
  "tx_hash": "e8b239b55804e58c2a55e2b567a9572811c19230d6a0d1f4a7840e7a0952b33d",
  "block_number": 2817,
  "success": true,
  "verified": true,
  "fail_reason": null,
  "prover_run": {
    "id": 2834,
    "block_number": 2817,
    "worker": "prover-76ccd5db5d",
    "created_at": "2020-11-03T15:25:14.814835Z",
    "updated_at": "2020-11-03T15:26:59.617458Z"
  }
}

$ curl https://rinkeby-api.zksync.io/api/v0.1/transactions_all/0xe8b239b55804e58c2a55e2b567a9572811c19230d6a0d1f4a7840e7a0952b33d
{
  "tx_type": "ChangePubKey",
  "from": "0x3223d59c7d7a4201bc0e30c2434b35686af55c0a",
  "to": "sync:56d1208dbcce3ad9223965eb1a2a6c47fdc8f099",
  "token": 17,
  "amount": "unknown amount",
  "fee": "0",
  "block_number": 2817,
  "nonce": 0,
  "created_at": "2020-11-03T15:12:38.236876",
  "fail_reason": null,
  "tx": {
    "fee": "0",
    "type": "ChangePubKey",
    "nonce": 0,
    "account": "0x3223d59c7d7a4201bc0e30c2434b35686af55c0a",
    "feeToken": 17,
    "accountId": 1653,
    "newPkHash": "sync:56d1208dbcce3ad9223965eb1a2a6c47fdc8f099",
    "signature": {
      "pubKey": "7988785998aacca1f1b82829ae229404fd47f23246da41e8a83f5538336aa9a8",
      "signature": "8aadd4063aec62aa826fa909b518ba00d307dfca3817bed0777411ae4a2054014eed941b5654f0e1855aa255e6dc94965194a5dba0331deba36a4a6663665005"
    },
    "ethSignature": "0x4d0a8a15f3f89f31e8da404dee45fae470ffad4f79509bd0549a135cbcd13642513314fe4590093bb64b48089aa0a38ba2fc29096a9b08535769701a0476b5871c"
  }
}
```

`Transfer` transaction:

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/transactions/0x1424388a45de738bae3175734bfdd8bb36abc8c31b2608018172574e8b7e38e2
{
  "tx_hash": "1424388a45de738bae3175734bfdd8bb36abc8c31b2608018172574e8b7e38e2",
  "block_number": 3072,
  "success": true,
  "verified": true,
  "fail_reason": null,
  "prover_run": {
    "id": 3091,
    "block_number": 3072,
    "worker": "prover-76ccd5db5d-d959v",
    "created_at": "2020-11-11T04:18:40.950155Z",
    "updated_at": "2020-11-11T04:19:33.761931Z"
  }
}

$ curl https://rinkeby-api.zksync.io/api/v0.1/transactions_all/0x1424388a45de738bae3175734bfdd8bb36abc8c31b2608018172574e8b7e38e2
{
  "tx_type": "Transfer",
  "from": "0xe0dbe2703fb3fc9cd36fb5717437e738f4002681",
  "to": "0x22d491bde2303f2f43325b2108d26f1eaba1e32b",
  "token": 0,
  "amount": "1000000000000000",
  "fee": "19820000000000",
  "block_number": 3072,
  "nonce": 46,
  "created_at": "2020-11-11T04:04:13.005530",
  "fail_reason": null,
  "tx": {
    "to": "0x22d491bde2303f2f43325b2108d26f1eaba1e32b",
    "fee": "19820000000000",
    "from": "0xe0dbe2703fb3fc9cd36fb5717437e738f4002681",
    "type": "Transfer",
    "nonce": 46,
    "token": 0,
    "amount": "1000000000000000",
    "accountId": 34,
    "signature": {
      "pubKey": "996899b637d70a48cf1f9551a9f7962aab2d86aadc31c84e4c2e901c57effd0a",
      "signature": "9efcf9f8dcfea13df92bb45d297d67ec7074c421963404f7963223a269e08c0706802a2a1c2fdf9a2252f23a73aea2c007cfd38b7ff092dae7dc7b93c0599101"
    }
  }
}
```

Priority operation request:

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/priority_operations/1/
{
  "committed": true,
  "verified": true,
  "prover_run": {
    "id": 4,
    "block_number": 4,
    "worker": "prover-7bffc88f66",
    "created_at": "2020-09-01T09:25:57.611153Z",
    "updated_at": "2020-09-01T09:26:53.508623Z"
  }
}
```

### Blocks details

REST API provides the following endpoints to retrieve blocks data:

- `/blocks?max_block={number?}&limit={number?}`: Returns the block headers.
- `/blocks/{block_number}`: Returns the block header for a certain block.
- `/blocks/{block_number}/transactions`: Returns the list of transactions included into a certain block.
- `/blocks/{block_number}/transaction/{transaction_id}`: Given the index of transaction in the block, return details
  about a certain transaction.

For `/blocks` endpoint, default values are:

- For `max_block`: the latest committed block.
- For `limit`: 100. Provided value cannot be greater than 100.

Block header format:

```js
{
  "block_number": number, // Sequential block number.
  "new_state_root": string, // State root hash obtained after this block execution.
  "block_size": number, // Size of the block in "chunks", atomic data pieces used in zkSync.
  "commit_tx_hash": string | null, // Hash of the L1 transaction sent to the smart contract to commit the block.
  "verify_tx_hash": string | null, // Hash of the L1 transaction sent to the smart contract to verify the block.
  "committed_at": string | null, // Timestamp of the block commitment.
  "verified_at": string | null // Timestamp of the block verification.
}
```

#### Examples

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/blocks\?max_block\=1000\&limit\=2
[
  {
    "block_number": 1000,
    "new_state_root": "sync-bl:2e816e6098b94ba7d2d722fc73efbd21f17dbed6545c36a7f53b6b33777bf923",
    "block_size": 6,
    "commit_tx_hash": "0xbfb0829a3afdc4a31b73bb78dff31f93181e5f77e4e2a1996b79a5f1ba60b151",
    "verify_tx_hash": "0x0da7def17a9e7540babf3bcddb54282dc11d3894c41487128835e2930705bc1d",
    "committed_at": "2020-09-23T13:23:23.555640Z",
    "verified_at": "2020-09-23T13:26:19.546521Z"
  },
  {
    "block_number": 999,
    "new_state_root": "sync-bl:0b84ecb0545f6974fd2204b8710b63a41b67752b4184b15e9a9b51e4bd8e4e4c",
    "block_size": 6,
    "commit_tx_hash": "0x8130bd3ac0bf81764649bd1f0ca2639a576ab790839ba9b21fe476f40c15776d",
    "verify_tx_hash": "0x652e3fb05727bcdf42039b313c98f93cbd04b2848f86e7b997b1df33847bf129",
    "committed_at": "2020-09-23T12:54:50.885532Z",
    "verified_at": "2020-09-23T12:55:51.546405Z"
  }
]
```

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/blocks/3000
{
  "block_number": 3000,
  "new_state_root": "sync-bl:0ac4d8f5d66e29bd5a2662c1826e0bac357f2ed82d2c0c7b84e590660d9f11d9",
  "block_size": 30,
  "commit_tx_hash": "0xb9ba0cd562a308714cf175228c6a46b9c82dbed48384075e8ce0c02a15156fc9",
  "verify_tx_hash": "0xb8acf6237370ced146c82ac3b1d841c0eb93c17924685007e168d7ceb30f8518",
  "committed_at": "2020-11-09T03:47:02.561554Z",
  "verified_at": "2020-11-09T03:50:32.252094Z"
}
```

### Explorer-like search

API provides a method to perform a search for block header by one of the following:

- Block number
- State root hash
- L1 commit hash
- L2 commit hash

The endpoint is `/search?query={query_string}`

#### Examples

```bash
# All of the following queries will result in the same response

# By the block number
$ curl https://rinkeby-api.zksync.io/api/v0.1/search\?query\=3000
# By the state root hash
$ curl https://rinkeby-api.zksync.io/api/v0.1/search\?query\=sync-bl:0ac4d8f5d66e29bd5a2662c1826e0bac357f2ed82d2c0c7b84e590660d9f11d9
# By the commit transaction hash
$ curl https://rinkeby-api.zksync.io/api/v0.1/search\?query\=0xb9ba0cd562a308714cf175228c6a46b9c82dbed48384075e8ce0c02a15156fc9
# By the verify transaction hash
$ curl https://rinkeby-api.zksync.io/api/v0.1/search\?query\=0xb8acf6237370ced146c82ac3b1d841c0eb93c17924685007e168d7ceb30f8518
```

### zkSync smart contract address

Endpoint address is `/testnet_config` (yup, the name is a bit confusing).

Endpoint response is encoded as follows:

```js
{
  "contractAddress": string
}
```

#### Examples

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/testnet_config
{
  "contractAddress": "0x82f67958a5474e40e1485742d648c0b0686b6e5d"
}
```

### List of tokens supported in zkSync

Endpoint address is `/tokens`.

Endpoint response is encoded as follows:

```js
{
  "address": string;
  "id": number;
  "symbol": string;
  "decimals": number;
}[]
```

#### Examples

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/tokens
[
  {
    "id": 0,
    "address": "0x0000000000000000000000000000000000000000",
    "symbol": "ETH",
    "decimals": 18
  },
  {
    "id": 1,
    "address": "0x3b00ef435fa4fcff5c209a37d1f3dcff37c705ad",
    "symbol": "USDT",
    "decimals": 6
  },
  // ... Remaining tokens omitted.
]
```

### List of tokens acceptable for fees

Endpoint address is `/tokens_acceptable_for_fees`.

Endpoint response is encoded as follows:

```js
{
  "address": string;
  "id": number;
  "symbol": string;
  "decimals": number;
}[]
```

#### Examples

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/tokens_acceptable_for_fees
[
  {
    "id": 1,
    "address": "0x74caf0ec4a3596284435992435990bb8fadedfce",
    "symbol": "DAI",
    "decimals": 18
  },
  {
    "id": 2,
    "address": "0xc0d570168256481167c180018dc141efc8437d64",
    "symbol": "wBTC",
    "decimals": 8
  },
  // ... Remaining tokens omitted.
]
```

### Withdrawal processing timings

Endpoint address is `/withdrawal_processing_time`

zkSync server provides information about estimated time of processing a withdrawal.

Withdrawal can be either normal or fast (with higher fee). Sending a fast withdrawal decreases a block generation time
limit, meaning that block will be generated sooner even if its capacity has not been filled.

Endpoint response is encoded as follows:

```js
{
    "normal": number, // Estimated time to generate a block with a withdrawal with a normal fee (in seconds).
    "fast": number, // Estimated time to generate a block with a fast withdrawal with a higher fee (in seconds).
}
```

#### Examples

```bash
$ curl https://rinkeby-api.zksync.io/api/v0.1/withdrawal_processing_time
{
  "normal": 750,
  "fast": 5
}
```

### Account History

zkSync server provides several methods to obtain the transactions history for an account.

Available endpoints are:

- `/account/{address}/history/{offset}/{limit}`: Loads the history for an account with a "hard" offset (e.g. offset 5
  will mean "load transactions starting from the 6th one ordered from newest").
- `/account/{address}/history/older_than`: Loads the transactions that are older than a certain transaction.
- `/account/{address}/history/newer_than`: Loads the transactions that are newer than a certain transaction.

All the endpoints return the list of transactions that satisfy the criteria, each transaction has the following JSON
schema:

<!-- cspell:ignore commited -->

```js
{
    "tx_id": string, // Unique identifier of a transaction, designated to be used in relative tx history queries.
    "hash": string, // Hash of a transaction.
    "eth_block"?: number, // Number of Ethereum block in which priority operation was added. `null` for transactions.
    "pq_id"?: number, // Identifier of a priority operation. `null` for transactions.
    "tx": object, // Transaction / Priority operation contents. Structure depends on the type of operation.
    "success"?: string, // Flag for successful transaction execution. `null` for priority operations.
    "fail_reason"?: string, // Reason of the transaction failure. May be `null`.
    "commited": boolean, // Flag for inclusion of transaction into some block.
    "verified": boolean, // Flag of having the block with transaction verified.
    "created_at": string, // Timestamp of the transaction execution.
}
```

#### Which method should be used

Endpoint `/account/{address}/history/{offset}/{limit}` only supports "hard" offsets, which mean that the invocation with
the same parameters may result in totally different results: if we will set `offset` value to `0`, then we will always
receive the `limit` latest transactions for the address.

This makes this method not really useful for pagination, as with a non-zero offset there may be overlaps between loaded
items: we've loaded 10 transactions, then we want to load the next 10, but at the same time one more transaction got
executed, and now query with the `offset` 10 will return one of the already seen transactions.

Thus, for pagination it is recommended to use `/account/{address}/history/older_than` and
`/account/{address}/history/newer_than` endpoints.

`/account/{address}/history/{offset}/{limit}` exists mostly for compatibility issues, and thus will not be described in
details.

##### Input parameters

Both `/account/{address}/history/older_than` and `/account/{address}/history/newer_than` endpoints require one mandatory
parameter -- address -- which is a part of the URL.

Also, there are two additional parameters: `tx_id` and `limit`, which are passed via the query string.

Description of the parameters:

| Parameter | Description                                               | Default value               | Max value |
| --------- | --------------------------------------------------------- | --------------------------- | --------- |
| address   | Account address in a hexadecimal form with a "0x" prefix. | N/A                         | N/A       |
| tx_id     | ID of the transaction to load the history from.           | Latest executed transaction | N/A       |
| limit     | Maximum amount of transactions in response.               | 100                         | 100       |

`older_than` endpoint loads transactions that are older than the transaction with given `tx_id`. This endpoint may be
used to implement "scrolling down" the history. `newer_than` endpoints loads transactions that are newer than the
transaction with given `tx_id`. This endpoint may be used to implement obtaining the new updates that occurred since the
last refresh.

Note that `tx_id` string internal structure is an implementation detail and its representation can change, thus one
should not rely on the format of this string.

It is expected that initially the lookup will be executed without `tx_id` parameter provided, and then the values to
base the client logic on will be taken from the initial query results.

#### Examples

```bash
https://rinkeby-api.zksync.io/api/v0.1/account/{..}/history/newer_than?tx_id=1,1&limit=20
```

Load at most 20 transactions newer than the first transaction of the first block.

---

```bash
https://rinkeby-api.zksync.io/api/v0.1/account/{..}/history/older_than
```

Load the last 100 executed transactions (`limit` and `tx_id` are not provided, thus default values are used).

---

```bash
https://rinkeby-api.zksync.io/api/v0.1/account/{..}/history/newer_than?limit=10
```

Load at most 10 unconfirmed transactions (we're requesting the transactions that are newer than the last committed tx).

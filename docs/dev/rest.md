# REST API

This section contains the description of endpoints provided by the zkSync server via REST API.

*Note:* This section is incomplete, thus description of some endpoints may be missing.

## Introduction

The REST API of zkSync server is available at "${ZKSYNC_SERVER_ADDRESS}/api/v0.1". In the examples
below we will use the `rinkeby` zkSync testnet API, thus URLs will
look start `https://rinkeby-api.zksync.io/api/v0.1/`.

All available API addresses for zkSync:

- `https://rinkeby-api.zksync.io/` - API for Rinkeby testnet server
- `https://ropsten-api.zksync.io/` - API for Ropsten testnet server
- `https://api.zksync.io/` - API for Mainnet server

To interact with REST API from javascript one may use any of available packages providing the
interface to perform HTTP requests. One of the simplest ways will be to use `Axios`, and in
that case the interaction will look as follows:

```js
import Axios from 'axios';

const url = 'https://rinkeby-api.zksync.io/api/v0.1/status';

const { data } = await Axios.get(url)
    .catch(e => {
        throw new Error(`Request to ${e.config.url} failed with status code ${e.response.status}`);
    });
```

## Account History

zkSync server provides several methods to obtain the transactions history for an account.

Available endpoints are:

- `/account/{address}/history/{offset}/{limit}`: Loads the history for an account with a "hard" offset
  (e.g. offset 5 will mean "load transactions starting from the 6th one ordered from newest").
- `/account/{address}/history/older_than`: Loads the transactions that are older than a certain transaction.
- `/account/{address}/history/newer_than`: Loads the transactions that are newer than a certain transaction.

All the endpoints return the list of transactions that satisfy the criteria, each transaction has the following
JSON schema:

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

### Which method should be used

Endpoint `/account/{address}/history/{offset}/{limit}` only supports "hard" offsets, which mean that the
invocation with the same parameters may result in totally different results: if we will set `offset` value
to `0`, then we will always receive the `limit` latest transactions for the address.

This makes this method not really useful for pagination, as with a non-zero offset there may be overlaps
between loaded items: we've loaded 10 transactions, then we want to load the next 10, but at the same time
one more transaction got executed, and now query with the `offset` 10 will return one of the already seen
transactions.

Thus, for pagination it is recommended to use `/account/{address}/history/older_than` and
`/account/{address}/history/newer_than` endpoints.

`/account/{address}/history/{offset}/{limit}` exists mostly for compatibility issues, and thus will not
be described in details.

### Input parameters

Both `/account/{address}/history/older_than` and `/account/{address}/history/newer_than` endpoints require
one mandatory parameter -- address -- which is a part of the URL.

Also, there are two additional parameters: `tx_id` and `limit`, which are passed via the query string.

Description of the parameters:

| Parameter | Description | Default value |
| -- | -- | -- |
| address | Address of account to load history for. Must be encoded as hexadecimal string with a "0x" prefix. | N/A |
| tx_id | Identifier of the transaction to load the history from. | The first transaction of the next block to be committed. |
| limit | Maximum amount of transactions to include to response. Must not be greater than 100. | 100 |

`older_than` endpoint loads transactions that are older than the transaction with given `tx_id`. This endpoint
may be used to implement "scrolling down" the history.
`newer_than` endpoints loads transactions that are newer than the transaction with given `tx_id`. This endpoint
may be used to implement obtaining the new updates that occurred since the last refresh.

Note that `tx_id` string internal structure is an implementation detail and its representation can change, thus one
should not rely on the format of this string.

It is expected that initially the lookup will be executed without `tx_id` parameter provided, and then the
values to base the client logic on will be taken from the initial query results.

### Examples

```
https://rinkeby-api.zksync.io/api/v0.1/account/{..}/history/newer_than?tx_id=1,1&limit=20
```

Load at most 20 transactions newer than the first transaction of the first block.

---

```
https://rinkeby-api.zksync.io/api/v0.1/account/{..}/history/older_than
```

Load the last 100 executed transactions (`limit` and `tx_id` are not provided, thus default values are used).

---

```
https://rinkeby-api.zksync.io/api/v0.1/account/{..}/history/newer_than?limit=10
```

Load at most 10 unconfirmed transactions (we're requesting the transactions that are newer than the last committed tx).

## Withdrawal processing timings

Endpoint address is `/withdrawal_processing_time`

zkSync server provides information about estimated time of processing a withdrawal.

Withdrawal can be either normal or fast (with higher fee). Sending a fast withdrawal decreases a block generation time limit,
meaning that block will be generated sooner even if its capacity has not been filled.

Endpoint response is encoded as follows:

```js
{
    "normal": number, // Estimated time to generate a block with a withdrawal with a normal fee (in seconds).
    "fast": number, // // Estimated time to generate a block with a fast withdrawal with a higher fee (in seconds).
}
```

### Examples

```
https://rinkeby-api.zksync.io/api/v0.1/withdrawal_processing_time
```

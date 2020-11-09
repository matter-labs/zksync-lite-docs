# JSON RPC

This section contains the description of endpoints provided by the zkSync server via JSON RPC.

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

| Parameter         | Type              | Description                                             |
| ----------------- | ----------------- | ------------------------------------------------------- |
| tx                | `Transaction`\*   | Signed zkSync transaction                               |
| ethereumSignature | `TxEthSignature?` | Ethereum signature required for 2-factor authentication |
| fastProcessing    | `boolean`         | Only for withdrawals: request faster block commitment   |

`Transaction` type can be expressed as follows:

```ts
type Transaction = Transfer | Withdraw | ChangePubKey | ForcedExit;
```

`fastProcessing` argument is only allowed for withdrawals and will result in a transaction rejection for any other kind
of transaction. Setting this field to `true` for withdrawals will make the block commitment timeout much smaller, so the
funds will be withdrawn faster. Note that fast withdrawals require bigger fee (for manual fee request, `FastWithdraw`
fee type must be chosen).

# Events

This document describes working with zkSync events in more detail in a language-agnostic way. For a quick introduction to the zkSync events with examples in Javascript please read [the quick introduction](../dev/events.md).

## Establishing the connection

Currently, events are only allowed on Ropsten. To establish the connection, you should connect to the endpoint `wss://ropsten-events.zkscan.io` via a WebSocket client.

Note that to maintain the connection your client should periodically ping the server. The recommended interval is 10 seconds.

## Event structure

After the connection is established, your client will receive messages about the events in the following format:

```json
{
  "block_number": 1100,
  "type": "account",
  "data": {
    // Event-specific data
  }
}
```

The `block_number` is the number of the zkSync block in which the event happened
The `type` is the type of the event, which is either `account`, `block` or the `transaction`. The `data` is the data specific to the event.

### Account events

The account events are events that are happening to zkSync accounts. There are four types of account events: `create`, `delete`, `update_balance`, `change_pub_key_hash`. The `delete` operation is currently disabled.

The `data` for each `account` event has the following format:

```json
{
  "update_type": "create",
  "status": "committed",
  "update_details": {
    // details about account update
  }
}
```

The `status` field is equal to either `committed` when the update was committed onchain or `finalized` when the block with such event has been verified with zero-knowledge proofs onchain.

Here are full examples of the account events:

```json
{
  "block_number": 25,
  "type": "account",
  "data": {
    "update_type": "create",
    "status": "committed",
    "update_details": {
      "account_id": 19,
      "nonce": 0
    }
  }
}
```

```json
{
  "block_number": 24,
  "type": "account",
  "data": {
    "update_type": "update_balance",
    "status": "committed",
    "update_details": {
      "account_id": 18,
      "nonce": 0,
      "token_id": 0,
      "new_balance": "2000000000000000000000"
    }
  }
}
```

```json
{
  "block_number": 27,
  "type": "account",
  "data": {
    "update_type": "change_pub_key_hash",
    "status": "committed",
    "update_details": {
      "account_id": 20,
      "nonce": 1,
      "new_pub_key_hash": "sync:8af45346a8456d7a1fc26507ce1699329efcb4c3"
    }
  }
}
```

### Block events

The block events are events notifying whether the block has been committed or finalized. Such events have the following structure:

```json
{
  "block_number": 27,
  "type": "block",
  "data": {
    "status": "committed",
    "block_number": 27,
    "new_state_root": "sync-bl:194d9ce3c118867f6132c2f92bbb602b230d9d777372f6198801b0699afecbc0",
    "block_size": 32,
    "commit_tx_hash": "0xde56e5a61e4588d9c25246a841f05675b9b10cb26def279475580fe58a0b443f",
    "committed_at": "2021-05-20T11:32:35.433853Z"
  }
}
```

The `status` field is equal to either `committed` when the update was committed onchain or `finalized` when the block with such event has been verified with zero-knowledge proofs onchain. It can also be equal to `reverted` if the block has been reverted. A block that was finalized can never be reverted.

Here is an example of a `finalized` block event:

```json
{
  "block_number": 24,
  "type": "block",
  "data": {
    "status": "finalized",
    "block_number": 24,
    "new_state_root": "sync-bl:15b15f8c1b20aff7da841a77250c3ada37997e79beded3ea65641f7e0db7239a",
    "block_size": 32,
    "commit_tx_hash": "0x274e78480e51b8eb4186effab2f1c940914984eecd224675155eec26e359820d",
    "verify_tx_hash": "0xb670313796467bd97d8ed40071da5c67bc2ac123d435c0131ea9fec2894c03c0",
    "committed_at": "2021-05-20T11:32:26.432639Z",
    "verified_at": "2021-05-20T11:32:37.443933Z"
  }
}
```

### Transacton events

The transaction events notify about transactions being committed or finalized. They notify about both L2 transactions and L1 priority operations. The `data` for each event looks the following way:

```json
{
  "tx_hash": "0xf62c8a0bc8d0ead1abbd3b8772bb27973e40e42027f06ab3952e7dc29cb69c27",
  "account_id": 18,
  "token_id": 0,
  "block_number": 24,
  "tx": {
    // Tx data unique for each transaction type
  },
  "status": "committed",
  "created_at": "2021-05-20T11:32:26.232439Z"
}
```

The `status` field is equal to either `committed` when the transaction was committed onchain or `finalized` when the block with such event has been verified with zero-knowledge proofs onchain. It can also be equal to `reverted` if the transaction was invalid.

Here are a few examples for transaction events:

#### Transfer:

```json
{
  "block_number": 25,
  "type": "transaction",
  "data": {
    "tx_hash": "sync-tx:5237455cb49ef063a81b77f1848f4ed46196ff2f8b55faa945c117d7d5282159",
    "account_id": 18,
    "token_id": 0,
    "block_number": 25,
    "tx": {
      "to": "0x675c03cadf1528af6260f1f1be1f557bbcefbb05",
      "fee": "31000000000000",
      "from": "0xdeaafff966f14498d1c9cd5561c92c914564aef9",
      "type": "Transfer",
      "nonce": 1,
      "token": 0,
      "amount": "10000000000000000000",
      "accountId": 18,
      "signature": {
        "pubKey": "4a2ef46ea7765c77c8ca84cfb0597a527985ee51b5e5be28531dbade85ee1498",
        "signature": "366ccd69f9183c2b78d0448bf0e552b95a4f47f343d9dff7ba60537c50efab9b8d18b4693f8f8ef9787e6e1d60a6cecdc21c9871d59d8a38935458ba12495f00"
      },
      "validFrom": 0,
      "validUntil": 4294967295
    },
    "status": "finalized",
    "created_at": "2021-05-20T11:32:28.840918Z"
  }
}
```

#### Withdraw:

```json
{
  "block_number": 28,
  "type": "transaction",
  "data": {
    "tx_hash": "sync-tx:37f1adc19bd78cecc56bcdb3453d7cfd340434757f1d9bbe56dddb0d2de66047",
    "account_id": 22,
    "token_id": 0,
    "block_number": 28,
    "tx": {
      "to": "0x1cf9517f403235c7e871c5d96e224326a404e12d",
      "fee": "141400000000000",
      "fast": false,
      "from": "0x1cf9517f403235c7e871c5d96e224326a404e12d",
      "type": "Withdraw",
      "nonce": 1,
      "token": 0,
      "amount": "10000000000000000000",
      "accountId": 22,
      "signature": {
        "pubKey": "71b2ec034927306a016374419f806442a84af73e175865961f6b627adbc51b24",
        "signature": "ae923a804ef5999dba0d0c017aa4417b93b36fe24e1fe5d394b2a8b390e45b98f5e08dce47c7a1b675db9c0fab5bf4ab1b0c6059bb9d9fe7cb134deb398e2705"
      },
      "validFrom": 0,
      "validUntil": 4294967295
    },
    "status": "committed",
    "created_at": "2021-05-20T11:32:36.873472Z"
  }
}
```

#### Deposit:

```json
{
  "block_number": 27,
  "type": "transaction",
  "data": {
    "tx_hash": "0x4bde9a0ab7eff4850799a0961afadad2d4914cfa332a5a7a140a6a9b8b5c57fc",
    "account_id": 22,
    "token_id": 2,
    "block_number": 27,
    "tx": {
      "type": "Deposit",
      "account_id": 22,
      "priority_op": {
        "to": "0x1cf9517f403235c7e871c5d96e224326a404e12d",
        "from": "0x36615cf349d7f6344891b1e7ca7c72883f5dc049",
        "token": 2,
        "amount": "2000000000000000000000"
      }
    },
    "status": "finalized",
    "created_at": "2021-05-20T11:32:33.232676Z"
  }
}
```

## Filters

After the connection is established, the client needs to send the filter for the events. A filter is a JSON object of the following type:

```json
{
  "account": {
    // `account` events filter
  },
  "block": {
    // `block` events filter
  },
  "transaction": {
    // `transaction` events filter
  }
}
```

Some of the fields may be omitted. For instance, the following filter tells that the client wants to receive only `account` events of a certain type.

```json
{
  "account": {
    // account filter
  }
}
```

If the filter object is empty, it means "no filter". For instance:

```json
{
  "account": {}
}
```

This means that the client wants to receive all `account` events.

```json
{
  "account": {},
  "block": {}
}
```

This means that the client wants to receive all `account` and all `block` events.

```json
{
  "account": {},
  "block": {},
  "transaction": {}
}
```

This means that the client wants to receive all events. Equivalently, the client can specify the empty object as the filter `{}`, which also would mean that the client wants to receive all events.

### Filter account events

The `account` events can be filtered by several parameters:

```json
{
  "accounts": [],
  "tokens": [],
  "status": "committed"
}
```

The `accounts` parameter is an array of account ids, the events about which should be sent to the client. If not specified, events about any account will be sent.

The `tokens` parameter is an array of token ids, which were involved in the account update.

The `status` is the status of updates that need to be sent.

### Filter block events

`block` events can only be filtered by the status of the block:

```json
{
  "status": "finalized"
}
```

### Filter transaction events

The `transaction` events can be filtered by several parameters:

```json
"types": [],
"accounts": [],
"tokens": [],
"status": "finalized",
```

The `accounts`, `tokens`, and `status` parameters have the same meaning as for the `account` events filters.

The `types` is an array of types of `transaction` events about which you wish to receive. The following transaction types are supported: `transfer`, `withdraw`, `change_pub_key`, `forced_exit`, `full_exit`, `deposit`.

### Examples

Here we can see some possible examples of filtering:

```typescript
// Here we receive all the events from zkSync
{
}
```

```json
// Here we are only interested in the committed events about
// accounts with ids 1,2,3 which change their balance of token with id 0 (ETH)
{
  "account": {
    "status": "committed",
    "accounts": [1, 2, 3],
    "tokens": [0]
  }
}
```

```json
// Here we are only interested in the finalized events of any account
// and any block verification events any transaction events (both committed and finalized)
{
  "account": {
      "status": "finalized"
  },
  "block": {
      "status": "reverted"
  },
  "transaction": {}
};
```

## Note on stability

Committed blocks can be reverted and the transactions inside them will be reverted as well. The client will be notiifed with an appropriate `block` event when the block is reverted, but it will not be notified about the individual `transaction` events and the `account` updates to be reverted as well. It is the responsibility of the client to revert account updates or any transactions if these affect the state of the client.

It is not recommeneded to rely on the `committed` events and the client should accept only `finalized` events, unless the cautious measures explained above were taken into account. The `finalized` blocks can never be reverted as it is enforced by an Ethereum smart contract.

## Reading past events

To be able to receive past events is a very important feature and will be released very soon.

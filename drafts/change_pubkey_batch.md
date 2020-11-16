<!-- This is a draft of ChangePubKey in the batch description -->

### Sending `ChangePubKey` operation in batch

`ChangePubKey` operation has Ethereum signature as a mandatory field of transaction, and in only can be omitted if
operation was approved on-chain via a separate transaction.

Thus, if `ChangePubKey` is a part of the batch, it may have the same Ethereum signature as the batch signature. The
logic may be expressed as follows:

```js
const changePubKeyMessage = getChangePubKeyMessage(changePubKeyTx);
const batchMessage = getBatchMessage(transactions);
const bytes = concat([changePubKeyMessage, batchMessage]);
const hash = ethers.utils.keccak256(bytes).slice(2);
const message = Uint8Array.from(Buffer.from(hash, 'hex'));
```

This obtained message should be used as both batch Ethereum signature and ChangePubKey Ethereum signature.

**Note:** There must not be more than one `ChangePubKey` transaction in the batch.

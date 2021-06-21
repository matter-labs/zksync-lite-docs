# Fees
zkSync requires transaction fees to cover expenses for network maintenance.

Fees for each type of transaction are calculated based on:
-	amount of data to be sent to the Ethereum network
-	current gas price
-	costs of computations to generate the ZK proof for the block containing the transaction.

Since many transactions are included in one block, the cost is spread among all of them, resulting in very small fees.

You can get a fee for your transaction like this:
```TypeScript
async getTransactionFee(
    txType: "Withdraw" | "Transfer" | "FastWithdraw" | ChangePubKeyFee | LegacyChangePubKeyFee,
    address: Address,
    tokenLike: TokenLike
): Promise<Fee>;
```

For details check our [SDK section](https://zksync.io/api/sdk/js/providers.html#get-transaction-fee-from-the-server)

To get the amount of fee  via API call use the [`get_tx_fee`]( https://zksync.io/api/v0.1.html#get-tx-fee) method.

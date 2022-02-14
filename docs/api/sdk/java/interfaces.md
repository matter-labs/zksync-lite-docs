# Interfaces

## Async Wallet inteface

```java
public interface ZkASyncWallet {

    public static <A extends ChangePubKeyVariant, T extends EthSigner<A>> DefaultZkASyncWallet<A, T> build(T ethSigner, ZkSigner zkSigner, ZkSyncTransport transport) {
        return new DefaultZkASyncWallet<>(ethSigner, zkSigner, new DefaultAsyncProvider(transport));
    }

    public static <A extends ChangePubKeyVariant, T extends EthSigner<A>> DefaultZkASyncWallet<A, T> build(T ethSigner, ZkSigner zkSigner, AsyncProvider provider) {
        return new DefaultZkASyncWallet<>(ethSigner, zkSigner, provider);
    }

    /**
     * Send set signing key transaction
     *
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param onchainAuth - Use authentication onchain
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    CompletableFuture<String> setSigningKey(TransactionFee fee, Integer nonce, boolean onchainAuth, TimeRange timeRange);

    /**
     * Send transfer coins (or tokens) transaction
     *
     * @param to - Ethereum address of the receiver of the funds
     * @param amount - Amount of the funds to be transferred
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    CompletableFuture<String> syncTransfer(String to, BigInteger amount, TransactionFee fee, Integer nonce, TimeRange timeRange);

    /**
     * Send withdraw coins (or tokens) transaction
     * Given funds amount will be withdrawn to the wallet on Ethereum L1 network
     *
     * @param ethAddress - Ethereum address of the receiver of the funds
     * @param amount - Amount of the funds to be withdrawn
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param fastProcessing - Increase speed of the execution
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    CompletableFuture<String> syncWithdraw(String ethAddress,
                        BigInteger amount,
                        TransactionFee fee,
                        Integer nonce,
                        boolean fastProcessing,
                        TimeRange timeRange);

    /**
     * Send forced exit transaction
     *
     * @param target - Ethereum address of the receiver of the funds
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    CompletableFuture<String> syncForcedExit(String target, TransactionFee fee, Integer nonce, TimeRange timeRange);

    /**
     * Send mint NFT transaction
     *
     * @param recipient - Ethereum address of the receiver of the NFT
     * @param contentHash - Hash for creation Non-fundible token
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @return - Hash of the sent transaction in hex string
     */
    CompletableFuture<String> syncMintNFT(String recipient, String contentHash, TransactionFee fee, Integer nonce);

    /**
     * Send withdraw NFT transaction
     * NFT will be withdrawn to the wallet in Ethereum L1 network
     *
     * @param to - Ethereum address of the receiver of the NFT
     * @param token - Existing Non-fundible token
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    CompletableFuture<String> syncWithdrawNFT(String to, NFT token, TransactionFee fee, Integer nonce, TimeRange timeRange);

    /**
     * Send transfer NFT transaction
     *
     * @param to - Ethereum address of the receiver of the NFT
     * @param token - Existing Non-fundible token
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the transcation
     * @return - List of 2 hashes of the sent transactions in hex string
     */
    CompletableFuture<List<String>> syncTransferNFT(String to, NFT token, TransactionFee fee, Integer nonce, TimeRange timeRange);

    /**
     * Send swap transaction
     *
     * @param order1 - Signed order
     * @param order2 - Signed order
     * @param amount1 - Amount funds to be swapped
     * @param amount2 - Amount funds to be swapped
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @return - Hash of the sent transaction in hex string
     */
    CompletableFuture<String> syncSwap(Order order1, Order order2, BigInteger amount1, BigInteger amount2, TransactionFee fee, Integer nonce);

    /**
     * Build swap order
     *
     * @param recipient - Ethereum address of the receiver of the funds
     * @param sell - Token to sell
     * @param buy - Token to buy
     * @param ratio - Swap ratio
     * @param amount - Amount to swap
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the order
     * @return - Signed order object
     */
    CompletableFuture<Order> buildSignedOrder(String recipient, Token sell, Token buy, Tuple2<BigInteger, BigInteger> ratio, BigInteger amount, Integer nonce, TimeRange timeRange);

    /**
     * Build swap limit order
     *
     * @param recipient - Ethereum address of the receiver of the funds
     * @param sell - Token to sell
     * @param buy - Token to buy
     * @param ratio - Swap ratio
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the order
     * @return - Signed order object
     */
    CompletableFuture<Order> buildSignedLimitOrder(String recipient, Token sell, Token buy, Tuple2<BigInteger, BigInteger> ratio, Integer nonce, TimeRange timeRange);

    /**
     * Submit signed transaction to ZkSync network
     *
     * @param <T> - ZkSyncTransaction transaction type
     * @param transaction - Prepared signed transaction
     * @return - Hash of the sent transaction in hex string
     */
    <T extends ZkSyncTransaction> CompletableFuture<String> submitTransaction(SignedTransaction<T> transaction);

    /**
     * Check if wallet public key hash is set
     *
     * @return - True if pubkey hash is set otherwise false
     */
    CompletableFuture<Boolean> isSigningKeySet();

    /**
     * Get current account state
     *
     * @return - State object
     */
    CompletableFuture<AccountState> getState();

    /**
     * Get low level ZkSync API provider
     *
     * @return - Provider
     */
    AsyncProvider getProvider();

    /**
     * Get wallet public key hash
     *
     * @return - Pubkey hash in ZkSync format
     */
    CompletableFuture<String> getPubKeyHash();

    /**
     * Get id of the account within current ZkSync network
     *
     * @return - Account Id
     */
    CompletableFuture<Integer> getAccountId();

    /**
     * Get latest commited nonce value of the account
     *
     * @return - Nonce
     */
    CompletableFuture<Integer> getNonce();

    /**
     * Get list of the supported tokens by current ZkSync network
     *
     * @return - Token list object
     */
    CompletableFuture<Tokens> getTokens();

    /**
     * Get current wallet address
     *
     * @return - Wallet address in hex string
     */
    String getAddress();

    EthereumProvider createEthereumProvider(Web3j web3j, ContractGasProvider contractGasProvider);
}
```

## Wallet interface

```java
public interface ZkSyncWallet {

    public static <A extends ChangePubKeyVariant, T extends EthSigner<A>> DefaultZkSyncWallet<A, T> build(T ethSigner, ZkSigner zkSigner, ZkSyncTransport transport) {
        return new DefaultZkSyncWallet<>(ethSigner, zkSigner, new DefaultProvider(transport));
    }

    public static <A extends ChangePubKeyVariant, T extends EthSigner<A>> DefaultZkSyncWallet<A, T> build(T ethSigner, ZkSigner zkSigner, Provider provider) {
        return new DefaultZkSyncWallet<>(ethSigner, zkSigner, provider);
    }

    /**
     * Send set signing key transaction
     *
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param onchainAuth - Use authentication onchain
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    String setSigningKey(@NotNull TransactionFee fee, @Nullable Integer nonce, @NotNull boolean onchainAuth, @Nullable TimeRange timeRange);

    /**
     * Send transfer coins (or tokens) transaction
     *
     * @param to - Ethereum address of the receiver of the funds
     * @param amount - Amount of the funds to be transferred
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    String syncTransfer(@NotNull String to, @NotNull BigInteger amount, @NotNull TransactionFee fee, @Nullable Integer nonce, @Nullable TimeRange timeRange);

    /**
     * Send withdraw coins (or tokens) transaction
     * Given funds amount will be withdrawn to the wallet on Ethereum L1 network
     *
     * @param ethAddress - Ethereum address of the receiver of the funds
     * @param amount - Amount of the funds to be withdrawn
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param fastProcessing - Increase speed of the execution
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    String syncWithdraw(@NotNull String ethAddress,
                        @NotNull BigInteger amount,
                        @NotNull TransactionFee fee,
                        @Nullable Integer nonce,
                        @NotNull boolean fastProcessing,
                        @Nullable TimeRange timeRange);

    /**
     * Send forced exit transaction
     *
     * @param target - Ethereum address of the receiver of the funds
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    String syncForcedExit(@NotNull String target, @NotNull TransactionFee fee, @Nullable Integer nonce, @Nullable TimeRange timeRange);

    /**
     * Send mint NFT transaction
     *
     * @param recipient - Ethereum address of the receiver of the NFT
     * @param contentHash - Hash for creation Non-fundible token
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @return - Hash of the sent transaction in hex string
     */
    String syncMintNFT(@NotNull String recipient, @NotNull String contentHash, @NotNull TransactionFee fee, @Nullable Integer nonce);

    /**
     * Send withdraw NFT transaction
     * NFT will be withdrawn to the wallet in Ethereum L1 network
     *
     * @param to - Ethereum address of the receiver of the NFT
     * @param token - Existing Non-fundible token
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the transcation
     * @return - Hash of the sent transaction in hex string
     */
    String syncWithdrawNFT(@NotNull String to, @NotNull NFT token, @NotNull TransactionFee fee, @Nullable Integer nonce, @Nullable TimeRange timeRange);

    /**
     * Send transfer NFT transaction
     *
     * @param to - Ethereum address of the receiver of the NFT
     * @param token - Existing Non-fundible token
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the transcation
     * @return - List of 2 hashes of the sent transactions in hex string
     */
    List<String> syncTransferNFT(@NotNull String to, @NotNull NFT token, @NotNull TransactionFee fee, @Nullable Integer nonce, @Nullable TimeRange timeRange);

    /**
     * Send swap transaction
     *
     * @param order1 - Signed order
     * @param order2 - Signed order
     * @param amount1 - Amount funds to be swapped
     * @param amount2 - Amount funds to be swapped
     * @param fee - Fee amount for paying the transaction
     * @param nonce - Nonce value
     * @return - Hash of the sent transaction in hex string
     */
    String syncSwap(@NotNull Order order1, @NotNull Order order2, @NotNull BigInteger amount1, @NotNull BigInteger amount2, @NotNull TransactionFee fee, @Nullable Integer nonce);

    /**
     * Build swap order
     *
     * @param recipient - Ethereum address of the receiver of the funds
     * @param sell - Token to sell
     * @param buy - Token to buy
     * @param ratio - Swap ratio
     * @param amount - Amount to swap
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the order
     * @return - Signed order object
     */
    Order buildSignedOrder(@NotNull String recipient, @NotNull Token sell, @NotNull Token buy, @NotNull Tuple2<BigInteger, BigInteger> ratio, @NotNull BigInteger amount, @Nullable Integer nonce, @Nullable TimeRange timeRange);

    /**
     * Build swap limit order
     *
     * @param recipient - Ethereum address of the receiver of the funds
     * @param sell - Token to sell
     * @param buy - Token to buy
     * @param ratio - Swap ratio
     * @param nonce - Nonce value
     * @param timeRange - Timerange of validity of the order
     * @return - Signed order object
     */
    Order buildSignedLimitOrder(@NotNull String recipient, @NotNull Token sell, @NotNull Token buy, @NotNull Tuple2<BigInteger, BigInteger> ratio, @Nullable Integer nonce, @Nullable TimeRange timeRange);

    /**
     * Submit signed transaction to ZkSync network
     *
     * @param <T> - ZkSyncTransaction transaction type
     * @param transaction - Prepared signed transaction
     * @return - Hash of the sent transaction in hex string
     */
    <T extends ZkSyncTransaction> String submitTransaction(SignedTransaction<T> transaction);

    /**
     * Check if wallet public key hash is set
     *
     * @return - True if pubkey hash is set otherwise false
     */
    boolean isSigningKeySet();

    /**
     * Get current account state
     *
     * @return - State object
     */
    AccountState getState();

    /**
     * Get low level ZkSync API provider
     *
     * @return - Provider
     */
    Provider getProvider();

    /**
     * Get wallet public key hash
     *
     * @return - Pubkey hash in ZkSync format
     */
    String getPubKeyHash();

    /**
     * Get id of the account within current ZkSync network
     *
     * @return - Account Id
     */
    Integer getAccountId();

    /**
     * Get current wallet address
     *
     * @return - Wallet address in hex string
     */
    String getAddress();

    /**
     * Get list of the supported tokens by current ZkSync network
     *
     * @return - Token list object
     */
    Tokens getTokens();

    EthereumProvider createEthereumProvider(Web3j web3j, ContractGasProvider contractGasProvider);
}
```

## Provider interface

```java
public interface Provider {

    /**
     * Get current state of the account
     *
     * @param accountAddress - Address of the account in hex format
     * @return AccountState that represent state of the account
     */
    AccountState getState(String accountAddress);

    /**
     * Get fee of transaction that means cost of transaction execution in ZkSync network
     *
     * @param feeRequest - Transaction information for estimation fee
     * @return Details of fee amount for transaction execution
     */
    TransactionFeeDetails getTransactionFee(TransactionFeeRequest feeRequest);

    /**
     * Get fee of batch of transaction that means cost of transaction batch execution in ZkSync network
     *
     * @param feeRequest - Transaction batch information for estimation fee
     * @return Details of fee amount for transaction execution
     */
    TransactionFeeDetails getTransactionFee(TransactionFeeBatchRequest feeRequest);

    /**
     * Get list of tokens supported by ZkSync network
     *
     * @return Token information
     */
    Tokens getTokens();

    /**
     * Get the token price in USD known to server
     *
     * @param token - Token details object
     * @return current token price
     */
    BigDecimal getTokenPrice(Token token);

    /**
     * Submit signed transaction to ZkSync network
     *
     * @param tx - Signed transaction object
     * @param ethereumSignature - Signature of Ethereum account as 2-FA authorization
     * @param fastProcessing - Mark the transaction should be executed as soon as possible
     * @return Hash of the sent transaction in ZkSync network
     */
    String submitTx(ZkSyncTransaction tx, EthSignature ethereumSignature, boolean fastProcessing);

    /**
     * Submit signed transaction to ZkSync network
     *
     * @param tx - Signed transaction object
     * @param fastProcessing - Mark the transaction should be executed as soon as possible
     * @return Hash of the sent transaction in ZkSync network
     */
    String submitTx(ZkSyncTransaction tx, boolean fastProcessing);

    /**
     * Submit signed transaction batch to ZkSync network
     *
     * @param txs- List of signed transaction objects
     * @param ethereumSignature - Signature of Ethereum account as 2-FA authorization
     * @return List of hashes of the sent transactions in ZkSync network
     */
    List<String> submitTxBatch(List<Pair<ZkSyncTransaction, EthSignature>> txs, EthSignature ethereumSignature);

    /**
     * Submit signed transaction batch to ZkSync network
     *
     * @param txs - List of signed transaction objects
     * @return List of hashes of the sent transactions in ZkSync network
     */
    List<String> submitTxBatch(List<Pair<ZkSyncTransaction, EthSignature>> txs);

    /**
     * Get details of the transaction in ZkSync network by hash
     *
     * @param txHash - Hash of the transaction in format: `sync-tx:[hex]`
     * @return Details of the transaction
     */
    TransactionDetails getTransactionDetails(String txHash);

    /**
     * Get address of ZkSync contract deployed in Ethereum network
     *
     * @return Address of contract in hex
     */
    ContractAddress contractAddress();

    /**
     * Get information for Priority Operation by id
     *
     * @param priorityOperationId - Identifier of Priority Operation
     * @return Information of Priority Operation
     */
    EthOpInfo getEthOpInfo(Integer priorityOperationId);

    /**
     * Get the amount of confirmations on Ethereum required for Priority Operation to be processed
     *
     * @return Amount of confirmations
     */
    BigInteger getConfirmationsForEthOpAmount();

    /**
     * Get hash of the transaction in Ethereum network by hash of the transaction sent in ZkSync
     *
     * @param zkSyncWithdrawalHash - Hash of the transaction in format: `sync-tx:[hex]`
     * @return Hash of the sent transaction in Ethereum network
     */
    String getEthTransactionForWithdrawal(String zkSyncWithdrawalHash);

    /**
     * Create default ZkSync provider by given chain id
     *
     * @param chainId - Chain id supported by ZkSync network
     * @return ZkSync provider object
     */
    static Provider defaultProvider(ChainId chainId) {
        HttpTransport transport = null;
        switch (chainId) {
            case Mainnet: transport = new HttpTransport("https://api.zksync.io/jsrpc"); break;
            case Rinkeby: transport = new HttpTransport("https://rinkeby-api.zksync.io/jsrpc"); break;
            case Ropsten: transport = new HttpTransport("https://ropsten-api.zksync.io/jsrpc"); break;
            case Localhost: transport = new HttpTransport("http://127.0.0.1:3030"); break;
        }
        return new DefaultProvider(transport);
    }

}
```

## Ethereum provider interface

```java
public interface EthereumProvider {

    /**
     * Send approve transaction to token contract.
     *
     * @param token - Token object supported by ZkSync
     * @param limit - Maximum amount to approve for ZkSync contract
     * @return CompletableFuture for waiting for transaction mine
     */
    CompletableFuture<TransactionReceipt> approveDeposits(Token token, Optional<BigInteger> limit);

    /**
     * Send transfer transaction. This is the regular transfer of ERC20 token
     *
     * @param token - Token object supported by ZkSync
     * @param amount - Amount tokens to transfer
     * @param to - Address of receiver tokens
     * @return CompletableFuture for waiting for transaction mine
     */
    CompletableFuture<TransactionReceipt> transfer(Token token, BigInteger amount, String to);

    /**
     * Send deposit transaction to ZkSync contract. For ERC20 token must be approved before. @see EthereumProvider.approveDeposits
     *
     * @param token - Token object supported by ZkSync
     * @param amount - Amount tokens to transfer
     * @param userAddress - Address of L2 receiver deposit in ZkSync
     * @return CompletableFuture for waiting for transaction mine
     */
    CompletableFuture<TransactionReceipt> deposit(Token token, BigInteger amount, String userAddress);

    /**
     * Send withdraw transaction to ZkSync contract.
     *
     * @param token - Token object supported by ZkSync
     * @param amount - Amount tokens to transfer
     * @return CompletableFuture for waiting for transaction mine
     */
    CompletableFuture<TransactionReceipt> withdraw(Token token, BigInteger amount);

    /**
     * Return back deposit by token.
     *
     * @param token - Token object supported by ZkSync
     * @param accountId - Id of account in ZkSync
     * @return CompletableFuture for waiting for transaction mine
     */
    CompletableFuture<TransactionReceipt> fullExit(Token token, Integer accountId);

    /**
     * Setup L2 public key hash for specific nonce
     *
     * @param pubKeyhash - Public key hash generated by ZkSigner
     * @param nonce - Nonce value of account
     * @return CompletableFuture for waiting for transaction mine
     */
    CompletableFuture<TransactionReceipt> setAuthPubkeyHash(String pubKeyhash, BigInteger nonce);

    /**
     * Check if deposit is approved in enough amount
     *
     * @param token - Token object supported by ZkSync
     * @param threshold - Minimum threshold of approved tokens
     * @return CompletableFuture of blockchain smart-contract call
     */
    CompletableFuture<Boolean> isDepositApproved(Token token, Optional<BigInteger> threshold);

    /**
     * Check if public key hash set for specific nonce
     *
     * @param nonce - Nonce value of account
     * @return CompletableFuture of blockchain smart-contract call
     */
    CompletableFuture<Boolean> isOnChainAuthPubkeyHashSet(BigInteger nonce);

    /**
     * Get balance of account in Ethereum
     *
     * @return CompletableFuture of blockchain call
     */
    CompletableFuture<BigInteger> getBalance();

    /**
     * Get current nonce of account
     *
     * @return CompletableFuture of blockchain call
     */
    CompletableFuture<BigInteger> getNonce();

    /**
     * Get ZkSync smart-contract address in Ethereum blockchain
     *
     * @return Contract address in hex string
     */
    String contractAddress();

}
```

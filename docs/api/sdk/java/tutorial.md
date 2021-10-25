# Getting started

1. Connect to the zkSync network.
2. Deposit assets from Ethereum into zkSync.
3. Make transfers.
4. Withdraw funds back to Ethereum mainnet (or testnet).

## Supported platforms

Library contains precompiled binary of zkSync cryptography implementation. Therefore currently we're support only these
platforms:

### Desktop

- Linux x86_64
- OSX x86_64 (MacOS 11 BigSur included)
- Windows x86_64

### Android

- Arm64-v8a
- Armeabi-v7a
- x86
- x86_64

## Adding dependencies

### Desktop

Here you need only add just one dependency into your build configuration. `Gradle`

```groovy
dependencies {
    implementation ('io.zksync:zksync:0.0.8')
}
```

`Maven`

```xml
<dependencies>
    <dependency>
        <groupId>io.zksync</groupId>
        <artifactId>zksync</artifactId>
        <version>0.0.8</version>
    </dependency>
</dependencies>
```

Library published to Maven Central thus for Gradle you need to enable it.

```groovy
repositories {
    mavenCentral()

    // for SNAPSHOTS
    maven {
        url "https://oss.sonatype.org/content/repositories/snapshots/"
    }
}
```

### Android

For Android adding dependencies little bit difficult because it requires in including aar package with native binaries.

```groovy
implementation("org.web3j:core:4.6.0-android")

implementation 'org.scijava:native-lib-loader:2.3.4'
implementation ('io.zksync:zksync:0.0.8') {
    exclude group: 'io.zksync.sdk', module: 'zkscrypto'
    exclude group: 'net.java.dev.jna', module: 'jna'
}
implementation 'io.zksync.sdk:zkscrypto:0.0.5.4@aar'
implementation 'net.java.dev.jna:jna:5.6.0@aar'
```

## Creating signers

All operation messages in zkSync network must be signed by your secured private key. We're split thats keys as Level 1
(L1) for Ethereum and Level 2 (L2) for zkSync network.

For using zkSync network you need to create `io.zksync.signer.ZkSigner` instance. You can do it using one of the next
options:

Using seed bytes (like MNEMONIC phrase). Must have length >= 32

```java
ZkSigner zkSigner = ZkSigner.fromSeed(SEED);
```

Using raw private key

```java
// You can use built-in Web3j converter for convertion private key encoded to hex into byte array
byte [] privateKey = Numeric.hexStringToByteArray("0x...");
ZkSigner zkSigner = ZkSigner.fromRawPrivateKey(privateKey);
```

Using EthSigner (explained below). The private key used by io.zksync.signer.ZkSigner is implicitly derived from Ethereum
signature of a special message.

```java
EthSigner ethSigner = ...
ZkSigner zkSigner = ZkSigner.fromEthSigner(ethSigner, ChainId.Mainnet);
```

---

In case of interacting with Ethereum network like `Deposit` or onchain `Withdraw` and for creating ZkSigner you may need
to create `io.zksync.signer.EthSigner`.

> Currently available creating `io.zksync.signer.EthSigner` only from private key or mnemonic using
> `io.zksync.signer..DefaultEthSigner`, but you can implement you own `io.zksync.signer.EthSigner` for custom logic of
> signing and verifying messages.

```java
Web3j web3j = Web3j.build(new HttpService("http://localhost:8545"));
EthSigner ethSigner = DefaultEthSigner.fromMnemonic(web3j, "some mnemonic phrase");
// or from raw private key
EthSigner ethSigner = DefaultEthSigner.fromRawPrivateKey(web3j, "0x...");
```

## Connecting to zkSync network

For interact with both zkSync and Ethereum networks you need to create providers with endpoints to blockchain nodes

### zkSync provider

Library has predefined URLs for the next networks `ChainId.Mainnet`, `ChainId.Ropsten`, `ChainId.Rinkeby` that
officially supports by MatterLabs. Also you can use local node for testing `ChainId.Localhost` set to
`http://127.0.0.1:3030`

```java
Provider provider = Provider.defaultProvider(ChainId.Rinkeby)
```

You can create `io.zksync.provider.Provider` with any custom URL, just use `io.zksync.transport.HttpTransport` for
`io.zksync.provider.DefaultProvider`

```java
HttpTransport transport = new HttpTransport("http://localhost:3030");
Provider provider = new DefaultProvider(transport);
```

### Ethereum provider

For onchain operation in Ethereum network you may create `io.zksync.ethereum.EthereumProvider` using method
`createEthereumProvider` of `io.zksync.wallet.ZkSyncWallet`

```java
ZkSyncWallet wallet = ...;
Web3j web3j = Web3j.build(new HttpService("http://localhost:8545"));
GasProvider gasProvider = new DefaultGasProvider();

EthereumProvider provider = wallet.createEthereumProvider(web3j, gasProvider);
```

## Creating a Wallet

To control your account in zkSync, use the `io.zksync.wallet.ZkSyncWallet`. It can sign transactions with keys stored in
`io.zksync.signer.ZkSigner` and `io.zksync.signer.EthSigner` and send transaction to zkSync network using
`io.zksync.provider.Provider`.

```java
EthSigner ethSigner = ...;
ZkSigner zkSigner = ...;
ZkSyncWallet wallet = ZkSyncWallet.build(ethSigner, zkSigner, Provider.defaultProvider(ChainId.Rinkeby));
```

## Depositing assets from Ethereum into zkSync

Let's try to deposit 1.0 ETH to our zkSync account.

```java
Web3j web3j = Web3j.build(new HttpService("http://localhost:8545"));
EthSigner ethSigner = ...;
ZkSigner zkSigner = ...;
ZkSyncWallet wallet = ...;

// Create ethereum provider
EthereumProvider provider = wallet.createEthereumProvider(web3j, new DefaultGasProvider());

// Create and send Deposit transaction to Ethereum network
TransactionReceipt receipt = provider.deposit(
    Token.createETH(),
    Convert.toWei("1.0", Convert.Unit.ETHER).toBigInteger(),
    ethSigner.getAddress()
).join();

// You can check if transaction executed successful
if (receipt.isStatusOK()) {
    ...
}
```

## Checking your zkSync balance

You should be want to check your balance in zkSync network after deposit.

```java
ZkSyncWallet wallet = ...;
String balanceStr = state.getCommitted().getBalances().getOrDefault("ETH", "0");

BigDecimal balance = Convert.fromWei(balanceStr, Convert.Unit.ETHER);
```

## Toggle 2FA

Two factor authentication is an additional protection layer enforced by zkSync server. You can read more about it
[here](/dev/payments/sending_transactions.md#_2-factor-authentication).

```java
ZkSyncWallet wallet = ...;

// Enable two factor authentication
boolean success = wallet.enable2FA();

// Disable two factor authentication
boolean success = wallet.disable2FA(null);

// Also you can disable two factor authentication for specific pubkey hash
boolean success = wallet.disable2FA("sync:8af45346a8456d7a1fc26507ce1699329efcb4c3")
```

## Time range of transaction validity

From version of `0.0.2` introduced new parameter of transaction. It makes possible set validity period when transaction
will be applied into blockchain. Use `io.zksync.domain.TimeRange`

```java
// Default validity period from 0 until 4294967295 seconds from Unix Epoch on January 1st, 1970 at UTC
TimeRange timeRange = new TimeRange();

// or you can set own parameters

TimeRange timeRange = new TimeRange(0, 4294967295L);
```

## Unlocking zkSync account

To make any transaction in zkSync network, you must register your ZkSigner's public key to your account provided
EthSigner.

```java
ZkSyncWallet wallet = ...;

AccountState state = wallet.getState();

// Check if account exists in zkSync network
if (state.getId() == null) {
    throw new Exception("Unknown account");
}

// This should be done once thus we need to check if account pubkey is different or unset
if (!wallet.isSigningKeySet()) {
// We should get fee amount required for execution the transaction
    TransactionFeeRequest feeRequest = TransactionFeeRequest.builder()
                .address(state.getAddress())
                .transactionType(TransactionType.CHANGE_PUB_KEY)
                .tokenIdentifier(Token.createETH().getAddress())
                .build();
    TransactionFeeDetails fee = wallet.getProvider().getTransactionFee(feeRequest);
// Send transaction for setting your public key hash
String hash = wallet.setSigningKey(
        TransactionFee.builder()
                .fee(fee.getTotalFeeInteger())
                .feeToken(Token.createETH().getAddress())
                .build(),
        state.getCommitted().getNonce(),
        false,
        new TimeRange()
);
}
```

## Making transfer funds in zkSync

Now after `Deposit` and `Unlocking` your account you can create second account and transfer some funds to it.

> Note that we can send assets to any fresh Ethereum account, without preliminary registration!

We're going to transfer 0.1 ETH

```java
ZkSyncWallet wallet = ...;

EthSigner ethSignerAnother = ...;

AccountState state = wallet.getState();

TransactionFeeRequest feeRequest = TransactionFeeRequest.builder()
                                .address(ethSignerAnother.getAddress())
                                .transactionType(TransactionType.TRANSFER)
                                .tokenIdentifier(Token.createETH().getAddress())
                                .build();
TransactionFeeDetails fee = wallet.getProvider().getTransactionFee(feeRequest);
String hash = wallet.syncTransfer(
    receiver,
    Convert.toWei("0.1", Convert.Unit.ETHER).toBigInteger(),
    TransactionFee.builder()
        .fee(fee.getTotalFeeInteger())
        .feeToken(Token.createETH().getAddress())
        .build(),
    state.getCommitted().getNonce(),
    new TimeRange()
);
```

## Withdrawing funds back to Ethereum

All your funds can be withdrawn back to any yours account in Ethereum.

```java
ZkSyncWallet wallet = ...;
AccountState state = wallet.getState();
TransactionFeeRequest feeRequest = TransactionFeeRequest.builder()
                                .address(state.getAddress())
                                .transactionType(TransactionType.WITHDRAW)
                                .tokenIdentifier(Token.createETH().getAddress())
                                .build();
TransactionFeeDetails fee = wallet.getProvider().getTransactionFee(feeRequest);
String hash = wallet.syncWithdraw(
    ethSigner.getAddress(),
    Convert.toWei("0.5", Convert.Unit.ETHER).toBigInteger(),
    TransactionFee.builder()
            .fee(fee.getTotalFeeInteger())
            .feeToken(ETH_IDENTIFIER)
            .build(),
    state.getCommitted().getNonce(),
    false,
    new TimeRange()
);
```

Assets will be withdrawn to the target wallet after the zero-knowledge proof of zkSync block with this operation is
generated and verified by the mainnet contract.

## Swaps and Limit Orders

### Atomic swaps

Atomic swaps let you safely and cheaply swap funds with an existing zkSync account.

There are 3 steps required to successfully make a swap:

- Sign an order that confirms that you want perform a certain swap
- Acquire a signed order of the same format from the account that you want to swap with
- Submit both orders with a fee to the zkSync server

#### Creating order

To create a signed order, you need the following info:

- token you want to swap
- token you want to swap for
- amount of the token that you want to swap
- ratio of the swapped tokens, relevant to one another

> Ratios are 15-byte integers that represent the proportion in which tokens are swapped.

```java
ZkSyncWallet wallet = ...;
String recipient = "0x...";
Token tokenA = ...;
Token tokenB = ...;
BigInteger amount = ...;
Order order1 = wallet.buildSignedOrder(recipient, tokenA, tokenB, new Tuple2<>(BigInteger.ONE, BigInteger.ONE), amount, null, null).join();
```

#### Creating limit order

Limit orders provide a way to exchange a certain token for another at a certain price. They are designed to be used
primarily by other platforms that want to provide trustless and scalable exchange services.

The differences between an atomic swap and a limit order are:

- limit orders infer the amount that can be exchanged directly from the balance
- limit orders can be partially filled
- limit orders do not increment account's nonce

```java
ZkSyncWallet wallet = ...;
String recipient = "0x...";
Token tokenA = ...;
Token tokenB = ...;
Order order1 = wallet.buildSignedLimitOrder(recipient, tokenA, tokenB, new Tuple2<>(BigInteger.ONE, BigInteger.ONE), null, null).join();
```

#### Submitting a swap

Anyone can submit 2 orders for a swap if they meet the following limitations:

- orders have matching tokens: if orderA specifies tokenA -> tokenB, then orderB should specify tokenB -> tokenA
- ratios in orders are compatible: 1/orderB.ratio <= orderA.amount/orderB.amount <= orderA.ratio
- if orders have recipients, their accounts already exist in zkSync

Fee is paid by the submitter, and the token it is paid in should be specified. After a swap is executed, nonce is
incremented on both swapping accounts and the submitter. If swap was submitted from one of the swapping accounts, nonce
is incremented only once.

If the user wishes to cancel the swap that has not yet been submitted, they simply have to increment their nonce (e.g.
send a zero-transfer).

```java
ZkSyncWallet wallet = ...;
AccountState state = wallet.getState();
Order orderA = ...;
Order orderB = ...;

TransactionFeeDetails details = wallet.getProvider().getTransactionFee(
    TransactionFeeBatchRequest.builder()
        .transactionType(Pair.of(TransactionType.SWAP, state.getAddress()))
        .tokenIdentifier(Token.createETH().getAddress())
        .build()
);
TransactionFee fee = new TransactionFee(Token.createETH().getAddress(), details.getTotalFeeInteger());

String hash = wallet.syncSwap(orderA, orderB, orderA.getAmount(), orderB.getAmount(), fee, state.getCommitted().getNonce());
```

## NFTs

Support for NFTs on zkSync 1.x is here! Functions include minting, transferring, and atomically swapping NFTs. Users
will also be able to withdraw NFTs to Layer 1.

This page demonstrates how NFTs are implemented in zkSync 1.x and provides a tutorial for you to integrate NFTs into
your project.

### Mint

You can mint an NFT by calling the `syncMintNFT` function from the `io.zksync.wallet.ZkSyncWallet` and
`io.zksync.wallet.ZkASyncWallet` classes

```java
ZkSyncWallet wallet = ...;
AccountState state = wallet.getState();
TransactionFeeRequest feeRequest = TransactionFeeRequest.builder()
                                .address(state.getAddress())
                                .transactionType(TransactionType.MINT_NFT)
                                .tokenIdentifier(Token.createETH().getAddress())
                                .build();
TransactionFeeDetails fee = wallet.getProvider().getTransactionFee(feeRequest);

String contentHash = "0x<32-bytes hex>";

String hash = wallet.syncMintNFT(
    state.getAddress(),
    contentHash,
    fee,
    state.getCommitted().getNonce()
);
```

### Transfer

Users can transfer NFTs to existing accounts and transfer to addresses that have not yet registered a zkSync account. An
NFT can only be transferred after the block with it's mint transaction is verified. This means the newly minted NFT may
have to wait a few hours before it can be transferred. This only applies to the first transfer; all following transfers
can be completed with no restrictions.

You can transfer an NFT by calling the `syncTransferNFT` method

> Transfer NFT is actually batch of 2 transactions. First for transfer NFT itself and second is a paying fee. Therefore
> this method returns list of 2 transaction hashes.

```java
ZkSyncWallet wallet = ...;
AccountState state = wallet.getState();
TransactionFeeDetails details = wallet.getProvider().getTransactionFee(
            TransactionFeeBatchRequest.builder()
                .transactionType(Pair.of(TransactionType.TRANSFER, state.getAddress()))
                .transactionType(Pair.of(TransactionType.TRANSFER, state.getAddress()))
                .tokenIdentifier(Token.createETH().getAddress())
                .build()
        );
NFT token = state.getCommitted().getNfts().values().stream().findAny().get();
TransactionFee fee = new TransactionFee(Token.createETH().getAddress(), details.getTotalFeeInteger());
List<String> hashes = wallet.syncTransferNFT(
    state.getAddress(),
    token,
    fee,
    state.getCommitted().getNonce(),
    new TimeRange(0, 4294967295L)
);
```

### Withdraw

This guide will demonstrate 2 types of withdrawals: normal and emergency, and explain under what conditions each type
should be used. It also explains the architecture of the NFT token bridge between zkSync and L1, and what is needed if
protocols want to implement their own NFT factory contract on L1.

#### Regular Withdraw

Under normal conditions use a layer 2 operation, `syncWithdrawNFT`, to withdraw the NFT.

```java
ZkSyncWallet wallet = ...;
AccountState state = wallet.getState();
TransactionFeeRequest feeRequest = TransactionFeeRequest.builder()
                                .address(state.getAddress())
                                .transactionType(TransactionType.WITHDRAW_NFT)
                                .tokenIdentifier(Token.createETH().getAddress())
                                .build();
TransactionFeeDetails fee = wallet.getProvider().getTransactionFee(feeRequest);
NFT token = state.getCommitted().getNfts().values().stream().findAny().get(); // Find any owned NFT
String hash = wallet.syncWithdrawNFT(
    state.getAddress(),
    token,
    fee,
    state.getCommitted().getNonce(),
    new TimeRange(0, 4294967295L)
);
```

#### Emergency Withdraw

In case of censorship, users may call for an emergency withdrawal. Note: This is a layer 1 operation, and is analogous
to our fullExit mechanism.

```java
Web3j web3j = Web3j.build(new HttpService("http://localhost:8545"));
ZkSyncWallet wallet = ...;

AccountState state = wallet.getState();

// Create ethereum provider
EthereumProvider provider = wallet.createEthereumProvider(web3j, new DefaultGasProvider());

// Find any owned NFT
NFT token = state.getCommitted().getNfts().values().stream().findAny().get();

// Create and send Deposit transaction to Ethereum network
TransactionReceipt receipt = provider.fullExitNFT(token, wallet.getAccountId()).join();

// You can check if transaction executed successful
if (receipt.isStatusOK()) {
    ...
}
```

## Transaction build helper

SDK provides helper class `io.zksync.domain.TransactionBuildHelper` for building transaction objects in several ways. It
can get current account nonce from network and can estimate fee for execution of transaction. Using it you can build any
supported transaction.

Here we build `Transfer` transaction

```java
ZkSyncWallet wallet = ...;
EthSigner ethSigner = ...;
ZkSigner zkSigner = ...;

// Create helper with sync wallet
TransactionBuildHelper helper = new TransactionBuildHelper(wallet, wallet.getTokens());

// This call will estimate gas and get current account's nonce from network
Transfer transfer = helper.transfer("0x...", Convert.toWei(BigDecimal.valueOf(1000000), Unit.GWEI).toBigInteger(), Token.createETH()).join();

// Helper doesn't make any signatures thus we should sign transaction with our signers
EthSignature ethSignature = ethSigner.signTransaction(transfer, transfer.getNonce(), Token.createETH(), transfer.getFeeInteger()).join();
SignedTransaction<Transfer> transaction = new SignedTransaction<>(zkSigner.signTransfer(transfer), ethSignature);

// After all we can submit the signed transaction to the ZkSync network
String hash = wallet.submitTransaction(transaction);
```

## Transaction processor

Transactions in ZkSync have different execution statuses. You can subscribe to any of these statuses using
`io.zksync.transport.receipt.ZkSyncTransactionReceiptProcessor`

```java
// Transaction processor supports only async therefore you need to create AsyncProvider
AsyncProvider provider = AsyncProvider.defaultProvider(ChainId.Ropsten);
ZkSyncTransactionReceiptProcessor receiptProcessor = new ZkSyncPollingTransactionReceiptProcessor(provider);

String hash = ... //Here hex hash of the submitted transaction

// Wait 30 seconds for committing transaction
TransactionDetails receipt = receiptProcessor.waitForTransaction(hash, ZkTransactionStatus.COMMITED).get(30, TimeUnit.SECONDS);

// Or you can wait for verifying transaction on L1 (but it will take much time)
TransactionDetails receipt = receiptProcessor.waitForTransaction(hash, ZkTransactionStatus.VERIFIED).join();
```

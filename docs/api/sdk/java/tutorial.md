# Getting started

1. Connect to the zkSync network.
2. Deposit assets from Ethereum into zkSync.
3. Make transfers.
4. Withdraw funds back to Ethereum mainnet (or testnet).

## Adding dependencies

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

### Desktop

Here you need only add just one dependency into your build configuration. `Gradle`

```groovy
dependencies {
    implementation ('io.zksync:zksync:0.0.1-b1-SNAPSHOT')
}
```

`Maven`

```xml
<dependencies>
    <dependency>
        <groupId>io.zksync</groupId>
        <artifactId>zksync</artifactId>
        <version>0.0.1-b1-SNAPSHOT</version>
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
implementation ('io.zksync:zksync:0.0.1-b1-SNAPSHOT') {
    exclude group: 'io.zksync.sdk', module: 'zkscrypto'
    exclude group: 'net.java.dev.jna', module: 'jna'
}
implementation 'io.zksync.sdk:zkscrypto:0.0.4-android@aar'
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
                .tokenIdentifier(Token.createETH())
                .build();
    TransactionFeeDetails fee = wallet.getProvider().getTransactionFee(feeRequest);
// Send transaction for setting your public key hash
    wallet.setSigningKey(
                TransactionFee.builder()
                        .fee(fee.getTotalFeeInteger())
                        .feeToken(Token.createETH())
                        .build(),
                state.getCommitted().getNonce(),
                false
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
                                .tokenIdentifier(Token.createETH())
                                .build();
TransactionFeeDetails fee = wallet.getProvider().getTransactionFee(feeRequest);
String txHash = wallet.syncTransfer(
    receiver,
    Convert.toWei("0.1", Convert.Unit.ETHER).toBigInteger(),
    TransactionFee.builder()
        .fee(fee.getTotalFeeInteger())
        .feeToken(Token.createETH())
        .build(),
    state.getCommitted().getNonce()
);
```

## Waiting for transaction receipt

When a transaction is accepted by the zkSync server, it means that only some basic checks have passed. In order to make sure the transaction was successfully processed, you need to wait for its receipt:

```java
String hash = ""; // The hash of the transaction
boolean success = false;
boolean processed = false;
String failReason = "unknown";

do {
    // Getting transaction status
    TransactionDetails txDetails = wallet.getProvider().getTransactionDetails(hash);
    BlockInfo block = txDetails.getBlock();
		// Checking if it has been included in any block
    processed = block != null && block.getCommitted();
    if(processed) {
				// Check if the tx was successful
        success = txDetails.getSuccess();
				// If there was any fail reason, let's get one
        failReason = txDetails.getFailReason();
    } else {
        Thread.sleep(100);
    }
} while(!processed);

if (success) {
    System.out.println("The transaction has been executed!");
} else {
    System.out.println("The transaction has been rejected. Reason: " + failReason);
}
```

If we need to wait until the transaction is verified (finalized), you can simply check if the transaction's block was verified:

```java
processed = block != null && block.getVerified();
```

## Withdrawing funds back to Ethereum

All your funds can be withdrawn back to any yours account in Ethereum.

```java
ZkSyncWallet wallet = ...;
AccountState state = wallet.getState();
TransactionFeeRequest feeRequest = TransactionFeeRequest.builder()
                                .address(state.getAddress())
                                .transactionType(TransactionType.WITHDRAW)
                                .tokenIdentifier(Token.createETH())
                                .build();
TransactionFeeDetails fee = wallet.getProvider().getTransactionFee(feeRequest);
wallet.syncWithdraw(
    ethSigner.getAddress(),
    Convert.toWei("0.5", Convert.Unit.ETHER).toBigInteger(),
    TransactionFee.builder()
            .fee(fee.getTotalFeeInteger())
            .feeToken(ETH_IDENTIFIER)
            .build(),
    state.getCommitted().getNonce(),
    false
);
```

Assets will be withdrawn to the target wallet after the zero-knowledge proof of zkSync block with this operation is
generated and verified by the mainnet contract.

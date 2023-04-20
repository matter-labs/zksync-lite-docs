---
sidebarDepth: 4
---

# Dart SDK

This section contains documentation for the Dart SDK for zkSync.

::: warning

This is the alpha version of the SDK, if you find mistakes - you can contact us on Discord.

:::

**This is an unofficial open-sourced SDK for zkSync.**
[Link to GitHub repo.](https://github.com/vareger/zksync-sdk-dart)

Kudos to [Vareger](https://www.vareger.com/) for developing it!

## Table of Contents

[[toc]]

## Getting Started

We will:

1. Connect to the zkSync network.
2. Deposit assets from Ethereum into zkSync.
3. Make transfers.
4. Withdraw funds back to Ethereum mainnet (or testnet).

### Adding dependencies

Using this SDK requires precompiled binary of zkSync cryptography implementation. Please download directly from
[official repo](https://github.com/zksync-sdk/zksync-crypto-c/releases)

Then just add this sdk as a dependency into your app build configuration.

```yaml
name: <your_app_name>
...

environment:
  sdk: '>=2.10.0 <3.0.0'

dependencies:
  zksync: ^0.0.1
  ...
```

Native library is precompiled for the following platforms:

#### Desktop

- Linux x86_64
- OSX x86_64 (MacOS 11 BigSur included)
- Windows x86_64

#### Android

- Arm64-v8a
- Armeabi-v7a
- x86
- x86_64

##### iOS

- i386
- x86_64

### Imports

Client library is divided into three separate packages. Just add required into `imports` block of your main file:

```dart
import 'package:zksync/client.dart'; // ZkSync RPC/REST client
import 'package:zksync/credentials.dart'; // Crypto Credentials
import 'package:zksync/zksync.dart'; // Main Wallet
```

### Creating signers

All messages in zkSync network must be signed by the private key. There are two keys required: Level 1 (L1) for Ethereum
and Level 2 (L2) for zkSync network.

To operate in zkSync network you need to create `ZkSigner` instance first. There are few ways to create it:

Using seed bytes (like MNEMONIC phrase) with the length >= 32

```dart
final zkSigner = ZksSigner.seed(SEED);
```

Using raw private key

```dart
final rawPrivateKey = hex.decode('0x...');

final zkSigner = ZksSigner.raw(rawPrivateKey);
```

Using raw private key in hex

```dart
final zkSigner = ZksSigner.hex('0x...');
```

Using EthSigner (explained below). The private key used by ZkSigner is implicitly derived by signing a special message
with Ethereum L1 key

```dart
final ethSigner = ...;

final zkSigner = await ZksSigher.fromEthSigner(ethSigner, ChainId.Goerli);
```

---

To interract with Ethereum L1 chain (to make a `Deposit` or `Withdraw` funds), you'll need `EthSigner` instance. It can
be instantiated in several different ways:

Using raw private key in hex

```dart
final ethSigner = EthSigner.hex(privateKey, chainId: ChainId.Goerli.getChainId());
```

Using raw private key

```dart
final rawPrivateKey = hex.decode('0x...');

final ethSigner = EthSigner.raw(privateKey);
```

Using `Credentials` from Web3dart

```dart
import 'package:web3dart/web3dart.dart' as web3;
```

```dart
final credentials = web3.EthPrivateKey.fromHex(hexKey);
```

### Connecting to zkSync network

In order to interact with both zkSync and Ethereum networks you'll need to create providers and provide endpoints to
blockchain nodes.

#### zkSync client

This SDK has predefined URLs for the following networks `ChainId.Mainnet`, `ChainId.Goerli` that are
officially supported by MatterLabs. Also you can use local node for testing `ChainId.Localhost` or simply set endpoint
to `http://127.0.0.1:3030`

```dart
final zksync = ZkSyncClient.fromChainId(ChainId.Goerli);
```

You can also create `ZkSyncClient` with any custom endpoint URL

```dart
import 'package:http/http.dart';
```

```dart
final zksync = ZkSyncClient('http://localhost:3030', Client());
```

#### Ethereum client

For onchain operations in Ethereum network you can use `EthereumClient`

```dart
final ethSigner = ...;

final ethereum =
      EthereumClient('http://localhost:8545', ethSigner.credentials, ChainId.Goerli);
```

### Creating a Wallet

To control and operate with your account in zkSync you can use the `Wallet`. It can sign transactions with the key
stored in `ZkSigner` and `EthSigner`, then send signed transactions into zkSync network using `ZkSyncClient`.

```dart
final ethSigner = ...;
final zkSigner = ...;
final ethClient = ...;
final zksClient = ...;

final wallet = Wallet(zksClient, ethClient, zkSigner, ethSigner);
```

### Depositing assets from Ethereum into zkSync

In order to deposit assets from Ethereum network into zkSync please use the following sequence:

```dart
final ethSigner = ...;
final ethClient = ...;

final receiver = await ethSigner.extractAddress();

final depositTx = await ethClient.deposit(Token.eth,
      EtherAmount.fromUnitAndValue(EtherUnit.ether, 1).getInWei, receiver);
```

### Checking your zkSync balance

In order to check your account balance in zkSync network please use the following commands:

```dart
final wallet = ...;

final state = await wallet.getState();
final balance = state.commited.balances['ETH'];
```

### Unlocking zkSync account

In order to make any transactions in zkSync network, you'll need to register your ZkSigner's public key first. Please
use the following command to do this:

```dart
final zkSigner = ...;
final wallet = ...;

final authTx = await wallet.setSigningKey(
      ZksPubkeyHash.fromHex(zkSigner.publicKeyHash),
      token: Token.eth);
print(authTx);
```

### Transfering funds in zkSync

After funds `Deposit`ed and account `Unlock`ed, you can transfer funds inside zkSync network.

> Please note, that it is possible to send assets within zkSync to any Ethereum address, without preliminary
> registration in zkSync!

In the example below, we're going to transfer 0.1 ETH

```dart
final wallet = ...;

final receiver =
      EthereumAddress.fromHex('0x...');

final tx = await wallet.transfer(
      receiver, EtherAmount.fromUnitAndValue(EtherUnit.eth, 0.1).getInWei,
      token: Token.eth);
print(tx);
```

### Withdrawing funds back to Ethereum

All your funds can be withdrawn back to any yours account in Ethereum. Please use the following commands:

```dart
final wallet = ...;

final withdrawTx = await wallet.withdraw(
      receiver, EtherAmount.fromUnitAndValue(EtherUnit.eth, 0.5).getInWei,
      token: Token.eth);
print(withdrawTx);
```

Assets will be withdrawn to the target address after a zero-knowledge proof of zkSync block with this operation is
generated and verified by the mainnet contract (which usually takes about 2-10 min).

### Forced and Full exit

Also you can force full withdrawal of all your funds back to your onchain account with a single command:

On zkSync

```dart
final wallet = ...;

final exitTx = await wallet.forcedExit(receiver, token: Token.eth);
print(exitTx);
```

On Ethereum (onchain)

```dart
final ethClient = ...;
final wallet = ...;

final exitTx =
      await ethClient.fullExit(Token.eth, await wallet.getAccountId());
print(exitTx);
```

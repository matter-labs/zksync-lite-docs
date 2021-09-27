# Getting started

1. Connect to the zkSync network.
2. Deposit assets from Ethereum into zkSync.
3. Make transfers.
4. Withdraw funds back to Ethereum mainnet (or testnet).

## Adding zkSync Swift SDK as a dependency

### CocoaPods

```ruby
pod 'ZKSync'
```

### Swift Package Manager

1. In Xcode go to `File -> Swift Packages -> Add Package Dependency...`. 
1. Insert `https://github.com/zksync-sdk/zksync-swift.git` in `Enter package repository URL` field and press Enter.
1. In `Rules` set `master` as a default branch.

## Creating signers

Using seed bytes (like MNEMONIC phrase). Must have length >= 32

```swift
let zkSigner = try ZkSigner(seed: seed)
```

Using raw private key

```swift
let privateKey = Data(hex: "0x...")
let zkSigner = try ZkSigner(rawPrivateKey: privateKey)
```

Using EthSigner (explained below). The private key used by ZkSigner is implicitly derived from Ethereum signature of a
special message.

```swift
let ethSigner = ...
let zkSigner = try ZkSigner(ethSigner: ethSigner, chainId: .ropsten)
```

---

In case of interacting with Ethereum network like `Deposit` or onchain `Withdraw` and for creating ZkSigner you may need
to create `EthSigner`.

```swift
let ethSigner = try DefaultEthSigner(privateKey: "0x...")

// or from Mnemonic
let ethSigner = try DefaultEthSigner(mnemonic: "some mnemonic phrase")
```

## Connecting to zkSync network

For interact with both zkSync and Ethereum networks you need to create providers with endpoints to blockchain nodes

### zkSync provider

Library has predefined URLs for the next networks `ChainId.Mainnet`, `ChainId.Ropsten`, `ChainId.Rinkeby` that
officially supports by MatterLabs. Also you can use local node for testing `ChainId.Localhost` set to
`http://127.0.0.1:3030`

```swift
let provider = DefaultProvider(chainId: .ropsten)
```

You can create `Provider` with any custom URL, just use `HTTPTransport` for `DefaultProvider`

```swift
let transport = HTTPTransport(networkURL: "http://127.0.0.1:3030")
let provider = DefaultProvider(transport: transport)
```

### Ethereum provider

For onchain operation in Ethereum network you may create `EthereumProvider` using method `createEthereumProvider` of
`Wallet`

```swift
let wallet = ...
let ethereum = try wallet.createEthereumProvider(web3: Web3.InfuraRopstenWeb3())
```

## Creating a Wallet

To control your account in zkSync, use the `Wallet`. It can sign transactions with keys stored in `ZkSigner` and
`EthSigner` and send transaction to zkSync network using `Provider`.

```swift
let ethSigner = ...
let zkSigner = ...
let wallet = try DefaultWallet(ethSigner: ethSigner, zkSigner: zkSigner, provider: DefaultProvider(chainId: .ropsten))
```

For onchain operations you can create Ethereum provider from `Wallet`

```swift
let wallet = ...
let ethereum = try wallet.createEthereumProvider(web3: Web3.InfuraRopstenWeb3())
```

## Depositing assets from Ethereum into zkSync

Let's try to deposit 1.0 ETH to our zkSync account.

```swift
let ethSigner = ...
let ethereum = ...
let amount = Web3.Utils.parseToBigUInt("1", units: .eth)!
firstly {
    ethereum.deposit(token: .ETH, amount: amount, userAddress: self.ethSigner.address)
}.done { result in
    print("Successfully performed deposit with result: \(result)")
}.catch { error in
    print("Failed with error: \(error)")
}
```

## Checking your zkSync balance

You should be want to check your balance in zkSync network after deposit.

```swift
firstly {
    wallet.getAccountStatePromise()
}.done { (state) in
    let balance = state.committed.balances["ETH"] ?? "0"
    print("Balance: \(balance)")
}.catch { (error) in
    print("Failed with error: \(error)")
}
```

## Unlocking zkSync account

To make any transaction in zkSync network, you must register your ZkSigner's public key to your account provided
EthSigner.

```swift
let wallet = ...

firstly {
    wallet.getAccountStatePromise()
}.then { state in
    wallet.provider
        .transactionFeePromise(for: .changePubKey, address: wallet.address, tokenIdentifier: Token.ETH.address)
        .map { ($0, state) }
}.then { (feeDetails, state) -> Promise<String> in
    let fee = TransactionFee(feeToken: Token.ETH.address,
                             fee: feeDetails.totalFeeInteger)
    return wallet.setSigningKeyPromise(fee: fee,
                                       nonce: state.committed.nonce,
                                       onchainAuth: false)
}.done { hash in
    print("Successfully submitted transaction with hash: \(hash)")
}.catch { error in
    print("Failed to submit transaction with error: \(error)")
}
```

## Making transfer funds in zkSync

Now after `Deposit` and `Unlocking` your account you can create second account and transfer some funds to it.

> Note that we can send assets to any fresh Ethereum account, without preliminary registration!

We're going to transfer 0.1 ETH

```swift
let receiver = "0x..."
let wallet = ...
let amount = Web3.Utils.parseToBigUInt("1000000", units: .Gwei)!

firstly {
    wallet.getAccountStatePromise()
}.then { state in
    wallet.provider.transactionFeePromise(for: .transfer,
                                          address: receiver,
                                          tokenIdentifier: Token.ETH.address).map { ($0, state) }
}.then { (feeDetails, state) -> Promise<String> in
    let fee = TransactionFee(feeToken: Token.ETH.address,
                             fee: feeDetails.totalFeeInteger)
    return wallet.transferPromise(to: receiver,
                                  amount: amount,
                                  fee: fee,
                                  nonce: nil)
}.done { hash in
    print("Successfully submitted transaction with hash: \(hash)")
}.catch { error in
    print("Failed to submit transaction with error: \(error)")
}
```

## Withdrawing funds back to Ethereum

All (or part of) your funds can be withdrawn back to any yours account in Ethereum.

```swift
let wallet = ...
let amount = Web3.Utils.parseToBigUInt("1000", units: .Gwei)!

firstly {
    wallet.getAccountStatePromise()
}.then { state in
    wallet.provider.transactionFeePromise(for: .withdraw, address: wallet.address,
                                               tokenIdentifier: Token.ETH.address).map { ($0, state) }
}.then { (feeDetails, state) -> Promise<String> in
    let fee = TransactionFee(feeToken: Token.ETH.address,
                             fee: feeDetails.totalFeeInteger)
    return wallet.withdrawPromise(ethAddress: state.address,
                                  amount: amount,
                                  fee: fee,
                                  nonce: state.committed.nonce,
                                  fastProcessing: false)
}.done { hash in
    print("Successfully submitted transaction with hash: \(hash)")
}.catch { error in
    print("Failed to submit transaction with error: \(error)")
}
```

# Getting started

In this tutorial, we will demonstrate how to:

1. Connect to the zkSync network.
1. Deposit assets from Ethereum into zkSync.
1. Make transfers.
1. Withdraw funds back to Ethereum.

## Adding dependencies

Put the following line in your `Cargo.toml`:

```toml
zksync = { git = "https://github.com/matter-labs/zksync", version = "0.1.1" }
```

Unfortunately, the SDK is not currently published on crates.io; thus specifying the dependency from the repository is
the only option.

## Connecting to the zkSync network

To interact with the zkSync network, users need to know the endpoint of the operator node.

```rust
use zksync::{Provider, Network};

let provider = Provider::new(Network::Goerli);
```

## Instantiating an Ethereum signer

An Ethereum signer is mandatory for sending both L1 and L2 transactions since L2 transactions require an Ethereum
signature as part of 2-factor authentication. It is possible to create a wallet without an Ethereum private key, but
this wallet will only be able to perform read requests to the zkSync server.

The Ethereum signer is represented by the `EthereumSigner` trait from the `zksync_eth_signer` crate.

By default, this trait has two implementations: `PrivateKeySigner` and `JsonRpcSigner`.

The `PrivateKeySigner` implementation assumes that you own your private key and can use it directly:

```rust
use zksync_eth_signer::PrivateKeySigner;

let signer = PrivateKeySigner::new(YOUR_PRIVATE_KEY);
```

The `JsonRpcSigner` implementation may be used if the private key is managed by software that exposes a personal Web3
API:

```rust
use zksync_eth_signer::JsonRpcSigner;

let address = JsonRpcSigner::new("http://127.0.0.1:8545", None, None, None);
```

The arguments are:

- `rpc_addr`: The address of the wallet RPC server.
- `address_or_index`: The identifier of the wallet to be used. If `None`, the first available wallet will be chosen.
- `signer_type`: Indicates whether the signer adds the `\x19Ethereum...` prefix to signed messages. If `None`, the
  signer type will be deduced automatically by signing an additional message.
- `password_to_unlock`: Sets the wallet password if it's required.

Also, if your software uses a custom signer, you can always provide your implementation of the `EthereumSigner` trait.

## Creating a wallet

To control your account in zkSync, use the `zksync::Wallet` object. It can sign transactions with keys stored in
`zksync::Signer` and send transactions to the zkSync network by using `zksync::Provider`.

In order to create a `Wallet` object, you have to initialize credentials that will store the private keys for the
wallet.

A `WalletCredentials` object can be created from a seed byte array, an Ethereum private key, or any `EthereumSigner`
implementation:

```rust
use zksync::{WalletCredentials, Network};

let address = ...; // Not essential for this example.

// Generate from seed. A zkSync private key will be initialized, an Ethereum private key will not.
let cred_1 = WalletCredentials::from_seed(address, &[0u8; 32]);
// Generate from a zkSync private key only. An Ethereum private key will not be set.
let cred_2 = WalletCredentials::from_pk(address, ZKSYNC_PRIVATE_KEY, None);
// Generate from both a zkSync and an Ethereum private key.
let cred_3 = WalletCredentials::from_pk(address, ZKSYNC_PRIVATE_KEY, Some(ETH_PRIVATE_KEY));
// Generate from a custom Ethereum signer. The Ethereum private key is assumed to be accessible through the provided signer,
// A zkSync private key will be derived from the Ethereum private key using a deterministic algorithm.
let cred_4 = WalletCredentials::from_eth_signer(address, custom_signer, Network::Goerli);
```

Once the `WalletCredentials` and `Provider` objects are set, you can create a wallet:

```rust
use zksync::Wallet;

// This method is asynchronous since it retrieves an account ID from the server in the constructor.
let wallet = Wallet::new(provider, cred).await;
```

## Depositing assets from Ethereum into zkSync

Depositing requires the `WalletCredentials` object to be created with access to the Ethereum signer.

We are going to deposit `1.0 ETH` to our zkSync account.

```rust
let one_ether = U256::from(10).pow(18.into());

// The address of the server providing access to the API of the Ethereum node, for example, Infura or a local node.
// This address is required in order to interact with the Ethereum blockchain.
let web3_address = "http://127.0.0.1:8545";

let ethereum = wallet.ethereum(web3_address).await?;
let deposit_tx_hash = ethereum.deposit("ETH", one_ether, wallet.address()).await?;
```

"ETH" stands for native ether. To transfer a supported ERC20 token, use the ERC20 address or ERC20 symbol instead of
"ETH".

After the transaction is submitted to the Ethereum node, we can track its status using the returned object:

```rust
use zksync::ethereum::PriorityOpHolder;
let receipt = ethereum.wait_for_tx(deposit_tx_hash).await?;

let deposit_op = receipt.priority_op().expect("Transaction receipt should hold priority operation data");

// Now we can query the zkSync server for information about deposit execution.
let deposit_info = wallet.provider.ethop_info(deposit_op.serial_id as u32);
```

## Unlocking a zkSync account

To control assets in the zkSync network, an account must register its public key.

```rust
if !wallet.is_signing_key_set().await? {
    assert!(wallet.account_id().is_none());

    let change_pubkey = wallet
        .start_change_pubkey()
        .fee_token("ETH")?
        .send()
        .await?

    let change_pubkey_receipt = change_pubkey.wait_for_commit().await?;
    assert_eq!(change_pubkey_receipt.success, Some(true));

    // After setting the signing key, we have to update the account ID stored in the wallet.
    wallet.update_account_id().await?;
    assert!(wallet.account_id().is_some());
}
```

## Checking a zkSync account's balance

```rust
use zksync::types::BlockStatus;

// The committed state is not final yet.
let committedETHBalance = wallet.getBalance(BlockStatus::Committed, 'ETH').await?;

// The verified state is final.
let verifiedETHBalance = wallet.getBalance(BlockStatus::Verified, 'ETH').await?;
```

To list all tokens of this account, use `account_info`:

```rust
let info = wallet.account_info().await?;
let committed_eth_balance = info.committed.balances.get("ETH");
let verified_dai_balance = info.balance.balances.get("DAI");
```

## Making a transfer in zkSync

Now, let's create a second wallet and transfer some funds into it. Note that we can send assets to any fresh Ethereum
account without preliminary registration!

```rust
let another_cred = WalletCredentials::from_seed(address, &[1u8; 32]);
let another_wallet = Wallet::new(provider, another_cred).await;
```

We are going to transfer `0.5 ETH` to another account. The fee will be set automatically to the least possible fee
accepted by the server.

Note that the SDK may round down the transferred amount or fee to the closest supported amount because the precision of
transfers in zkSync is limited (see docs below).

However, you can provide amount and fee values that won't be rounded: use the methods `.amount_exact(..)` and
`.fee_exact(..)` and ensure that your amount and fee are packable via `zksync::utils::is_token_amount_packable` and
`zksync::utils::is_fee_amount_packable`. Rounding to the closest packable amount can also be performed manually via the
`zksync::utils::closest_packable_token_amount` and `zksync::utils::closest_packable_fee_amount` functions. An attempt to
send a transaction with either an amount or a fee that isn't packable will result in the transaction being rejected by
the server.

```rust
use zksync::utils::{closest_packable_fee_amount, closest_packable_token_amount};

// "one_ether" is the same variable we declared above.
let transfer_amount = one_ether / 2u64.into();

let transfer_handle = wallet
  .start_transfer()
  .token("ETH")
  .amount(transfer_amount)
  .to(another_wallet.address())
  .send()
  .await?;
```

For more control over the transaction flow, you can manually request the fee and check whether it's appropriate.

```rust
let fee = wallet
  .provider
  .get_tx_fee(TxFeeTypes::Transfer, another_wallet.address(), "ETH")
  .await?
  .total_fee;
assert!(is_fee_amount_packable(&fee));

let transfer_handle = wallet
  .start_transfer()
  .token("ETH")
  .amount(transfer_amount)
  .fee_exact(fee)?
  .to(another_wallet.address())
  .send()
  .await?;
```

To track the status of this transaction:

```rust
let transfer_receipt = transfer_handle.wait_for_commit().await?;
```

## Withdrawing funds back to Ethereum

```rust
let withdraw_amount = one_ether / 10u64.into();

let withdraw_handle = wallet
  .start_withdraw()
  .token("ETH")
  .amount(withdraw_amount)
  .to(wallet.address()) // Withdraw to the same L1 address.
  .send()
  .await?;
```

Assets will be withdrawn to the target wallet after the zero-knowledge proof of the zkSync block with this operation is
generated and verified by the mainnet contract.

We can wait until ZKP verification is complete:

```rust
withdraw_handle.wait_for_verify().await?;
```

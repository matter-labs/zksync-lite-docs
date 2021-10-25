# Wallets

[[toc]]

## What Ethereum wallets does zkSync support?

Generally, you can safely send funds to any Ethereum address (even to exchanges and smart contracts). The owner of this
address will always be able to claim the funds.

The up-to-date list of the Ethereum wallets that you can control from the zkSync web wallet can be found directly on
[its homepage](https://wallet.zksync.io).

To control an address programmatically, all you need to is to be able to sign a message with it — either with native
Ethereum signature, or via [EIP1271](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md) in case of smart
contracts. Learn more in the [developer guide](/dev/).

## What if my wallet is not supported or can't sign messages?

Owners of some Ethereum addresses cannot use zkSync directly for various reasons:

- wallet not supported yet in the web interface;
- an address belongs to an exchange;
- an address belongs to a smart contract without
  [EIP1271](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md) support (e.g. Gnosis Safe).

In such cases, you can always withdraw funds from an L2 zkSync account to the same address in L1. The protocol allows
this because the security invariant is not violated: funds never change the owning hand. It requires that the account
have never registered a zkSync public key before.

If you need to withdraw your funds from such an account, please use the following
[tool for alternative withdrawals](https://withdraw.zksync.io). Please note, that for the tool to be able to withdraw
funds from your account, all of the following must be true:

- The account is at least 24 hours old.
- The account has never been unlocked (i.e. nonce is zero).

## Why do I need to unlock my account and why does it cost more than other transactions?

Informally, you need to do a one-time 'registration' of your account. More technically, zkSync accounts are defined over
a different elliptic curve than Ethereum's that is better suited for zero-knowledge proofs. Unlocking your account
generates and publishes a new private-public key pair over this curve, which is associated to your Ethereum address.

Unlocking your account incur higher costs than other zkSync transactions (11k gas for normal Ethereum key pair
accounts), because the process of registration happens directly on the Ethereum smart contract, and not as part of a
zero-knowledge proof. If you are using an ERC-1271 compatible wallet (like Argent), this one-time cost becomes greater
because of higher interaction with the zkSync smart contract. On the other hand, if you are using a CREATE2 smart
contract based wallet, this operation is cheaper.

The fee you pay for this operation is used to pay the fee for the corresponding Ethereum transaction, and so it goes to
Ethereum miners and not to zkSync validators.

## Troubleshooting

### I used "Transfer" instead of "Withdraw" to get my funds onto mainnet

If you attempted to withdraw your zkSync funds to L1, but mistakenly used "Transfer" option instead of "Withdraw", you
should try to log in to zkSync with the wallet that received the funds. If that's not possible, then you should read the
section above about how to withdraw the funds from a wallet that is not supported by zkSync.

### My withdrawal was completed, but the funds have not arrived on mainnet

If your withdrawal is marked as "Complete" in [zkscan](https://zkscan.io/), but the funds have not arrived on your
wallet, here are a few steps you should take:

#### 1. Make sure that enough time has passed

"Withdraw" takes a while.

Even when the transaction page says that the "Withdraw" is "Complete", it might still take a few hours before the funds
will actually arrive at your wallet.

#### 2. Make sure that the trouble is with zkSync

So you've waited a day, but still, the funds have not reached your account. What do you do next?

Please open [etherscan](https://etherscan.io/) and go to your address page, then head to "Internal Txs". There will be a
list of all transactions to your account from smart contracts. In there you should see a transaction coming from the
zkSync smart contract. If you see the transaction, then your funds did arrive. Your wallet may not display these types
of transactions, that's why it might seem like your account has not received any funds at all.

If the account balance that is shown in your wallet is the same as on the etherscan, then everything is ok and your
funds did arrive, just the transaction is not displayed.

If the account balance is not the same as on the etherscan, contact the support of your wallet. zkSync did send funds to
your account.

#### 3. Your withdrawal transaction was "out of gas"

If you see an internal transaction from the zkSync smart contract (as explained in the previous item), it is possible
that this transaction was not completed because of insufficient gas. You can check if this is the case by clicking on
the transaction (on etherscan) and see if there's an error message "out of gas".

If this happened, we are sorry for the inconvenience.

If you are experienced working with Ethereum smart contracts, you should do the following; otherwise, please skip to the
next item.

- call `getPendingBalance(yourAddress, token)` on the zkSync smart contract to know the exact amount of funds stuck on
  the contract.
- call `withdrawPendingBalance(yourAddress, token, amount)` on the zkSync smart contract to withdraw the funds.

### If none of the above did help

If nothing above have helped you, please shoot us email to **withdraw@zksync.io** describing your problem. It MUST
contain the following info:

- Your zkSync wallet address.
- What wallet are you using (e.g. Trust).
- What problems do you encounter.

The more information you provide, the faster your problem will be solved!

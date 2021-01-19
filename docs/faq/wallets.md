# Wallets

[[toc]]

## What Ethereum wallets does zkSync support?

Generally, you can safely send funds to any Ethereum address (even to exchanges and smart contracts). The owner of this
address will always be able to claim the funds.

The up-to-date list of the Ethereum wallets that you can control from the zkSync web wallet can be found directly on
[its homepage](https://wallet.zksync.io).

To control an address programmatically, all you need to is to be able to sign a message with it — either with native
Ethereum signature, or via [EIP1271](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md) in case of smart
contracts. Learn more in the [developer guide](../dev/overview.md).

## What if my wallet is not supported or can't sign a message?

Owners of some Ethereum addresses cannot use zkSync directly for various reasons:

- wallet not supported yet in the web interface;
- an address belongs to an exchange;
- an address belongs to a smart contract without
  [EIP1271](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md) support (e.g. Gnosis Safe).

In such cases, you can always withdraw funds from an L2 zkSync account to the same address in L1. The protocol allows
this because the security invariant is not violated: funds never change the owning hand. It requires that the account
have never registered a zkSync public key before.

If you need to withdraw your funds from such an account, please fill the following
[form](https://docs.google.com/forms/d/1fRLRhFzu2IHSgxITxz8y6iZkl9sNRvS5Z_Us2ZWAQM0/edit).

In the future the process will be fully automated.

## Troubleshooting

### Used "Transfer" instead of "Withdraw" to get your funds onto mainnet

If you attempted to withdraw your zkSync funds to L1, but mistakenly used "Transfer" option instead of "Withdraw", you
should try to log in to the zkSync with the wallet that received the funds. If that's not possible, then you should read
the section above about how to withdraw the funds from a wallet that is not supported by zkSync.

### My withdrawal was completed, but the funds have not arrived on mainnet

If your withdrawal is marked as "Complete" in [zkscan](https://zkscan.io/), but the funds have not arrived on your
wallet, here are a few steps you should take:

#### 1. Make sure that enough time has passed

"Withdraw" takes a while.

Even when the transaction page says that the "Withdraw" is "Complete", it might still take a few hours before the funds
will actually arrive at your wallet.

#### 2. Make sure that the trouble is with zkSync

So you've waited a day, but still, the funds have not reached your account. What do you do next?

Please open the [etherscan](https://etherscan.io/) and go to your address page, then head to the "Internal Txs". There
will be a list of all transactions to your account from smart contracts. There you should see a transaction coming from
the zkSync smart contract. If you see the transaction, then your funds did arrive. Your wallet may not display these
types of transactions, that's why it might seem like your account has not received any funds at all.

If the account balance that is shown in your wallet is the same as on the etherscan, then everything is ok and your
funds did arrive, just the transaction is not displayed.

If the account balance is not the same as on the etherscan, contact the support of your wallet. zkSync did send funds to
your account.

#### 3. Your withdrawal transaction was "out of gas"

Sorry for the inconvenience.

You'll need to wait until the smart contract upgrade (roughly by the end of January) to recover your funds. The
instructions will appear here in the docs when the update is complete.

### If none of the above did help

If nothing above have helped you, please shoot us email at **withdraw@zksync.io** describing your problem. It MUST
contain the following info:

- Your zkSync wallet address.
- What wallet are you using (e.g. Trust).
- What problems do you encounter.

The more information you provide, the faster your problem will be solved!

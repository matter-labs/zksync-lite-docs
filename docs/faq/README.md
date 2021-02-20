# Welcome to zkSync

**zkSync** is a user-centric ZK rollup platform from [Matter Labs](https://matter-labs.io). It is a scaling solution for
Ethereum, already live on Ethereum mainnet.

Some of the main features of zkSync are:

- Extremely low transaction fees
- Trustless protocol
- Funds are as secure as in Ethereum mainnet
- Users are always in control of their funds
- No requirement for operational activity to keep the funds safe

In-depth articles can be found on our [Medium page](https://medium.com/matter-labs).

## Introduction

**zkSync** is powered by the [ZK rollup technology](/faq/tech.md#zkrollup-architecture). It uses zero-knowledge proofs
and on-chain data availability to keep users' funds as safe as though they never left the mainnet.

While security is our paramount priority, user and developer experience are central to zkSync design. We obsessively
seek out improvements that eliminate friction and complexity in order to make zkSync the most enjoyable platform on
Ethereum, for both end-users and builders. The best way to get an impression about it is to
[try out zkSync](https://wallet.zksync.io) yourself — it should only take 2 minutes.

<!-- markdownlint-disable line-length -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/el-9YYGN1nw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- markdownlint-enable line-length -->

## Problems zkSync solves

Gas fees on Ethereum [exceed \$50M per month](https://ethgasstation.info/). With zkSync these costs can be reduced to a
small fraction.

UX-first crypto wallets like [Argent](https://www.argent.xyz/) or [Dharma](https://www.dharma.io/) aim to provide a
banking alternative to entire societies. zkSync makes this mission accomplishable.

The rise of DeFi opens many more interesting use cases. zkSync is here to unlock Paypal-scale for your project.

## zkSync features

- Mainnet-level security with zero reliance on 3rd parties.
- ETH and ERC20 token transfers with instant confirmations and 10-minute finality on L1 (see
  [supported tokens](/faq/tokens.md#supported-tokens)).
- Zero-cost account creation.
- Ultra-low transaction fees (~\$0.001 per transfer).
- Payments to existing Ethereum addresses (including smart-contracts).
- Fees conveniently payable in token being transferred.
- Withdrawals to mainnet in under 15 minutes.
- [Multisig](https://tlu.tarilabs.com/cryptography/musig-schnorr-sig-scheme/The_MuSig_Schnorr_Signature_Scheme.html)
  support.
- Permissionless [smart contracts](/faq/sc.md) (coming soon).

<!-- - [Privacy](/faq/privacy.md) (coming soon). -->

## zkSync in comparison

zkSync
[stands out remarkably](https://medium.com/matter-labs/evaluating-ethereum-l2-scaling-solutions-a-comparison-framework-b6b2f410f955)
in security and usability among existing L2 scaling solutions. Thanks to the combination of cutting-edge cryptography
and on-chain data availability, zkRollup (the core technology of zkSync) is **the only** L2 scaling solution that
doesn't require any operational activity to keep the funds safe. For example, users can go offline for a year, then come
back and be sure to safely withdraw their assets without any external help — even if zkRollup operators were long gone.

To quote from [Vitalik Buterin's 2021 guide to rollups](https://vitalik.ca/general/2021/01/05/rollup.html):

> In general, my own view is that in the short term, optimistic rollups are likely to win out for general-purpose EVM
> computation and ZK rollups are likely to win out for simple payments, exchange and other application-specific use
> cases, **but in the medium to long term ZK rollups will win out in all use cases as ZK-SNARK technology improves**.

![L2 comparison](https://zksync.io/chart4.png)

<!-- markdownlint-disable line-length -->
<!-- ![L2 comparison](https://miro.medium.com/max/1400/1*Q1IOxqm-nkr6JWz6kJpt5w.png) -->
<!-- <iframe width="100%" height="950px" frameBorder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQfpVcOEMWfdrhsK1jRYaPIeeYqaFzanFkMkg6pYjR17KCG4R4X54sGpmTFrNjxwoOap8SiHwq4GCmK/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> -->
<!-- markdownlint-enable line-length -->

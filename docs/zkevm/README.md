---
meta:
  - name: title
    content: zkEVM FAQ
  - name: description
    content: 'Everything you need to know about zkSync 2.0: an EVM-compatible zkRollup.'
  - name: keywords
    content: zkEVM, zk-EVM, zk EVM
---

# zkEVM FAQ

[[toc]]

## General

### What is zkEVM and why is this a big deal?

zkEVM is a virtual machine that executes smart contracts in a way that is compatible with zero-knowledge-proof
computation. It is the key to building an EVM-compatible ZK Rollup while preserving the battle-tested code and knowledge
gained after years of working with Solidity. Our zk-EVM keeps EVM semantics, but is also ZK-friendly and takes on
traditional CPU architectures.

The launch of the zkEVM represents an essential turning point for crypto. Up until recently it was still considered
merely a theoretical possibility that will take years to get real. But over the last year, the pace of the entire zero
knowledge proof ecosystem has exceeded even experts’ expectations. And because of the many
[R&D breakthroughs](https://www.youtube.com/watch?v=6wLSkpIHXM8') by our team, that made zk-EVM possible, Solidity
programmers now have first-class access to the unmatched scaling, security, and UX benefits of zero knowledge proofs.

### What is zkSync 2.0?

zkSync 2.0 is an EVM-compatible ZK Rollup being built by Matter Labs, powered by our zkEVM.

But this is not our first product! zkSync 1.0 has been
[live for payments](https://twitter.com/vitalikbuterin/status/1287921136911753216?lang=en) for almost 1.5 years:

- reducing the [cost of transfers](https://l2fees.info/) by ~50x,
- securing close to [4M transactions](https://zkscan.io/),
- and used by 98% of all transactions in the recent 4 [Gitcoin grant rounds](https://gitcoin.co/).

For previous in-depth updates on zkSync 2.0, check out our
[Medium](https://medium.com/matter-labs/zksync-2-0-hello-ethereum-ca48588de179).

To keep up to date with our exciting announcements coming soon, follow our [Twitter](https://twitter.com/zksync).

## Basics

### What does ZK stand for?

Zero Knowledge. Get familiar with ZK proofs [here](https://github.com/matter-labs/awesome-zero-knowledge-proofs).

### What is a ZK Rollup?

ZK Rollups are a layer 2 scaling solution that uses validity proofs to scale computation: each batch of transactions
comes with a cryptographic proof (ZK-SNARK) that is verified by an Ethereum smart contract. This way every single
transaction is fully verified by all Ethereum full nodes before a block is finalized.

### How secure is a ZK Rollup?

Out of all the scaling solutions, ZK Rollups are the
[most secure](https://medium.com/matter-labs/evaluating-ethereum-l2-scaling-solutions-a-comparison-framework-b6b2f410f955).
They rely purely on math to fully inherit the security of L1, which is critical for function in highly adversarial
environments. Other scaling solutions, instead, rely on economic guarantees or third parties, and thus offer far weaker
security properties.

Validation of state changes in ZK Rollups is done through the computation of a zero knowledge proof: if any of the state
changes is invalid the proof cannot be produced and, in turn, this means that the entity validating cannot include
invalid state changes. That’s why we call them sequencers and not validators: they don’t validate transactions, the
Ethereum smart contract does by relying on pure math. We don’t need to trust them or monitor them for frauds, since they
cannot commit any fraud.

### How scalable is a ZK Rollup?

ZK Rollups can offer up to 2000 TPS at peak load! But it gets better.

ZK Rollups are also the only L2 scaling solution that can be extended with a system that can provide an entire order of
magnitude more scale: **zkPorter** can offer up to 20,000 TPS!

![L2 comparison](/scalability.png)

### What is zkPorter?

[zkPorter](https://medium.com/matter-labs/zkporter-a-breakthrough-in-l2-scaling-ed5e48842fbf) puts data availability —
essential transaction data needed to reconstruct state — offchain rather than on Ethereum. Instead, data availability is
secured using proof of stake (PoS) by zkSync token stakers. This enables much higher scalability (tens of thousands
TPS), and as a result, ultra-low transaction fees comparable with sidechains (in the range of a few cents).

The security of zkPorter is still better than any other L1 or sidechain. In the worst case, where a malicious actor
controls both the sequencer and over ⅔ of the total stake, they can sign a _valid_ state transition but withhold the
data. In this case, the state is “frozen” and users will not be able to withdraw, but the attacker’s stake is frozen as
well. Thus, there is no direct way for an attacker with a large stake to financially benefit from an exploit.

For an in-depth dive into the scale and security of zkPorter, check out this
[Medium post](https://medium.com/matter-labs/zkporter-a-breakthrough-in-l2-scaling-ed5e48842fbf).

### What is the transaction finality in zkSync?

The sequencer will provide a fast, offchain confirmation of your transaction. This confirmation is **semi-trusted**: a
sequencer cannot trigger an invalid state update (e.g. steal funds) but can still fail to include a transaction after it
was confirmed, or reorder transactions over a short window of time.

A transaction is considered final when a zero knowledge proof has been generated and posted to Ethereum. Depending on
activity, this can take from 15 minutes to 3 hours.

## Comparison

### What are the major differences between zkSync 2.0 and optimistic rollups (eg. Arbitrum, Optimism)?

**1) Significantly higher security**

ZK Rollup eliminates reliance on watchers, replacing the game-theoretic economic security with cryptographic security —
you trust pure math rather than incentivized actors.

**2) Higher capital efficiency**

In ORs, native withdrawals of any asset takes a long time (the best case: 1 week). This is a security parameter and
cannot be reduced without an exponential decrease in security.

For fungible tokens, this problem can be mitigated by liquidity providers that have significant idle liquidity on the
other side of the bridge. To compensate for the capital opportunity costs, the users are charged a fee to bypass the
waiting period.

For smaller amounts this might be acceptable, but for professional traders this will already constitute a significant
cost and will reflect on their margins. For institutions that need to periodically move huge volumes of liquidity (say,
billions of dollars) between L1 and L2, this solution will not be efficient since it’s very unlikely that liquidity
providers will keep that much money idle.

**3) UX for NFTs**

Native withdrawals of NFTs cannot be accelerated — the liquidity provider solution does not apply because NFTs are
unique. Thus, to withdraw an NFT, users must wait 1 week or potentially more.

In zkSync, any withdrawal is finalized between 15 minutes and 3 hours, with faster times when there is higher activity.

**4) Transaction costs**

ZK Rollups are [cheaper](https://l2fees.info/) for most popular crypto use cases because it requires the least amount of
data to be posted on-chain (no signatures and no transaction parameters).

However, for some common use cases, the cost savings are an order of magnitude more significant! Specifically, ZK
Rollups only need to post the final changes to state, and since many transactions touch the same storage slots, this
cost is amortized. For example, all trading and oracle update transactions in the same block come with zero data
availability costs.

Finally, zkSync 2.0 will have an extension called zkPorter that offers constant 1-3 cent transaction fees by putting
data offchain. Optimistic rollups fundamentally cannot have such an extension with off-chain data availability because
there is no way for the watchers to verify the validity of every single transaction without public data for it. So, it’s
not possible for them to offer such a hybrid system to users who prefer ultra-low fees over security.

### How does using zkSync compare to sidechains and other L1 blockchains (e.g. Matic/Polygon, BSC, Solana, Avalanche)?

Ethereum sidechains, as well as some separate L1 blockchains, have their own security mechanisms and a bridge with
Ethereum. Sometimes the bridge validators are identical with the sidechain validators and use the same staking mechanism
(e.g. in case of Polygon/Matic PoS).

The most important thing to understand about this topic is that no matter how the sidechain itself is secured, **when
it’s used as a scaling solution, security of the assets always depends on the goodwill of the majority of the bridge
validators**. If the majority is compromised, they can irreversibly steal all of the assets. And since most bridges
operate in a delegated PoS model under a low latency consensus requirement, the majority of the stake is usually
controlled by only a handful of validator servers physically located in the same data center. The risk of all of these
servers being compromised is nontrivial and a lot more than a theoretical threat!

zkSync 2.0 offers two account types to its users: zkRollup and zkPorter. Let’s consider the comparison for each of them:

**1) zkRollup vs Sidechains**

zkRollups provide the same level of security as L1 itself, but at lower costs (roughly 1/50th of the costs on L1).
Sidechains, on the other hand, depend on the honest majority assumptions to achieve much lower fees.

**2) zkPorter vs Sidechains**

[zkPorter](https://medium.com/matter-labs/zkporter-a-breakthrough-in-l2-scaling-ed5e48842fbf) offers sidechain-like
ultra-low fees, but with an order of magnitude more security.

zkPorter relies on Ethereum for transaction validity and on zkSync token stakers for data availability.

In the worst case, where a malicious actor controls both the sequencer and over ⅔ of the total stake, they can sign a
_valid_ state transition but withhold the data. This would freeze the state and users would not be able to withdraw, but
the attacker’s stake is frozen as well.

This is still a much stronger guarantee than sidechains, because no hack can be directly exploited and there is no
economic benefit from being compromised. Moreover, guardian nodes can run on consumer hardware, so they don’t require
delegated PoS. This means much higher decentralization, which leads to much higher digital security: a hacker might need
to break hundreds if not thousands of guardian nodes to control the majority of the stake.

**Bottom line**

No matter what zkSync account type you choose, it’s going to be a lot more secure than sidechains. zkRollups accounts
will offer the highest security, while zkPorter accounts will offer comparable costs. In any case, all users will be
able to seamlessly interact with each other, making for a much larger liquidity pool.

## Developers

### Does zkSync support Solidity smart contracts?

Yes!

Most DeFi and NFT projects will work with no code changes. However, in the first version, calls to SHA256 and Keccak256
will be replaced with a circuit friendly hash function automatically by the compiler. A few other cryptographic
primitives are currently also unsupported, for example ecrecover and the cryptographic precompiles.

### How does the UI interact with smart contracts? Can I reuse my current frontend?

You can interact completely with smart contracts and the zkSync network via our Web3 API and Ethers SDK:

- For _read_ requests: any web3-compliant framework in any language will work out of the box, with additional optional
  zkSync L2 specific functionality.
- For _write_ requests (sending transactions): due to fundamental differences between L1 and L2, you will have to write
  some additional code (for example, zkSync supports paying fees in any token, so sending a transaction will involve
  choosing a token to pay fees).

So, yes! You can reuse your current frontend with minimal changes (sending transactions is different).

### How do users submit transactions? What wallets are supported?

For interactions with smart contracts, users will sign an EIP712 message with a hash of the calldata. Since EIP712 is
based on a native Ethereum signature, all wallets, even hardware wallets, will work without any extensions required.

### When can I deploy?

To get started visit the [zkSync 2.0 Documentation](https://v2-docs.zksync.io/dev/).

### What is the status of Zinc?

We are currently fully focused on a [Solidity-first approach](https://medium.com/matter-labs/unisync-a-port-of-uniswap-v2-on-the-zkevm-b12954748504). We will resume work on 
[Zinc](/dev/contracts/README.md#zinc) after Solidity is released!

## My question wasn’t answered! ☹️

Join the [community on Discord](https://discord.gg/fyPna387dU).

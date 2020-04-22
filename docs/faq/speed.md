# Speed

## Maximum throughput

**zkSync** node infrastructure has been benchmarked to support >8000 TPS (transactions per second). Currently, actual transaction throughput has an upper bound of 300 TPS due to the inherent limits of BN256 elliptic curve. Unfortunately, Ethereum supports efficient arithmetic operations only for this elliptic curve at the moment. Yet, this number by far exceeds [the average transaction load on Paypal](https://en.bitcoin.it/Scalability#Scalability_targets) and should be sufficient for a while.

We are working on fully integrating the [RedShift](https://eprint.iacr.org/2019/1400) support into the zkSync prover (expected completion in Q3 2020). Once RedShift is fully operational, the only bottleneck for **zkSync** scalability will be Ethereum's block size capacity which **zkSync** uses to publish its state ∆ updates. Current benchmarks of the gas consumption in **zkSync** push the upper bound to over 3500 TPS with RedShift.

## Transaction finality

Transactions in **zkSync** reach the finality of Ethereum once the SNARK proof of **zkSync** block is generated accepted by the smart contract. The proof time generation is expected to be ~10 min, i.e. after 10 minutes, the **zkSync** transaction is as final as any L1 Ethereum tx included in the same Ethereum block as the transaction with the proof.

In contrast, fraud-based scaling solutions (e.g. optimistic rollup) require at least 2 weeks of lockout period to operate more or less securely, which results in 2 weeks objective<sup>\*</sup> tx finality time.

It should be added that Matter Labs and other companies in the ZKP space are constantly working on improving the prover efficiency, which will result in lower finality times (potentially down to under 1 min).

<span class="footnote"><sup>*</sup> Subjective finality time can be shorter for optimistic rollup users who validate every tx themselves, but this would defeat the purpose of optimistic rollup as a scaling solution.</span>

## Instant confirmations

Even though time to finality is ~10 min, it should not affect the usability of the network. Transactions submitted to **zkSync** by users are instantly confirmed, instantly displayed to the receiving party in the UI and API (although they are marked as unconfirmed), and the transferred assets can immediately be used to make further transfers (which might even end up in the same **zkSync** block).

At the moment, instant confirmations are pure promise on the side of **zkSync** operators to include the transaction in the next block. Users who do not trust the operator should await full finality before considering the assets as received.

In the future, a security bond will be added to **zkSync** that will provide instant economic finality guarantees. It will work as follows.

Validators elected to participate in **zkSync** block production will have to post a significant security bond to the **zkSync** smart contract on the mainnet. A consensus run by the validators provides a subsecond confirmation to the user that their transaction will be included in the next **zkSync** block, signed by a supermajority of ⅔ of the consensus participants (weighted by stake).

If a new **zkSync** block is produced and submitted to the mainchain, it cannot be reverted. However, if it doesn’t contain the promised transaction, the security bond of the intersection of the signers of the original receipt and the signers of the new blocks will be slashed. This intersection is guaranteed to have more than ⅓ of the stake. This guarantees that at least ⅓ of the security bond is slashable and that only malicious users will be punished.

A portion of the slashed funds will be used to compensate the tx recipient. The rest will be burned.

## What if mainnet gets congested?

Periodically, extraordinary events lead to very high levels of congestion on the Ethereum network (notable examples are [Cryptokitties crisis](https://media.consensys.net/the-inside-story-of-the-cryptokitties-congestion-crisis-499b35d119cc) or the [Shanghai DOS attack](https://blog.ethereum.org/2016/09/22/ethereum-network-currently-undergoing-dos-attack/)). During such peak load times, gas prices skyrocket and it might become prohibitively expensive to move crypto assets, rendering some services inoperational or preventing arbitrage opportunities.

Moreover, some systems can generally fail in the extreme circumstances, leading to cascading failures (the recent [DeFi Black Thursday](https://forklog.media/black-thursday-for-defi-wounds-to-lick-and-lessons-to-learn/) is an excellent example). This is especially worrisome for fraud-proof-based scaling solutions (payment channels, optimistic rollups), because there is a risk that their automated security bots won't be able to get their fraud-proof transactions mined in case of an attack during high-congestion, thus jeopardizing the security of all assets under the control of such systems. What makes the problem for these systems worse, you can never know until the situation occurs (just like [it happened](https://medium.com/dragonfly-research/daos-ex-machina-an-in-depth-timeline-of-makers-recent-crisis-66d2ae39dd65) for Maker's liquidation bot).

In contrast, **zkSync** is positioned exceptionally well to thrive in a high-congestion environment.

First and foremost, a congested network (just like as a targeted DOS attack) can never create any threat to assets in **zkSync**. Any movement of funds within or out of **zkSync** requires a zero-knowledge proof of validity, and it's simply unaffected by censorship L1 in any way.

Second, the normal operation of **zkSync** is also unlikely to be disrupted, even for smaller amounts. The operator's node is configured to automatically increase the gas price to over-the-average level to get **zkSync** blocks mined with high priority. Since the on-chain costs per transaction are ~1/100th of the cost of corresponding plain transaction on the L1, **zkSync** users will be least affected.

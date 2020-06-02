# Welcome to zkSync

**zkSync** is a user-centric zkRollup for DeFi, created by [Matter Labs](https://matter-labs.io). We introduced our [vision for zkSync](https://medium.com/matter-labs/introducing-zk-sync-the-missing-link-to-mass-adoption-of-ethereum-14c9cea83f58) in December 2019.

Today, you can use zkSync for **ETH and ERC20 token transfers** at high volumes (up to 3500 TPS on Ethereum 1.0) and a negligible cost per transaction. In the near future zkSync will turn into a full-fledged DeFi platform, where you can scale your smart contracts using [Zinc](https://github.com/matter-labs/zinc) programming framework.

## zkRollup in a nutshell

**zkRollup** is a trustless blockchain scaling technology driven by the power of succinct [zero-knowledge proofs](https://github.com/matter-labs/awesome-zero-knowledge-proofs). A few properties make it unique.

**Security guarantees** are practically as strong as if the funds were placed directly on the mainnet. In contrast to solutions with off-chain data (such as [validium](https://twitter.com/the_matter_labs/status/1267460624210186241)), zkRollup operators are completely trustless; the protocol makes it impossible for them to either steal or freeze user's assets. What's important, this is achieved by pure cryptography, without any game-theoretic constructions. zkRollup eliminates the need for fraud-proofs, active monitoring by the user or watch-towers, exit games, and other complex interactive mechanisms with significant operational risks.

It must be added that zkRollup is built on cutting-edge cryptography and thus can not be called 100% risk-free. At the same time, the security of the cryptographic primitives used in zkSync has been subject to rigorous review by the academic and professional cryptographer community. You cam learn more about it in the [corresponding section](/faq/security) of this FAQ.

**Usability** is in almost every aspect as good or better than that of the mainnet. zkRollup supports convenient account model like Ethereum (accounts in zkSync even share addresses with the user's Ethereum accounts). Transaction fees can be paid in any token. And withdrawals to the mainnet are completed in under 10 minutes! This is in stark contrast to Plasma and optimistic rollups, where users must deal with a staggering exit delay of ~1 week.

Although the time to hard finality is increased to ~5 min compared to L1, transactions in zkSync are instantly confirmed with partial (economic) finality. This makes the platform a lot more convenient in practice.

## Project status

- [Testnet is live on Rinkeby](https://testnet.zksync.io) — give it a try, the UI is simple and intuitive.
- Security audit by [ABDK Consulting](https://www.abdk.consulting/) is underway.
- Token transfers on mainnet will be launched as soon as the audits are finished.
- [Zinc](https://github.com/matter-labs/zinc) smart contract framework is under active development.

## Question unanswered?

Please [reach out to us](/legal/contacts).
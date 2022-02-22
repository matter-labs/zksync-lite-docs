# Functionality

[[toc]]

## zkRollup in a nutshell

**zkRollup** is a trustless blockchain scaling technology driven by the power of succinct
[zero-knowledge proofs](https://github.com/matter-labs/awesome-zero-knowledge-proofs). A few properties make it unique.

**The security guarantees of zkRollup** are practically as strong as if the funds were placed directly on the mainnet.
In contrast to solutions with off-chain data availability (such as
[validium](https://twitter.com/the_matter_labs/status/1267460624210186241)), zkRollup operators are completely
trustless; the protocol makes it impossible for them to either steal or freeze user's assets. What's important, this is
achieved by pure cryptography, without any game-theoretic constructions. zkRollup eliminates the need for fraud-proofs,
active monitoring by the user or watch-towers, exit games, and other complex interactive mechanisms with significant
operational risks.

It must be added that zkRollup is built on cutting-edge cryptography and thus can not be called 100% risk-free. At the
same time, the security of the cryptographic primitives used in zkSync has been subject to rigorous review by the
academic and professional cryptographer community. You can learn more about it in the
[corresponding section](/userdocs/security) of this FAQ.

**The user experience** is in almost every aspect as good or better than that of the mainnet. zkRollup supports
convenient account model like Ethereum (accounts in zkSync even share addresses with the user's Ethereum accounts).
Transaction fees can be paid in any token. And withdrawals to the mainnet are completed in under 10 minutes! This is in
stark contrast to Plasma and optimistic rollups, where users must deal with a staggering exit delay of ~1 week.

Although the time to hard finality is increased to ~10 min compared to L1, transactions in zkSync are instantly
confirmed with partial (economic) finality. This makes the platform a lot more convenient in practice.

## Multisig

zkSync is cold-wallet friendly. Multisig is also possible with
[muSig Schnorr signature scheme](https://tlu.tarilabs.com/cryptography/musig-schnorr-sig-scheme/The_MuSig_Schnorr_Signature_Scheme.html).

## What can zkSync be used for

- Affordable, scalable, secure, non-custodial ETH and ERC20 token transfers (for now)
- Later: smart contracts (link to question)

also explain:

- users can use zkSync UI (link to section)
- alternatively, as a project developer you can build your own wallet using zksync.js -- check out developer guide
  (link)

## Supported tokens

For transfers:

- Native Ether (ETH)
- Plus 30 popular tokens added at launch: list
- Any other token can be added in coordination with Matter Labs -- talk to us (eventually it will be permissionless, but
  in the beginning we want to curate the list)

## Transaction fees

- Users pay in the same token as being transferred.
- we are going to operate at break-even cost, later move to marketplace by permissionless validators
- explain how the price the formed:
  - variable:
    - ETH onchain (gas) part: ~0.3k gas for every transfer (to compare: basic ETH transfer is 21k gas, average ERC20
      transfer is 60k-80k gas)
    - Technical note: `full_cost = (block_proof_cost + gas_per_tx * N_tx) / N_tx`;
      - block_proof_cost ~ 300k gas
      - N_tx in block ~1000 - 15000
      - as operators, we will charge as though blocks are full
  - fixes (driven by physical costs):
    - ZKP generation part: ~{placeholder, add when benches complete}
    - storage part: ~1/1000 - 1/100 of the ETH storage cost (and, in contrast to ETH, it won't go up with increase gas
      costs)

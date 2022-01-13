# Security by correctness, isolation, and obscurity

Historically, there are [3 major approaches](https://theinvisiblethings.blogspot.com/2008/09/three-approaches-to-computer-security.html) to securing computer systems. How can we
apply these approaches to zkSync and blockchains in general?

## 1. **Security by correctness**

Security by correctness refers to being as proactive as we can in producing software that does not have bugs or maliciously behaving code. We do this by following the industry’s
best practices.
[Building Secure Contracts](https://github.com/crytic/building-secure-contracts) maintained by Trail of Bits,
[Smart Contract Best Practices](https://consensys.github.io/smart-contract-best-practices/) maintained by Consensys Diligence, and
[Security & Safety Research Base](https://github.com/OffcierCia/ultimate-defi-research-base#security--safety) maintained by Cia Officer are three of many great resources
documenting the industry’s learnings from testing in production for the past few years. Our contracts and cryptography are also subject to internal
and [external audits](https://zksync.io/updates/security-audits.html).

## 2. **Security by isolation**

The goal of security by isolation is to separate a system into smaller pieces to minimize the impact of the failure of one piece on all other pieces. Following this philosophy, our
smart contracts are split and designed under the assumption that all other parts can be byzantine–unreliable, buggy, or compromised.

Additionally, we believe that security by isolation can be further strengthened by adding redundancy. In zkSync, all transactions submitted are validated by simple execution before
inclusion in the block. So if there is a vulnerability in our ZK circuits, the attacker would need to break through both the cryptography *and* the sequencer (our servers for
now, but eventually switching to multi-validator PoS consensus).

## 3. **Security by obscurity**

This approach relies on obscurity to make the attacker’s life as hard as possible, yet blockchain culture is grounded in radical transparency for developers and users, and
complemented by our strong community of white-hat hackers.

To strike the balance between secrecy for security’s sake and transparency, we are committed to the following:

- **Upgrades**: All code for upgrades is made public for one month before they go live. This gives users ample time to opt out of the upgrade and the whitehat community to find
  bugs in a trustless way via the incentivized hacknet—a separate mainnet instance of the upgrade with bounty funds provided inside by Matter Labs.
- **Audits**: Full audit reports are published in our [documentation](https://zksync.io/updates/security-audits.html).
- **Vulnerability Disclosure**: All vulnerabilities must be handled silently until a fix is deployed and the Matter Labs team conducts a thorough internal review of not only the
  root cause, but also potential weak links in the overall security design. A public postmortem will be released with each vulnerability after systematic changes have been fully
  implemented. Please see our [full vulnerability disclosure policy](https://zksync.io/dev/security/disclosure.html) and
  updated [list of known bugs](https://zksync.io/dev/security/bugs.html).

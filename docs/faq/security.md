# Security

[[toc]]

## How secure is zkSync?

Security claims of zksync:

- Operators can not spend your tokens: ZKPs checks in Ethereum
- Money can always be retrieved without cooperation from operators

## How is funds retrievability guaranteed?

- Anti-censorship: priority queue.
- If not served within a timeout: emergency exit directly on Ethereum. All code is available.

## What cryptography is being used?

- PLONK
- Rescue
- link to Eli's slide

## Is a trusted setup required?

- Reusing Ignition for PLONK
- No trusted setup for RedShift in the future

## How are private keys managed?

- now: zkSync client generates the keys from a signature
- explain 2FA
- in the future: directly by the wallets

## Security audit

- All code is open source: ...
- Audited by ABDK Consulting (link), for both smart contract and circuits

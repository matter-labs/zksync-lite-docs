# Security

[[toc]]

## Whatsecurity gurantees?

Security claims of zksync:

- Operators can not spend your tokens: ZKPs checks in Ethereum
- Money can always be retrieved without cooperation from operators

- Anti-censorship: priority queue.
- If not served within a timeout: emergency exit directly on Ethereum. All code is available.

## What cryptography is being used?

- PLONK
- Rescue
- RedShift
- link to Eli's slide

## What about trusted setup?

- Reusing Ignition for PLONK (link)
- No trusted setup for RedShift in the future

## What are potential risks?

- bug in SC
- bug in ciruit
- bug in trusted setup
- cryptography compromised
- wallet hacked

## Is there a security audit?

- All code is open source: ...
- Audited by ABDK Consulting (link), for both smart contract and circuits

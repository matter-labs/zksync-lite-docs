# Functionality

[[toc]]

## What can zkSync be used for?

- Cheap, scalable, secure, non-custodial ETH and ERC20 token transfers (for now)
- Later: smart contracts (link to question)

also explain:

- users can use zkSync UI (link to section)
- alternatively, you can build your own wallet using zksync.js -- check out developer guide (link)

## The end-user experience

- Address
- Gasless transactions
- Getting money, sending: links to the User guide section
- Non-custodial
- Permissionless: no KYC!

(record video)

## Supported tokens

For transfers:

- Native Ether (ETH)
- Plus 30 popular tokens added at launch: list
- Any other token can be added in coordination with Matter Labs -- talk to us

## Transaction fees

- Users pay in the same token as being transferred.
- we are going to operate at break-even cost, later move to marketplace by permissionless operators
- explain how

## Max throughput

- 300 TPS today (Paypal-level)
- 1000 TPS after Berlin hardfork (BLS12-381 support is already scheduled for inclusion)
- 3500 TPS once RedShift is integrated (ETA: summer 2020; independent of Berlin hardfork)

Operator's server infrastructure has been benchmarked to run 7000 TPS.

TODO: update with actual numbers once benches complete.

## What if network is congested?

- We will pay much higher fees to include the blocks, so we're safe against congestion

## How quickly is my tx confirmed?

- Instant promise for now (to be backed by security bond)
- Finality on ETH mainnet after the ZKP is generated and mined on ethereum (~10-15 min)
- explain block filling timeout

## Are transactions private?

- Not now, later. Privacy is important to us! But we want to make it properly without creating false sense of security.

## Are smart contracts supported?

- Not now, later
- Explain mental model: same as Ethereum
- Explain interoperability
- Talk to us!

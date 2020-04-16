# Speed

## Max throughput

- 300 TPS today (Paypal-level)
- 1000 TPS after Berlin hardfork (BLS12-381 support is already scheduled for inclusion)
- 3500 TPS once RedShift is integrated (ETA: summer 2020; independent of Berlin hardfork)

Bottleneck: ETH gas only; ZKPs are well parallelizable and can thus scale indefinitely. Of course, operator's server infrastructure too -- in fact, it has been benchmarked to run >7000 TPS.

(TODO: update with actual numbers once benches complete.)

## What if network is congested?

- bring explaes of Cryptokitties, Black Thursday
- We will pay much higher fees to include the blocks, so we're safe against congestion
- We have this functionalitu in our servers

## How quickly is my tx confirmed?

- Instant promise in the UI for now (to be backed by security bond)
- Finality on ETH mainnet after the ZKP is generated and mined on ethereum (~10-15 min)
- explain block filling timeout (timeout of 15 min)
- in the future we will add instant confirmations with guarantee (check out zkSync intro)

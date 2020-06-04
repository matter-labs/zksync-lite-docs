# Overview

## Introduction

**zkSync** is a a user-centric zkRollup platform for DeFi. In other words, it's a L2 protocol that employs the latest zero-knowledge proof (ZKP) cryptography to secure its operations.

## Problems zkSync solves

Gas fees for token transfers on Ethereum [exceed $2M per month](https://ethgasstation.info/). With zkSync these costs can be reduced to a small fraction.

Reddit recently introduced [Ethereum-based community points](https://www.coindesk.com/reddit-rolls-out-community-points-on-ethereum-to-incentivize-positive-behavior). Enabling them for 330 million Reddit's monthly active users would hit the L1 way harder than Cryptokitty crisis did. zkSync can perfectly handle such load.

UX-first crypto wallets like [Agrent](https://www.argent.xyz/) or [Dharma](https://www.dharma.io/) aim to provide a banking alternative to entire societies. zkSync makes their mission accomplishable.

The rise of DeFi opens many more interesting use cases. zkSync is here to unlock VISA-scale for your project.

## Highlights

- Up to 3000 TPS.
- Security through pure cryptography: no game-theoretic assumptions, no fraud-proofs, no liveness requirement, no watch-towers.
- Same security guarantees as if the funds were kept directly in native L1 accounts.
- Smooth UX: instant tx confirmations, exits to L1 in under 5 min.
- Easy integration: API as simple as Ethereum's web3.js

## zkSync features

- ETH and ERC20 token transfers.
- Cold-wallet friendly account control.
- [Multisig](https://tlu.tarilabs.com/cryptography/musig-schnorr-sig-scheme/The_MuSig_Schnorr_Signature_Scheme.html) support.
- Permissionless [smart contracts](/faq/sc) (coming soon).
- [Privacy](/faq/privacy) (coming soon).
- Censorship- & frontrunning-resistance (coming soon).

## zkSync in comparison

|                            	| Plasma                  	| Optimistic rollups     	| Validium (StarkEx) 	| zkSync            	|
|----------------------------	|------------------------	|-----------------------    |--------------------	|-------------------	|
| Throughput                 	| ∞                     	| 300 TPS <sup>1</sup>    	| 9k+ TPS           	| 3k TPS <sup>2</sup>  	|
| Security mechanism          	| Fraud-proofs            	| Fraud-proofs           	| Cryptography   	    | Cryptography  	    |
| Withdrawals to L1            	| 1 week                  	| 1 week                 	| 5 min               	| 5 min             	|
| Privacy                      	| No                    	| No                     	| Possible            	| Possible           	|
| Operator can steal funds      | No <sup>3</sup>       	| No <sup>3</sup>          	| No                  	| No                	|
| Operator can freeze funds 	| No                    	| No                     	| Yes                 	| No                	|

<sup>1</sup> 300 TPS to remain compatible with EVM, otherwise up to 1000 TPS.

<sup>2</sup> The practical upper bound for any rollup on ETH 1.0.

<sup>3</sup>  Only if the attack was successfully detected and fraud-proof reached L1 in time.
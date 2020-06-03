# Overview

## Introduction

**zkSync** is a a user-centric zkRollup platform for DeFi. In other words, it's a L2 protocol that employs the latest zero-knowledge proof (ZKP) cryptography to secure its operations.

## Problems zkSync solves

Gas fees for token transfers on Ethereum [exceed $2M per month](https://ethgasstation.info/). zkSync can reduce these costs today by a factor of 100.

Reddit recently introduced [Ethereum-based community points](https://www.coindesk.com/reddit-rolls-out-community-points-on-ethereum-to-incentivize-positive-behavior). Enabling them for 330 million Reddit's monthly active users would hit the L1 way harder than Cryptokitty crisis did. zkSync can perfectly handle such load.

The rise of DeFi opens many more interesting use cases that can lead to exponential growth of the user base. zkSync is here to unlock VISA-scale for your project.

## Highlights

- Up 3500 TPS.
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
| Security mechanism          	| Fraud-proofs            	| Fraud-proofs           	| ZKP cryptography   	| ZKP cryptography  	|
| Withdrawals to L1            	| 1 week                  	| 1 week                 	| 5 min               	| 5 min             	|
| Operator can steal funds?     | No (if caught)          	| No (if caught)          	| No                  	| No                	|
| Operator can freeze funds?	| No                    	| No                     	| Yes                 	| No                	|
| Privacy                      	| No                    	| No                     	| Yes                 	| Yes                	|

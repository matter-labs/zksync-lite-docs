# Overview

## Introduction

**zkSync** is a a user-centric zkRollup platform for DeFi. In other words, it's a L2 protocol that employs the latest zero-knowledge proof (ZKP) cryptography to secure its operations.

## Problems zkSync solves

Gas fees for token transfers on Ethereum [exceed $2M per month](https://ethgasstation.info/). With zkSync these costs can be reduced to a small fraction.

UX-first crypto wallets like [Agrent](https://www.argent.xyz/) or [Dharma](https://www.dharma.io/) aim to provide a banking alternative to entire societies. zkSync makes their mission accomplishable.

The rise of DeFi opens many more interesting use cases. zkSync is here to unlock VISA-scale for your project.

## Highlights

- Up to 2000 TPS.
- Security through pure cryptography: no game-theoretic assumptions, no fraud-proofs, no liveness requirement, no watch-towers.
- Same security guarantees as if the funds were kept directly in native L1 accounts.
- Smooth UX: instant tx confirmations, exits to L1 in under 10 min.
- Easy integration: API as simple as Ethereum's web3.js

## zkSync features

- ETH and ERC20 token transfers.
- Cold-wallet friendly account control.
- [Multisig](https://tlu.tarilabs.com/cryptography/musig-schnorr-sig-scheme/The_MuSig_Schnorr_Signature_Scheme.html) support.
- Permissionless [smart contracts](/faq/sc) (coming soon).
- [Privacy](/faq/privacy) (coming in v2).
- Censorship- & frontrunning-resistance (coming in v2).

## zkSync in comparison

|                                | Plasma                  	| Optimistic rollups     	| Validium           	| zkSync            	|
|----------------------------    |------------------------	|-----------------------    |--------------------	|-------------------	|
| Requires watch-towers          | Yes                   	| Yes                      	| No               	    | No              	    |
| Withdrawals to L1              | 1 week                  	| 1 week                 	| 10 min               	| 10 min             	|
| Privacy                        | No                    	| No                     	| Yes               	| Yes                  	|
| Operator can freeze funds      | No                   	| No                     	| Yes                 	| No                	|
| Operator can confiscate funds  | Yes <sup>\*</sup>     	| Yes <sup>\*</sup>        	| Yes <sup>\*\*</sup>   | No                	|
| Funds can be stolen            | Yes <sup>\*</sup>       	| Yes <sup>\*</sup>     	| Yes                 	| No                	|

<sup>\*</sup> Yes, because fraud-proofs can fail for various reasons, e.g. hacks or bribing attacks.
<sup>\*\*</sup> Depends on the implementation of the upgrade mechanism, but usually yes.

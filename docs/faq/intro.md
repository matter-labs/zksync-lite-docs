# Functionality

[[toc]]

## What is zkSync?

zkSync is a trustless scaling solution for Ethereum. 

Today, you can use it for secure, user-friendly **ETH and ERC20 token transfers** at high volumes (up to 3500 TPS) and a negligable cost per transaction (see the [Speed](/faq/speed/) section).

In the near future, zkSync will support [Smart contracts](/faq/sc) and [Privacy](/faq/privacy).

## How does it work?

zkSync is built on the zkRollup architecture. All funds are held by a smart contract on the mainchain, while computation and storage are performed off-chain. For every zkRollup block, zero-knowledge proof (SNARK) of the state transition is generated and verified by the mainchain contract. This SNARK includes the proof of the validity of every single transaction in the Rollup block. Additionally, the public data update for every block is published over the mainchain network as cheap calldata.

This architecture provides the following guarantees:

- zkRollup validator(s) can never corrupt the state or steal funds (unlike Sidechains).
- Users can always retrieve the funds from the zkRollup even if validator(s) stop cooperating because the data is available (unlike Plasma).
- Thanks to validity proofs, neither users nor a single trusted third party needs to be online to monitor zkRollup blocks in order to prevent fraud (unlike fraud-proof systems, such as payment channels or optimistic rollups). This excellent article dives deep into the overwhelming benefits of validity proofs over fraud proofs.

In other words, zkRollup strictly inherits the security guarantees of the underlying L1. This, together with the richness of the Ethereum community and existing infrastructure, was a decisive factor in our decision to focus on an L2 solution instead of trying to build our own L1.

## What tokens are supported?

For transfers:

- Native Ether (ETH)
- Plus 30 popular tokens added at launch: list
- Any other token can be added in coordination with Matter Labs -- talk to us (eventually it will be permissionless, but in the beginning we want to curate the list)

Explain zkSync token.

## What tx fees do users pay?

- Users pay in the same token as being transferred.
- we are going to operate at break-even cost, later move to marketplace by permissionless validators
- explain how the price the formed:
    - variable:
        - ETH onchain (gas) part: ~0.3k gas for every transfer (to compare: basic ETH transfer is 21k gas, average ERC20 transfer is 60k-80k gas)
        - Technical note: `full_cost = (block_proof_cost + gas_per_tx * N_tx) / N_tx`; 
            - block_proof_cost ~ 300k gas
            - N_tx in block ~1000 - 15000
            - as operators, we will charge as though blocks are full
    - fixes (driven by physical costs):
        - ZKP generation part: ~{placeholder, add when benches complete}
        - storage part: ~1/1000 - 1/100 of the ETH storage cost (and, in contrast to ETH, it won't go up with increase gas costs)

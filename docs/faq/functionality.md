# Functionality

[[toc]]

## What can zkSync be used for?

- Affordable, scalable, secure, non-custodial ETH and ERC20 token transfers (for now)
- Later: smart contracts (link to question)

also explain:

- users can use zkSync UI (link to section)
- alternatively, as a project developer you can build your own wallet using zksync.js -- check out developer guide (link)

## Supported tokens

For transfers:

- Native Ether (ETH)
- Plus 30 popular tokens added at launch: list
- Any other token can be added in coordination with Matter Labs -- talk to us (eventually it will be permissionless, but in the beginning we want to curate the list)

## Transaction fees

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

# zkSync contracts v4 upgrade announcement

We will start the notice period to upgrade zkSync contracts to a new version today.

## Changes

- Timestamp is added to the block commitment. Rollup block timestamp validity is checked when block is committed
  onchain.
- Offchain ChangePubKey can be performed for smart contract wallets that can be deployed with CREATE2 when pubkey hash
  is encoded in the CREATE2 salt parameter.
- Governance contract can pause token deposits.
- ChangePubKey message signature is changed.
- Onchain operation processing changed on the contract.
- Recursive block verifier added.
- Onchain rollup block commitment changed, multiple blocks can be committed, verified at once.

## Code diff

The exact changes in the code of the contracts
[can be found here](https://github.com/matter-labs/zksync/compare/contracts-3...contracts-4?file-filters[]=.sol).

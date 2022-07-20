# zkSync contracts v2 upgrade announcement

We will start the notice period to upgrade zkSync contracts to a new version today.

## Changes

- Added event denoting information about pending and completed withdrawals.
  [bb0d1bd](https://github.com/matter-labs/zksync/commit/bb0d1bd)
- Added support for tokens that aren't fully compatible with ERC20.
  [c088328](https://github.com/matter-labs/zksync/commit/c088328)
- Block revert interval is changed to 0 hours. [c088328](https://github.com/matter-labs/zksync/commit/c088328)
- Redundant priority request check is removed from contract upgrade logic.
  [c088328](https://github.com/matter-labs/zksync/commit/c088328)
- `PRIORITY_EXPIRATION_PERIOD` is reduced to 3 days. [c12ab40](https://github.com/matter-labs/zksync/commit/c12ab40)
- `UPGRADE_NOTICE_PERIOD` is increased to 8 days. [c12ab40](https://github.com/matter-labs/zksync/commit/c12ab40)

## Code diff

The exact changes in the code of the contracts
[can be found here](https://github.com/matter-labs/zksync/compare/contracts-1…contracts-2?file-filters[]=.sol#diff-99ba1fa7e498c046a900e03ec0ab8d18).

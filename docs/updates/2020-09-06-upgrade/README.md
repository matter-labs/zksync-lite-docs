# zkSync contracts v3 upgrade announcement

We will start the notice period to upgrade zkSync contracts to a new version today.

## Changes

- Change pubkey operation requires fee for processing.
- Added support for the forced exit operation which allows user to force a withdrawal from another account that does not
  have signing key set and is older than 24h.

## Code diff

The exact changes in the code of the contracts
[can be found here](https://github.com/matter-labs/zksync/compare/contracts-2…contracts-3?file-filters[]=.sol#diff-99ba1fa7e498c046a900e03ec0ab8d18).

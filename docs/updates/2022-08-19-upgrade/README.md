---
sidebarDepth: 3
---

# zkSync contracts v9 upgrade announcement

<!-- markdownlint-disable MD034 -->

We will start the notice period to upgrade zkSync contracts to a new version today.

## Changes

The exact changes in the code of the contracts
[can be found here](https://github.com/matter-labs/zksync/compare/contracts-8...contracts-9?file-filters[]=.sol).

### Added

- `nonReentrant` modifier for all external functions as additional protection from reentrancy attack.
- New method for EIP-712 `ChangePubKey` authorization.
- A check for non-zero address when changing the governor.

### Changed

- `WithdrawalPending` event parameters changed.
- `Withdrawal` event parameters changed.
- Use `calldata` instead of `memory` for gas cost optimization.
- The visibility of the function `authFactsResetTimer` changed from internal to public.
- `proveBlocks` ignores already proved blocks.

### Removed

- The finalizing withdrawals on `executeBlocks` function are removed.

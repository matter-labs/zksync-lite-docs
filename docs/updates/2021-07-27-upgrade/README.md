---
sidebarDepth: 3
---

# zkSync contracts v5.2 upgrade announcement

<!-- markdownlint-disable MD034 -->

This upgrade includes features for the upcoming wallet integrations and some minor refactoring.

## Changes

The exact changes in the code of the contracts
[can be found here](https://github.com/matter-labs/zksync/compare/contracts-5.1...contracts-5.2?file-filters%5B%5D=.sol#diff-8bfb64c31730477b31e37f735b523beb50906f3732c054a633fac89d8be38c75)

### Added

- Additional method for CREATE2 `ChangePubKey` authorization with extra custom data (wallet-specific).
- Events for the pending withdrawals (in case a withdrawal fails over low gas limit).

### Changed

- Code cleanup after the previous upgrade with regenesis.
- Various minor / stylistic fixes.

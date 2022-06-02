---
sidebarDepth: 3
---

# zkSync contracts v5 upgrade announcement

<!-- markdownlint-disable MD034 -->

This upgrade brings permissionless token listing to zkSync.

## Changes

Code diff:
[https://github.com/matter-labs/zksync/compare/contracts-4.3...contracts-5?file-filters%5B%5D=.sol#diff-e4f1b8266f4a874645b73c3ecf54a854159f7a24f84c3ec3c112f0855570e847R38](https://github.com/matter-labs/zksync/compare/contracts-4.3...contracts-5?file-filters%5B%5D=.sol#diff-e4f1b8266f4a874645b73c3ecf54a854159f7a24f84c3ec3c112f0855570e847R38)

### Added

- `tokenGovernance` address is added to the `Governance` contract. `tokenGovernance` can list new tokens.
- `TokenGovernance` contract is added to allow anybody to pay fee and list new tokens.

### Changed

- Maximum amount of tokens that can be used to pay tx fee is increased to 512.
- Circuit now enforces that `ForcedExit` target account pubkey hash is empty.
- Various minor / stylistic fixes.

---
sidebarDepth: 3
---

# zkSync contracts v4.1 upgrade announcement

We will start the notice period to upgrade zkSync contracts to a new version today.

## Changes

### Added

- Multiple blocks can be committed, proven or executed with one transaction.
- Rollup block timestamp is added.
- `ChangePubKey` can be authorized without L1 transaction for smart-contract accounts that can be deployed using CREATE2
  function with specific salt.
- Block processing is split into three parts: commit, proving onchain, execution. Block is finalized when its executed.
- Governance now can pause deposits of some tokens.
- New events `Deposit(token, amount)`, `Withdrawal(token, amount)` are added when funds are deposited or removed from
  the contract.

### Changed

- Cost of `Deposit` and `FullExit` for user is reduced significantly.
- Priority queue storage format is changed for gas cost optimization.
- Block storage format is changed for gas cost optimization.
- `ChangePubKey` message that should be signed by ETH private key is changed.
- Upgrade notice period is increased to 2 weeks.
- `ChangePubKey` with L2 public key that was authorized onchain can be reset if needed after waiting period of 1 day.
- Maximum gas limit for ETH and ERC20 token withdrawal from zkSync contract is set to be 100k.
- Proof of the L2 funds in the exodus mode now can be provided by anyone on behalf of any user.
- Withdrawal from zkSync contract (funds that are withdrawn from L2 but failed to be pushed out of the zkSync contract)
  now can be done on behalf of any user.
- Some of the public variables are made internal.
- Withdraw from the zkSync contract now should be performed using `withdrawPendingBalance` instead of (`withdrawETH`,
  `withdrawERC20`).
- Multiple functions and variables are renamed:
  1. `fullExit` -> `requestFullExit`
  1. `exit` -> `performExodus`
  1. `triggerExodusIfNeeded` -> `activateExodusMode`
  1. `balanceToWithdraw` -> `pendingBalance`

### Removed

- Pending withdrawal queue is removed, instead we try to execute token transfers when we finalize block.
- All events for user operations (Deposit, Withdraw, etc.) are removed.

## Code diff

The exact changes in the code of the contracts
[can be found here](https://github.com/matter-labs/zksync/compare/contracts-3...contracts-4?file-filters[]=.sol).

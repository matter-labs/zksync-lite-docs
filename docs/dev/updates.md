# zkSync updates

This page contains the release notes for new features in zkSync network, and also notifications about changes in the
client libraries.

[[toc]]

## Actual SDK versions

| Network | JavaScript SDK | Rust SDK |
| ------- | -------------- | -------- |
| Ropsten | 0.8.1          | 0.1.1    |
| Rinkeby | 0.8.1          | 0.1.1    |
| Mainnet | 0.8.1          | 0.1.1    |

## Minimum supported SDK versions

| Network | JavaScript SDK | Rust SDK |
| ------- | -------------- | -------- |
| Ropsten | 0.7.5          | 0.1.0    |
| Rinkeby | 0.7.5          | 0.1.0    |
| Mainnet | 0.7.5          | 0.1.0    |

## Upcoming breaking changes

### Contract upgrade v4

Scheduled upgrade date: **30.11.2020**

List of upcoming changes and the migration guide will be provided later.

## Release history

### `zksync.js`

#### 0.8.1 (10.11.2020)

- `syncMultiTransfer` method now uses only one Ethereum signature for a batch.
- It is now possible to load `zksync` package synchronously at the expense of all the signing functionality becoming
  asynchronous.

### `zksync-rs`

#### 0.1.1 (13.11.2020)

- `zksync_contracts` dependency was removed.

## Deprecated APIs

This section will contain the client library APIs that are outdated and left for the backward compatibility only.

| Feature | Affected libraries | Scheduled support removal date |
| ------- | ------------------ | ------------------------------ |
| -       | -                  | -                              |

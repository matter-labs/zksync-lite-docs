# Zinc

Zinc is a programming language which can be used to develop:

- Smart contracts for [zkSync](https://zksync.io) (a ZK Rollup on Ethereum)
- General-purpose zero-knowledge proof circuits.

Existing ZKP frameworks lack functionality specific for smart contracts. Security and safety aspects are crucial for
developing smart contracts since they deal with valuable financial assets. Modern smart contract languages, such as
Simplicity or Libra's Move, deliberately made design choices that favor safety and formal verifiability of the code over
generalistic expressiveness.

Zinc is created to fill the gap between the two worlds: to provide a smart contract language optimized for ZKP circuits,
which is reliable and simple at the same time, and can be quickly learned by a large number of software developers.

We decided to borrow the Rust syntax and semantics. Zinc is a subset of Rust with minor differences dictated by the
subtleties of ZKP circuits. It is easily learnable by any developer familiar with Rust, Golang, C++ or other C-like
languages. Also, experience with Solidity will help in understanding some smart contract specifics.

The language is under heavy development, thus many of its aspects will eventually be improved or changed. However, the
basic principles, such as security and simplicity, will never be questioned.

## Learning Zinc

Zinc programming language has an official [book](https://zinc.zksync.io/) which provides an introduction to its core
principles and conventions.

## Getting help

You can ask questions and get assistance in our [Gitter](https://gitter.im/matter-labs/zinc) chat room.

If you would like to migrate an existing project to [zkSync](https://zksync.io) and require help, please send us an
email at hello@matter-labs.io.

# Smart contracts

<!-- spell-checker:disable -->

## Intro

zkSync is on track to introduce high-efficient, secure, Turing-complete, multi-language smart contracts.

## Programming model

The zkSync smart contract programming model inherits that of Ethereum:

- Turing-completeness
- stack memory
- contract storage
- external contract calls

## Composability

zkSync smart contracts are able to call one another, just like in the Ethereum ecosystem. Each call transaction tree is atomic, regardless of the number of contract instances involved.

Any DeFi project can be migrated to zkSync, since most of the existing Solidity code can be deployed without changes.

## Sync VM

The Sync VM is a high-efficient, Turing-complete, SNARK-friendly virtual machine for executing zkSync smart contracts.

State-of-the-art optimizations are applied to smart contract bytecode, whilst the
virtual machine itself is optimized for high-load, allowing to execute transactions in a blink of an eye.

The machine is SNARK-friendly, that is, the execution trace can be proven in SNARKs. However, it does not require a circuit per program. A single circuit can be used instead, which needs to be audited only once.

The target proof system of the Sync VM is [PLONK]().

## Developing

### Zinc

[Zinc](https://github.com/matter-labs/zinc) is an emerging framework for developing smart contracts and SNARK circuits on the zkSync platform.

The framework includes a simple, Turing-complete, safety-focused, general-purpose language, designed specifically for developing smart contracts and zero-knowledge proof circuits with flat learning curve.

Syntax and semantic closely follow [Rust](https://www.rust-lang.org/).

### Solidity

[Solidity](https://docs.soliditylang.org/en/v0.8.1/) is a very popular general-purpose language with huge codebase and number of DeFi projects, adopted by thousands of blockchain developers from all over the world.

It will be possible to deploy the most of Solidity projects without changes. However, some features will not be supported and should be omitted to keep the code compatible:

- ABI calls
- ASM blocks
- what else? (TODO)

As a little extra, we are working on a Solidity-to-Zinc transpiler to simplify the migration process. Visit our [demo]() to play around with it.

### How to choose 

<table>
  <tr>
    <td>Zinc</td>
    <td>Solidity</td>
  </tr>
  <tr>
    <td>
    If you are going to start a new project, <a href="https://zinc.zksync.io/"> embrace Zinc today!</a>
    </td>
    <td>
    If you possess a large Solidity codebase, it is reasonable to wait for the Solidity support, and start migrating to Zinc after the mainnet release.
    </td>
  </tr>
</table>

## Deploying

### Testnet

The testnet for smart contracts on zkSync is live with Curve Finance as the first resident dapp, launched in October 2020! Check out the
[intro post](https://medium.com/@matterlabs/5a72c496b350).

Feel free to test our smart contracts using our Zandbox server.

[This tutorial](https://zinc.zksync.io/07-smart-contracts/02-minimal-example.html) explains how to deploy a smart contract to the Rinkeby testnet.

### Mainnet

zkSync smart contracts are going mainnet in 2021.

Both Zinc and Solidity languages will be supported at the same time.

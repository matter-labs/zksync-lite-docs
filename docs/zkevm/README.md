---
meta:
  - name: title
    content: zkEVM FAQ
  - name: description
    content: "Everything you need to know about zkSync 2.0: an EVM-compatible zkRollup."
  - name: keywords
    content: zkEVM, zk-EVM, zk EVM
---

# zkEVM FAQ

[[toc]]

## General

### What is zkEVM and why is this a big deal?

zkEVM is a virtual machine that executes smart contracts in a way that is compatible with zero-knowledge-proof computation. It is the key to building an EVM-compatible ZK Rollup
while preserving the battle-tested code and knowledge gained after years of working with Solidity. Our zk-EVM keeps EVM semantics, but is also ZK-friendly and takes on traditional
CPU architectures.

The launch of the zkEVM represents an essential turning point for crypto. Up until recently it was still considered merely a theoretical possibility that will take years to get
real. But over the last year, the pace of the entire zero knowledge proof ecosystem has exceeded even experts’ expectations. And because of the
many [R&D breakthroughs](https://www.youtube.com/watch?v=6wLSkpIHXM8') by our team, that made zk-EVM possible, Solidity programmers now have first-class access to the unmatched
scaling, security, and UX benefits of zero knowledge proofs.

### Does zkSync support Solidity smart contracts?

Yes!

Most DeFi and NFT projects will work with no code changes. However, in the first version, calls to SHA256 and Keccak256 will be replaced with a circuit friendly hash function
automatically by the compiler. A few other cryptographic primitives are currently also unsupported, for example ecrecover and the cryptographic precompiles.

### How does the UI interact with smart contracts? Can I reuse my current frontend?

You can interact completely with smart contracts and the zkSync network via our Web3 API and Ethers SDK:

- For _read_ requests: any web3-compliant framework in any language will work out of the box, with additional optional zkSync L2 specific functionality.
- For _write_ requests (sending transactions): due to fundamental differences between L1 and L2, you will have to write some additional code (for example, zkSync supports paying
  fees in any token, so sending a transaction will involve choosing a token to pay fees).

So, yes! You can reuse your current frontend with minimal changes (sending transactions is different).

### How do users submit transactions? What wallets are supported?

For interactions with smart contracts, users will sign an EIP712 message with a hash of the calldata. Since EIP712 is based on a native Ethereum signature, all wallets, even
hardware wallets, will work without any extensions required.

### When can I deploy?

We will be releasing testnet soon! Please sign up on [this form](https://forms.gle/jQQnJJeuVSVcmkqj9).

### What is the status of Zinc?

We are currently fully focused on a [Solidity-first approach](https://medium.com/matter-labs/unisync-a-port-of-uniswap-v2-on-the-zkevm-b12954748504). We will resume work
on [Zinc](https://zksync.io/dev/contracts/#zinc) after Solidity is released!

## My question wasn’t answered! ☹️

Join the [community on Discord](https://discord.gg/fyPna387dU).

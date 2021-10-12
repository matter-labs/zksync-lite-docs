# Developers

[[toc]]

## Does zkSync support Solidity smart contracts?

Yes!

Most DeFi and NFT projects will work with no code changes. However, in the first version, calls to SHA256 and Keccak256 will be replaced with a circuit friendly hash function automatically by the compiler. A few other cryptographic primitives are currently also unsupported, for example ecrecover and the cryptographic precompiles.


## How does the UI interact with smart contracts? Can I reuse my current frontend?

You can interact completely with smart contracts and the zkSync network via our Web3 API and Ethers SDK:



* For _read_ requests: any web3-compliant framework in any language will work out of the box, with additional optional zkSync L2 specific functionality.
* For _write_ requests (sending transactions): due to fundamental differences between L1 and L2, you will have to write some additional code (for example, zkSync supports paying fees in any token, so sending a transaction will involve choosing a token to pay fees).

So, yes! You can reuse your current frontend with only minimal changes (sending transactions is different).


## How do users submit transactions? What wallets are supported?

For interactions with smart contracts, users will sign an EIP712 message with a hash of the calldata. Since EIP712 is based on a native Ethereum signature, all wallets, even hardware wallets, will work without any extensions required.


## When can I deploy?

We will be releasing testnet soon! Please sign up on [this form](https://forms.gle/jQQnJJeuVSVcmkqj9).


## My question wasn’t answered! ☹️

Join the [community on Discord](https://discord.gg/fyPna387dU).

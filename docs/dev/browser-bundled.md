# Appendix A: Using bundle in a browser

It is possible to use `zksync.js` in a browser directly.

- `ethers@5.0` dependency is required for `zksync.js` to work.
- async call of the `zksync.crypto.loadZkSyncCrypto` function is required
  to load and compile `zksync-crypto` WASM library prior to using any _zkSync_ functions.

> Example with zksync@0.6.3 fetched from [https://unpkg.com](https://unpkg.com) CDN

```html
<html>
  <body>
    <script type="text/javascript" src="https://cdn.ethers.io/lib/ethers-5.0.umd.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/zksync@0.6.3/dist/main.js"></script>
    <script type="text/javascript">
      (async () => {
        // loads and compiles WASM library
        await zksync.crypto.loadZkSyncCrypto();

        const ethWallet = ethers.Wallet.createRandom();

        const zksProvider = await zksync.getDefaultProvider('rinkeby');
        const zkSyncWallet = await zksync.Wallet.fromEthSigner(ethWallet, zksProvider);
        console.log('ETH balance:', (await zkSyncWallet.getBalance('ETH')).toString());

        const privateKey = zksync.crypto.privateKeyFromSeed(new Uint8Array(32));
        const pubkeyHash = zksync.crypto.privateKeyToPubKeyHash(privateKey);
        console.log('PrivateKey', ethers.utils.hexlify(privateKey), 'PubkeyHash', pubkeyHash);
      })();
    </script>
  </body>
</html>
```

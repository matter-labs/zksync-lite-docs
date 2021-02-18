# Appendix A: Using bundle in a browser

It is possible to use `zksync-checkout` in a browser directly.

- `ethers@5.0` dependency is required for `zksync-checkout` to work.

> The example from the tutorial with zksync-checkout fetched from [https://unpkg.com](https://unpkg.com) CDN

**Note** that it is likely that if the checkout is called instantly, the popup will be blocked by the browser. You
should open the checkout after some event, e.g. button click.

```html
<html>
  <body>
    <script type="text/javascript" src="https://cdn.ethers.io/lib/ethers-5.0.umd.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/zksync-checkout@latest/dist/main.js"></script>
    <script type="text/javascript">
      async function checkoutUser(transactions, feeToken, address) {
        const checkoutManager = new ZkSyncCheckout.CheckoutManager('mainnet');
        if (address) {
          const hasEnoughBalance = await checkoutManager.checkEnoughBalance(
            transactions,
            feeToken,
            address,
            ethProvider
          );

          if (!hasEnoughBalance) {
            throw new Error('Not enough balance!');
          }
        }

        const txHashes = await checkoutManager.zkSyncBatchCheckout(transactions, feeToken);
        const receipts = await checkoutManager.wait(txHashes);
      }
      const transactions = [
        {
          to: '<your-eth-address>',
          token: 'DAI',
          amount: '23000000000000000000',
          description: 'For apples'
        },
        {
          to: '<your-eth-address>',
          token: 'DAI',
          amount: '55500000000000000000',
          description: 'For bananas'
        }
      ];

      checkoutUser(transactions, 'DAI');
    </script>
  </body>
</html>
```

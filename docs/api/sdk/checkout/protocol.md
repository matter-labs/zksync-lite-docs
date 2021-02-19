# Protocol

Due to modern web-browsers' security measures, the opening of the tab with the checkout flow internally might look like
a connection establishment via an exchange of `postMessage`-s.

The protocol follows
[web security best practices](https://developer.mozilla.org/en-US/docs/Web/library/Window/postMessage#Security_concerns),
associated with cross-origin communication.

The internal part of the checkout consists of the following stages:

1. The client calls `zkSyncBatchCheckout`.
2. When the tab is open, the zkSync page will send the `ZKSYNC_OPENED` message. If it fails to do so within
   `OPENING_TIMEOUT` ms, the checkout promise resolves with `OPENING_TIMEOUT_ERROR`. After receiving the `ZKSYNC_OPEN`
   message, the client's page will send a `START_SESSION` message to the zkSync page. The message contains:
   - Array of the transactions, specified by the user.
   - Token to pay the fee with.
   - The origin of the opener. Must be equal to the origin of the opener (zkSync checks it on its side).
   - The checkout id — a feature that enables multiple checkouts at the same time.
3. If at least in one transaction the `from` field differs from the user's address, the zkSync page will tell the user
   about it and will offer him to log in with the other account. The zkSync page will remember the client's origin. Now,
   all the `postMessage`-s sent from the zkSync page will only go to the remembered origin.
4. Every `CLOSE_POLL_INTERVAL` ms the client's page will check if the zkSync page is closed. If the zkSync page is
   closed without starting the transactions, the client waits for `FOLLOWUP_HASHES_TIMEOUT` ms in case the hashes were
   sent to the client, but the browser was too slow. If the hashes don't arrive within this time, the checkout promise
   will be rejected with `ZKSYNC_CLOSED_ERROR`. On the other hand, every `OPENER_CLOSED_POLL_INTERVAL` ms the zkSync
   page checks if the client's page is closed. If it is closed before the transactions' hashes were sent, there is a
   danger that the hashes that the zkSync page will send won't be processed by the client. To prevent this from
   happening the zkSync page will warn the user about that and advice her not to continue the checkout.
5. When the user clicks on transfer, the zkSync page sends to the opener the array of hashes of the transactions.
6. (Optional for the client) After the client receives the transactions, he can either wait until they are committed or
   verified using the `wait` function.

**Time constants (all in ms):**

- `OPENING_TIMEOUT` — 10000
- `CLOSE_POLL_INTERVAL` — 3000
- `FOLLOWUP_HASHES_TIMEOUT` — 500
- `OPENER_CLOSED_POLL_INTERVAL` — 300

## Making sure that the user knows about an error

In order to prevent the situation, where the checkout promise was rejected on the client's webpage, but the user does
not know it, the following measures are taken:

If the checkout promise is rejected, an `ABORT_CHECKOUT` message is sent to the zkSync page. The message is then handled
by the zkSync page accordingly (show a modal with the error message and suggest the user not to continue the checkout).

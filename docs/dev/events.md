# Watching events

This is a quick tutorial on how to use zkSync events API. For the detailed description of events data types, please refer to [the documentation](../api/events.md).

The feature is currently available only on the Ropsten testnet. The API is not yet fully stabilized and may change in the future.

[[toc]]

## Setting up the `yarn` project

We will set up the minimal working Javascript project using `yarn`:

```sh
mkdir zksync-ws-client
cd zksync-ws-client
yarn init -y
yarn add zksync ethers ws # install dependencies
```

## Establishing a connection

The event server is located at `wss://ropsten-events.zkscan.io/`. In this tutorial, we use [ws](https://www.npmjs.com/package/ws) package, but you can use any WebSocket client library which fits your project.

```javascript
// app.js
const WebSocket = require("ws");

const ws = new WebSocket("wss://ropsten-events.zkscan.io/");
```

To make sure that the connection is alive, it's a good practice to periodically send ping frames. It will also help to avoid timeout disconnects.

```javascript
setInterval(function () {
  ws.ping();
}, 10000);
```

## Filtering events

Once the connection is established, the client is required to send a text message with his events interests. Note, that you can only do it once, if you want to change your filters, you have to create a new connection. You can find the detailed documentation on filters [here](../api/events.md#Filters).

```javascript
ws.on("open", function open() {
  ws.send("{}");
});
```

An empty JSON object is the same as no filters -- we tell the server that we want to receive all events.

If you send an invalid object, you will receive a close frame with an error message:

```javascript
// app.js
const WebSocket = require("ws");

const ws = new WebSocket("wss://ropsten-events.zkscan.io/");

ws.on("open", function open() {
  ws.send('{"blocks": {"status": "committed"}}'); // Should be "block"
});

ws.on("close", function close(code, reason) {
  console.log(`Connection closed with code ${code}, reason: ${reason}`);
});
```

```sh
node app.js
Connection closed with code 1008, reason: unknown variant `blocks`, expected one of `account`, `block`, `transaction` at line 1 column 9
```

In this tutorial, we will accept all events and filter them ourselves.

## Receiving messages

At this point after establishing the connection and successfully sending our filters, the server will start notifying us about new events. It will also ignore any messages except control frames (`close`, `ping` and `pong`). That being said, you cannot change your filters without reconnecting.

Messages arrive in the following format:

```json
{
  "block_number": 1000,
  "type": "account, block or transaction",
  "data": {
    // Event-specific data
  }
}
```

For `data` field definitions, refer to the [documentation](../api/events.md#Events).

Let's see how to implement a message handler.

```typescript
// The test account we're intrested in.
const ACCOUNT_ADDRESS = "0x7ca2113e931ada26f64da66822ece493f20059b6";

ws.on("message", function (message) {
  const event = JSON.parse(message);

  // We are looking for transfers to the specific account.
  if (event.type == "transaction" && event.data.tx.type == "Transfer") {
    const recipient = event.data.tx.to;
    if (recipient != ACCOUNT_ADDRESS) {
      return;
    }
    const tokenId = event.data.token_id;
    const status = event.data.status;
    const amount = event.data.tx.amount;

    console.log(`There was a transfer to ${recipient}`);
    console.log(`Token Id: ${tokenId}`);
    console.log(`Amount: ${amount}`);
    console.log(`Status: ${status}`);
  }
});
```

The zkSync provider can be used for displaying the token symbol and the amount in a human-readable format. The documentation for it can be found [here](../api/sdk/js/providers.md).

## Full example

```typescript
// app.js
const WebSocket = require("ws");
const zksync = require("zksync");

async function main() {
  // Get the provider. It's important to specify the correct network.
  const provider = await zksync.getDefaultProvider("ropsten");
  // Connect to the event server.
  const ws = new WebSocket("wss://ropsten-events.zkscan.io/");
  console.log("Connection established");
  // Change the address to the account you're intrested in.
  const ACCOUNT_ADDRESS = "0x7ca2113e931ada26f64da66822ece493f20059b6";

  // Once connected, start sending ping frames.
  setInterval(function () {
    ws.ping();
  }, 10000);

  // Register filters.
  ws.on("open", function open() {
    ws.send("{}");
  });

  ws.on("close", function close(code, reason) {
    console.log(`Connection closed with code ${code}, reason: ${reason}`);
  });

  ws.on("message", function (data) {
    const event = JSON.parse(data);

    // We are looking for transfers to the specific account.
    if (event.type == "transaction" && event.data.tx.type == "Transfer") {
      const recipient = event.data.tx.to;
      if (recipient != ACCOUNT_ADDRESS) {
        return;
      }
      // Use the provider for formatting.
      const token = provider.tokenSet.resolveTokenSymbol(event.data.token_id);
      const amount = provider.tokenSet.formatToken(token, event.data.tx.amount);

      const status = event.data.status;
      const fromAddr = event.data.tx.from;
      const blockNumber = event.block_number;

      console.log(`There was a transfer to ${recipient}`);
      console.log(`Block number: ${blockNumber}`);
      console.log(`From: ${fromAddr}`);
      console.log(`Token: ${token}`);
      console.log(`Amount: ${amount}`);
      console.log(`Status: ${status}\n`);
    }
  });
}

main();
```

Let's see how it works, start our client with the following command:

```sh
node app.js
```

Now, send some funds to the tracked account address, you should see notifications for both committed and finalized events in your console:

```sh
There was a transfer to 0x7ca2113e931ada26f64da66822ece493f20059b6
Block number: 31
From: 0x66aa7f5166ee2025781adb8582a7798f9f9e51e7
Token: ETH
Amount: 10.0
Status: committed

There was a transfer to 0x7ca2113e931ada26f64da66822ece493f20059b6
Block number: 31
From: 0x66aa7f5166ee2025781adb8582a7798f9f9e51e7
Token: ETH
Amount: 10.0
Status: finalized
```

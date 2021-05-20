# Watching events

This is a quick tutorial on how to use zkSync events to filter transactions. More detialed description of the events data types, please refer to [the documentation](../api/events.md).

The feature is currently available only on Ropsten testnet. The API has not yet fully stabilized and so the breaking changes may still occur. 

## Establishing a connection

In order to listen to zkSync events you need to connect via WebSocket to the endpoint `wss://ropsten-events.zkscan.io/`. We will use the `ws` library, but you can use any WebSocket client library which fits your project.

```typescript
import WebSocket from 'ws';

const ws = new WebSocket('wss://ropsten-events.zkscan.io/');
```

We require our WebSocket clients to periodically ping the server:
```typescript
setInterval(function () {
    ws.ping();
}, 10000);
```

## Filtering events

After the connection is established, we need to send the events filter. More on the filters is available in a more detailed documentation [here](../api/events.md). 

Among many types of filters, There is also a shorthand for no filtering: `{}`. If you pass an empty object no filters will be applied and you will receive all the events that are happening on zkSync. This option is suitable if can not afford to re-establish connection each time the filter changes or if you want to apply some custom filtering.

For the purposes of this tutorial we will go with zero filtering and will receive all the events about the zkSync network.

## Receiving messages

So after the connection was established you can now receive the events coming from the zkSync network. The specification and format of the events is available in the detailed [docs](../api/events.md).

Let's see how to keep track of transfers coming to a dynamic set of accounts.

```typescript
const accounts = new Set<string>();
accounts.add('0x7ca2113e931ada26f64da66822ece493f20059b6');

ws.on('message', function (data) {
    const event = JSON.parse(data);

    if(event.type === 'Transfer') {
        const tokenId = event.data.tokenId;
        const status = event.data.status;
        const recipient = event.data.tx.to;
        const amount = event.data.tx.amount;

        if(accounts.has(recipient)) {
            console.log(`There was a transfer to ${recipient}`);
            console.log(`Token Id: ${tokenId}`);
            console.log(`Amount: ${amount}`);
            console.log(`Status: ${status}`);
        }
    }
});
```

If we wanted that the example above was dislpaying the token symbol and the amonut in pretty format, we would need to use the zkSync provider to resolve the token's symbols and decimals. More on instantiating and using zkSync provider object can be read in [the corresponding docs section](../api/sdk/js/providers.md).

## Full example

Here is the full example in Javascript:

```typescript
import WebSocket from 'ws';
import * as zksync from 'zksync';

async function main() {
    const provider = await zksync.getDefaultProvider('ropsten');
    const ws = new WebSocket('wss://ropsten-events.zkscan.io/');

    setInterval(function () {
        ws.ping();
    }, 10000);

    ws.on('open', function open() {
        ws.send('{}');
    });

    const accounts = new Set<string>();
    accounts.add('0x7ca2113e931ada26f64da66822ece493f20059b6');

    ws.on('message', function (data) {
        const event = JSON.parse(data);

        if(event.type === 'Transfer') {
            const token = provider.tokenSet.resolveTokenSymbol(event.data.tokenId);
            const status = event.data.status;
            const recipient = event.data.tx.to;
            const amount = provider.tokenSet.formatToken(token, event.data.tx.amount);

            if(accounts.has(recipient)) {
                console.log(`There was a transfer to ${recipient}`);
                console.log(`Token: ${token}`);
                console.log(`Amount: ${amount}`);
                console.log(`Status: ${status}`);
            }
        }
    });
}

main();
```

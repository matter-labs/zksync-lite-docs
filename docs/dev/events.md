# Keeping track of zkSync events

The feature is currently available only on Rinkeby and Ropsten testnets. The API has not yet fully stabilized and so the breaking changes may still occur.

Let's see how we can watch and filter zkSync events on the Ropsten testnet using Typescript. In the end of the docs we will also provide a relevant Python example. 

## Establishing a connection

Listening to zkSync events takes as much as connecting via WebSocket to the endpoint `wss://ropsten-events.zkscan.io/`. We will use the `ws` library, but you can use any WebSocket client library which fits your project.

```typescript
import WebSocket from 'ws';

const ws = new WebSocket('wss://ropsten-events.zkscan.io/');

```

We require our WebSocket clients to periodically poll the events listener:
```typescript
setInterval(function () {
    ws.ping();
}, 10000);
```

## Filtering events

After the connection is established, we need to send the filter for the events. The filter is a JSON object of the following type:

```typescript
{
    "account": AccountFilter,
    "block": BlockFilter,
    "transaction": TransactionFilter
}
```

More on the filters is available in the more detailed documentation [here](../api/events.md). 

There is also a shorthand for no filtering: `{}`. If you pass an empty object no filters will be applied and you will receive all the events that are happening on zkSync. This options may be suitable if can not afford to re-establish connection each time the filter changes or if you want to apply some custom filtering.

Here you can see some possible examples of filtering:

```typescript
ws.on('open', function() {
    ws.send('{}'); // Here we receive all the events from zkSync
});
```

```typescript
ws.on('open', function() {
    const filter = {
        // Here we are only interesed in the committed events about 
        // accounts with ids 1,2,3 which change their balance of token with id 0 (ETH) 
        account: {
            status: "committed",
            accounts: [1, 2, 3],
            tokens: [0]
        }
    };

    ws.send(JSON.stringify(filter));
});
```

```typescript
ws.on('open', function() {
    const filter = {
        // Here we are only interesed in the verified events of any account 
        // and any block verification events any transaction events (both committed and verified)
        account: {
            status: "verified"
        },
        block: {
            status: "reverted"
        },
        transaction: {}
    };

    ws.send(JSON.stringify(filter));
});
```

For the purposes of this tutorial we will go with the first example and receive all the events about the zkSync network.

## Receiving messages

So after the connection was established you can now receive the events coming from the zkSync network. The specification and format of the events is available in the detailed [docs](../api/events.md).

Let's say that we want to keep track of transfers coming to a dynamic set of accounts.

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

If we wanted that the example above was dislpaying the Token symbol and the amonut in pretty format, we would need to use the zkSync provider to resolve the token's symbols and decimals. More on instantiating and using zkSync provider object can be read in [the corresponding docs section](../api/sdk/js/providers.md).

## Full example

Here is the full example in Typescript:

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

## Reading past events

Currently it is only possible to read the past events. This feature may be espeically helpful in case connection to the zkSync has been broken for some reason and we need to restore the data. Our team is working on allowing reading past events. Stay tuned!

# Providers

JSON-RPC protocol is used to communicate with Sync network nodes.
`Provider` is used to abstract details of the communication and provides useful API for interaction with Sync network.

We support HTTP and WebSocket transport protocol for JSON-RPC communications. WebSocket transport is preferred since it supports subscriptions.
`HTTPTransport` and `WSTransport` classes are used to implement details of communication, but usually, you don't need to deal with these objects directly.


## Sync provider

### Get default provider for network

```typescript
import * as zksync from 'zksync';


const syncWSProvider = await zksync.getDefaultProvider('testnet')

// ..

// Later to close connection.
await syncWSProvider.disconnect();

```

Used to connect to the common endpoint for the given network over WebSocket transport.   

Supported networks are: 'testnet', 'localhost'.

### Create WebSocket provider

> Creating provider over WebSocket transport.
> This call will create WS connection that should be closed.

```typescript
import * as zksync from 'zksync';


const syncWSProvider = await zksync.Provider.newWebsocketProvider(
    'wss://testnet.matter-labs.io/jsrpc-ws'
);

// ..

// Later to close connection.
await syncWSProvider.disconnect();

```

### Create HTTP provider

> Creating provider over HTTP transport. 

```typescript
import * as zksync from 'zksync';

const syncHTTPProvider = await zksync.Provider.newHttpProvider(
    'https://rinkeby-api.zksync.io/jsrpc'
);
```


### Submit transaction

> Signature

```typescript
async submitTx(tx: any): Promise<string>;
```


#### Inputs and outputs

| Name | Description | 
| -- | -- |
| tx | Signed Sync transaction (see types, for detailed description) |
| returns | `0x`-prefixed hex-encoded hash of the transaction |

> Example

```typescript
import * as zksync from 'zksync';

const syncWSProvider = await zksync.getDefaultProvider('testnet')
const signedTransferTx = {
    type: 'Transfer',
    from: '0x..address1',
    to: '0x..address2',
    token: 0, // id of the ETH token
    amount: '1000000000000000000', // 1 Ether in Wei
    fee: '10000000000000000', // 0.01 Ether in Wei
    nonce: 0,
    signature: {
        pubKey: 'dead..', // hex encoded packed public key of signer (32 bytes)
        signature: 'beef..' // hex encoded signature of the tx (64 bytes)
    }
};


const transactionHash = await syncWSProvider.submitTx(signedTransferTx);
// 0x..hash (32 bytes)
```

### Get contract addresses

> Signature

```typescript
async getContractAddress(): Promise<ContractAddress>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| returns | Addresses of the Sync network smart contracts (see types, for detailed description) |

> Example

```typescript
import * as zksync from 'zksync';

const syncWSProvider = await zksync.SyncProvider.getDefaultProvider('testnet')

const contractAddresses = await syncWSProvider.getContractAddress();
```

> Returns

```json
{
    'mainContract': '0xab..cd',
    'govContract': '0xef..12'
}
```

### Get tokens

> Signature

```typescript
async getTokens(): Promise<Tokens>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| returns | All supported tokens (see types, for detailed description) |

> Example

```typescript
import * as zksync from 'zksync';

const syncWSProvider = await zksync.SyncProvider.getDefaultProvider('testnet')

const contractAddresses = await syncWSProvider.getTokens();
```

> Returns

```json
{
  'ERC20-1': {
    'address': '0xbeeb9f55d523918f9cd2979a454610f673c2885e',
    'id': 1,
    'symbol': null
  },
  'ETH': {
    'address': '0000000000000000000000000000000000000000',
    'id': 0,
    'symbol': 'ETH'
  }
}
```



### Get account state by address

> Signature

```typescript
async getState(address: Address): Promise<AccountState>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| address | `0x`-prefixed hex-encoded address of the Sync account. |
| returns | Detailed state of the Sync account, including balances, nonce. (see types, for detailed description) |

> Returns

```json
{
    'address': '0x2d5bf7a3ab29f0ff424d738a83f9b0588bc9241e',
    'id': 1, // optional
    'committed': {
        'balances': {
            'ETH': '1000000000000000000', // 1 Ether in Wei 
        },
        'nonce': 1,
    },
    'depositing': {
        'balances': {
            'FAU': {
                'amount': '9000000000000000',
                'expectedAcceptBlock': 438929
            }
        }
    },
    'verified': {
        'balances': {
            'ETH': '1000000000000000000', // 1 Ether in Wei 
            // ERC20 token
            'FAU': '1000000000000000000' 
        },
        'nonce': 0,
    }
}
```

For details on the `depositing` section, see the description of `AccountState` type on the `types` page.

### Get amount of confirmations required for priority operations

> Signature
```typescript
async getConfirmationsForEthOpAmount(): Promise<number>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| returns | Amount of confirmations required for priority operations to be processed by zkSync network |

> Example

```typescript
import * as zksync from 'zksync';
const syncWSProvider = await zksync.getDefaultProvider('testnet')
const requiredConfirmationsAmount = await syncWSProvider.getConfirmationsForEthOpAmount();
```

### Get transaction receipt

> Signature

```typescript
async getTxReceipt(txHash: string): Promise<TransactionReceipt>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| txHash | `sync-tx:`-prefixed hex-encoded hash of the Sync transaction. |
| returns | Receipt of this transaction (see types, for detailed description) |

> Returns

```json
// Not executed yet
{
    'executed': false
}

// Success
{
    'executed': true,
    'success': true,
    'block': {
      'blockNumber': 658,
      'committed': true,
      'verified': true
    }
}

// Failure
{
    'executed': true,
    'success': true,
    'failReason': 'Nonce mismatch',
    'block': {
      'blockNumber': 658,
      'committed': true,
      'verified': true
    }
}
```

### Wait for transaction receipt

Similar to [Get transaction receipt](#get-transaction-receipt) but
this method will return when a given transaction is committed or verified in the Sync network.


> Signature

```typescript
async notifyTransaction(
    hash: string, 
    action: 'COMMIT' | 'VERIFY'
): Promise<TransactionReceipt> ;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| txHash | `sync-tx:`-prefixed hex-encoded hash of the Sync transaction. |
| action | 'COMMIT' or 'VERIFY' |
| returns | Receipt of this transaction (see types, for detailed description) |

> Example 

```typescript
import * as zksync from 'zksync';

const syncWSProvider = await zksync.getDefaultProvider('testnet')

const receipt = await syncWSProvider.notifyTransaction(
    'sync-tx:1111111111111111111111111111111111111111111111111111111111111111',
    'COMMIT'
);
```

### Get priority operation receipt

> Signature

```typescript
async getPriorityOpStatus(
    serialId: number
): Promise<PriorityOperationReceipt>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| serialId | Numerical id of the priority operation, can be found in logs of the ethereum transaction that created this operation (e.g. deposit) |
| returns | Receipt of this priority operation (see types, for detailed description) |

> Returns

```json
{
    'executed': true,
    'block': {
      'blockNumber': 658,
      'committed': true,
      'verified': true
    }
}
```

### Wait for priority operation receipt

Similar to [Get priority operation receipt](#get-priority-operation-receipt) but
this method will return when given priority operation is committed or verified in the Sync network.

> Signature

```typescript
async notifyPriorityOp(
    serialId: number, 
    action: 'COMMIT' | 'VERIFY'
): Promise<PriorityOperationReceipt>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| serialId | Numerical id of the priority operation, can be found in logs of the ethereum transaction that created this operation (e.g. deposit) |
| action | 'COMMIT' or 'VERIFY' |
| returns | Receipt of this priority operation (see types, for detailed description) |

> Example 

```typescript
import * as zksync from 'zksync';

const syncWSProvider = await zksync.getDefaultProvider('testnet')

const receipt = await syncWSProvider.notifyPriorityOp(
    178, // priority op id
    'COMMIT'
);
```

### Current token set.

Provider stores list of the available tokens with methods for working with them. (see [working with tokens](#working-with-tokens))

> Signature

```typescript
public tokenSet: TokenSet;
```

### Get transaction fee from the server.

Performs a query to the server, obtaining an acceptable transaction fee for transactions.
The returned value contains all the price components used for the fee calculation, and the fee itself (`totalFee` field).

> Signature

```typescript
async getTransactionFee(
    txType: 'Withdraw' | 'Transfer',
    address: Address,
    tokenLike: TokenLike
): Promise<Fee>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| txType | Type of the transaction. |
| address | Address of the transaction recipients' wallet. |
| tokenLike | Token used in the transaction. |
| returns | Object containing the [packable](#amount-packing) fee amount along with the price components used for calculation. |


### Get token price.

Performs a query to the server, obtaining a token price in USD. Data is fetched by server using third-party API (e.g. coinmarketcap).

> Signature

```typescript
async getTokenPrice(
    tokenLike: TokenLike
): Promise<number> ;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| tokenLike | Type of token. |
| returns | Currently observed price of the token (USD per token). |

> Example

```typescript
import * as zksync from 'zksync';
const syncWSProvider = await zksync.getDefaultProvider('testnet')
const ethPrice = await syncWSProvider.getTokenPrice('ETH');

console.log(`Current Ethereum price is ${ethPrice} USD`);
```


## ETH Proxy

`ETHProxy` class is used to simplify some communication with Ethereum network.


### Create ETH Proxy

> Signature

```typescript
constructor(
    private ethersProvider: ethers.providers.Provider,
    private contractAddress: ContractAddress
);
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| ethersProvider | `ethers.js` provider connected to ethereum node|
| contractAddress | Addresses of the Sync network contracts |

> Example

```typescript
import * as zksync from 'zksync';
import { ethers } from 'ethers';


const ethersProvider = new ethers.getDefaultProvider('rinkeby');
const syncWSProvider = await zksync.SyncProvider.getDefaultProvider('testnet')

const ethProxy = new zksync.ETHProxy(
    ethersProvider, 
    syncProvider.contractAddress
);
```

### Resolve token id

To sign Sync transaction users have to know the unique numerical id of the given token.
It can be retrieved from the zkSync network governance contract.


> Signature

```typescript
async resolveTokenId(token: TokenAddress): Promise<number>;
```

#### Inputs and outputs

| Name | Description | 
| -- | -- |
| token | Ethereum token address (ERC20 contract address) |
| returns | Numerical identifier of the given token inside Sync network. |

> Example

```typescript
import * as zksync from 'zksync';
import { ethers } from 'ethers';

const ethersProvider = new ethers.getDefaultProvider('rinkeby');
const syncProvider = await zksync.getDefaultProvider('testnet');
const ethProxy = new zksync.ETHProxy(
    ethersProvider, 
    syncProvider.contractAddress
);

const ethId = await ethProxy.resolveTokenId('0x0000000000000000000000000000000000000000'); // ETH token address is 0x0..0

 // ERC20 token if it is supported, >= 1
const erc20Id = await ethProxy.resolveTokenId('0xFab46E002BbF0b4509813474841E0716E6730136');
```

# Providers

JSON-RPC protocol is used to communicate with Sync network nodes.
`Provider` is used to abstract details of the communication and provides useful API for interaction with Sync network.

We support HTTP and WebSocket transport protocol for JSON-RPC communications. WebSocket transport is preferred since it supports subscriptions.
`HTTPTransport` and `WSTransport` classes are used to implement details of communication, but usually, you don't need to deal with these objects directly.

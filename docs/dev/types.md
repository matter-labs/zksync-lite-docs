# Types

## Tokens and common types

```typescript
// Symbol like "ETH" or "FAU" or token contract address(zero address is implied for "ETH").
export type TokenLike = TokenSymbol | TokenAddress;
// Token symbol (e.g. "ETH", "FAU", etc.)
export type TokenSymbol = string;
// Token address (e.g. 0xde..ad for ERC20, or 0x00.00 for "ETH")
export type TokenAddress = string;

// List of all available tokens
export interface Tokens {
    // Tokens are indexed by their symbol (e.g. "ETH")
    [token: string]: {
        address: string;
        id: number;
        symbol: string;
    };
}

// Addresses of the zkSync contracts
export interface ContractAddress {
    mainContract: string;
    govContract: string;
}

// 0x-prefixed, hex encoded, ethereum account address
export type Address = string;

// Committed nonce is going to be resolved to last nonce known to the zkSync network
export type Nonce = number | "committed";
```

## Account state

```typescript
import { utils } from "ethers";

// 0x-prefixed, hex encoded, ethereum account address
export type Address = string;
// sync:-prefixed, hex encoded, hash of the account public key
export type PubKeyHash = string;


export interface AccountState {
    // Ethereum address of the account
    address: Address;
    id?: number;
    // Data about deposits that already are on the Ethereum blockchain, but
    // not yet processed by the zkSync network.
    depositing: {
        balances: {
            // Token are indexed by their symbol (e.g. "ETH")
            [token: string]: {
                // Sum of pending deposits for the token.
                amount: utils.BigNumberish,
                // Value denoting the block number when the funds are expected
                // to be received by zkSync network.
                expectedAcceptBlock: number,
            };
        };
    };
    // Committed state is the last state known to the zkSync network, can be ahead of verified state
    committed: {
        balances: {
            // Token are indexed by their symbol (e.g. "ETH")
            [token: string]: utils.BigNumberish;
        };
        nonce: number;
        // Public key hash of the signer keys associated with account
        pubKeyHash: PubKeyHash;
    };
    // Verified state is proved with ZKP on the Ethereum network.
    verified: {
        balances: {
            // Token are indexed by their symbol (e.g. "ETH")
            [token: string]: utils.BigNumberish;
        };
        nonce: number;
        // Public key hash of the signer keys associated with account
        pubKeyHash: PubKeyHash;
    };
}
```

"Depositing" balances are balances for which deposit operation has already appeared on the Ethereum blockchain,
but which still do not have enough confirmations to be processed by the `zkSync` network.

For depositing balances, two fields are available: `amount` (sum of ongoing deposit operations for token), and
`expectedAcceptBlock` - the number of block, when all the deposit operations for this token are expected to be
processed by `zkSync` network.

Note that `depositing` balance data is anticipated, since block with deposit operation can be reverted on
Ethereum blockchain. This information should be used for informing user about ongoing operations only, and not
taken as a guarantee of the execution. 

## Transactions

```typescript
import { utils } from "ethers";

export interface Signature {
    pubKey: string;
    signature: string;
}

export interface Transfer {
    type: "Transfer";
    from: Address;
    to: Address;
    token: number;
    amount: utils.BigNumberish;
    fee: utils.BigNumberish;
    nonce: number;
    signature: Signature;
}

export interface Withdraw {
    type: "Withdraw";
    from: Address;
    to: Address;
    token: number;
    amount: utils.BigNumberish;
    fee: utils.BigNumberish;
    nonce: number;
    signature: Signature;
}

export interface CloseAccount {
    type: "Close";
    account: Address;
    nonce: number;
    signature: Signature;
}

export interface BlockInfo {
    blockNumber: number;
    committed: boolean;
    verified: boolean;
}

export interface TransactionReceipt {
    executed: boolean;
    success?: boolean;
    failReason?: string;
    block?: BlockInfo;
}

export interface PriorityOperationReceipt {
    executed: boolean;
    block?: BlockInfo;
}
```

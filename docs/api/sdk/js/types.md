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
export type Nonce = number | 'committed';

// Denotes how authorization of operation is performed:
// 'Onchain' if it's done by sending an Ethereum transaction,
// 'ECDSA' if it's done by providing an Ethereum signature in zkSync transaction.
// 'CREATE2' if it's done by providing arguments to restore account ethereum address according to CREATE2 specification.
// 'ECDSALegacyMessage' if it's done by providing an Ethereum signature in zkSync transaction. Unlike the 'ECDSA', the user signs a human-readable message. Thus, the fee is ~30% higher than ECDSA.
export type ChangePubkeyTypes = 'Onchain' | 'ECDSA' | 'CREATE2' | 'ECDSALegacyMessage';

// CREATE2 Data
export interface Create2Data {
  creatorAddress: string;
  saltArg: string;
  codeHash: string;
}
```

## Fees

```typescript
export interface Fee {
  // Operation type (amount of chunks in operation differs and impacts the total fee).
  feeType: 'Withdraw' | 'Transfer' | 'TransferToNew' | 'FastWithdraw' | ChangePubKeyFee | LegacyChangePubKeyFee;
  // Amount of gas used by transaction
  gasTxAmount: utils.BigNumber;
  // Gas price (in wei)
  gasPriceWei: utils.BigNumber;
  // Ethereum gas part of fee (in wei)
  gasFee: utils.BigNumber;
  // Zero-knowledge proof part of fee (in wei)
  zkpFee: utils.BigNumber;
  // Total fee amount (in wei)
  // This value represents the summarized fee components, and it should be used as a fee
  // for the actual operation.
  totalFee: utils.BigNumber;
}

export interface BatchFee {
  // Total fee amount (in wei)
  totalFee: BigNumber;
}

export type TotalFee = Map<TokenLike, BigNumber>;
```

`ChangePubKeyFee` interface is defined as follows:

```typescript
export interface ChangePubKeyFee {
  // Denotes how authorization of operation is performed
  ChangePubKey: ChangePubkeyTypes;
}
```

`LegacyChangePubKeyFee` interface is defined as follows:

```typescript
export interface ChangePubKeyFee {
  ChangePubKey: {
    // Denotes how authorization of operation is performed:
    // 'true' if it's done by sending an Ethereum transaction,
    // 'false' if it's done by providing an Ethereum signature in zkSync transaction.
    onchainPubkeyAuth: boolean;
  };
}
```

## Account state

```typescript
import { utils } from 'ethers';

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
        amount: BigNumberish;
        // Value denoting the block number when the funds are expected
        // to be received by zkSync network.
        expectedAcceptBlock: number;
      };
    };
  };
  // Committed state is the last state known to the zkSync network, can be ahead of verified state
  committed: {
    balances: {
      // Token are indexed by their symbol (e.g. "ETH")
      [token: string]: BigNumberish;
    };
    // Nonce is equal to that of the next valid transaction.
    nonce: number;
    // Public key hash of the signer keys associated with account
    pubKeyHash: PubKeyHash;
  };
  // Verified state is proved with ZKP on the Ethereum network.
  verified: {
    balances: {
      // Token are indexed by their symbol (e.g. "ETH")
      [token: string]: BigNumberish;
    };
    // Nonce is equal to that of the next valid transaction.
    nonce: number;
    // Public key hash of the signer keys associated with account
    pubKeyHash: PubKeyHash;
  };
}
```

"Depositing" balances are balances for which deposit operation has already appeared on the Ethereum blockchain, but
which still do not have enough confirmations to be processed by the `zkSync` network.

For depositing balances, two fields are available: `amount` (sum of ongoing deposit operations for token), and
`expectedAcceptBlock` - the number of block, when all the deposit operations for this token are expected to be processed
by `zkSync` network.

Note that `depositing` balance data is anticipated, since block with deposit operation can be reverted on Ethereum
blockchain. This information should be used for informing user about ongoing operations only, and not taken as a
guarantee of the execution.

## Transactions

```typescript
import { utils } from 'ethers';

export interface Signature {
  pubKey: string;
  signature: string;
}

export type EthSignerType = {
  verificationMethod: 'ECDSA' | 'ERC-1271';
  // Indicates if signer adds `\x19Ethereum Signed Message\n${msg.length}` prefix before signing message.
  // i.e. if false, we should add this prefix manually before asking to sign message
  isSignedMsgPrefixed: boolean;
};

export interface TxEthSignature {
  type: 'EthereumSignature' | 'EIP1271Signature';
  signature: string;
}

export interface Transfer {
  type: 'Transfer';
  from: Address;
  to: Address;
  token: number;
  amount: BigNumberish;
  fee: BigNumberish;
  nonce: number;
  signature: Signature;
}

export interface Withdraw {
  type: 'Withdraw';
  from: Address;
  to: Address;
  token: number;
  amount: BigNumberish;
  fee: BigNumberish;
  nonce: number;
  signature: Signature;
}

export interface ForcedExit {
  type: 'ForcedExit';
  initiatorAccountId: number;
  target: Address;
  token: number;
  fee: BigNumberish;
  nonce: number;
  signature: Signature;
}

export interface ChangePubKey {
  type: 'ChangePubKey';
  accountId: number;
  account: Address;
  newPkHash: PubKeyHash;
  feeToken: number;
  fee: BigNumberish;
  nonce: number;
  signature: Signature;
  ethSignature: string;
}

export interface SignedTransaction {
  tx: Transfer | Withdraw | ChangePubKey | CloseAccount | ForcedExit;
  ethereumSignature?: TxEthSignature;
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

export interface Toggle2FARequest {
  enable: boolean;
  accountId: number;
  timestamp: number;
  signature: TxEthSignature;
}

export interface Toggle2FAResponse {
  success: boolean;
}
```

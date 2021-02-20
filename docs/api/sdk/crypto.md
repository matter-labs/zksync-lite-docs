# Cryptographic libraries

zkSync uses cryptographic primitives different from ones that are used in Ethereum. So, in order to make basic
operations, such as generating the private key and sign transactions, we provide interfaces for our cryptographic
backend for various programming languages.

## Table of contents

[[toc]]

This section provides an overview of existing cryptographic libraries.

## C

Repository: <https://github.com/zksync-sdk/zksync-crypto-c>

Installation: we distribute precompiled binaries for the common platforms, which can be found [here][c_libs].

[c_libs]: https://github.com/zksync-sdk/zksync-crypto-c/releases/tag/v0.1.0

### Example

```c
#include "../zks-crypto-c/zks_crypto.h"
#include <stdio.h>
#include <inttypes.h>


void print_bytes(uint8_t * arr, size_t len) {
    for (size_t i = 0; i < len; i++) {
        printf("%" PRIx8, arr[i]);
    }
    printf("\n");
}

int main() {
    uint8_t seed[32] = {0};

    ZksPrivateKey private_key = {0};
    ZksPackedPublicKey publicKey = {0};
    ZksPubkeyHash pubkeyHash = {0};

    zks_crypto_init();
    zks_crypto_private_key_from_seed(seed, 32, &private_key);
    zks_crypto_private_key_to_public_key(&private_key, &publicKey);
    zks_crypto_public_key_to_pubkey_hash(&publicKey, &pubkeyHash);

    printf("Seed:\n");
    print_bytes(seed, 32);
    printf("Private key:\n");
    print_bytes(private_key.data, PRIVATE_KEY_LEN);
    printf("Public key:\n");
    print_bytes(publicKey.data, PUBLIC_KEY_LEN);
    printf("Public key hash:\n");
    print_bytes(pubkeyHash.data, PUBKEY_HASH_LEN);


    uint8_t message[] = "hello";
    ZksSignature signature = {0};
    zks_crypto_sign_musig(&private_key, message, 5, &signature);
    printf("Signature:\n");
    print_bytes(signature.data, PACKED_SIGNATURE_LEN);

    return 0;
}
```

## WASM / JS

Repository: <https://github.com/matter-labs/zksync/tree/master/sdk/zksync-crypto>

Installation: available via `npm` package [`zksync-crypto`][npm_lib].

[npm_lib]: https://www.npmjs.com/package/zksync-crypto

### Example

```js
import { keccak256 } from '@ethersproject/keccak256';
import { arrayify, hexlify } from '@ethersproject/bytes';
import { sign_musig, privateKeyFromSeed } from 'zksync-crypto';

const privateKeySeed = arrayify(keccak256([0x01]));
const privateKey = privateKeyFromSeed(privateKeySeed);

const bytes = arrayify(0x01);
const signaturePacked = sign_musig(privateKey, bytes);
const pubKey = hexlify(signaturePacked.slice(0, 32)).substring(2);
const signature = hexlify(signaturePacked.slice(32)).substring(2);

console.log(`Private key: ${hexlify(privateKey)}`);
console.log(`Public key: ${pubKey}`);
console.log(`Signature: ${signature}`);
```

## Java

Repository: <https://github.com/zksync-sdk/zksync-sdk-java>

Installation: available via `Maven Central` package [`zkscrypto`][java_lib].

[java_lib]: https://search.maven.org/artifact/io.zksync.sdk/zkscrypto

Builds contain two versions: one for PC, and one for Android.

### Example

```java
import io.matterlabs.zkscrypto.lib.ZksCrypto;
import io.matterlabs.zkscrypto.lib.entity.ZksPackedPublicKey;
import io.matterlabs.zkscrypto.lib.entity.ZksPrivateKey;
import io.matterlabs.zkscrypto.lib.entity.ZksPubkeyHash;
import io.matterlabs.zkscrypto.lib.entity.ZksSignature;
import io.matterlabs.zkscrypto.lib.exception.ZksMusigTooLongException;
import io.matterlabs.zkscrypto.lib.exception.ZksSeedTooShortException;
import org.web3j.utils.Numeric;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class App {

    public static void main(String[] args) {
        // Load native library
        ZksCrypto crypto = ZksCrypto.load();

        byte[] seed = Arrays.copyOf(new byte[0], 32);
        byte[] msg = "hello".getBytes(StandardCharsets.UTF_8);

        try {
            // Generate private key from seed
            ZksPrivateKey privateKey = crypto.generatePrivateKey(seed);

            // Generate public key from private key
            ZksPackedPublicKey publicKey = crypto.getPublicKey(privateKey);

            // Generate hash from public key
            ZksPubkeyHash pubkeyHash = crypto.getPublicKeyHash(publicKey);

            // Sign message using private key
            ZksSignature signature = crypto.signMessage(privateKey, msg);

            System.out.printf("Seed: %s\n", Numeric.toHexString(seed));
            System.out.printf("Private key: %s\n", Numeric.toHexString(privateKey.getData()));
            System.out.printf("Public key: %s\n", Numeric.toHexString(publicKey.getData()));
            System.out.printf("Public key hash: %s\n", Numeric.toHexString(pubkeyHash.getData()));
            System.out.printf("Signature: %s\n", Numeric.toHexString(signature.getData()));
        } catch (ZksSeedTooShortException | ZksMusigTooLongException e) {
            System.err.println(e);
        }
    }
}
```

## Swift

Repository: <https://github.com/zksync-sdk/zksync-sdk-swift>

### Requirements

- iOS 10.0+ / macOS 10.12+ / tvOS 10.0+ / watchOS 3.0+
- Xcode 11+
- Swift 5.0+

### Installation

- CocoaPods: `pod 'ZKSyncSDK'`
- Carthage: `github "matter-labs/zksync-sdk/swift"`

### Example

Example could be found in the [repository][swift_example].

[swift_example]: https://github.com/zksync-sdk/zksync-sdk-swift/tree/master/ZKSyncSample

## Go

Repository: <https://github.com/zksync-sdk/zksync-sdk-go>

### Requirements

- macOS 10.12+ / linux x86_64 / windows x86_64
- go >= 1.15
- libzkscrypto.a

### Installation

- Import github.com/zksync-sdk/zksync-sdk-go
- Download `libzkscrypto` for your platform from <https://github.com/zksync-sdk/zksync-crypto-c/releases> and put it
  into `./libs` directory.

### Example

```go
package main

import (
    "encoding/hex"
    "log"

    "github.com/matter-labs/zksync-sdk/go/zkscrypto"
)

func main() {
    seed := make([]byte, 32)
    message := []byte("hello")

    privateKey, err := zkscrypto.NewPrivateKey(seed)
    if err != nil {
        log.Fatalf("error creating private key: %s", err.Error())
    }
    publicKey, err := privateKey.PublicKey()
    if err != nil {
        log.Fatalf("error creating public key: %s", err.Error())
    }
    publicKeyHash, err := publicKey.Hash()
    if err != nil {
        log.Fatalf("error creating public key hash: %s", err.Error())
    }
    signature, err := privateKey.Sign(message)
    if err != nil {
        log.Fatalf("error signing message: %s", err.Error())
    }
    log.Printf("Seed: %s\n", hex.EncodeToString(seed))
    log.Printf("Private key: %s\n", privateKey.HexString())
    log.Printf("Public key: %s\n", publicKey.HexString())
    log.Printf("Public key hash: %s\n", publicKeyHash.HexString())
    log.Printf("Signature: %s\n", signature.HexString())
}
```

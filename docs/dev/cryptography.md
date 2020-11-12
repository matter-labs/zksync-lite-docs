# Cryptographic Backends

zkSync uses cryptographical primitives different from ones that are used in Ethereum. So, in order to make basic
operations, such as generating the private key and sign transactions, we provide interfaces for our cryptographic
backend for various programming languages.

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
import { keccak256, arrayify, hexlify } from 'ethers/lib/utils';
import { private_key_to_pubkey_hash, sign_musig, privateKeyFromSeed } from 'zksync-crypto';

const privateKeySeed = arraify(keccak256([0x01]));
const privateKey = privateKeyFromSeed(privateKeySeed);

const bytes = arrayify(0x01);
const signaturePacked = sign_musig(privKey, bytes);
const pubKey = hexlify(signaturePacked.slice(0, 32)).substr(2);
const signature = hexlify(signaturePacked.slice(32)).substr(2);

console.log(`Private key: ${hexlify(privateKey)}`);
console.log(`Public key: ${pubKey}`);
console.log(`Signature: ${pubKey}`);
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

TBD

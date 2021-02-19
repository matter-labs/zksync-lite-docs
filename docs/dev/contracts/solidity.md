# Solidity

Solidity support is coming to zkSync soon.

It will be possible to deploy the most of Solidity projects almost without modifications. However, some features will
likely be prohibited and should be omitted in order to keep the code compatible:

- ASM blocks with memory access
- facilitating calculations via overflows
- ABI contract calls
- general cases of undefined behavior

As a little extra, we are working on a Solidity-to-Zinc transpiler to simplify the migration process.

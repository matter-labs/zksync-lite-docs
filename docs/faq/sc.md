# Smart contracts

Right now, **zkSync** can be used only for secure token transfers.

However, smart contracts are a cardinal part of the **zkSync** roadmap. Since summer 2019 we made significant progress on [Zinc](https://github.com/matter-labs/zinc), a developer-friendly programming framework to create zero-knowledge proof circuits. It will be soon possible to write smart contracts for **zkSync** in Zinc following very similar conventions you are used to with programming Ethereum in Solidity.

Zinc lang follows safe-by-default Rust philosophy and is based on simplified (but very expressive) Rust syntax. It can be learned in just one day by developers proficient in languages like Rust, C++ or Solidity.

Unlike other existing ZKP programming languages, you do not need to understand all nuances R1CS in order to write secure code. Zinc adheres to strict typing, all operations are safe by default, and you can not make a mistake by missing an important constraint — the entire program is correctly constrained automatically.

More information on Zinc:

- [Zinc source code on Github](https://github.com/matter-labs/zinc)
- [Video intro to Zinc from zkSummit 5 (April 2020)](https://www.youtube.com/watch?v=7AiQhbNyf_U)
- [ZincBook](https://zinc.matterlabs.dev/)
- [Zinc Gitter channel](https://gitter.im/matter-labs/zinc)

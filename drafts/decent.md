First, to [quote](https://twitter.com/VitalikButerin/status/1247607628668309507) Vitalik Buterin:

> People who say "full decentralization is overkill, you only need non-custodial" are missing the point. A fully decentralized (or "serverless") application is valuable because it gives users the confidence that *it will always be there*, so you can safely build on top of it.

Second, another critical property of a fully decentralized protocol is censorship-resistance. Users should have confidence that their normal transactions will be included in the next block.

...

**Validators** are responsible for packing transactions into blocks and generating zero-knowledge proofs for them. They participate in the consensus and must, therefore, contribute a share of the security bond for instant tx receipts. Their nodes must run in a secure environment with good internet bandwidth. Alternatively, they may choose to generate ZK proofs in the unsecured on-demand cloud.

Validators are rewarded with transaction fees, which can be paid in any token being transacted (for the maximum convenience of end-users).
In order to keep the **zkSync** consensus fast, only a limited number of validators are allowed at any moment (between 30 and 100, subject to profiling). Recall, however, that ZK Rollup validators are completely trustless. In **zkSync**, malicious validators can neither jeopardize the security of the system nor trick honest validators into slashing conditions. Therefore, unlike in optimistic rollups, a small set of validators can be frequently rotated by the Guardians. At the same time, the liveness of the consensus is guaranteed as long as more than ⅔ of the nominated validators are honest and operational.

**Guardians** will comprise the majority of **zkSync** token holders who stake their token share to nominate validators. The purpose of Guardians is to monitor peer-to-peer transaction traffic, detect censorship behavior, and ensure validators caught censoring are not nominated. The motivation of Guardians is to protect the value of their stake by making sure that **zkSync** remains DoS- and censorship-resistant.

Despite keeping the voting keys online, Guardians in **zkSync** are never exposed to risk of slashing or theft (the ownership keys can be kept in cold storage). They may also choose to monitor only a fraction of the traffic. Thus, their nodes can be run on ordinary laptops or cloud servers, i.e. there is no need for specialized validator services.

Guardians are rewarded with fees from the Validators denominated in the **zkSync** native token. Their earnings and stakes are locked for a prolonged period of time, to incentivize the prioritization of long-term **zkSync** token value over short-term returns.

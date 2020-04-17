#  Decentralization

## How decentralized is zkSync?

Technologically, decentralization is not a binary option but rather a continuum of design choices. The following rough scale can be used to asses a level of decentralization of a crypto project with regard to the ownership of assets:

1. Centralized custody (fully trusted): Coinbase
2. Collective custody (trust in honest majority): sidechains
3. Non-custodial via fraud proofs (trust in honest minority): optimistic rollups
4. Non-custodial, centrally operated (trustless): Argent
5. Multi-operator (trustless, weak censorship-resistance)<sup>\*</sup>: Cosmos
6. Peer-to-peer (trustless, strong censorship-resistance)<sup>\*</sup>: Ethereum, Bitcoin

_<sup>\*</sup>Sidenote: for L1 networks, trustlessness is only guaranteed by the ability (and to the extent of that ability) of honest minority users to fork away from the network taken over by dishonest majority. For L2 protocols, this can be achieved already at level 4 of this scala, because users can ultimately rely on L1 to circumvent exit censorship._

Right now, zkSync is at level 4 of this scale. It is fully non-custodial with zero trust assumptions: the zkSync operator has no power to do anything with user's assets without explicit authorization. Users can always withdraw all of their funds to Ethereum without any cooperation from operator (even if the latter is completely shut down and unresponsive).

However, the daily operation of the zkSync network at the moment depends on the health of the computational service provider who generates zero-knowledge proofs for the blocks.

## Who operates zkSync now?

Currently, the computational service provider for the zkSync network is "Stichtig ZK Sync", a non-profit Dutch foundation registered under RSIN 861038204 in Kingsfordweg 151, 1043GR Amsterdam. The service will operated at break-even cost until the transition to the full decentralization.

## Decentralizaton roadmap

Matter Labs is highly committed to developing **zkSync** into a fully decentralized protocol. We treat it as high priority for two major reasons.

First, to [quote](https://twitter.com/VitalikButerin/status/1247607628668309507) Vitalik Buterin:

> People who say "full decentralization is overkill, you only need non-custodial" are missing the point. A fully decentralized (or "serverless") application is valuable because it gives users the confidence that *it will always be there*, so you can safely build on top of it.

Second, another critical property of a fully decentralized protocol is censorship-resistance. Users should have confidence that their normal transactions will be included in the next block.

We outlined the decentralization roadmap in the [zkSync vision](https://medium.com/matter-labs/introducing-zk-sync-the-missing-link-to-mass-adoption-of-ethereum-14c9cea83f58) document. We intend to achieve it by introducing an independent consensus mechanism for block construction with two different roles: Validators and Guardians. (Note, that the security of zkSync will not be affected by introducing an additional consensus mechanism, since the final verfification of state transition proofs still will be peformed by a smart contract on the Ethereum mainnet.)

**Validators** are responsible for packing transactions into blocks and generating zero-knowledge proofs for them. They participate in the consensus and must, therefore, contribute a share of the security bond for instant tx receipts. Their nodes must run in a secure environment with good internet bandwidth. Alternatively, they may choose to generate ZK proofs in the unsecured on-demand cloud.

Validators are rewarded with transaction fees, which can be paid in any token being transacted (for the maximum convenience of end-users).
In order to keep the zkSync consensus fast, only a limited number of validators are allowed at any moment (between 30 and 100, subject to profiling). Recall, however, that ZK Rollup validators are completely trustless. In zkSync, malicious validators can neither jeopardize the security of the system nor trick honest validators into slashing conditions. Therefore, unlike in optimistic rollups, a small set of validators can be frequently rotated by the Guardians. At the same time, the liveness of the consensus is guaranteed as long as more than ⅔ of the nominated validators are honest and operational.

**Guardians** will comprise the majority of zkSync token holders who stake their token share to nominate validators. The purpose of Guardians is to monitor peer-to-peer transaction traffic, detect censorship behavior, and ensure validators caught censoring are not nominated. The motivation of Guardians is to protect the value of their stake by making sure that zkSync remains DoS- and censorship-resistant.

Despite keeping the voting keys online, Guardians in zkSync are never exposed to risk of slashing or theft (the ownership keys can be kept in cold storage). They may also choose to monitor only a fraction of the traffic. Thus, their nodes can be run on ordinary laptops or cloud servers, i.e. there is no need for specialized validator services.

Guardians are rewarded with fees from the Validators denominated in the zkSync native token. Their earnings and stakes are locked for a prolonged period of time, to incentivize the prioritization of long-term zkSync token value over short-term returns.
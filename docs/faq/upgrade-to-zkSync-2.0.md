# Upgrading to zkSync 2.0

When upgrading to zkSync 2.0 and launching NFTs, swaps and zkEVM, we use additional precautions to protect our users from unavoidable 
risks that accompany every Ethereum project.  

## Cryptography vulnerabilities

When it comes to ZKP circuits and underlying cryptography, we follow the latest best practices in the industry, get 
audits from the leading auditing firms, and hold a big bug bounty. 

Nevertheless, we also use additional mechanisms to mitigate any potential cryptography vulnerabilities.

To submit an invalid block to the rollup, the attacker must break not only our ZKP circuits and underlying cryptography but also 
corrupt the authorized sequencer since only blocks submitted by the sequencer can make their way to the zkSync L1 smart contract. 

Besides that, the sequencer additionally validates every transaction by simple execution, and only afterwards includes it to the block. 

The authorized sequencer will soon be replaced by a collective sequencers secured by a PoS based multi-validator consensus. 

## Corrupted governance

We strongly believe that when facing an upgrade our users should have the right not to trust the developers.  

zkSync governance can therefore initiate an upgrade 4 weeks before it is deployed so that the users have enough time to leave the network with 
all their funds via the priority queue or emergency exit if they notice any corruption.
Once battle tested, the protocol will become immutable (no longer upgradable), while the users will be asked to opt into the new versions.

## zkEVM failure

Theoretically, if a transaction submitted to the priority queue causes the zkEVM to fail internally, the system will 
stop and enter the emergency mode. Since the upgrade to fix this issue can only be deployed 4 weeks after it is initiated, 
all capital in the zkSync network will become frozen for at least 4 weeks.

The zkSync Security Council has therefore been established comprising of 15 respected members of the Ethereum community whose only power 
is to shorten the 4-weeks timelock when a normal upgrade cannot resolve the problem. 

With the help of Gnosis Safe Multisig the members of the Security Council can shorten the timelock up to 3 days with 
12 out of 15 signatures provided to validate the transaction. 

After we switch to a pure opt-in upgrade, the Security Council will no longer be required.


Read more about the additional security measures during the upgrade to zkSync 2.0 in:

[Keeping Funds Safe: a 3-Factor Approach to Security in zkSync 2.0](https://medium.com/matter-labs/keeping-funds-safe-a-3-factor-approach-to-security-in-zksync-2-0-a70b0f53f360)

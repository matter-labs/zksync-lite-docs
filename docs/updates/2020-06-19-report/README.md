---
sidebar: false
---

# zkSync day 1 incident report

## What happened

Operation of zkSync was disrupted on the launch day for several hours, due to two separate incidents.

## The outcome

Problems have been resolved, the system is up and running since then without interruptions. Funds in zkSync were not
endangered.

## Incident #1

Some users have initiated transactions to address zero (0x0000000000000000000000000000\- 000000000000). Though this is a
permitted action in zkSync protocol, our server incorrectly managed the state of this transactions, which has resulted
in generating blocks of incorrect format. No zero-knowledge proofs could be generated for these blocks because they
would violate security constraints.

After an investigation, our team has fixed the problem on the server, reverted invalid blocks, and initiated
reapplication of the in-fly (unverified) transactions that were collected since the incorrect block was produced.
Transactions to the zero address were not executed.

To protect users from losing funds, we also implemented a check to disallow transactions to the zero address.

## Incident #2

Several hours later, account state requests to zkSync API started to respond slowly (with ~15 sec latency), leading to a
degraded user experience.

This had the following reason. zkSync was originally designed and tested to operate under high load, with blocks
generated every 3 seconds. However, for the launch it was decided to increase block generation to 15 minutes, as there
was not so many requests expected. Internally to increase the safety new blocks are generated in parts - mini-blocks -
which are executed and stored into the database. While the block generation time was increased to 15 minutes, every
mini-block was still generated every 100ms. Overhead for storing pending block became pretty big, and the zkSync state
keeper struggled to respond to the incoming requests.

As a result of investigation, the mini-block generation time was increased as well, and also additional optimizations to
the routine processing mini-blocks were added to prevent similar situations in the future.

## Lessons learned

Being ready to work fast does not automatically mean that you are ready to work slow.

Logging infrastructure is really important. Without proper logging, the investigation would have taken much longer, as
the problem was pretty non-trivial. Problems can happen in the places where you expect them the least. Being always
ready is our responsibility, and this situation was a lesson that better to be learned early.

Finally, it worth mentioning that despite problems on the server side, all the users funds were completely safe! As
funds are held by the smart contract, even if all the offchain infrastructure disappears, users will be able to get
their money back. However, it is very important to pay attention to the finality status of your transactions! While all
funds in zkRollup are always safe, only transactions marked with a green double-checkmark have full finality guarantees.
The in-fly transactions (marked with a single yellow checkmark) are delivered on the best effort basis by the operator.
They can still be reverted if our infrastructure fails, with the funds remaining in the last verified state (i.e. at the
sender's account).

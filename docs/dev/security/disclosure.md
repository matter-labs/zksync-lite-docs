# Vulnerability Disclosure

Credit: The Geth and Solidity team has done an outstanding job in shaping their vulnerability disclosure policies and practices. The following is heavily inspired by Geth’s [Vulnerability Disclosure Policy](https://geth.ethereum.org/docs/vulnerabilities/vulnerabilities) and Solidity’s [Bug Disclosure Practices](https://docs.soliditylang.org/en/develop/bugs.html).

### About Disclosures

The primary goal for the Matter Labs team is the health of the zkSync network as a whole, and the decision of when to publish the details of the vulnerability is dependent on minimizing the risk and impact of its discovery and exploitation. If the publicizing of the vulnerability would harm zkSync mainnet users, we reserve the right to silently patch and ship fixes. 

In general, when we receive a critical vulnerability report, we will proceed in this order: deploy a silent fix, notify zkSync forks, take additional measures in our security design and processes, and then disclose to the public. 

### Public Transparency

All vulnerabilities must be handled silently until a fix is deployed and the Matter Labs team conducts a thorough internal review of not only the root cause, but also potential weak links in the overall security design. A public postmortem will be released with each vulnerability after systematic changes have been fully implemented. For previous vulnerabilities and their postmortems, see below.

### Disclosed Vulnerabilities

You can find a JSON-formatted list of known security-relevant bugs in this Github repository. This list was started on January 1, 2022, and covers Version 5.2 and forward. 

The JSON file of known vulnerabilities is a list of objects, one for each vulnerability, with the following keys:

`name`: unique name given to vulnerability

`uid`: unique identifier of the vulnerability of format ZKSYNC1-<year>-<sequential id>

`summary`: short description of the vulnerability

`description`: detailed description of the vulnerability

`links`: list of relevant URLs with more detailed information (optional)

`introduced`: the first published zkSync version that contained the vulnerability

`fixed`: the first published zkSync version that did not contain the vulnerability anymore

`severity`: severity of the vulnerability: `low`, `medium`, `high`, `critical` taking into account the severity of impact and likelihood of exploitation
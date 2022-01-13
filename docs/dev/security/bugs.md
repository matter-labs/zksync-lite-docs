# List of Known Bugs

Below you will find a JSON-formatted list of known security-relevant bugs. The file itself is hosted in this Github repository. This list was started on January 1, 2022, and covers Version 5.2 and forward.

The JSON file of known vulnerabilities is a list of objects, one for each vulnerability, with the following keys:

`name`: unique name given to vulnerability

`uid`: unique identifier of the vulnerability of format `ZKSYNC1-<year>-<sequential id>`

`summary`: short description of the vulnerability

`description`: detailed description of the vulnerability

`links`: list of relevant URLs with more detailed information (optional)

`introduced`: the first published zkSync version that contained the vulnerability

`fixed`: the first published zkSync version that did not contain the vulnerability anymore

`severity`: severity of the vulnerability: `low`, `medium`, `high`, `critical` taking into account the severity of impact and likelihood of exploitation

```json
{
	{
		"name": "SELFDESTRUCT main via delegatecall"
		"uid": “ZKSYNC1-2021-01”,
		"summary": "The Proxy’s target code allowed setting the main zkSync contract to SELFDESTRUCT, resulting in a freeze of user funds.",
		"description": "The initialize function in the zkSync main contract could be called on the target contract with any parameters at any time, allowing anyone to set additionalZkSync in the target contract storage to any address. If the attacker sets additionalZkSync to an address that would execute the SELFDESTRUCT opcode on any entry, and then call any function on the zkSync main contract that uses logic from additionalZkSync via delegatecall, the main zkSync target contract could have been destroyed and all funds would have been frozen. Funds could not be stolen because the Proxy contract owns the rollup assets and it did not contain a vulnerability, only the code of the Proxy’s target.",
		"links": “”,
		"introduced": “v5.1”,
		"fixed": “v5.2”,
		"severity": “Critical”
	}
}
```

# zkSync docs

This repository contains the zkSync documentation hosted on <zksync.io>.

## Local testing

```bash
yarn
yarn docs:dev
```

## Development

CI pipeline will check that the files are formatted according to `prettier`, that `markdownlint` found no issues in document,
and that spelling is correct. Also, there should be no dead links.

You can check it locally as follows:

```bash
yarn
yarn md:lint
yarn md:deadlinks
yarn fmt:check
yarn cspell
```

To fix formatting:

```bash
yarn fmt
```

If `cspell` doesn't recognize a word but you're sure that it's correct, consider adding it to the `cspell-zksync.txt`.

## Deployment

`master` branch is automatically deployed to <https://console.firebase.google.com/u/0/project/zksync-js-docs>

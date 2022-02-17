
# zkSync docs

This repository contains the zkSync documentation hosted on <docs.zksync.io>.

## Local testing

```bash
yarn install --check-cache
yarn docs:dev
```

## Development

CI pipeline will check that the files are formatted according `markdownlint` founds no issues in document
and spelling is correct. Also, there should be no dead links.

You can check it locally as follows:

```bash
yarn
yarn md:lint
yarn md:deadlinks
yarn cspell
```

If `cspell` doesn't recognize a word but you're sure that it's correct, consider adding it to the `cspell-zksync.txt`.

## Deployment

`master` branch is automatically deployed to <https://console.firebase.google.com/u/0/project/zksync-js-docs>

# Deploying altogether

> will do:

* install node modules;
* prepare, test and build documentation;
* prepare and build nuxt.js-version of the landing page of zksync.io/index.html
* afterwards all contained into the `dist` folder will be deployed in form of the static website

```bash
yarn zk-ci-prepare
yarn firebase deploy
```

# Extra documentation

## cSpell

Configuration in `.cSpell.json`:

* `version` — version of the setting file, always **0.1**
* `language` — language - current active spelling language
* `words[]` — words - list of words to be always considered correct
* `dictionaries[]`

```
"dictionaryDefinitions": [
    {
      "name": "zksync", "path": "./cspell-zksync.txt"
    }
]
```

```bash
{
  
  "version": "0.1",
  // language - current active spelling language
  "language": "en",
  // words - list of words to be always considered correct
  "words": [],
  "dictionaries": ["typescript", "zksync"],
  //
  "dictionaryDefinitions": [
  { 
    "name": "zksync", "path": "./cspell-zksync.txt"
  }
]
}
```

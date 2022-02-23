# [zkSync v1 Docs](https://docs.zksync.io/) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/matter-labs/zksync-docs) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/matter-labs/zksync-docs/Deploy%20production)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/matter-labs/zksync-docs/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/zksync.svg?style=flat)](https://www.npmjs.com/package/zksync) [![Follow us!](https://img.shields.io/twitter/follow/zksync?color=%238C8DFC&label=Follow%20%40zkSync&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA0MyAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi42NTM5IDEyLjQ5MTVMMzAuODM3OCAwLjcxNjc0M1Y5LjM0TDE5LjEwNTUgMTcuOTczOUwzMC44Mzc4IDE3Ljk4MlYyNC4yNjYyTDQyLjY1MzkgMTIuNDkxNVoiIGZpbGw9IiM0RTUyOUEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjk5ODA0NyAxMi40ODcyTDEyLjgxNDEgMjQuMjYxOVYxNS43MDhMMjQuNTQ2NSA3LjAwNDdMMTIuODE0MSA2Ljk5NjY0VjAuNzEyNDYzTDAuOTk4MDQ3IDEyLjQ4NzJaIiBmaWxsPSIjOEM4REZDIi8%2BCjwvc3ZnPgo%3D&style=flat)](https://twitter.com/zksync)


## zkSync Documentation for the v1 | [CHANGELOG](./CHANGELOG.md)

This repository contains the zkSync documentation hosted at [docs.zksync.io](https://docs.zksync.io)

## Development

### Local run

```bash
yarn install --check-cache
yarn docs:dev
```

### Development

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

`master` branch is automatically deployed to <https://console.firebase.google.com/u/0/project/zksync-web-docs>

### Deploying altogether

> will do:

* install node modules;
* prepare, test and build documentation;
* afterwards all contained into the `dist` folder will be deployed in form of the static website

```bash
yarn install --check-cache
yarn docs:build
yarn firebase deploy
```

## Extra documentation

## cSpell

Configuration in `cspell.json`:

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

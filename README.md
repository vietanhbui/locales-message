# locales-message

The library export message excel to json file (default locales/en.json, vi.json, ja.json).

## Installation

Using npm:

```shell
$ npm i --save locales-message
```

## Usage

```js
// in gen-message.js file
const localesMess = require("locales-message");

/**
 * @param {string} sheetId: sheet id of excel google doc (1NEo3yrsoR7zCDcrchb1fdrzXtxphRu2KuDOpwkLKofk)
 * @param {string} range: range cell in sheet excel (A2:D)
 * @param {string} pathFolder: path folder to store json message file (/locales)
 **/
localesMess.genMessage(sheetId, range, pathFolder);
```

And run:

```shell
$ node gen-message
```

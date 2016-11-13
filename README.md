# righteous.js

[![npm version](https://badge.fury.io/js/righteous-js.svg)](http://badge.fury.io/js/righteous-js) [![Build Status](https://travis-ci.org/mieky/righteous-js.svg?branch=master)](https://travis-ci.org/mieky/righteous-js)

**At an early stage, subject to change.**

Righteous code formatting styles. Like your current styles, but more righteous.

Inspired by standard.js, but also more righteous.

Currently based on eslint-config-airbnb-base, but might also be based on something more relevant later.

## Installation

`npm install --save-dev righteous-js`

In your package.json, add:

```
"config": {
    "lintTargets": "app/**/*.js"
},
"eslintConfig": {
    "extends": "./node_modules/righteous-js/.eslintrc.js"
},
"scripts": {
    "lint": "node_modules/righteous-js/lint.js"
}
```

Where `lintTargets` is a space-separated list of files you want to have linted.

## Changelog

- **1.0.0** First release.

## Acknowledgements

[![chilicorn](chilicorn.png)](http://futurice.com/blog/sponsoring-free-time-open-source-activities)

## License

[MIT](https://github.com/mieky/righteous-js/blob/master/LICENSE)

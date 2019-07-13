**righteous.js is deprecated and should be replaced.**

# righteous.js

[![npm version](https://badge.fury.io/js/righteous-js.svg)](http://badge.fury.io/js/righteous-js) [![Build Status](https://travis-ci.org/mieky/righteous-js.svg?branch=master)](https://travis-ci.org/mieky/righteous-js)

Righteous code formatting styles for your Javascript project. Like your current styles, but more righteous.

Inspired by standard.js, but also more righteous.

#### What is it exactly?

A modern, fresh, easy-to-install, strongly opinionated ruleset based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

Highlights:
- 4-space indents
- semicolons
- double quotes
- no trailing commas

At an early stage, **subject to change.**

#### Why?

There's some very smart people who have done a great job coming up with mostly sane defaults. About some specific issues I beg to differ, though, so it makes sense to only fix enough bits to have my eyes stop bleeding.

Code that passes these rules looks something like that of [jestas](https://github.com/mieky/jestas).

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
}```

Where `lintTargets` is a space-separated list of files you want to have checked (optional, defaults to `*.js`)

After this, you can run `npm run lint` to check your project.

## Changelog

- **1.1.0** Update to newest versions of eslint and eslint-config-airbnb-base
- **1.0.0** First release.

## Acknowledgements

[![chilicorn](chilicorn.png)](http://futurice.com/blog/sponsoring-free-time-open-source-activities)

## License

[MIT](https://github.com/mieky/righteous-js/blob/master/LICENSE)

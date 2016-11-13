#!/usr/bin/env node

const exec = require("child_process").exec;

const lintTargets = process.env.npm_package_config_lintTargets || "**/*.js";
const params = lintTargets.split();

console.log(`Linting with params: ${params}`);
exec("./node_modules/eslint/bin/eslint.js", params);

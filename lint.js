#!/usr/bin/env node

const fork = require("child_process").fork;

const lintTargets = process.env.npm_package_config_lintTargets || "**/*.js";
const params = lintTargets.split();

fork("./node_modules/eslint/bin/eslint.js", params);

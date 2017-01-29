#!/usr/bin/env node

const fork = require("child_process").fork;

const lintTargets = process.env.npm_package_config_lintTargets || "*.js";
const params = lintTargets.split(" ");

const eslintCommand = `./node_modules/eslint/bin/eslint.js`;
const runCommand = `${eslintCommand} ${params}`;
console.log(`Running: ${runCommand}`);

const lintProcess = fork(eslintCommand, params);
lintProcess.on("close", code => {
    console.log("Done.");
    process.exit(code);
});

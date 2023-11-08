const utils = require('..');
const assert = require('assert')

assert.strictEqual(utils.romanNumberConverter(1984), 'MCMLXXXIV');
assert.strictEqual(utils.romanNumberConverter(999), 'CMXCIX');

console.log(`\u001B[32m✓\u001B[39m Tests passed`);
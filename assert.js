// assert: Provides a set of assertion functions for performing runtime assertions.

const assert = require('assert');

assert.strictEqual(2 + 2, 4, 'The sum should be 4');
assert.deepStrictEqual([1, 2, 3], [1, 2, 3], 'The arrays should be deeply equal');
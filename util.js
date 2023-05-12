// util: Provides various utility functions.

const util = require('util');

const asyncFunction = util.promisify(someFunction);
asyncFunction()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

const formattedString = util.format('Hello, %s!', 'world');
console.log(formattedString); // Returns 'Hello, world!'
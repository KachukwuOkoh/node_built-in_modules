// querystring: Provides methods for working with query strings.

const querystring = require('querystring');

const params = querystring.parse('name=John&age=30');
console.log(params); // Returns an object: { name: 'John', age: '30' }

const queryString = querystring.stringify({ name: 'John', age: 30 });
console.log(queryString); // Returns a query string: 'name=John&age=30'
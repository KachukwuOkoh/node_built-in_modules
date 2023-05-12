// url: Provides utilities for URL resolution and parsing.

const url = require('url');

const parsedUrl = url.parse('http://example.com/path?query=string', true);
console.log(parsedUrl);
/*
Returns:
{
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.example.com',
  port: null,
  hostname: 'www.example.com',
  hash: '#section',
  search: '?name=John&age=30',
  query: 'name=John&age=30',
  pathname: '/path',
  path: '/path?name=John&age=30',
  href: 'https://www.example.com/path?name=John&age=30#section'
}
*/
console.log(parsedUrl.hostname); // Returns 'example.com'
console.log(parsedUrl.pathname); // Returns '/path'
console.log(parsedUrl.query); // Returns an object: { query: 'string' }
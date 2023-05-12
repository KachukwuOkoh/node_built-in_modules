// http: Allows creating HTTP servers and making HTTP requests.

const http = require('http');

// Creating an HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});

// Making an HTTP request
const options = {
    hostname: 'api.example.com',
    port: 80,
    path: '/data',
    method: 'GET'
};

const req = http.request(options, (res) => {
    console.log(`Status code: ${res.statusCode}`);
    // Handle the response data
});

req.end();
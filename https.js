// https: Provides functionality for creating HTTPS servers and making secure HTTPS requests.

const https = require('https');

// Creating an HTTPS server
const options = {
    key: fs.readFileSync('privatekey.pem'),
    cert: fs.readFileSync('certificate.pem')
};

const server = https.createServer(options, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(443, () => {
    console.log('Server is running on https://localhost');
});

// Making an HTTPS request
https.get('https://www.example.com', (res) => {
    console.log('Response status code:', res.statusCode);
    // Handle the response data
});
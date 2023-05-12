// crypto: Provides cryptographic functionality, such as creating secure hashes and encryption.

const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('Hello, world!');
console.log(hash.digest('hex')); // Returns the hash in hexadecimal format

const cipher = crypto.createCipherwiv('aes192', 'my secret key');
let encrypted = '';
cipher.on('data', (chunk) => {
    encrypted += chunk.toString('hex');
});
cipher.on('end', () => {
    console.log(encrypted);
});

cipher.write('Sensitive data');
cipher.end();
// path: Provides utilities for working with file and directory paths.

const path = require('path');

const filePath = '/home/user/documents/file.txt';

console.log(path.basename(filePath)); // Returns 'file.txt'
console.log(path.dirname(filePath)); // Returns '/home/user/documents'
console.log(path.extname(filePath)); // Returns '.txt'
console.log(path.resolve('app.js')); // Returns the absolute path
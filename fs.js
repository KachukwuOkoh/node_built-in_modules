// fs (File System): Provides file system-related operations.


const fs = require('fs');

// Example: Reading a file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});



// Example: Writing to a file
fs.writeFile('file.txt', 'Hello, world!', 'utf8', (err) => {
    if (err) throw err;
    console.log('File written successfully!');
});
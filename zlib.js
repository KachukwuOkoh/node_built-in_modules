// zlib - Provides compression and decompression functionality using gzip, deflate, or brotli algorithms


const zlib = require('zlib');

const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

zlib.gzip(data, (err, compressed) => {
    console.log(compressed); // Returns the compressed data
});

zlib.deflate(data, (err, compressed) => {
    console.log(compressed); // Returns the compressed data
});

zlib.brotliCompress(data, (err, compressed) => {
    console.log(compressed); // Returns the compressed data
});
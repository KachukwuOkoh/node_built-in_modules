// stream: Provides a base class for implementing streaming data functionality.

const stream = require('stream');

class MyWritable extends stream.Writable {
    _write(chunk, encoding, callback) {
        console.log(`Received data: ${chunk.toString()}`);
        callback();
    }
}

const myWritable = new MyWritable();
myWritable.write('Hello, world!');
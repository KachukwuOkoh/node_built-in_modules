// tty: Provides utilities for working with terminal devices, allowing you to interact with the console.

const tty = require('tty');

if (tty.isatty(process.stdout.fd)) {
    console.log('Running in a TTY context');
} else {
    console.log('Not running in a TTY context');
}

tty.setRawMode(true);
process.stdin.on('keypress', (chunk, key) => {
    console.log('Key pressed:', key.name);
    if (key.ctrl && key.name === 'c') {
        process.exit();
    }
});
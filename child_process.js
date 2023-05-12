// child_process: Allows spawning child processes and  communicate with them by executing shell commands.

const { spawn } = require('child_process');

const ls = spawn('ls', ['-l']);

ls.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

ls.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});
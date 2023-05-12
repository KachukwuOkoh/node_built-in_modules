// os (Operating System): Provides operating system-related utility methods  on which the Node.js process is running
const os = require('os');

console.log(os.platform()); // Returns the platform (e.g., 'win32', 'linux')
console.log(os.arch()); // Returns the CPU architecture (e.g., 'x64', 'arm')
console.log(os.cpus()); // Returns information about each CPU core
console.log(os.totalmem()); // Returns total system memory in bytes
console.log(os.networkInterfaces()); // Returns the Network architecture
console.log(os.freemem()); // Returns the amount of free system memory in bytes
console.log(os.hostname()); // Returns the hostname of the operating system
console.log(os.loadavg()); // Returns an array of average system load values over the last 1, 5, and 15 minutes
console.log(os.release()); // Returns the operating system release
console.log(os.type()); // Returns the operating system type
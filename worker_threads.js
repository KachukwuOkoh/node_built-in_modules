// worker_threads: Provides a way to run JavaScript code in separate threads, improving performance for CPU - intensive tasks.

const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
    // Main thread
    const worker = new Worker(__filename, {
        workerData: { message: 'Hello, world!' }
    });

    worker.on('message', (result) => {
        console.log(`Received message from worker: ${result}`);
    });
} else {
    // Worker thread
    const { message } = workerData;
    console.log(`Received message from main thread: ${message}`);
    const result = message.toUpperCase();
    parentPort.postMessage(result);
}
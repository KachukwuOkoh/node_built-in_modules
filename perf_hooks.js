// perf_hooks: Provides a way to measure the performance of your Node.js application using high-resolution timestamps.

const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((list, observer) => {
    console.log(list.getEntries()[0].duration);
    performance.clearMarks();
    observer.disconnect();
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('start');
// Perform some operation
performance.mark('end');
performance.measure('Operation duration', 'start', 'end');
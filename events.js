// events: Provides an event-driven programming infrastructure.

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('myEvent', (arg) => {
    console.log('Event occurred with argument:', arg);
});

emitter.emit('myEvent', 'Hello, world!');
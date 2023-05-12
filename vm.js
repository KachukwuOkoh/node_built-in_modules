// vm: Allows running JavaScript code within a sandboxed environment.

const vm = require('vm');

const sandbox = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};

const context = vm.createContext(sandbox);
vm.runInContext('greet()', context);
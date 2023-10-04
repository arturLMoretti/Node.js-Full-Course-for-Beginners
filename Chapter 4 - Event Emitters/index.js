const logEvents = require('./logEvents.js');

const EventEmitter = require('events');

class CustomEmiter extends EventEmitter {

}

const myEmitter = new CustomEmiter();

myEmitter.on('log', (msg) => {
  logEvents(msg);
});

setTimeout(() => {
  myEmitter.emit('log', 'Hello World!');
}, 2000);
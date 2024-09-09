class EventEmitter {
  constructor() {
        this.events = {};
  }

 on(eventName, callback) {
        !this.events[eventName] && (this.events[eventName] = []);
         this.events[eventName].push(callback);
    }

    off(eventName, callback) {
        this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
}
  

once(eventName, callback) {
  const onceFn = () => {
  callback();
  this.off(eventName, onceFn)  
}
  this.on(eventName, onceFn)
}

  emit(eventName, ...args) {
     const event = this.events[eventName];
     event && event.forEach(callback => callback.call(null, ...args));
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(event, ...args) {
      if (event === '*') {
          Object.keys(this.events).forEach((e) => super.emit(e, ...args));
      } else {
          super.emit(event, ...args);
      }
      
    }}

export { BroadcastEventEmitter, EventEmitter };
// Для запуска теста вводим в терминале команду: npm run test:current -- EventEmitter.test.js

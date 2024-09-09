const once = (fn) => {
  let memory = new Map();
  return function(x) {
    let key = JSON.stringify(x);
    if (memory.has(key)) {
      return memory.get(key)
    } 
    memory.set(key, undefined);
    let result = fn(x);
    memory.set(key, result);
    return result
  }
};

export { once };
// Для запуска теста вводим в терминале команду: npm run test:current -- once.test.js

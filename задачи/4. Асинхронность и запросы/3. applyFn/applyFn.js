class ExecutionError extends Error {
  constructor(element, name, stack, message){
    super(message);
    this.element = element
    this.name = name;
    this.stack = stack
}

  getArgData() {
    return this.element
  }
}

function applyFn(dataArr, callback) {
  return dataArr.reduce(function(acc, currentElement, i) {
    const {succeeded, errors} = acc;
  try {
    succeeded.push(callback(currentElement))
  } catch(e) {
    errors.push(new ExecutionError(dataArr[i], e.name, e.stack));
  }
  return acc
}, {
  succeeded: [],
  errors: [],
})
};

export { ExecutionError, applyFn };
// Для запуска теста вводим в терминале команду: npm run test:current -- applyFn.test.js

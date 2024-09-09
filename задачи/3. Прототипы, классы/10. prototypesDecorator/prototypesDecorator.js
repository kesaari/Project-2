class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
}

let decorator = Addition.prototype.add;

Addition.prototype.add = function(...nums) {
  console.log('called');
  return decorator.call(this, ...nums);
}

export { Addition };
// Для запуска теста вводим в терминале команду: npm run test:current -- prototypesDecorator.test.js

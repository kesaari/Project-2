class Calc {
  constructor(value = 0) {
    this.value = value;
  }
  
  result() {
  return this.value
  }
  
  add(param) {
    return new Calc(this.value + param)
  }
  
  sub(param) {
    return new Calc(this.value - param)
  }
}

export { Calc };
// Для запуска теста вводим в терминале команду: npm run test:current -- calc.test.js

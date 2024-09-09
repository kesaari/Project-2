function inRange(a, b) {
  return item => (a <= item && item <= b)
    };

    const inArray = (arr) => {
      return item => (arr.includes(item));
    };
    
    const notInArray = (arr) => {
      return item => (!arr.includes(item));
    };

export { inArray, inRange, notInArray };
// Для запуска теста вводим в терминале команду: npm run test:current -- arrayFilters.test.js

const sequenceSum = (begin, end) => {
  if (begin === end) {
    return begin;
  } else if (begin > end || typeof begin !== 'number' || typeof begin !== 'number') {
    return NaN; 
  } else {
    return begin + sequenceSum(begin + 1, end);
  }
};

export { sequenceSum };
// Для запуска теста вводим в терминале команду: npm run test:current -- sequenceSum.test.js

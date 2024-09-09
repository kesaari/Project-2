const sum = (...nums) => {
  console.log(nums)
  return nums.reduce((acc, item) => {
      if (!Number.isNaN(Number(item))) {
        
        return acc + Number(item);
      } else {
        return acc + 0;
      }
  }, 0);
};

export { sum };
// Для запуска теста вводим в терминале команду: npm run test:current -- sum.test.js

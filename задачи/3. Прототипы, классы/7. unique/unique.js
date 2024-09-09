const unique = (arr) => {
  let result = new Set(arr);
  
  return Array.from(result)
};

export { unique };
// Для запуска теста вводим в терминале команду: npm run test:current -- unique.test.js

const hasArrays = (values) => {
  let result = values.find(elem => Array.isArray(elem))
  return !!result;
};

export { hasArrays };
// Для запуска теста вводим в терминале команду: npm run test:current -- hasArrays.test.js

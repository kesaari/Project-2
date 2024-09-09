const getField = (data, field) => {
  if (data !== undefined) {
    let result = data.map(elem => elem[field]);
  return result
  } else {
    return []
  }
};

export { getField };
// Для запуска теста вводим в терминале команду: npm run test:current -- getField.test.js

function partition(array, callback = (element) => Boolean(element)) {
  let trueArray = array.filter(element => callback(element))
  let falseArray = array.filter(element => !callback(element))
  return [trueArray, falseArray];
  }

export { partition };
// Для запуска теста вводим в терминале команду: npm run test:current -- partition.test.js

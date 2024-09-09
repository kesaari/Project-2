const moveToStart = (arr, n) => {
  let newArr = [];
  if (arr.length <= n) {
  newArr = arr.slice();
    return newArr;
  } else {
  newArr = arr.length - n;

	return arr.slice(newArr).concat(arr.slice(0, newArr));
}};

export { moveToStart };
// Для запуска теста вводим в терминале команду: npm run test:current -- moveToStart.test.js

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
 };
 
 function isEmptyWithProtos(obj) {
  if (obj === null) return true;
  if (Object.keys(obj).length > 0) return false;
  return isEmptyWithProtos(Object.getPrototypeOf(obj));
}

export { isEmpty, isEmptyWithProtos };
// Для запуска теста вводим в терминале команду: npm run test:current -- isEmpty.test.js

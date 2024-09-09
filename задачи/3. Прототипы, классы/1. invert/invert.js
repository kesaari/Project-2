function invert(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
 };

export { invert };
// Для запуска теста вводим в терминале команду: npm run test:current -- invert.test.js

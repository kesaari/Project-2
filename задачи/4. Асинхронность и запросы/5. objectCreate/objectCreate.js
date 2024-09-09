Object.create = function (proto, propertiesObject = {}) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError();
  }
  
  function F() {}
  F.prototype = proto;
  const obj = new F();
  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }
  return obj;
};
// Для запуска теста вводим в терминале команду: npm run test:current -- objectCreate.test.js

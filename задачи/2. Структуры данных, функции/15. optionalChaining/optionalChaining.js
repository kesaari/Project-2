function optionalChaining(obj, chain) {
  if(chain.length === 0) {
      return undefined;
    }
  for(let key of chain) {
    if(obj[key]) {
      obj = obj[key];
      } else {
      return undefined
      };
    }
  return obj;
}

export { optionalChaining };
// Для запуска теста вводим в терминале команду: npm run test:current -- optionalChaining.test.js

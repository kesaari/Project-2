const merge = (...objs) => {
  let mergeObj = {};
  if (objs.length === 0) return {}
  let filteredArr = objs.filter(item => typeof item === 'object')
  mergeObj = Object.assign(...filteredArr)
  return mergeObj
};

export { merge };
// Для запуска теста вводим в терминале команду: npm run test:current -- merge.test.js

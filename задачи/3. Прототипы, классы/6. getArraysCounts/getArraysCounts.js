const getArraysCounts = (arr) => {
  let result = new Map();
   
   for (let key of arr) {
     if (!result.has(key)) {
       let value = 1
       result.set(key, value)
     } else {
       let count = result.get(key);
       count++;
       result.set(key, count)
     }
   }
   return result
 };

export { getArraysCounts };
// Для запуска теста вводим в терминале команду: npm run test:current -- getArraysCounts.test.js

const reverseLongWords = (str, n) => {
  let strArr = str.split(' ').map(item => {
     if (item.length >= n) {
      return item = item.split('').reverse().join('');
     } else {
       return item
     }})
  return strArr.join(' ')
 };

module.exports = reverseLongWords;

// Для запуска теста вводим в терминале команду: npm run test:current -- reverseLongWords.test.js

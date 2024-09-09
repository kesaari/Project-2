function getStringCount(object) {
  let count = 0;
  for (let elem in object) { 
    console.log(object[elem])
      if (typeof object[elem] === "string") { 
        count++;
        } else if (typeof object[elem] === "object") { 
        count += getStringCount(object[elem]);
        }}
  return count;
};

export { getStringCount };
// Для запуска теста вводим в терминале команду: npm run test:current -- getStringCount.test.js

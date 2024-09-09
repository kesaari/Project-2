function getDaysBetweenDates(a, b) {
  let date1 = new Date(a);
  let date2 = new Date(b);
   
  if (arguments.length < 2) {
      throw new TypeError("TypeError");
  } else {
      if (a === null || b === null) return NaN;
      let oneDay = 1000 * 60 * 60 * 24;
      let time = date2.getTime() - date1.getTime();
      let days = Math.abs(Math.trunc(time / oneDay));
      if (time < 0) {
          days =-1 * days;
      } else {
          days = days;
      }
      return days;
  }
}

export { getDaysBetweenDates };
// Для запуска теста вводим в терминале команду: npm run test:current -- getDaysBetweenDates.test.js

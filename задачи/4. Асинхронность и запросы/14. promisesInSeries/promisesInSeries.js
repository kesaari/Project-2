async function promisesInSeries(asyncFns) {
  let param;

    for(let i = 0; i < asyncFns.length; i++) {
        param = await asyncFns[i](param)
    }

    return param;
}

export { promisesInSeries };
// Для запуска теста вводим в терминале команду: npm run test:current -- promisesInSeries.test.js

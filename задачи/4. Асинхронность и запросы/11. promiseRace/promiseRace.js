function promiseRace(promises) {
  return new Promise((resolve, reject) => promises.forEach(p => p.then(resolve, reject)))
}

export { promiseRace };
// Для запуска теста вводим в терминале команду: npm run test:current -- promiseRace.test.js

const getLanguagesStatistic = (data) => {
  let filtredData = data.filter(elem => elem.year === 2023);
  let filtredDataLang = filtredData.map(elem => elem.language);
  let result = {};
  for (let lang of filtredDataLang) {
    if (!result[lang]) result[lang] = 0;
    result[lang]++;
  }
  return result
};

export { getLanguagesStatistic };
// Для запуска теста вводим в терминале команду: npm run test:current -- getLanguagesStatistic.test.js

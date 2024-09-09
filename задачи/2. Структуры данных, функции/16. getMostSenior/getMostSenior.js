function getMostSenior(data) {
  if (data == null) {
    return []
  }
  let oldest = 0;
  for (const { age } of data) {
    if (age > oldest) oldest = age;
  }
  return data.filter(obj => obj.age === oldest);
};

export { getMostSenior };
// Для запуска теста вводим в терминале команду: npm run test:current -- getMostSenior.test.js

function wrapInParagraph(text) {
  let array = text.split('\n')
 return array.map(row => `<p>${row}</p>`).join('\n');

  // Пишите код здесь
};

module.exports = wrapInParagraph;

// Для запуска теста вводим в терминале команду: npm run test:current -- wrapInParagraph.test.js

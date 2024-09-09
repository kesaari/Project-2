const debounce = (fn, delay) => {
  let timer;


  return function() {
    const fnCall = () => { fn.apply(this, arguments) }
    
    clearTimeout(timer);

    
    timer = setTimeout(fnCall, delay);
  };
};

export { debounce };
// Для запуска теста вводим в терминале команду: npm run test:current -- debounce.test.js

const throttle = (fn, delay) => {
  let isThrottled = false;
  function wrapper() {
    if (isThrottled) {
      return
    }
    fn.apply(this, arguments);
    isThrottled = true;
    setTimeout(function(){
      isThrottled = false;
    }, delay)
  }
  return wrapper;
};

export { throttle };
// Для запуска теста вводим в терминале команду: npm run test:current -- throttle.test.js

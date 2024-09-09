function incrementCounter(counterName){
    
  let counters;

  try {
      counters = JSON.parse(localStorage.getItem("counters"));
  } catch (er) {
      counters = {};
  }

  if (!counters) {
      counters = {};
      counters[counterName] = 0;
  }
  if (!counters[counterName]) {
    counters[counterName] = 0;
  }

  counters[counterName]++;
  localStorage.setItem("counters", JSON.stringify(counters));

  return counters[counterName];
}

export { incrementCounter };
// Для запуска теста вводим в терминале команду: npm run test:current -- incrementCounter.test.js

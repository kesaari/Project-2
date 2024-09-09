class AttemptsLimitExceeded extends Error {
  constructor() {
    super("Max attempts limit exceed");
    this.name = "AttemptsLimitExceeded";
  }
}

class NotFoundError extends Error {
  constructor() {
    super("Not found");
    this.name = "NotFoundError";
  }
}

class TemporaryError extends Error {
  constructor() {
    super("TemporaryError");
    this.name = "TemporaryError";
  }
}

function getRepeatableData(getData, key, maxRequestsNumber) {
  let result;
  try {
    result = getData(key);
  } catch(e) {
    if (e.name === "NotFoundError") { throw new NotFoundError() }
    else {
      if (maxRequestsNumber > 0) {
        maxRequestsNumber--
        return getRepeatableData(getData, key, maxRequestsNumber)
      } else {
        throw new AttemptsLimitExceeded()
      }
    }
  }
  return result
}

export {
  AttemptsLimitExceeded,
  NotFoundError,
  TemporaryError,
  getRepeatableData,
};
// Для запуска теста вводим в терминале команду: npm run test:current -- getRepeatableData.test.js

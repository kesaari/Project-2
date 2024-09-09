import { getUsersIds, getUserInfo } from "./db";

function getUsersInfo(callback) {
  getUsersIds((ids) => {
    const users = [];
    let count = 0;
    ids.forEach((id, index) => {
      getUserInfo(id, (userInfo) => {
        users[index] = userInfo;
        count++;
        if (count === ids.length) {
          callback(users);
        }
      });
    });
  });
}

export { getUsersInfo };
// Для запуска теста вводим в терминале команду: npm run test:current -- getUsersInfo.test.js

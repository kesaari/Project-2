const createUsernames = (data) => {
  return data.map(e => ({
        ...e,
        username: `${e.firstName.toLowerCase()}${e.lastName[0].toLowerCase()}${new Date().getFullYear() - e.age}`
    }));
};


export { createUsernames };
// Для запуска теста вводим в терминале команду: npm run test:current -- createUsernames.test.js

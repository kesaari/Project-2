// function promiseAll(promises) {
//   const results = [];
//   let completed = 0;
//   return new Promise((resolve, reject) => {

//     promises.forEach((value, index) => {
//       Promise.resolve(value)
//         .then((res) => {
//           results[index] = res;
//           completed++; 
//           if (completed === promises.length) {
//             resolve(results);
//           }
//         })
//         .catch((err) => reject(err));
//     });
//   });
// }

function promiseAll(promises) {
  const results = [];
  if (promises.length === 0) {
    return results
  } else {
  let completed = 0;
  return new Promise((resolve, reject) => {
    Promise.resolve(promises)
    .then((promisesArr) => {
      promisesArr.forEach((value, index) => {
        Promise.resolve(value)
        .then((res) => {
          results[index] = res;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
      })
    })
  })
}}

export { promiseAll };
// Для запуска теста вводим в терминале команду: npm run test:current -- promiseAll.test.js

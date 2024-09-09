const calculatePrice = (orders) => {
  if (orders == undefined || !Array.isArray(orders)) {
    return 0;
  } else {
  return orders.reduce((acc, curr) => {
  return acc + curr.price;}, 0);
 }};

export { calculatePrice };
// Для запуска теста вводим в терминале команду: npm run test:current -- calculatePrice.test.js

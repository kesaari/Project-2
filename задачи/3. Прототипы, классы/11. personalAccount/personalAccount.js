class Person {
  constructor(firstName, lastName, birth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birth = birth;

  }

  get fullName() {
    return this.firstName + " " + this.lastName
  }
  
  getAge() {
    let some = Date.now() - new Date(this.birth).getTime()
    let age = new Date(some).getFullYear() - 1970
    return age
  }
}

class Account {
  constructor(person, value) {
    this.value = value;
    this.history = []
  }
  
  getAccountHistory() {
    return this.history
  }
  
  getAmount() {
    return this.value
  }
  
  addMoney(amount, description) {
    this.value += amount
    this.history.push({ timestamp: Date.now(), target: "in", amount, description: description})
    }
  
  withdrawMoney(amount, description) {
    this.value -= amount
    this.history.push({ timestamp: Date.now(), target: "out", amount, description: description})
  }
  
  static transfer(fromAccount, toAccount, amount) {
    fromAccount.value -= amount;
    toAccount.value += amount;
  }
}
export { Person, Account };
// Для запуска теста вводим в терминале команду: npm run test:current -- personalAccount.test.js

async function newIncreaseSalary() {
  let newBudget = 0;
  let count = 0;

  const data = await api.getEmployees();

  let median = Math.floor(
	  data.reduce((acc, el) => (acc += el.salary), 0) / data.length
	);

  const updateSalary = async ({ salary, id, name }) => {
    const newSalary = salary * (salary > median ? 1.1 : 1.2);
    try {
      await api.setEmployeeSalary(id, newSalary);
      await api.notifyEmployee(id,  `Привет, ${name}! Поздравляем, твоя новая зарплата = ${newSalary}!`);

      newBudget += newSalary
      count++;
    } catch (e) {
      await api.notifyAdmin(e);
    }
  }

  await Promise.all(data.map(updateSalary));
  
  await api.sendBudgetToAccounting(newBudget);

  return count;
}



const api = {
  _employees: [
    { id: 1, name: "Alex", salary: 120000 },
    { id: 2, name: "Fred", salary: 110000 },
    { id: 3, name: "Bob", salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      const updatedEmployees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
              ...employee,
              salary: newSalary,
            }
      );
      this._employees = updatedEmployees;
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve();
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },

  sendBudgetToAccounting(newBudget) {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

export { newIncreaseSalary, api };
// Для запуска теста вводим в терминале команду: npm run test:current -- newIncreaseSalary.test.js

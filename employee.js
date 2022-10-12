const { default: inquirer } = require("inquirer");

class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer.prompt({
      type: 'input',
      message: 'Please Insert Name',
      name: 'name',
    })
  };

  getID() {
    inquirer.prompt({
      type: 'input',
      message: 'Please Insert Employee ID',
      name: 'id',
    })
  }

  getEmail() {
    inquirer.prompt({
      type: 'input',
      message: 'Please Insert Employee Email',
      name: 'email',
    })
  }

  getRole() {
    inquirer.prompt({
      type: 'list',
      message: 'Please Select Employee Role',
      name: 'role',
      choices: ['Manager', 'Engineer', 'Intern']
    })
  }
};

module.exports = Employee;
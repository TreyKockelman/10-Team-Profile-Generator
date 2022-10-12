const inquirer = require("inquirer");

class Employee {
  constructor(id, name, emailAddress) {
    this.id = id;
    this.name = name;
    this.email = emailAddress;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  };

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
};

module.exports = Employee;
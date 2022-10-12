const Employee = require('./employee');

class Manager extends Employee {
  constructor() {
    super(officeNumber)
  }

  getRole() {
    return 'manager';
  }
}

const manager = new Manager();
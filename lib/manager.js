const Employee = require('../employee');

class Manager extends Employee {
  constructor(id, name, emailAddress, offNum) {
    super(id, name, emailAddress)
    this.officeNumber = offNum;
  }

  getRole() {
    return 'Manager';
  }

  getOffNumber() {
    return this.officeNumber;
  }
}

const manager = new Manager();

module.exports = Manager;
const Employee = require('./employee');

class Intern extends Employee {
  constructor(id, name, emailAddress, school) {
    super(id, name, emailAddress)
    this.schoolName = school;
  }

  getRole() {
    return 'Intern';
  }

  getSchoolName() {
    return this.schoolName;
  }
}

const intern = new Intern();

module.exports = Intern;
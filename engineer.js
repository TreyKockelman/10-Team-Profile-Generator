const Employee = require('./employee');

class Engineer extends Employee {
  constructor(id, name, emailAddress, ghName) {
    super(id, name, emailAddress)
    this.engineerGithub = ghName;
  }

  getRole() {
    return 'Engineer';
  }

  getGithubNumber() {
    return this.engineerGithub;
  }
}

const engineer = new Engineer();

module.exports = Engineer;
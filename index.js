const Employee = require('./employee');
const Manager = require('./manager');
const inquirer = require("inquirer");

async function init () {
  let employee;
  let manager;
  let intern;
  let engineer;
  await inquirer.prompt([
    {
    type: 'input',
    message: "Insert Employee Name",
    name: 'name',
    },
    {
    type: 'input',
    message: "Insert Employee Email",
    name: 'email',
    },
    {
    type: 'input',
    message: "Insert Employee ID",
    name: 'id',
    },
    {
    type: 'list',
    message: "Pick Employee Role",
    choices: ["Manager", "Intern", "Engineer"],
    name: 'role'
    }
  ]).then(async (data) => {
    if (data.role === 'Manager') {
      await inquirer.prompt({
        type: 'input',
        message: "Please Enter Office Number",
        name: 'officeNumber',
      }).then((managerInfo) => {
        manager = new Manager(data.id, data.name, data.email, managerInfo.officeNumber)
    });
  }});
  console.log(manager.getName(), manager.getRole(), manager.getOffNumber());
}

init();
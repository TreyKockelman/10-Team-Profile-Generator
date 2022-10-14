const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const inquirer = require("inquirer");

const questions = {
  employee: [
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
  ],
  roleChoice: {
    type: 'list',
    message: "Pick New Employee Role",
    choices: ["Intern", "Engineer", "No More Employees"],
    name: 'role'
  },
  manager: {
    type: 'input',
    message: "Please Enter Office Number",
    name: 'officeNumber',
  },
  engineer: {
    type: 'input',
    message: "Please Enter Github Name",
    name: 'githubName'
  },
  intern:
  {
    type: 'input',
    message: "Please Enter Intern's School Name",
    name: 'schoolName',
  },
}

async function init() {
  let run = true;
  let data = [];
  const managerInfo = await inquirer.prompt([...questions.employee, questions.manager]);
  managerInfo.role = 'Manager';
  data.push(managerInfo);
  console.log("Manager logged in successfully")
  while (run) {
    const type = await inquirer.prompt(questions.roleChoice);
    if (type.role !== 'No More Employees') {
      let obj, employeeInfo, temp;
      switch (type.role) {
        case "Engineer":
          employeeInfo = await inquirer.prompt(questions.employee);
          temp = await inquirer.prompt(questions.engineer);
          obj = {...employeeInfo, ...temp, role: 'Engineer'};
          break;
        case "Intern": 
          employeeInfo = await inquirer.prompt(questions.employee);
          temp = await inquirer.prompt(questions.intern);
          obj = {...employeeInfo, ...temp, role: 'Intern'};
          break;
        default: console.log("defaulted");
          run = false;
        }
      data.push(obj);
    } else {
      break;
    }
  };
  createCards(data);
};

function createCards(data) {
  let employee;
  let empArray = [];
  for(const item of data) {
    if (item.role === 'Manager') {
      employee = new Manager(item.id, item.name, item.email, item.officeNumber)
    }
    if (item.role === 'Intern') {
      employee = new Intern(item.id, item.name, item.email, item.schoolName)
    }
    if (item.role === 'Engineer') {
      employee = new Engineer(item.id, item.name, item.email, item.githubName)
    }
    empArray.push(employee)
  }
  console.log(empArray)
}

init();
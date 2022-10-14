const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require("inquirer");
const fs = require("fs");

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
  collectEmployeeInfo(data);
};

function collectEmployeeInfo(data) {
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
  createCards(empArray)
}

function createCards(infoArray) {
  let cardArr = [];
  for (var i = 0; i < infoArray.length; i++) {
    let role = infoArray[i].getRole()
    let name = infoArray[i].name 
    let id = infoArray[i].id
    let email = infoArray[i].email
    let temp;
    if (role === 'Manager') {
      temp = "Manager Office Number: " + infoArray[i].getOffNumber()
    }
    if (role === 'Intern') {
      temp = "Intern School: " + infoArray[i].getSchoolName()
    }
    if (role === 'Engineer') {
      temp = "Engineer Github: " + infoArray[i].getGithubName()
    }
    cardArr.push( 
    `<card>
      <h1>${name} : ${role}</h1>
      <p>Employee ID: ${id}</p>
      <p>Employee Email: ${email}</p>
      <p>${temp}</p>
    </card>`)
  }
  generateHTML(cardArr);
}

function generateHTML(cardArr) {
  let html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="./assets/css/style.css" />
      <title>Team Generator</title>
    </head>
  
    <body>
  
      <header class="header">
        <h1>Team Generator</h1>
      </header>
  
      <div class="container-fluid">
        ${[...cardArr].join("\n")}
      </div>
  
    </body>
  </html>`
  fs.writeFileSync("index.html", html)
}

init();
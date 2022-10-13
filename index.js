const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const inquirer = require("inquirer");

function appendElements() {
  var parentEl = classes;
  var cardsDate = $("<h3 class=card-header>").text();
  var cardsTemp = $("<p>").text();
  var cardsWind = $("<p>").text();
  var cardsHum = $("<p>").text();
  parentEl.append(cardsDate, cardsIcon, cardsTemp, cardsWind, cardsHum);
  $('.card-container').append(parentEl);
}

async function init() {
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
      })
    }
    if (data.role === 'Engineer') {
      await inquirer.prompt({
        type: 'input',
        message: "Please Enter Github Name",
        name: 'githubName',
      }).then((engineerInfo) => {
        engineer = new Engineer(data.id, data.name, data.email, engineerInfo.githubName)
      })
    };
    if (data.role === 'Intern') {
      await inquirer.prompt({
        type: 'input',
        message: "Please Enter Intern's School Name",
        name: 'schoolName',
      }).then((internInfo) => {
        intern = new Intern(data.id, data.name, data.email, internInfo.schoolName)
      })
    };
    console.log(intern.getName(), intern.getRole(), intern.getSchoolName());
  })
};

init();
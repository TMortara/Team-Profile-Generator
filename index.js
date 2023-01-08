const inquirer = require("inquirer");
const fs = require("fs");

//Questions for prompts
const Question = require("./lib/Questions");

//Employee classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Employee cards and HTML structure
const createManagerCard = require("./src/managerCard");
const createEngineerCard = require("./src/engineerCard");
const createInternCard = require("./src/internCard");
const bodyHTML = require("./src/bodyHTML");


let team = [];

//prompt user with Engineer questions and action question then creates the intern card
function createEngineer(){
    inquirer.prompt(new Question("Engineer").assignCustomQuestion()).then(data =>{
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        team.push(engineer);
        nextStep();
    })
}

//prompt user with Intern questions and action question then creates the intern card
function createIntern(){
    inquirer.prompt(new Question("Intern").assignCustomQuestion()).then(data =>{
        const intern = new Intern(data.name, data.id, data.email, data.school)
        team.push(intern);
        // console.log(team);
        nextStep();
    })
}

//Creates new employee and applies questions for that role or generates team profile based on action question
function nextStep(){
        inquirer.prompt(new Question().assignCustomQuestion()).then(({action})=>{
            // console.log(action)
            switch (action) {
                case "Add Engineer":
                    createEngineer();
                    break;
    
                case "Add Intern":
                    createIntern();
                    break;
                
                case "Generate Team Profile":
                    createTeamProfile();
                    break;
                
                default:
                    break;
            }
        })
}

//generate file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err)
        : console.log("Your Team Profile has been generated SUCCESSFULLY!"); 
    });
}

//create Team Profile
function createTeamProfile() {
    let managerCards = "";
    let engineerCards = "";
    let internCards = "";

    team.forEach(employee => {
      if(employee.getRole() === "Manager") {
        managerCards = createManagerCard(employee);
      }  
      else if(employee.getRole() === "Engineer") {
        engineerCards = engineerCards += createEngineerCard(employee);
      }
      else {
        internCards = internCards += createInternCard(employee);
      }
    });

    let teamCards = "";
    teamCards = managerCards + engineerCards + internCards;

    writeToFile("./dist/Team Profile.html", bodyHTML(teamCards));
}

//initalize application
function init(){
    inquirer.prompt(new Question("Manager").assignCustomQuestion()).then(data =>{
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        team.push(manager);
        nextStep();
    })
}

init();
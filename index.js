const inquirer = require("inquirer");
const fs = require("fs");

//Questions for prompts
const Question = require("./lib/Questions");

//Employee Libraries
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];

//Function to call Engineer questions
function createEngineer(){
    inquirer.prompt(new Question("Engineer").assignCustomQuestion()).then(data =>{
        team.push(data);
        console.log(team);
        nextStep();
    })
}

//Function to call Intern questions
function createIntern(){
    inquirer.prompt(new Question("Intern").assignCustomQuestion()).then(data =>{
        team.push(data);
        console.log(team);
        nextStep();
    })
}

function nextStep(){
        inquirer.prompt(new Question().assignCustomQuestion()).then(({action})=>{
            console.log(action)
            switch (action) {
                case "Add Engineer":
                    createEngineer();
                    break;
    
                case "Add Intern":
                    createIntern();
                    break;
                
                case "Generate Team Profile":
                    // generateTeamProfile();
                    break;
                
                default:
                    break;
            }
        })
}
//Create Team Profile file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         err ? console.log(err)
//         : console.log("Your Team Profile has been generated SUCCESSFULLY!"); 
//     });
// }

function init(){
    inquirer.prompt(new Question("Manager").assignCustomQuestion()).then(answers =>{
        team.push(answers);
        // console.log(answers)
        nextStep();
    })
}

init();
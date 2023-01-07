const fs = require("fs");
const Question = require("./lib/Questions");
const inquirer = require("inquirer");

// fs.writeFile("./dist/log.txt", "Hello", err => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Successfully wrote your file!")
//     }
// })
function createEngineer(){
    inquirer.prompt(new Question("Engineer").assignCustomQuestion()).then(data =>{})
}

function createIntern(){
    inquirer.prompt(new Question("Intern").assignCustomQuestion()).then(data =>{})
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
            
            case "Create Team Profile":
                generateTeamProfile();
            
            default:
                break;
        }
    })
}


function init(){
    inquirer.prompt(new Question("Manager").assignCustomQuestion()).then(answers =>{
        console.log(answers)
        nextStep();
    })
}

init();
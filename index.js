//const inquirer = require('inquirer');
const fs = require("fs")
const Question = require("./lib/Questions")
const inquirer= require("inquirer")

// fs.writeFile("./dist/log.txt", "Hello", err => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Successfully wrote your file!")
//     }
// })
function createEngineer(){
    inquirer.prompt(new Question("engineer").assingCustomQuestion()).then(data =>{

    })
}

function menu(){
    inquirer.prompt(new Question().assingCustomQuestion()).then(({action})=>{
        console.log(action)
        switch (action) {
            case "Add Engineer":
                createEngineer()
                break;
        
            default:
                break;
        }
    })
}


function init(){
    inquirer.prompt(new Question("manager").assingCustomQuestion()).then(answers =>{
        console.log(answers)
        menu()
    })
}

init()
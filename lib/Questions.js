class Question {
    constructor(role) {
        this.role = role
        this.customQuestion;
        this.assingCustomQuestion()
    }
    assingCustomQuestion() {
        if (!this.role) {
            return [
                {
                    type: "list",
                    message: "What would you like to do?",
                    name: "action",
                    choices: ["Add Engineer", "Add Intern", "Create HTML Website!"]
                }
            ]
        }
        if (this.role === "manager") {
            this.customQuestion = {
                type: "input",
                message: "What is the office number",
                name: "officeNumber"
            }
        } else if (this.role === "engineer") {
            this.customQuestion = {
                type: "input",
                message: "What is the github username?",
                name: "github"
            }
        } else {
            this.customQuestion = {
                type: "input",
                message: "What is the intern's school",
                name: "school"
            }
        }

        return [
            {
                type: "input",
                message: `What's the ${this.role}'s name?`,
                name: "name"
            },
            {
                type: "input",
                message: `What's the ${this.role}'s id?`,
                name: "id"
            },
            {
                type: "input",
                message: `What's the ${this.role}'s email?`,
                name: "email"
            },
            this.customQuestion
        ]
    }
}



module.exports = Question
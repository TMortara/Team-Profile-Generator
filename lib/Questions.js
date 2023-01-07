class Question {
    constructor(role) {
        this.role = role;
        this.customQuestion;
        this.assignCustomQuestion();
    }

    assignCustomQuestion() {
        if (!this.role) {
            return [
                {
                    type: "list",
                    message: "What would you like to do next?",
                    name: "action",
                    choices: ["Add Engineer", "Add Intern", "Generate Team Profile"]
                }
            ]
        }
        if (this.role === "Manager") {
            this.customQuestion = {
                type: "input",
                message: `What is the ${this.role}'s office number?`,
                name: "officeNumber"
            }
        } else if (this.role === "Engineer") {
            this.customQuestion = {
                type: "input",
                message: `What is the ${this.role}'s GitHub username?`,
                name: "github"
            }
        } else {
            this.customQuestion = {
                type: "input",
                message: `What is the ${this.role}'s school?`,
                name: "school"
            }
        }

        return [
            {
                type: "input",
                message: `What is the ${this.role}'s name?`,
                name: "name"
            },
            {
                type: "input",
                message: `What is the ${this.role}'s id?`,
                name: "id"
            },
            {
                type: "input",
                message: `What is the ${this.role}'s email?`,
                name: "email"
            },
            this.customQuestion
        ]
    }
}

module.exports = Question;
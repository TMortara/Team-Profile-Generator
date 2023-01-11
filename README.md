# Team-Profile-Generator

## Description
This application creates a Team Profile so users can quickly view information about their team members. 

## Table of Contents
- [Installation Steps](#installation-steps)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Built With](#built-with)
- [Credits](#credits)
- [Resources Used to Complete Project](#resources-used-to-complete-project)
- [License](#license)
- [Tests](#tests)
- [Recording](#recording)
- [Screenshots of Application](#screenshots-of-application)

## Installation Steps
Before using this application you must [install Node.js](https://nodejs.org/en/).

After installing Node.js, open the integrated terminal in VS Code and run <mark>npm install</mark>.  This will install all of the dependencies listed in the package.json file. 

<u>Installation Resources</u>:
 - [Install Inquirer](https://www.npmjs.com/package/inquirer#installation)
- [Install Jest](https://jestjs.io/docs/getting-started)

## Usage
1. Before beginning make sure you have completed the [Installation Steps](#installation-steps)
2. Open integrated terminal in VS Code
3. Run <mark>node index</mark>
4. As a Manager you will be prompted for the following information: 
    1. Name
    2. ID
    3. Email
    4. Office Number
5. You will then be prompted with a menu that will let you:
    1. Add Engineer
    2. Add Intern
    3. Generate Team Profile
6. If you choose 'Add Engineer' you will be prompted for the following information:
    1. Name
    2. ID
    3. Email
    4. GitHub username
7. You will then be prompted with the menu again to choose your next action.
8. If you choose 'Add Intern' you will be prompted for the following information:
    1. Name
    2. ID
    3. Email
    4. School
9. You will then be prompted with the menu to choose your next action. 
10.  You can enter as many Employees as you need. When you are done, you will select 'Generate Team Profile'.
11. This action will generate an HTML file in the dist/ folder.  

## File Structure
The directory for this application is as follows:
 - dist/ - Team Profile that is generated along with CSS files
 - lib/ - Employee and Questions classes and HTML template
 - src/ - JavaScript files that build the Employee cards and the body of the HTML
 - tests/ - Employee test files

## Built With:
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) 

## Credits
- My Tutor, Alex Gonzales, for teaching me more about Classes and SubClasses.

### Resources Used to Complete Project
- [Inquierer documentation](https://www.npmjs.com/package/inquirer#documentation)
- [Node.js file system documentation](https://nodejs.dev/en/api/v19/fs/)
- [Node.js prompt documentation](https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/)
- [JEST documentation](https://jestjs.io/docs/getting-started)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests
This application includes 4 tests.

1. Employee
2. Engineer
3. Intern
4. Manager

### Instructions to Run Tests
1. Ensure you have installed Jest prior to running the tests
2. Open the Integrated Terminal in VS Code
3. Run <mark>npm run test</mark>

<img width="282" alt="Screen Shot 2023-01-10 at 4 13 06 PM" src="https://user-images.githubusercontent.com/107971753/211673834-d850f08f-59c0-4b43-a85c-92a5529fd18d.png">

## Recording

[Team Profile Generator.webm](https://user-images.githubusercontent.com/107971753/211717710-5b3b9046-64c0-4aad-b505-29cd994e460b.webm)

## Screenshots of Application

### Prompts

![Screen Shot 2023-01-10 at 10 22 18 PM](https://user-images.githubusercontent.com/107971753/211717235-917912ea-aa9c-47d1-9707-7a241df93e9b.png)

### Application 

![_Users_tracymortara_UTA-Bootcamp_Challenges_Challenge-10_Team-Profile-Generator_dist_Team%20Profile html (1)](https://user-images.githubusercontent.com/107971753/211717270-a6b7135a-f534-4531-9705-2dbce7f5ce75.png)



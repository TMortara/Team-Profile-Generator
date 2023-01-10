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
- [Screenshots](#screenshots)

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
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

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



## Recording

## Screenshots of Application

// TODO: Include packages needed for this application

// add 'fs' to be able to work with files (to create our professional readme file).
const fs = require('fs');
// add 'inquire' library to make this app user -friendly and easier coding
const inquirer = require('inquirer');
// add 'generateMarkdown.js' file to add styly to our professional readme file
const gMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions1 = [
    "What is your project title?",
    "What was your motivation?",
    "Why did you build this project?",
    "What problem does it solve?",
    "What did you learn?",
    "What are the steps required to install your project?",
    "Provide instructions and examples for use.",
    "List your collaborators, if any, with links to their GitHub profiles.",
    "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
    "If you followed tutorials, include links to those here as well."
];

const questions2 = [
    "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
    "Provide examples on how to run tests here.",
    "Provide your GitHub user name",
    "Provide your email address"
];
    

// TODO: Create a function to write README file
// add user new-input to the readme.md to the previous input that was done before 
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success! Check readme.md')
    );
}

// TODO: Create a function to initialize app
//??? The application will be invoked by using the following command: node index.js
function init() {


}

// Function call to initialize app
init();

// Description, Instalation, Usage sections:
for (let i = 0; i < questions1.length; i++) {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions1[i],
        name: i,
      },
    ])
    .then((res) => {
                        // console.log(res.i);
                        // resData = JSON.stringify(res);
        
        // lets write to readme.md user input using Markdown syntax
        // create a readme.md after user provided first input (project title) (for i=0)
        if (i === 0) {
            data = res.toUpperCase();
            fs.writeFile('readme.md', `# ${data}\n`, (err) =>
                err ? console.error(err) : console.log('Success! Check readme.md')
            );
        };
        // add to created the readme.md all the rest of user input (for i>=1)
        if (i === 1) {
            writeToFile('readme.md', `## Description\n`);
            writeToFile('readme.md', `### ${res}\n`);
        };
        if (2 <= i <= 4) {
            writeToFile('readme.md', `### ${res}\n`);
        };
        if (i === 5) {
            writeToFile('readme.md', `## Installation\n`);
            writeToFile('readme.md', `### ${res}\n`);
        };
        if (i === 6) {
            writeToFile('readme.md', `## Usage\n`);
            writeToFile('readme.md', `### ${res}\n`);
        };
        if (i === 7) {
            writeToFile('readme.md', `## Credits\n`);
            writeToFile('readme.md', `### ${res}\n`);
        };
        if (8 <= i <= 9) {
            writeToFile('readme.md', `### ${res}\n`);
        };
    });     
};

// License section:

// Contribution, Tests, Questions sections:
for (let j = 0; j < questions2.length; j++) {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions2[j],
        name: j,
      },
    ])
    .then((res) => {
        if (j === 0) {
            writeToFile('readme.md', `## Contributing\n`);
            writeToFile('readme.md', `### ${res}\n`);
        };
        if (j === 1) {
            writeToFile('readme.md', `## Tests\n`);
            writeToFile('readme.md', `### ${res}\n`);
        };
        if (j === 2) {
            writeToFile('readme.md', `## Questions\n`);
            writeToFile('readme.md', `### If you have any questions, please, contact me using my contact info bellow.`);
            writeToFile('readme.md', `### my GitHub user name: ${res}\n`);
            writeToFile('readme.md', `### my GitHub link: https://github.com/${res}\n`);
        };
        if (j === 2) {
            writeToFile('readme.md', `### my email: ${res}\n`);
        };
      });     
};
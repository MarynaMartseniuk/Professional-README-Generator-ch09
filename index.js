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
    "If your project has a lot of features, list them here.",
    "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so."
];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('log.txt', JSON.stringify(res), (err) =>
        err ? console.error(err) : console.log('Success! Check log.txt')
    );
}

// TODO: Create a function to initialize app
//??? The application will be invoked by using the following command: node index.js
function init() {


}

// Function call to initialize app
init();

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
          console.log(res.i);
          writeToFile(fileName, data);
      });     
        
};

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
          console.log(res.j);
          writeToFile(fileName, data);
      });     
        
};


//example
inquirer
  .prompt([

    {
      type: 'input',
      message: 'What is ...?',
      name: 'question-type1',
    },
    {
        type: 'checkbox',
        message: 'What is ...?',
        name: 'question-type2',
        choices: ["a", "b", "c", "d", "e"]
    },
    {
        type: 'list',
        message: 'What is ...?',
        name: 'question-type3',
        choices: ["x", "y", "w"]
    }
  ])
  .then((res) => {
        console.log(res.question-type1);
        console.log(res.question-type2);
        console.log(res.question-type3);

        fs.writeFile('log.txt', JSON.stringify(res), (err) =>
            err ? console.error(err) : console.log('Success! Check log.txt')
        );
    });

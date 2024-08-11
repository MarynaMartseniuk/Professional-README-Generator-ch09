// TODO: Include packages needed for this application

// add 'fs' to be able to work with files (to create our professional readme file).
const fs = require('fs');
// add 'inquire' library to make this app user -friendly and easier coding
const inquirer = require('inquirer');
// add 'generateMarkdown.js' file to add styly to our professional readme file
const gMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions1 = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project title?",
    },
    {
        type: 'input',
        name: 'motivation',
        message: "What was your motivation?",
    },
    {
        type: 'input',
        name: 'whyBuild',
        message: "Why did you build this project?",
    },
    {
        type: 'input',
        name: 'problemSolved',
        message: "What problem does it solve?",
    },
    {
        type: 'input',
        name: 'learn',
        message: "What did you learn?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use.",
    },
    {
        type: 'input',
        name: 'credits1',
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        default() {
            return 'N/A';
        },
    },
    {
        type: 'input',
        name: 'credits2',
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
        default() {
            return 'N/A';
        },
    },
    {
        type: 'input',
        name: 'credits3',
        message: "If you followed tutorials, include links to those here as well.",
        default() {
            return 'N/A';
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide examples on how to run tests here.",
    },
    {
        type: 'input',
        name: 'github',
        message: "Provide your GitHub user name",
    },
    {
        type: 'input',
        name: 'email',
        message: "Provide your email address",
    }
];


// TODO: Create a function to write README file
// add user new-input to the readme.md to the previous input that was done before 
// lets set up timer to get input record in an order we need (every next one will be done later on 50msec)
let time = 50;
function writeToFile(fileName, data) {
    setTimeout(() => {
        fs.appendFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Success! Check readme.md')
        );
    }, time = time + 50);
};

// TODO: Create a function to initialize app
//??? The application will be invoked by using the following command: node index.js
function init() {
    // Description, Instalation, Usage, Credits sections:
    inquirer
    .prompt(questions1)
    .then((res) => {
        console.log(res);
        fs.writeFile('generatedReadme.md', `# ${res.title.toUpperCase()}\n`, (err) =>
            err ? console.error(err) : console.log('Success! Check readme.md')
        );
  
        writeToFile('generatedReadme.md', `## Description\n`);
        writeToFile('generatedReadme.md', ` ### ${res.motivation}\n `);
        writeToFile('generatedReadme.md', ` ### ${res.whyBuild}\n `);
        writeToFile('generatedReadme.md', ` ### ${res.problemSolved}\n `);
        writeToFile('generatedReadme.md', ` ### ${res.learn}\n `);

        writeToFile('generatedReadme.md', `## Table of Contents\n`);
        writeToFile('generatedReadme.md', ` ### [Installation](#installation)\n`);
        writeToFile('generatedReadme.md', ` ### [Usage](#usage)\n`);
        writeToFile('generatedReadme.md', ` ### [Credits](#credits)\n`);
        // writeToFile('generatedReadme.md', ` ### [How to Contribute](#How to Contribute)\n`);
        writeToFile('generatedReadme.md', ` ### [Tests](#tests)\n`);
        writeToFile('generatedReadme.md', ` ### [Questions](#questions)\n`);

        writeToFile('generatedReadme.md', `## Installation\n`);
        writeToFile('generatedReadme.md', ` ### ${res.installation}\n `);

        writeToFile('generatedReadme.md', `## Usage\n`);
        writeToFile('generatedReadme.md', ` ### ${res.usage}\n `);

        writeToFile('generatedReadme.md', `## Credits\n`);
        if (res.credits1 !== 'N/A') {
            writeToFile('generatedReadme.md', ` ### ${res.credits1}\n `);
        };
        if (res.credits2 !== 'N/A') {
            writeToFile('generatedReadme.md', ` ### ${res.credits2}\n `);
        };
        if (res.credits3 !== 'N/A') {
            writeToFile('generatedReadme.md', ` ### ${res.credits3}\n `);
        };
        writeToFile('generatedReadme.md', `## How to Contribute\n`);
        writeToFile('generatedReadme.md', ` ### ${res.contribution}\n `);

        writeToFile('generatedReadme.md', `## Tests\n`);
        writeToFile('generatedReadme.md', ` ### ${res.tests}\n `);

        writeToFile('generatedReadme.md', `## Questions\n`);
        writeToFile('generatedReadme.md', `### If you have any questions, please, contact me using my contact info bellow.\n`);
        writeToFile('generatedReadme.md', ` ### my GitHub name: ${res.github}\n `);
        writeToFile('generatedReadme.md', `### my GitHub link: https://github.com/${res.github}\n`);
        writeToFile('generatedReadme.md', ` ### my email address: ${res.email}\n `);
    }
    );
};

// Function call to initialize app
init();
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
];

// const questions2 = [
//     "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
//     // "Provide examples on how to run tests here.",
//     // "Provide your GitHub user name",
//     // "Provide your email address"
// ];
    

// TODO: Create a function to write README file
// add user new-input to the readme.md to the previous input that was done before 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `# ${data.title}\n`, (err) =>
        err ? console.error(err) : console.log('Success! Check readme.md')
    );
    // fs.appendFile(fileName, data, (err) =>
    //     err ? console.error(err) : console.log('Success! Check readme.md')
    // );
}

// TODO: Create a function to initialize app
//??? The application will be invoked by using the following command: node index.js
function init() {
    inquirer
    .prompt(questions1)
    .then((res) => {
        console.log(res);
        writeToFile('generatedReadme.md', res);
    }
    );

}

// Function call to initialize app
init();

// // Description, Instalation, Usage sections:
// for (let i = 0; i < questions1.length; i++) {
//     inquirer
//     .prompt([
//       {
//         type: 'input',
//         message: questions1[i],
//         name: 'name',
//       },
//     ])
//     .then((res) => {
//                         // console.log(res.i);
//                         // resData = JSON.stringify(res);
        
//         // lets write to readme.md user input using Markdown syntax
//         // create a readme.md after user provided first input (project title) (for i=0)
//         // console.log(res);
//         if (i === 0) {
//             data = res.name.toUpperCase();
//             fs.writeFile('generatedReadme.md', `# ${data}\n`, (err) =>
//                 err ? console.error(err) : console.log('Success! Check readme.md')
//             );
//         };
//         // // add to created the readme.md all the rest of user input (for i>=1)
//         // if (i === 1) {
//         //     writeToFile('generatedReadme.md', `## Description\n`);
//         //     writeToFile('generatedReadme.md', `### ${res}\n`);
//         // };
//         // if (2 <= i <= 4) {
//         //     writeToFile('generatedReadme.md', `### ${res}\n`);
//         // };
//         // if (i === 5) {
//         //     writeToFile('generatedReadme.md', `## Installation\n`);
//         //     writeToFile('generatedReadme.md', `### ${res}\n`);
//         // };
//         // if (i === 6) {
//         //     writeToFile('generatedReadme.md', `## Usage\n`);
//         //     writeToFile('generatedReadme.md', `### ${res}\n`);
//         // };
//         // if (i === 7) {
//         //     writeToFile('generatedReadme.md', `## Credits\n`);
//         //     writeToFile('generatedReadme.md', `### ${res}\n`);
//         // };
//         // if (8 <= i <= 9) {
//         //     writeToFile('generatedReadme.md', `### ${res}\n`);
//         // };
//     });     
// };

// // License section:

// // Contribution, Tests, Questions sections:
// for (let j = 0; j < questions2.length; j++) {
//     inquirer
//     .prompt([
//       {
//         type: 'input',
//         message: questions2[j],
//         name: j,
//       },
//     ])
//     .then((res) => {
//         if (j === 0) {
//             writeToFile('generatedReadme.md', `## Contributing\n`);
//             writeToFile('generatedReadme.md', `### ${res}\n`);
//         };
//         // if (j === 1) {
//         //     writeToFile('generatedReadme.md', `## Tests\n`);
//         //     writeToFile('generatedReadme.md', `### ${res}\n`);
//         // };
//         // if (j === 2) {
//         //     writeToFile('generatedReadme.md', `## Questions\n`);
//         //     writeToFile('generatedReadme.md', `### If you have any questions, please, contact me using my contact info bellow.`);
//         //     writeToFile('generatedReadme.md', `### my GitHub user name: ${res}\n`);
//         //     writeToFile('generatedReadme.md', `### my GitHub link: https://github.com/${res}\n`);
//         // };
//         // if (j === 2) {
//         //     writeToFile('generatedReadme.md', `### my email: ${res}\n`);
//         // };
//       });     
// };
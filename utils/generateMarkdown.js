// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache License 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    };
    if (license === 'GNU General Public License v3.0') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    };
    if (license === 'MIT License') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (license === 'GNU General Public License v3.0') {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (license === 'MIT License') {
    return 'https://choosealicense.com/licenses/mit/';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0] === 'Apache License 2.0') {
    return 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. For more info, please follow the link.';
  };
  if (license[0] === 'GNU General Public License v3.0') {
    return 'The GNU General Public License is a free, copyleft license for software and other kinds of works. Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. For more info, please follow the link.';
  };
  if (license[0] === 'MIT License') {
    return 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Contributors provide an express grant of patent rights. For more info, please follow the link.';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;



// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
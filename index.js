const inquirer = require('inquirer')
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions for your project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information for your project:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter contributing guidelines for your project:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter test instructions for your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause']
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Please enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:'
    }
  ])
  .then((answers) => {
    const readmeContent = `
# ${answers.projectTitle}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license} license.

## Questions

For questions or concerns, please contact me at my GitHub profile: [${answers.githubUsername}](https://github.com/${answers.githubUsername}) or email me at ${answers.email}.
    `;

    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file has been generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });

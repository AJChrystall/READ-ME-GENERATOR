const init = async () => {
// Importing necessary modules
const inquirer = await import('inquirer');

const fs = require('fs');

// Inquirer prompts
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Please provide a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'What are the installation instructions for your project?'
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'What is the usage information for your project?'
  },
  {
    type: 'input',
    name: 'contributingGuidelines',
    message: 'What are the contributing guidelines for your project?'
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'What are the test instructions for your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// Function to generate README content
function generateReadme(answers) {
  return `
# ${answers.projectTitle}

${answers.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installationInstructions}

## Usage

${answers.usageInformation}

## Contributing

${answers.contributingGuidelines}

## Tests

${answers.testInstructions}

## License

This project is licensed under the ${answers.license} license.

## Questions

For questions or concerns, please contact me at my GitHub profile: [${answers.githubUsername}](https://github.com/${answers.githubUsername}) or email me at ${answers.email}.
  `;
}

// Prompting user with questions
inquirer.prompt(questions)
  .then(answers => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file has been generated successfully!');
      }
    });
  })
  .catch(err => console.error(err));
}
init();
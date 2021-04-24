// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Function to initialize the app
function init(){     
    inquirer.prompt([
        {
            type:'input',
            message:'What is your github username?',
            name:'username',
        },
        {
            type:'input',
            message:'What is your email address?',
            name:'email',
        },
        {
            type:'input',
            message:'What is the title of your project?',
            name:'title',
        },
        { type:'input',
            message:'What is a description of your project?',
            name:'description',
        },
        {
            type:'input',
            message:'Describe the installation of your project',
            name:'installation'
        },{
            type:'input',
            message:'What is the usage of your project?',
            name:'usage'
        },
        {
            type:'list',
            message:'What license(s) did you use?',
            name:'license',
            choices:['MIT', 'Apache', 'GPL', 'none']
        },
        {
            type:'input',
            message:'Anyone to credit?',
            name:'credits'
        },
        {
            type:'input',
            message:'How can others contribute?',
            name:'contribute'
        },
        {
            type:'input',
            message:'What is your linked in address',
            name:'linkedin'
        }
    ])

    .then(({username, email, title, description, installation, usage, license, credits, contribute,linkedin})=> {
        console.log (username);
        const data =`# ${title}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Credits 
${credits}
## License
${license}
## How to Contribute
${contribute}

# Contact
- Github: ${username}
- LinkedIn: ${linkedin}
- E-mail: ${email}`;

        writeToFile(title, data);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,data, err=>
    err ? console.error(err): console.log ('Success!')
    )};

// 
// Function call to initialize app
init();

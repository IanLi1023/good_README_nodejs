const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./generateMD.js');
inquirer

    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
        {
            type: 'input',
            message: 'Please add a decription of your application.',
            name: 'description',
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
        {
            type: 'input',
            message: 'How do you install your application?',
            name: 'installation',
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contribution',
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
        {
            type: 'input',
            message: 'Include test instructions for your application.',
            name: 'tests',
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
        {
            type: 'list',
            message: 'What type of license(s) did you utilize?',
            name: 'license:',
            choices: [
                'MIT',
                'GPL',
                'Apache',
                'ISC',
                'N/A',
            ],
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
        {
            type: 'input',
            message: 'What is the link to your GitHub profile?',
            name: 'profile',
            validate: (value) => {if(value) {return(true)} else {return 'Please provide information'}}
        },
    ]) 

.then((answers) =>
    fs.writeFile(
        `${answers.title}.md`, 
        generateMD(answers), 
        err => err ? console.error(err) : console.log('Success! Your ReadMe had been created!'))
    );
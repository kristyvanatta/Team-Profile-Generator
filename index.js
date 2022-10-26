const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./src/template.html');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const newMember = [];

inquirer

.prompt ([
    {
        type: "input",
        name: "name",
        message: "Please enter your name",
    },

    {
        type: "input",
        name: "ID",
        message: "Please enter your ID number",
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email address",
    },

    {
        type: "list",
        name: "role",
        message: "Please enter your role",
        choices: ["Manager", "Engineer", "Intern"],
    },
])


.then((userInput) => {
    const htmlContent = generateProfile(userInput);

    fs.writeFile('team.html', htmlContent, (err) =>
    err ? console.log(err) : console.log('Sucessfully created team profile')
    );
})


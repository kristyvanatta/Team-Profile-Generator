// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml')

//page link
//const generateProfile = require('./src/template.html');

//library of profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//new team member array
const teamProfile = [];

    inquirer
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "Please enter Manager name",
        },

        {
            type: "input",
            name: "ID",
            message: "Please enter Manager ID number",
        },

        {
            type: "input",
            name: "email",
            message: "Please enter Manager email address",
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number",
        }
    ]).then(managerAns => {
        const newMgr = new Manager(managerAns.name, managerAns.ID, managerAns.email, managerAns.officeNumber);
        teamProfile.push(newMgr);
        mainMenu()
    })

function mainMenu() {
    inquirer.prompt([
        {
            message: 'Would you like to add more team members?',
            name: 'choice',
            type: 'list',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ]).then(({choice}) => {
        if(choice == 'Engineer') {
            makeEngineer()
        }
    })
}

function makeEngineer() {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "Please enter Engineer name",
        },

        {
            type: "input",
            name: "ID",
            message: "Please enter Engineer ID number",
        },

        {
            type: "input",
            name: "email",
            message: "Please enter Engineer email address",
        },

        {
            type: "input",
            name: "github",
            message: "Please enter your github profile",
        }
    ]).then(engineerAns => {
        const newEng = new Engineer(engineerAns.name, engineerAns.ID, engineerAns.email, engineerAns.github);
        teamProfile.push(newEng);
        mainMenu()
        console.log(teamProfile)
    })
}

function makeIntern() {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "Please enter Intern name",
        },

        {
            type: "input",
            name: "ID",
            message: "Please enter Intern ID number",
        },

        {
            type: "input",
            name: "email",
            message: "Please enter Intern email address",
        },

        {
            type: "input",
            name: "school",
            message: "Please enter your school name",
        }
    ]).then(internAns => {
        const newInt = new Intern(internAns.name, internAns.ID, internAns.email, internAns.school);
        teamProfile.push(newInt);
        mainMenu()
        console.log(teamProfile)
    })
}



// .then((userInput) => {
//     const htmlContent = generateProfile(userInput);

//     fs.writeFile('team.html', htmlContent, (err) =>
//     err ? console.log(err) : console.log('Sucessfully created team profile')
//     );
// })


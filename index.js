//Main page will contain links to generate HTML page
//Constants linked to modules and team profiles
//As well as information about the team and the prompt section

const generateHTML = require('./src/index.html')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


const fs = require('fs')
const inquirer = require('inquirer')

const teamBuilder = [];


// below contains section for the manager prompt

const managerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter a Manager for your team!',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log('Please enter a name!')
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter a valid Employee ID!',
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('Please enter the employee ID number')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter the Manager's email!`,
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office location',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter a valid address!')
                }
            }
        }
    ])
    .then (managerData => {
        const {name, email, id, officeNumber} = managerData;
        const manager = new Manager (name, email, id, officeNumber)
    })
}


const newTeammate = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);
    return inquirer.prompt ([
        {

        }
    ]

    )
}
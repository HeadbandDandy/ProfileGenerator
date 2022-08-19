//Main page will contain links to generate HTML page
//Constants linked to modules and team profiles
//As well as information about the team and the prompt section

const generateHTML = require('./src/index.html')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const fetch = require('node-fetch')

const teamBuilder = [];


// below contains section for the manager prompt
const managerPrompt = () => {
    return inquirer.prompt([
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
        .then(managerData => {
            const { name, email, id, officeNumber } = managerData;
            const manager = new Manager(name, email, id, officeNumber)

            teamBuilder.push(manager)
            console.log(manager)
        })


}


const newTeammate = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose a role!',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter an employee name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            mesage: "Enter the employee ID",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter a valid emplpyee number!')
                    return false
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter Employee's GitHub",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Enter a valid username")
                }
            }
        },
        {
            type: 'input',
            name: 'college',
            message: 'What school does the intern attend?',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the school')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdditional',
            message: 'Would you like to add another member?',
            default: false
        }
    ])
    //below holds data fro emplyee
    .then(teamData => {

        let { name, id, email, role, github, school, confirmAdditional } = teamData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamBuilder.push(employee); 

        if (confirmAdditional) {
            return addEmployee(teamBuilder); 
        } else {
            return teamBuilder;
        }
    })

};


//function below will create an html file using 'fs'
//if page not created message displays

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile is now available! Check out the index page!")
        }
    })
}


managerPrompt()
    .then(newTeammate)
    .then(teamBuilder => {
        return generateHTML(teamBuilder)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err)
    })
        

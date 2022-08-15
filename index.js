//Main page will contain links to generate HTML page
//Constants linked to modules and team profiles
//As well as information about the team and the prompt section

const generateHTML = require('./src/index.html')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


const fs = require('fs')
const inquirer = require('inquirer')


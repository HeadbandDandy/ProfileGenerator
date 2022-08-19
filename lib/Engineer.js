//imports employee constructor
const Employee = require('./Employee')

//method below uses manager constructor to extend the employee constructor

class Engineer extends Employee {
    constructor (name, id, email, github) {
        //calls constructor below
        super (name, id, email)

        this.github = github;
    }

    getRole() {
        return "Engineer"
    }
}

//below exports thus module

module.exports = Engineer;
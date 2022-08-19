//imports employee constructor
const Employee = require('./Employee')

//method below uses manager constructor to extend the employee constructor

class Intern extends Employee {
    constructor (name, id, email, college) {
        //calls constructor below
        super (name, id, email)

        this.college = this.college;
    }

    getCollege () {
        return this.college
    }

    getRole() {
        return "Manager"
    }


}

//below exports thus module

module.exports = Intern;
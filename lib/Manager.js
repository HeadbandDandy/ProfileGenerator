//imports employee constructor
const Employee = require('./Employee')

//method below uses manager constructor to extend the employee constructor

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //calls constructor below
        super (name, id, email)

        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

//below exports thus module

module.exports = Manager;
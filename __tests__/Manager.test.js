// Manager test needs to be written to failure
//needs to contain "manager" constructor

const Manager = require('../lib/Manager')

//below contains test to create a manager object

test('manager object', () => {
    const Manager = new Manager('John', 91, 'johndoe@gmail.com', 1234)

    expect(manager.officeNumber).toEqual(expect.any(Number))
})


//test below checks for role

test('manager role', () => {
    const Manager = new Manager('John', 91, 'johndoe@gmail.com', 1234)

    expect(manager.getRole()).toEqual("Manager")
})
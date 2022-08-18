//Write Employee Test First

//below is the employee constructor
const Employee = require('../lib/Employee')

//need to test for an employee object first

test('create an object', () => {
    const Employee = new Employee('John', 91, 'johndoe@gmail.com')

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))

})

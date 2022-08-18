//Write Employee Test First
// All test have failed successfully 8/18

//below is the employee constructor
const Employee = require('../lib/Employee')

//need to test for an employee object first

test('create an object', () => {
    const Employee = new Employee('John', 91, 'johndoe@gmail.com')

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))

})

//test below finds name of object

test('name of object', () => {
    const Employee = new Employee('John', 91, 'johndoe@gmail.com')

    expect(employee.getName()).toEqual(expect.any(String));

})

//test below finds id of object

test('id of object', () => {
    const Employee = new Employee('John', 91, 'johndoe@gmail.com')

    expect(employee.getId()).toEqual(expect.any(Number))
})

//test below finds email of object 

test('email of object', () => {
    const Employee = new Employee('John', 91, 'johndoe@gmail.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

//test below finds the rold of object
test('role of employee', () => {
    const Employee = new Employee('John', 91, 'johndoe@gmail.com')

    expect(employee.getRole()).toEqual("Employee")
})
const Employee = require('../lib/Employee')

describe('Example Employee', ()=> {
    const exEmployee = {
        name: "Minjae",
        id: 1234,
        email: "jaecho203@gmail.com",
    };

    describe('initialization', () => {
        test('create new Employee', () => {
            const classEmployee = new Employee(exEmployee)

            expect(classEmployee.name).toEqual("Minjae");
            expect(classEmployee.id).toEqual(1234);
            expect(classEmployee.email).toEqual("jaecho203@gmail.com")
        })
        test('Return name of Employee', () => {
            const classEmployee = new Employee(exEmployee)
            expect(classEmployee.getName()).toEqual("Minjae")
        })
        test('Return ID of Employee', () => {
            const classEmployee = new Employee(exEmployee)
            expect(classEmployee.getID()).toEqual(1234)
        })
        test('Return email of Employee', () => {
            const classEmployee = new Employee(exEmployee)
            expect(classEmployee.getEmail()).toEqual("jaecho203@gmail.com")
        })
    })
});

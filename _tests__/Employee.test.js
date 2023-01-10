const Employee = require('../lib/Employee.js')

desc('Example Employee', ()=> {
    const exEmployee = {
        name: "Minjae",
        id: 1234,
        email: "jaecho203@gmail.com",
    };

    desc('creating a new Employee test', () => {
        test('create new Employee', () => {
            const classEmployee = new Employee(exEmployee)

            expect(classEmployee.name).toEqual("Minjae");
            expect(classEmployee.id).toEqual(1234);
            expect(classEmployee.email).toEqual("jaecho203@gmail.com")
        })
    })
});
test('Retrieve name of the Employee', () => {
    const classEmployee = new Employee(exEmployee)
    expect(classEmployee.getName()).toEqual("Minjae")
})

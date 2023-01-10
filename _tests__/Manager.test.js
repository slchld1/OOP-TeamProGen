const Manager = require('../lib/Manager')

describe('Manager', () => {
    const exManager = {
        name: "Minjae",
        ID: 1234,
        email: "jaecho203@gmail.com",
        officeNum: 1,
    }
    describe('Initialization', () => {
        test('create new Manager', () => {
            const classManager = new Manager(exManager)
            expect(classManager).toEqual({
                name: "Minjae",
                ID: 1234,
                email: "jaecho203@gmail.com",
                officeNum: 1,
                role: "Manager",
            });
        })
        test('Return Manager Office Number', () => {
            const classManager = new Manager(exManager)
            expect(classManager.getOfficeNum()).toEqual(1)
        })
    })
})
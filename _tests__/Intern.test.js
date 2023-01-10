const Intern = require('../lib/Intern')

describe('Intern', () => {
    const exIntern = {
        name: "Minjae",
        ID: 1234,
        email: "jaecho203@gmail.com",
        school: "Georgia Institute of Technology"
    };
    describe('Initialization', () => {
        test('create new Intern', () => {
            const classIntern = new Intern(exIntern)
            expect(classIntern).toEqual({
                name: "Minjae",
                ID: 1234,
                email: "jaecho203@gmail.com",
                school: "Georgia Institute of Technology",
                role: "Intern",
            })
        })
        test('Return name of school', () => {
            const classIntern = new Intern(exIntern)
            expect(classIntern.getSchool()).toEqual("Georgia Institute of Technology")
        })
    })
});

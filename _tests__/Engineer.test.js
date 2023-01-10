const Engineer = require("../lib/Engineer")

desc("Engineer", ()=> {
    const exEngineer = {
        name: "Minjae",
        ID: 1234,
        email: "jaecho203@gmail.com",
        gitHub: "https://github.com/slchld1"
    };
    desc('create Engineer Obj', () => {
        test('creating new Engineer', () => {
            const classEngineer = new Engineer(exEngineer)
            expect(classEngineer).toBeInstanceOf(Engineer)
        })
        test('Engineer class must have a name, ID, email, gitHub, and name of job', () => {
            const classEngineer = new Engineer(exEngineer)
            expect(classEngineer).toEqual({
                name: "Minjae",
                ID: 1234,
                email: "jaecho203@gmail.com",
                gitHub: "https://github.com/slchld1",
                job: "Engineer",
            })
        })
    })
})
test()
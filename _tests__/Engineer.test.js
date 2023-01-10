const Engineer = require("../lib/Engineer")

describe("Engineer", ()=> {
    const exEngineer = {
        name: "Minjae",
        ID: 1234,
        email: "jaecho203@gmail.com",
        gitHub: "slchld1"
    };
    describe('initialization', () => {
        test('Engineer class must have a name, ID, email, gitHub, and name of job', () => {
            const classEngineer = new Engineer(exEngineer)
            expect(classEngineer).toEqual({
                name: "Minjae",
                ID: 1234,
                email: "jaecho203@gmail.com",
                gitHub: "slchld1",
                role: "Engineer",
            })
        })
        test('Return gitHub username of Engineer', ()=> {
            const classEngineer = new Engineer(exEngineer);
        
            expect(classEngineer.gitHub).toEqual("slchld1")
        });
        test('Return role of this Employee', () => {
            const classEngineer = new Engineer(exEngineer);
            
            expect(classEngineer.getRole()).toEqual("Engineer")
        })
    })
});
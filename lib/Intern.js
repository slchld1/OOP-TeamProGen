const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, ID, email, school){
        super(name, ID, email)
        this.role = "Intern";
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}
module.exports = Intern;
const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, ID, email, school){
        super(name, ID, email)
        this.job = "Intern";
        this.school = school;
    }
}
module.exports = Intern;
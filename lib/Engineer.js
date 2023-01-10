const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, ID, email, gitHub){
        super(name, ID, email)
        this.job = "Engineer";
        this.gitHub = gitHub;
    }
}
module.exports = Engineer;
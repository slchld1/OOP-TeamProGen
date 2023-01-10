const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, ID, email, gitHub){
        super(name, ID, email)
        this.role = "Engineer";
        this.gitHub = gitHub;
    }
    getRole() {
        return this.role;
    }
    getGitHub() {
        return this.gitHub;
    }
}
module.exports = Engineer;
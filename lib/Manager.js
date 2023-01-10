const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, ID, email, officeNum){
        super(name, ID, email)
        this.job = "Manager";
        this.officeNum = officeNum;
    }
}
module.exports = Manager;
const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, ID, email, officeNum){
        super(name, ID, email)
        this.role = "Manager";
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        return this.officeNum
    }
    getRole() {
        return this.role
    }
}
module.exports = Manager;
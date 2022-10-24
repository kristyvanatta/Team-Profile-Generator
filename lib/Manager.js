const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor (officeNum) {
        this.officeNum = officeNum;
    }
}


module.exports = Manager;
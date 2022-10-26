const Employee = require('../lib/Employee');


class Intern extends Employee {
    constructor (school) {
        this.school = school;
    }
}


module.exports = Intern;
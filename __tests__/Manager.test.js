const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');



it("Should set office number", () => {
    const testOfficeNum = 3456;
    const employee = new Manager("Jack", 124, 'test@email.com', testOfficeNum);

    expect(employee.office).toBe(testOfficeNum);
});

it("Should get office number", () => {
    const testOfficeNum = 3456;
    const employee = new Manager("Jack", 124, 'test@email.com', testOfficeNum);

    expect(employee.getOfficeNum()).toBe(testOfficeNum);
});
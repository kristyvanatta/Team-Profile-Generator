
const Intern = require('../lib/Intern');

describe("Intern", () => {

    it("Should set school", () => {
        const testSchool = 'Kent';
        const employee = new Intern("Jack", 124, 'test@email.com', testSchool);
        
        expect(employee.school).toBe(testSchool);
    });

    it("should get school", () => {
        const testSchool = "Kent";
        const employee = new Intern("Jack", 124, 'test@email.com', testSchool);
    });
    

    it("getRole() should return \'Intern\'", () => {
        const testIntern = 'Intern';
        const employee = new Intern("Jack", 124, 'test@email.com', testIntern);

        expect(employee.getSchool()).toBe(testIntern);
    });
})
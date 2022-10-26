
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    it("Should set GitHub", () => {
        const testUser = "GitHubUser";
        const employee = new Engineer("Jack", 124, 'test@email.com', testUser);

        expect(employee.gitHub).toBe(testUser);
    });
    
    it("Should get Github username", () => {
        const testUser = "GitHubUser";
        const employee = new Engineer("Jack", 124, 'test@email.com', testUser);

        expect(employee.getGithub()).toBe(testUser);
    });

    it("getRole() should return \'Engineer\'", () => {
        const testEngineer = 'Engineer';
        const employee = new Engineer("Jack", 124, 'test@email.com', "GitHubUser");
        
        expect(employee.getRole()).toBe(testEngineer);
    });


})
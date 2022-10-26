

const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    it("Should set GitHub", () => {
        const testUser = "GitHubUser";
        const employee = new Engineer("Alice", 124, 'test@email.com', testUser);

        expect(employee.github).toBe(testUser);
    });
    
    it("Should get Github username", () => {
        const testUser = "GitHubUser";
        const employee = new Engineer("Jack", 124, 'test@email.com', testUser);

        expect(employee.getGitHub()).toBe(testUser);
    });
    
    it("getRole() should return \'Engineer\'", () => {
        const testEngineer = 'Engineer';
        const employee = new Engineer("Jack", 124, 'test@email.com', "GitHubUser");
        
        expect(employee.getRole()).toBe(testEngineer);
    });


})
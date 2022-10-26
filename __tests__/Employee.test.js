

const Employee = require('../lib/Employee');




describe("Employee", () => {
    
        it("Should initialize a new Employee as an object type", () => {
            const employee = new Employee();

            expect(typeof(employee)).toBe('object');
        });

        it("Should set name", () => {
            const name = 'Jack';
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });

        it("Should set id", () => {
            const testId = 124;
            const employee = new Employee("Jack", testId);

            expect(employee.id).toBe(testId);
        });

        it("Should set Email", () => {
            const testEmail = 'test@email.com';
            const employee = new Employee("Jack", 124, testEmail);

            expect(employee.email).toBe(testEmail);
        });

        it("Should get name", () => {
            const testName = "Jack";
            const employee = new Employee(testName);

            expect(employee.getName()).toBe(testName);
        });

        it("Should get id", () => {
            const testId = 124;
            const employee = new Employee("Jack", testId);

            expect(employee.getId()).toBe(testId);
        });

        it("Should get email", () => {
            const testEmail = 'test@email.com';
            const employee = new Employee("Jack", 124, testEmail);

            expect(employee.getEmail()).toBe(testEmail);
        });

        it("getRole() should return \'Employee\'", () => {
            const testEmployee = 'Employee';
            const employee = new Employee("Jack", 124, 'test@email.com');

            expect(employee.getRole()).toBe(testEmployee);
        });
    })

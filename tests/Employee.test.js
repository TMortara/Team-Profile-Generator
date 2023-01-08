const Employee = require("../lib/Employee");
const employee = new Employee("Tina Belcher", "11", "jerichorules@email.com");

describe("Employee", () => {
    describe("test all properties of the Employee class", () => {
        it("testing the name property", () => {
            expect(employee.name).toEqual("Tina Belcher");
        })
        it("testing the id property", () => {
            expect(employee.id).toEqual("11");
        })
        it("testing the email property", () => {
            expect(employee.email).toEqual("jerichorules@email.com");
        })
    })
    describe("test all methods of the Employee class", () => {
        it("testing the name method", () => {
            expect(employee.getName()).toEqual("Tina Belcher");
        })
        it("testing the id method", () => {
            expect(employee.getId()).toEqual("11");
        })
        it("testing the email method", () => {
            expect(employee.getEmail()).toEqual("jerichorules@email.com");
        })
        it("testing the role method", () => {
            expect(employee.getRole()).toEqual("Employee");
        })
    })
})
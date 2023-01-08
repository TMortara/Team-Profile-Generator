const Manager = require("../lib/Manager");
const manager = new Manager("Linda Belcher", "45", "genesmom@email.com", "33C");

describe("Manager", () => {
    describe("test all properties of the Manager class", () => {
        it("testing the name property", () => {
            expect(manager.name).toEqual("Linda Belcher");
        })
        it("testing the id property", () => {
            expect(manager.id).toEqual("45");
        })
        it("testing the email property", () => {
            expect(manager.email).toEqual("genesmom@email.com");
        })
    })
    describe("test all methods of the Manager class", () => {
        it("testing the role method", () => {
            expect(manager.getRole()).toEqual("Manager");
        })
    })
})
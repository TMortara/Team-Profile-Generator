const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Louise Belcher", "09", "kuchikopi@email.com", "LBelcher");

describe("Engineer", () => {
    describe("test all properties of the Engineer class", () => {
        it("testing the name property", () => {
            expect(engineer.name).toEqual("Louise Belcher");
        })
        it("testing the id property", () => {
            expect(engineer.id).toEqual("09");
        })
        it("testing the email property", () => {
            expect(engineer.email).toEqual("kuchikopi@email.com");
        })
    })
    describe("test all methods of the Engineer class", () => {
        it("testing the GitHub method", () => {
            expect(engineer.getGithub()).toEqual("LBelcher");
        })
        it("testing the role method", () => {
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})
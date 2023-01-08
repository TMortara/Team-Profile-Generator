const Intern = require("../lib/Intern");
const intern = new Intern("Gene Belcher", "10", "beatsmaster@email.com", "School of Rock");

describe("Intern", () => {
    describe("test all properties of the Intern class", () => {
        it("testing the name property", () => {
            expect(intern.name).toEqual("Gene Belcher");
        })
        it("testing the id property", () => {
            expect(intern.id).toEqual("10");
        })
        it("testing the email property", () => {
            expect(intern.email).toEqual("beatsmaster@email.com");
        })
    })
    describe("test all methods of the Intern class", () => {
        it("testing the school method", () => {
            expect(intern.getSchool()).toEqual("School of Rock");
        })
        it("testing the role method", () => {
            expect(intern.getRole()).toEqual("Intern");
        })
    })
})
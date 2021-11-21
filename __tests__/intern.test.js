const Intern = require('../classes/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should initiate an object", () => {
            const obj = new Intern();
          
            expect(typeof(obj)).toEqual("object");
        });
    });
  
    describe("School", () => {
        it("should create new School", () => {
          const obj = new Intern("Yasmin", 10, "Yasmin@mail.com", "UW");
          expect(obj.school).toEqual("UW");
        });
      });
      
    describe("getSchool", () => {
        it("can return school by getSchool method", () => {
          const obj = new Intern("Yasmin", 10, "Yasmin@mail.com", "UW");
          expect(obj.getSchool()).toEqual("UW");
        });
      });
   
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Intern";
          const obj = new Intern("Yasmin", 10, "Yasmin@mail.com", "UW");
          expect(obj.getRole()).toEqual(role);
        });
      });
});
const Manager = require('../classes/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        
        it("should initiate an object", () => {
            const obj = new Manager();
           
            expect(typeof(obj)).toEqual("object");
        });
    });

    describe("officeNumber", () => {
        it("should create new officeNumber", () => {
          const obj = new Manager("Ayada", 1, "Ayada@mail.com", 2);
          expect(obj.officeNumber).toEqual(2);
        });
      });
       
    describe("getOfficeNumber", () => {
        it("can return school by getOfficeNumber method", () => {
          const obj = new Manager("Ayada", 1, "Ayada@mail.com", 2);
          expect(obj.getOfficeNumber()).toEqual(2);
        });
      });
    
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Manager";
          const obj = new Manager("Ayada", 1, "Ayada@mail.com", 2);
          expect(obj.getRole()).toEqual(role);
        });
      });
});
const Employee = require('../classes/employee');

describe("Employee", () => {
    describe("Initialization", () => {
      
      it("should initiate an object", () => {
        const obj = new Employee();
      
        expect(typeof(obj)).toEqual("object");
      });
    });

  
    describe("Name", () => {
      it("should create new name", () => {
        const obj = new Employee("Naseema",12);
        expect(obj.name).toEqual("Naseema");
      });
    });
    
    describe("Id", () => {
      it("should create new id", () => {
        const obj = new Employee("Naseema", 12);
        expect(obj.id).toEqual(12);
      });
    });
   
    describe("Email", () => {
      it("should create new Email", () => {
        const obj = new Employee(12,"Naseema", "Naseema.email@email");
        expect(obj.email).toEqual("Naseema.email@email");
      });
    });
  
    describe("getName", () => {
      it("can return name by getName method", () => {
        const obj = new Employee("Naseema", 12);
        expect(obj.getName()).toEqual("Naseema");
      });
    });
  
    describe("getId", () => {
      it("can return id by getId method", () => {
        const obj = new Employee("Naseema", 12);
        expect(obj.getId()).toEqual(12);
      });
    });
   
    describe("getEmail", () => {
      it("can return email by getEmail method", () => {
        const obj = new Employee("Naseema", 12, "Naseema.email@email");
        expect(obj.getEmail()).toEqual("Naseema.email@email");
      });
    });

    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Employee";
        const obj = new Employee("Naseema", 12, "Naseema.email@email");
        expect(obj.getRole()).toEqual(role);
      });
    });
});
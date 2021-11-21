const Engineer= require('../classes/Engineer');

describe("Engineer",()=>{
    describe("Initialization",()=>{
        it("should initiate an object",()=>{
            const obj= new Engineer();
            expect(typeof(obj)).toEqual("object");
        });
    });

    describe("Github",()=>{
        it("should create new github",()=>{
            const obj=new Engineer("Fatima", 12, "fatima@hotmail.com","fatimafzb");
            expect(obj.github).toEqual("fatimafzb")
        });
    });
    describe("Github",()=>{
        it("can return github username by getGithub method", ()=>{
            const obj= new Engineer("Fatima", 12, "fatima@hotmail.com","fatimafzb");
            expect(obj.getGithub()).toEqual("fatimafzb");
        });
    });
    describe("getGithub",()=>{
        it("can return github username bet getGithub method",()=>{
            const obj= new Engineer("Fatima", 12, "fatima@hotmail.com","fatimafzb");
            expect(obj.getGithub()).toEqual("fatimafzb");
    
        });
    });
    describe("getRole",()=>{
        it("can return role by getRole methose",()=>{
            const role="Engineer";
            const obj= new Engineer("Fatima", 12, "fatima@hotmail.com","fatimafzb");
            expect(obj.getRole()).toEqual(role);
        })
    })
})
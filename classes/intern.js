const Employee = require('./employee')
class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email)
        this.school= school
        this.role='Intern'
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}
//var tom = new Intern(1, 'Tom','t@t.com', 'UW')
//nsole.log('tom!',tom)

module.exports=Intern;

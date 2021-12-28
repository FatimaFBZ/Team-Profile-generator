const generateHtml = require('./generateHtml')
const fs = require('fs');
const inquirer = require('inquirer')
const Intern=require('./classes/intern')
const Employee = require('./classes/employee')
const Manager= require('./classes/Manager')
const Engineer= require('./classes/Engineer')

const managers = [];
const engineers = [];
const interns = [];

const TeamMember = () => {
    inquirer
        .prompt ([
            {
                type: 'confirm',
                name: 'TeamMember',
                message: 'Would you like to add another team member?',
            },
        ])
        .then((answers) => {
            if(answers.TeamMember === true) {
                question1();
            } else {
              
                var html= generateHtml(managers, engineers, interns);
                console.log(html)
                fs.writeFileSync("newHtml.html",html,'utf-8')

                //return answers;
            }
        });
};

const question1 = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role',
                message: 'What is employees role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then((answers) => {
            if (answers.role === 'Manager') {
                managerQuestions();
            } else if (answers.role === 'Engineer') {
                engineerQuestions();
            } else if (answers.role === 'Intern') {
                internQuestions();
            }
        });
};
question1();


/*function managerQ(){
    inquirer.prompt([
        
        {
            name: 'type',
            type: 'list',
            message: 'what is your employee type!?',
            choices: ['Intern','Engineer']
        },
       
        {
            type: 'input',
            name: 'School',
            message: 'what is your school!',
            when: function(answers){
                return answers.type ==='Intern';
            }
        },
        {
            type:'input',
            name:'Github',
            message: 'what is your Github?',
            when: function(answers){
                return answers.type=== 'Engineer'

            },
        }
    
    ]).then(function(answers){
    console.log('answers', answers)
   
    //var intern= new Intern(answers.id, answers.firstName, answers.email, answers.school)
    //console.log('New class just made',intern)
    //team.push(intern)
    })

}
managerQ()
*/
function employeeType(){
    //ask name , id, email
    //what the employee type?intern or engineer
    //if the answer was intern? do what was school 
    //if engineer ?do what is your github


    //in the .then fire of addAnother()
}
function addAnother(){
    inquirer.prompt([
        {
            name: 'addAnother',
            type: 'confirm',
            message: 'would you like to add more employees?'
        },
    ]).then(function(answer){
        if(answer.addAnother===true){
            employeeType()

        }else{
            console.log('Time to start HTML')
        }

    })
}
const managerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers office number?',
            },
        ])
        .then((answers) => {
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber,
            );
            managers.push(newManager);
           TeamMember();
        });
};

const engineerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is engineers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is engineers id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is engineers email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is engineers github username ?',
            },
        ])
        .then((answers) => {
            const newEngineer = new Engineer (
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            engineers.push(newEngineer);
            
          TeamMember();
        });
};

const internQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the interns name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school did the intern attend?',
            },
        ])
        .then((answers) => {
            const newIntern = new Intern (
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            );
            interns.push(newIntern);
            TeamMember();
        });
};
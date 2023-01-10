const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { inherits } = require('util');
const newHTML = require('./src/createHTML.js');

const listOfEmployee = [];

function createInput() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'manager_Name',
                message: 'What is the name of the Manager?',
                validate: entry => {
                    if(entry === 0) {
                        console.log("Please enter the name of the Manager.")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'manager_ID',
                message: "What is the Manager's ID?",
                validate: entry => {
                    if(entry === 0) {
                        console.log("Please enter the Manager's ID.")
                        return false;
                    }else if(isNaN(entry) === true){
                        console.log("Please enter a number value of ID.")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'manager_Email',
                message: "What is the Manager's Email?",
                validate: entry => {
                    if(entry === 0) {
                        console.log("Email is required!")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'office_Number',
                message: "What is the Manager's Office Number?",
                validate: entry => {
                    if(entry === 0) {
                        console.log("Office Number is required!")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
        ])
        .then((output) => {
            const newManager = new Manager(
                output.manager_Name,
                output.manager_ID,
                output.manager_Email,
                output.office_Number
            );
            listOfEmployee.push(newManager);
            console.log(listOfEmployee)
            console.log(newManager)
            console.log(newManager.getName())
            newEmployee();
        })
}
function newEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineer_Name',
                message: "What is the name of the Engineer?",
                validate: entry => {
                    if(entry === 0) {
                        console.log("Name is required!")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineer_ID',
                message: "What is the Engineer's ID?",
                validate: entry => {
                    if(entry === 0) {
                        console.log("Please enter the Engineer's ID.")
                        return false;
                    }else if(isNaN(entry) === true){
                        console.log("Please enter a number value of ID.")
                        return false;
                    }else {
                        return true;
                    }
                }
                
            },
            {
                type: 'input',
                name: 'engineer_Email',
                message: "What is the Engineer's Email?",
                validate: entry =>{
                    if(entry === 0) {
                        console.log("Email is required!")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineer_gitHub',
                message: "What is the Engineer's GitHub Username?",
                validate: entry =>{
                    if(entry === 0) {
                        console.log("GitHub Username is required!")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
    ])
    .then((output) => {
        const newEngineer = new Engineer(
            output.engineer_Name,
            output.engineer_ID,
            output.engineer_Email,
            output.engineer_gitHub,
        )
        listOfEmployee.push(newEngineer);
        console.log(listOfEmployee)
        newEmployee();
    })
}

function newIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'intern_Name',
                message: "What is the name of the Intern?",
                validate: entry => {
                    if(entry === 0) {
                        console.log("Name is required!")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'intern_ID',
                message: "What is the Intern's ID?",
                validate: entry => {
                    if(entry === 0) {
                        console.log("Please enter the Intern's ID.")
                        return false;
                    }else if(isNaN(entry) === true){
                        console.log("Please enter a number value of ID.")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'intern_Email',
                massage: "What is the Intern's Email?",
                validate: entry =>{
                    if(entry === 0) {
                        console.log("Email is required!")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'intern_School',
                message: "What is the name of the Intern's School?",
                validate: entry =>{
                    if(entry === 0) {
                        console.log("School Name is required!")
                        return false;
                    }else {
                        return true;
                    }
                }
            },
        ])
        .then((output) => {
            const newIntern = new Intern(
                output.intern_Name,
                output.intern_ID,
                output.intern_Email,
                output.intern_School
            )
            listOfEmployee.push(newIntern)
            console.log(listOfEmployee)
            newEmployee();
        })
}

function newEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'new_Role',
                message: "What is the role of your new team member?",
                choices: ["Engineer", "Intern", "Finish Building My Team"]
            },
        ])
        .then((output) => {
            switch(output.new_Role) {
                case "Engineer":
                    newEngineer();
                    break;
                case "Intern":
                    newIntern();
                    break;
                case "Finish Building My Team":
                    init();
                    break;
            }
        });
}
function generate(output) {
    fs.writeFile('./dist/index.html', output.join(''), err => {
        if(err) {
            console.log(err);
    return;
}else {
    console.log('Success!')
}
})
}

function init() {
    console.log(listOfEmployee)
    inquirer
    .prompt([
            {
                type: 'list',
                name: 'final',
                message: 'Please confirm your Team Members:',
                choices: ["Confirm", "Add More", "Delete Member"]
            },
        ])
        .then((output) => {
            switch(output.final) {
                case "Confirm":
                    generate(createHTML(listOfEmployee))
                    break;
                case "Add More":
                    newEmployee();
                    break;
                case "Delete Member":
                    deleteEmployee();
                    break;
                }
            })
    }
    

function createHTML(listOfEmployee) {
    const pageContent = [];
const HTMLheader =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.15.20/dist/css/uikit.min.css" />
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body>
    <nav class="uk-navbar-container uk-width-expand" uk-navbar="align: center">
        <div class="uk-navbar-center">
    
            <ul class="uk-navbar-nav uk-text-bold">
                <li>
                    <a class="uk-text-bold" href="#">Team Profile</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Team Profile</a></li>
                            <li class="uk-nav-header">cards</li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#">Manager</a></li>
                            <li><a href="#">Engineer</a></li>
                            <li><a href="#">Intern</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    </head>
    <div class="uk-container uk-container-expand uk-padding-large uk-flex uk-flex-around uk-flex-center uk-flex-wrap-reverse" uk-container="align: center">
    <!-- ADD EMPLOYEE CARDS HERE -->
    ` 
pageContent.push(HTMLheader)
    //Manager
    const managerCard = 
    `
    <div class="uk-card uk-card-default uk-width-1-5@m uk-height-large uk-margin-small-top">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">${Manager.name}</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time> &#9819; Manager</time></p>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>ID: ${Manager.ID}</p>
        <hr class="uk-divider-icon">
        <p>Email: ${Manager.email}</p>
        <hr class="uk-divider-icon">
        <p>Office Number: ${Manager.officeNum}</p>
        <hr class="uk-divider-icon">
        </div>
</div>
`
// Engineer Card
const engineerCard = 
`
<div class="uk-card uk-card-default uk-width-1-5@m uk-height-large uk-margin-small-top">
<div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">${Engineer.name}</h3>
            <p class="uk-text-meta uk-margin-remove-top"><time> &#9816; Engineer</time></p>
        </div>
    </div>
</div>
<div class="uk-card-body">
    <p>ID: ${Engineer.ID}</p>
    <hr class="uk-divider-icon">
    <p>Email: ${Engineer.email}</p>
    <hr class="uk-divider-icon">
    <p>GitHub: ${Engineer.gitHub}</p>
    <hr class="uk-divider-icon">
</div>
</div>
`
// Intern Card
const internCard =
`
<div class="uk-card uk-card-default uk-width-1-5@m uk-height-large uk-margin-small-top">
<div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">${Intern.name}</h3>
            <p class="uk-text-meta uk-margin-remove-top"><time> &#9817; Intern </time></p>
        </div>
    </div>
</div>
<div class="uk-card-body">
    <p>ID: ${Intern.ID}</p>
    <hr class="uk-divider-icon">
    <p>Email: ${Intern.email}</p>
    <hr class="uk-divider-icon">
    <p>School: ${Intern.school}</p>
    <hr class="uk-divider-icon">
</div>
</div>
`
const closer = 
    `
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.15.20/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.15.20/dist/js/uikit-icons.min.js"></script>
</html>
`
for(i = 0; i < listOfEmployee.length; i++){
    switch(listOfEmployee[i].role){ 
        case "Manager":
            pageContent.push(managerCard)
            break;
        case "Engineer":
            pageContent.push(engineerCard)
            break;
        case "Intern":
            pageContent.push(internCard)
            break;
    }
}
pageContent.push(closer)
return pageContent
}
createInput();
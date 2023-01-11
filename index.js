const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { inherits } = require('util');

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
                message: "What is the Intern's Email?",
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
                choices: ["Confirm", "Add More"]
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
                }
            })
    }
    
// Creating the HTML PAGE
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
// Closer
const closer = 
    `
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.15.20/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.15.20/dist/js/uikit-icons.min.js"></script>
</html>
`
// We loop through our array and add each employee card
for(i = 0; i < listOfEmployee.length; i++){
    switch(listOfEmployee[i].role){ 
        case "Manager":
            pageContent.push(
            `
            <div class="uk-card uk-card-default uk-width-1-5@m uk-height-large uk-margin-small-top">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${listOfEmployee[i].name}</h3>
                        <p class="uk-text-meta uk-margin-remove-top"><time> &#9819; Manager</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body uk-text-break">
                <p>ID: ${listOfEmployee[i].ID}</p>
                <hr class="uk-divider-icon">
                <p>Email: <a href="mailto: ${listOfEmployee[i].email}">${listOfEmployee[i].email}</a></p>
                <hr class="uk-divider-icon">
                <p>Office Number: ${listOfEmployee[i].officeNum}</p>
                <hr class="uk-divider-icon">
                </div>
        </div>
        `)
            break;
        case "Engineer":
            pageContent.push(
                `
                <div class="uk-card uk-card-default uk-width-1-5@m uk-height-large uk-margin-small-top">
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom">${listOfEmployee[i].name}</h3>
                            <p class="uk-text-meta uk-margin-remove-top"><time> &#9816; Engineer</time></p>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body uk-text-break">
                    <p>ID: ${listOfEmployee[i].ID}</p>
                    <hr class="uk-divider-icon">
                    <p>Email: <a href="mailto: ${listOfEmployee[i].email}">${listOfEmployee[i].email}</a></p>
                    <hr class="uk-divider-icon">
                    <p>GitHub: <a href="https://github.com/${listOfEmployee[i].gitHub}" target="_blank">${listOfEmployee[i].gitHub}</a></p>
                    <hr class="uk-divider-icon">
                </div>
                </div>
                `
                )
            break;
        case "Intern":
            pageContent.push(
                `
                <div class="uk-card uk-card-default uk-width-1-5@m uk-height-large uk-margin-small-top">
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom">${listOfEmployee[i].name}</h3>
                            <p class="uk-text-meta uk-margin-remove-top"><time> &#9817; Intern </time></p>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body uk-text-break">
                    <p>ID: ${listOfEmployee[i].ID}</p>
                    <hr class="uk-divider-icon">
                    <p>Email: <a href="mailto: ${listOfEmployee[i].email}">${listOfEmployee[i].email}</a></p>
                    <hr class="uk-divider-icon">
                    <p>School: ${listOfEmployee[i].school}</p>
                    <hr class="uk-divider-icon">
                </div>
                </div>
                `
            )
            break;
    }
}
pageContent.push(closer)
return pageContent
}
createInput();
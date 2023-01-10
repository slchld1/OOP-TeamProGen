const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { inherits } = require('util');
// const newHTML = require('./src/newHTML.js');

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


createInput();
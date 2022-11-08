const fs = require('fs');
const { info } = require('console');
const inquirer = require('inquirer');
const Manager = require(`./lib/Manager`);
const Intern = require(`./lib/Intern`);
const Engineer = require(`./lib/Engineer`);

let mInput;

const managerQ=[
    {type: `input`,name:`name`,message:`employee name?`,},
    {type: `input`,name:`employeeID`,message:`employee ID?`,},
    {type: `input`,name:`emailAddress`,message:`email address?`,},
    {type: `input`,name:`officeNumber`,message:`office number?`,}
]
const internQ=[
    {type: `input`,name:`name`,message:`employee name?`,},
    {type: `input`,name:`employeeID`,message:`employee ID?`,},
    {type: `input`,name:`emailAddress`,message:`email address?`,},
    {type: `input`,name:`school`,message:`where do they go to school?`,}
]
const engineerQ=[
    {type: `input`,name:`name`,message:`employee name?`,},
    {type: `input`,name:`employeeID`,message:`employee ID?`,},
    {type: `input`,name:`emailAddress`,message:`email address?`,},
    {type: `input`,name:`github`,message:`what is their github?`,}
]

function writeToFile(printMe) {
    fs.writeFile('./public/index.html', printMe, (err) =>
        err ? console.error(err) : console.log('Commit logged!'));
}

function write() {
    writeToFile(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title></title>
        </head>
        <body>
            <main>
                <div>
                    <h1>${mInput.name}</h1>
                    <li>${mInput.id}</li>
                    <li>${mInput.email}</li>
                    <li>${mInput.officeNum}</li>
                </div>
            </main>  
        </body>
        </html>
        `);
}
async function init() {
    const managerInput = await askManager();
    mInput = new Manager(managerInput.name,managerInput.employeeID,managerInput.emailAddress,managerInput.officeNumber);
    console.log(mInput)
    write()
}

async function askManager() {
    return inquirer.prompt(managerQ);
}


init();

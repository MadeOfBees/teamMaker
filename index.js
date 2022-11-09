const fs = require('fs');
const { info } = require('console');
const inquirer = require('inquirer');
const Manager = require(`./lib/Manager`);
const Intern = require(`./lib/Intern`);
const Engineer = require(`./lib/Engineer`);

let mInput;
const eInput = [];
const iInput = [];
let globFinalEng;
let globFinalInt;

// Questions we ask for the manager
const managerQ = [
    { type: `input`, name: `name`, message: `Name of Manager?`, },
    { type: `input`, name: `employeeID`, message: `Employee ID of Manager?`, },
    { type: `input`, name: `emailAddress`, message: `Email address of Manager?`, },
    { type: `input`, name: `officeNumber`, message: `Office number of Manager?`, }
]
// Questions we ask for the interns
const internQ = [
    { type: `input`, name: `name`, message: `employee name?`, },
    { type: `input`, name: `employeeID`, message: `employee ID?`, },
    { type: `input`, name: `emailAddress`, message: `email address?`, },
    { type: `input`, name: `school`, message: `where do they go to school?`, }
]
// Questions we ask for the engineers
const engineerQ = [
    { type: `input`, name: `name`, message: `employee name?`, },
    { type: `input`, name: `employeeID`, message: `employee ID?`, },
    { type: `input`, name: `emailAddress`, message: `email address?`, },
    { type: `input`, name: `github`, message: `what is their github?`, }
]

function writeToFile(printMe) {
    fs.writeFile('./public/index.html', printMe, (err) =>
        err ? console.error(err) : console.log('Commit logged!'));
}
function formEng() {
    let tReturn;
    for (let i = 0; i < eInput.length; i++) {
        const mReturn = `
        </div>
        <h1>${eInput[i].name}</h1>
        <li>${eInput[i].id}</li>
        <li><a href = "${eInput[i].email}">Send Email</a></li>
        <li><a href="url">https://github.com/${eInput[i].github}</a></li>
        </div>
        `
        if (tReturn) {
            tReturn = tReturn + mReturn;
        }else{
            tReturn = mReturn;
        }
    }
    globFinalEng = tReturn;
    return tReturn;
}
function formInt() {
    let tReturn;
    for (let i = 0; i < iInput.length; i++) {
        const mReturn = `
        </div>
        <h1>${iInput[i].name}</h1>
        <li>${iInput[i].id}</li>
        <li><a href = "${iInput[i].email}">Send Email</a></li>
        <li>${iInput[i].school}</li>
        </div>
        `
        if (tReturn) {
            tReturn = tReturn + mReturn;
        }else{
            tReturn = mReturn;
        }
    }
    globFinalInt = tReturn;
    return tReturn;
}

async function write() {
    formEng()
    formInt()
    console.log(globFinalEng)
    console.log(globFinalInt)
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
                    <li><a href = "${mInput.email}">Send Email</a></li>
                    <li>${mInput.officeNum}</li>
                </div>
                ${globFinalEng}
                ${globFinalInt}
            </main>  
        </body>
        </html>
        `);
}

async function init() {
    const managerInput = await askManager();
    mInput = new Manager(managerInput.name, managerInput.employeeID, managerInput.emailAddress, managerInput.officeNumber);
    engNum = await howManyEngie();
    for (let i = 0; i < engNum.numOf; i++) {
        const engineerInput = await aksEngie();
        eInput[i] = new Engineer(engineerInput.name, engineerInput.employeeID, engineerInput.emailAddress, engineerInput.github);
    }
    intNum = await howManyIntern();
    for (let i = 0; i < intNum.numOf; i++) {
        const internInput = await askIntern();
        iInput[i] = new Intern(internInput.name, internInput.employeeID, internInput.emailAddress, internInput.school);
    }
    write()
}

async function askManager() {
    return inquirer.prompt(managerQ);
}

async function aksEngie() {
    return inquirer.prompt(engineerQ);
}

async function askIntern() {
    return inquirer.prompt(internQ);
}

async function howManyIntern() {
    return inquirer.prompt(
        [{ type: `input`, name: `numOf`, message: `How many Interns do you want to add?`, }]
    );
}

async function howManyEngie() {
    return inquirer.prompt(
        [{ type: `input`, name: `numOf`, message: `How many Engineers do you want to add?`, }]
    );
}

init();

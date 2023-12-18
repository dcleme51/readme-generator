const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of you project?",

    },
    {
    type: "input",
    name: "description",
    message: "Describe your project in summary",
    },
    
    {
        type: "list",
        name: "licence",
        message: "Please select your chosen licence",
        choices: ["MIT", "Apache", "No Licence"],
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error, data){
        error ? console.log(error): console.log("readMe Generatered")
    })
}

// function to initialize program
async function init() {
    const anwsers = await inquirer.prompt(questions);
    // console.log(anwsers)
    writeToFile("README.md", generateMarkdown(anwsers));
}

// function call to initialize program
init();

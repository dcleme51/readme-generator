const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { isGeneratorFunction } = require("util/types");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",

    },
    {
        type: "input",
        name: "description",
        message: "Describe your project in summary",
    },

    {
        type: "input",
        name: "installation",
        message: "Please provide Installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information",
    },
    {
        type: "list",
        name: "licence",
        message: "Please select your chosen licence",
        choices: ["MIT", "Apache", "No Licence", "Other"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide who contributed in the project",
    },
    {
        type: "input",
        name: "tests",
        message: "What tests were conducted?",
    },


];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

function init (){
inquirer.prompt(questions).then((answers) => {
    console.log("Generating...")
    writeToFile("README.md", generateMarkdown({...answers}));
} ) 

}


// function call to initialize program
init();

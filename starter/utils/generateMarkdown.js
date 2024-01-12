// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.projectTitle}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Licence
${data.licence}
## Contributing
${data.contributing}
## Test's
${data.tests}
`;
};


module.exports = generateMarkdown;

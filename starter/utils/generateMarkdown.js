// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## description
${data.description}
`;
}

module.exports = generateMarkdown;

// badge function
function badge(license){
    return `![Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
  }

// function to generate markdown for README
  function generateMD(data) {
    return `
# ${data.title}
# Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#liscense)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}
    
## License
The application is covered under the ${data.license} license.
${badge(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
**Github Username: ${data.username}
**Github Profile: www.github.com/${data.profile}
**Email Address: ${data.email}
`;

}
  
// Export Markdown File
module.exports = generateMD;
// badge function
function badge(data){
    return `[![license](https://img.shields.io/badge/license-${data.license.link}-${data.license.color}.svg)](${data.license.url})`
  }

// function to generate markdown for README
  function generateMD(data) {
    return `

${badge(data)}
# ${data.title}
# Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}
    
## License
${data.title} is covered under the ${data.license.name} license.

## Contribution
${data.contribution}

## Tests

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the application, please contact me directly @ ${data.email}.

You can also visit my pages below!!

** Github Username: ${data.username}

** Github Profile: www.github.com/${data.username}
`;
}
  
// Export Markdown File
module.exports = generateMD;
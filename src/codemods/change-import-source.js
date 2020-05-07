const path = require('path');

module.exports.filename = () => path.join(require.resolve('codemods-hello-world'), '../codemods/change-import-source.js');

module.exports.title = "Change import source";

module.exports.description = "Change the source of an import statement.";

module.exports.questions = () => [
    {
        name: 'from', // note that this matches the 'from' option in the codemod implementation
        type: 'input',
        message: 'What import source do you want to change',
    },
    {
        name: 'to', // note that this matches the 'to' option in the codemod implementation
        type: 'input',
        message: 'What do you want to change your import source to?',
    }
];

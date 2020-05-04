
/* The codemod implementation - this is what jscodeshift cares about: */

module.exports = (fileInfo, api, options) => {
    return api.jscodeshift(fileInfo.source)
        .findVariableDeclarators(options.from)
        .renameTo(options.to)
        .toSource();
};

/* The codemod description - this is what Modster cares about: */

module.exports.filename = () => __filename;

module.exports.title = "Rename variables";

module.exports.description = "The title says it all, really.";

module.exports.questions = () => [
    {
        name: 'from', // note that this matches the 'from' option in the codemod implementation
        type: 'input',
        message: 'What variable name do you want to change?',
    },
    {
        name: 'to', // note that this matches the 'to' option in the codemod implementation
        type: 'input',
        message: 'What do you want to change your variable name to?',
    }
];

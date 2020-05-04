const renameVariable = require('./codemods/rename-variable');

module.exports = {
    title: "Hello world!",
    codemods: {
        'rename-variable': renameVariable,
    }
};

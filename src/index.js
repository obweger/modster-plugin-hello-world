const renameVariable = require('./codemods/rename-variable');
const changeImportSource = require('./codemods/change-import-source');

module.exports = {
    title: "Hello world!",
    codemods: {
        'rename-variable': renameVariable,
        'change-import-source': changeImportSource,
    }
};

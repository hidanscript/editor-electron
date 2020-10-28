//requiring path and fs modules
const fs = require('fs');
const directoryPath = "./test/";

function getDirFiles () {
  fs.readdir(directoryPath, function (err, files) {
    return err ? err : files;
  });
}

module.exports = getDirFiles;

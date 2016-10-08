var fs = require('fs');
var path = require('path');
var folderPath = path.resolve(__dirname, '../node_modules');

function cleanup() {
  fs.stat(folderPath, function (err, stats) {
    if (err || !stats.isDirectory()) { return; }
    var rimraf = null;
    try {
      require('rimraf')(folderPath, function (e) { 
        if (e) { throw e; }
      });
    } catch (e) {
      console.error("Please run 'npm install rimraf'.")
    }
  });
}
cleanup();

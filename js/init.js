var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var ext = process.argv[3];

function readDirDone(err, list){
  list.forEach(function(fileName){
    if ( path.extname(fileName) === '.' + ext ) {
      console.log(fileName);
    }
  });
}

fs.readdir(dirPath, readDirDone);

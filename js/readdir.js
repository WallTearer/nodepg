var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback) {
  
  fs.readdir(dirName, function readDirDone(err, list){
    if ( err ) {
      return callback(err);
    }

    var files = list.filter(function(fileName){
      return ( path.extname(fileName) === '.' + fileExt );
    });
    
    return callback(err, files);
  });
  
};



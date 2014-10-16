var readDir = require('./readdir.js');

var dirPath = process.argv[2];
var ext = process.argv[3];

readDir(dirPath, ext, function(err, files){
  if ( err ) 
    return console.error('error happened:', err);
    
  files.forEach(function(fileName){
    console.log(fileName);
  });
});






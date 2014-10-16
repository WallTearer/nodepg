var fs = require('fs');

var filePath = process.argv[2];
fs.readFile(filePath, 'utf8', function fileReadDone(err, contents){
  if ( err ) {
    console.log('error: failed to read the file. ', err);
  }
  console.log(contents.split('\n').length-1);
});


var fs = require('fs');

var filePath = process.argv[2];
var buffer = fs.readFileSync(filePath);
var contents = buffer.toString();

console.log(contents.split('\n').length-1);
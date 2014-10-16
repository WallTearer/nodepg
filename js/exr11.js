var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function(req, res){
  res.writeHead(200, {'content-type':'text/plain'});
  
  var stream = fs.createReadStream(fileLocation);
  stream.pipe(res);
  stream.on('end', function() { 
    res.end(); 
  });
});
server.listen(port);

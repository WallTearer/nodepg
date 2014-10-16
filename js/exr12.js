var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(req, res){
  if ( req.method !== 'POST' ) {
    res.writeHead(405, {'content-type':'text/plain'});
    return res.end('Only POST requests allowed');
  }
  
  req.pipe(map(function(chunk){ 
    return chunk.toString().toUpperCase(); 
  })).pipe(res);
});
server.listen(port);
var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){
  if ( req.method !== 'GET' ) {
    return res.end('Only GET requests are processed');
  }
  
  var urlData = url.parse(req.url, true);
  
  switch ( urlData.pathname ) {
    case '/api/parsetime':
      var isoDate = new Date(urlData.query['iso']);
      var data = {
	hour: isoDate.getHours(),
	minute: isoDate.getMinutes(),
	second: isoDate.getSeconds()
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(data));
    case '/api/unixtime':
      var isoDate = new Date(urlData.query['iso']);
      var data = {
	unixtime: isoDate.getTime()
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(data));
    default:
      res.writeHead(404, {'content-type':'text/plain'});
      return res.end();
  }  
});
server.listen(port);

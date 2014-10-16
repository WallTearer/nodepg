var http = require('http');
var url = require('url');

var parsedUrl = url.parse(process.argv[2]);

var options = {
  hostname: parsedUrl.hostname,
  port: parsedUrl.port,
  path: '/',
  method: 'GET'
};

var responseData = '';

var req = http.request(options, function(res){
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    responseData += chunk;
  });
  res.on('end', function(){
    console.log(responseData.length);
    console.log(responseData);
  });
});

req.on('error', function(err){
  console.log('error for url ' + process.argv[2] + ' :', err);
});

req.end();
var http = require('http');
var bl = require('bl');

var urls = [];
var urlsData = {};
var finishedUrls = 0;

for ( i=2; i<process.argv.length; i++ ) {
  urls.push(process.argv[i]);
}

urls.forEach(function(url, pos){
  http.get(url, function(response){

    response.pipe(bl(function(err, data){
      if ( err )
	return console.error(err);

      urlsData[pos] = data.toString();
      finishedUrls++;
      if ( finishedUrls === urls.length ) {
	for ( pos in urlsData ) {
	  console.log(urlsData[pos]);
	}
      }
    }));
    
  });
});

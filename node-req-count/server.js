

var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if ( request.method === 'POST' ) {
    //req.on('data')
    request.on( 'end', function( data ){
      //if no count set it at 1
      if( !globalCounter[endpoint] ) {
        globalCounter[endpoint] = 1;
      }else{
        //else increment ++
        globalCounter[endpoint] += 1;
        //res status & content type sent
        response.wiriteHead( '200', 'content-type':'application/json' ); //200 || 201 ?
        response.end();
        }    
  })
  } else if (request.method === 'GET') {
    //count exists ?
    if( globalCounter[endpoint] ) {
      response.wiriteHead( '201', 'content-type':'application/json' );
      //returns the globalCount obj as a str
      response.end( JSON.stringify( globalCounter[endpoint] ) );
    }else {
      response.end()
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

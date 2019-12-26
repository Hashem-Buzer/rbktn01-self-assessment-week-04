var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname; // path name (ex: /dogs)
  var property = endpoint.replace(/^\//, ''); // retrieves the first / or \ (ex: dogs)
  
  if (request.method === 'POST') {

    if ( !globalCounter[property] ){
      globalCounter[property] = 0; // Create the property with 0 if it doesnt exist in the globalCounter
    }
    globalCounter[property]++; // Increment counter for that specific property
    response.end('POST req sent'); // End the request (would work without it but the server will not notify you in that case)

  } else if (request.method === 'GET') {

    if ( !globalCounter[property] ){
      response.end(); // return empty response if the property doesn't exist
    } else {
      response.end(globalCounter[property].toString()); // return the value of the counter for the property if it exists
    }

  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

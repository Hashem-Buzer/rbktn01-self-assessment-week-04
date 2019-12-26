var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    if(globalCounter[property]){
      globalCounter++
      response.writeHead(201,{'Content-type':'application/JSON'});
      response.end(JSON.stringify());
    } else {
      globalCounter[property] === 0 ;
    }

  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    response.writeHead(200,{'Content-type':'application/JSON'} )
    response.end(JSON.parse())
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

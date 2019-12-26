var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    globalCounter.property = globalCounter.property || 0;
    globalCounter.property ++;
    response.statusCode = 200;
    response.end();

  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    var stringfy = JSON.stringify( globalCounter.property);
    response.statusCode = 200;
    response.end(stringfy);
   //response.end(globalCounter.property)

  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

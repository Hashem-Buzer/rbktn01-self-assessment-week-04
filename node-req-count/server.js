var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    globalCounter[property] = globalCounter[property] + 1 || 1;
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    if(request.url === undefined ) {
      response.statusCode = 404;
      response.end();
    }
    globalCounter[property] -= 1;
    return globalCounter[property] + 1;
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

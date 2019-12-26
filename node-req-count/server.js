var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};
globalCounter.dog = 1

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    response.statusCode = 201
    globalCounter.dog ++
    response.end()

  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    response.statusCode = 200
    response.end(globalCounter.dog)
    
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

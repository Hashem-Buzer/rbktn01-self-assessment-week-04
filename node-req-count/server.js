var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    if(globalCounter[request.url]) globalCounter[request.url]++
    else globalCounter[request.url] = 1
    response.end(JSON.stringify(globalCounter))
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    if(!globalCounter[request.url]) response.end()
    else response.end(JSON.stringify(globalCounter[request.url]))
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

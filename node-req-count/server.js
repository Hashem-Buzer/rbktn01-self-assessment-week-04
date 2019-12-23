var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {

};

var server = http.createServer(function (request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    if (globalCounter[endpoint] === undefined) {
      globalCounter[endpoint] = 1;
    }
    else globalCounter[endpoint]++
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    return globalCounter[endpoint];
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

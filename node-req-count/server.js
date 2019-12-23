var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function (request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  // Replaces any endpoint('/index) to ('index') it removes the forward slash
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    // Check if the property exists if it doesn't create it.
    if (!globalCounter[property]) {
      globalCounter[property] = 0;
    }
    // Increment the propertyerty
    globalCounter[property]++;
    // For test purposes
    console.log(globalCounter[property])

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end()
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    // For test purposes
    console.log(globalCounter[property])

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end()
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

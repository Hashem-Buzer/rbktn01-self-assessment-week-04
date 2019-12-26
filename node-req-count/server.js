var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {
    // YOUR CODE HERE
    if (globalCounter.dog === undefined) {
      globalCounter.dog = 1;
    } else {
      globalCounter.dog = globalCounter.dog + 1;
    }
    response.statusCode = 201;
    response.end();
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    response.write(globalCounter.dog);
    response.statusCode = 200;
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

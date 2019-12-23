var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {
    // YOUR CODE HERE
    if (!globalCounter[request.url.slice(1)]) {
      globalCounter[request.url.slice(1)] = 1;
    } else globalCounter[request.url.slice(1)]++;
    response.statusCode = 201;
    response.end();
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    response.statusCode = 200;
    response.end(JSON.stringify(globalCounter[request.url.slice(1)]));
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

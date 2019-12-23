var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function (request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    //check if the route exist in the global counter 
    //increment it by one
    //else initialize it
    if (globalCounter[property]) {
      globalCounter[property]++
    } else {
      globalCounter[property] = 1
    }
    response.statusCode = 201
    response.end()
  }
  //if the request is a get and the route exist in the global counter send the respone
  //else send an empty response and a 404 status code
  if (request.method === 'GET' && globalCounter[property]) {
    response.statusCode = 200
    response.end(JSON.stringify(globalCounter[property]))
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

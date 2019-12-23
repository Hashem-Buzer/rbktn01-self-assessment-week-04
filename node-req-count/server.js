var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};
var counter = 0;
var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    globalCounter[endpoint] = counter++;
    console.log(globalCounter[endpoint])
  } else if (request.method === 'GET') {
    // response.write(globalCounter[endpoint])
    console.log(globalCounter[endpoint])
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

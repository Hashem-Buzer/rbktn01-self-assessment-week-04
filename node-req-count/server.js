var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    if (globalCounter[request.url]) {
      globalCounter[request.url] = 1 + globalCounter[request.url];
    }else{
      globalCounter[request.url] = 1;
    }
    response.end('done');
  } else if (request.method === 'GET') {
    if (!globalCounter[request.url]) {
      response.end();
    }
    response.end(String(globalCounter[request.url]));
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

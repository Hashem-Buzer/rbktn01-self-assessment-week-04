var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    
    globalCounter[property] ++ ;
    response.end();
    
  } else if (request.method === 'GET') {
    
    var data = JSON.stringify(globalCounter[property])
    response.end();

  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;



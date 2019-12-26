var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};
globalCounter.dogs = 0;
globalCounter.cats = 0;

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if ((request.method === 'POST') && (request.url === "/dogs")) {
    globalCounter.dogs+= 1
    response.statusCode = 201;
    response.end();
    
    // YOUR CODE HERE
  } else if ((request.method === 'GET') && (request.url === "/dogs"))  {
    console.log(globalCounter.dogs)
    response.statusCode = 201;
    response.end();
    // YOUR CODE HERE
  } else if ((request.method === 'POST') && (request.url === "/cats")) {
    globalCounter.catss+= 1
    response.statusCode = 201;
    response.end();
    
    // YOUR CODE HERE
  }else if ((request.method === 'GET') && (request.url === "/cats"))  {
    console.log(globalCounter.catss)
    response.statusCode = 201;
    response.end();
    // YOUR CODE HERE
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

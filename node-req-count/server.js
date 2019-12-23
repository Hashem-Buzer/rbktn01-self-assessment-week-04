var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST' && property !== "") {
    if(!globalCounter[property]) {
      globalCounter[property] = 0;
    }
    globalCounter[property] += 1;

    console.log(globalCounter)

    response.writeHead(201);

    response.end();

  } else if (request.method === 'GET' && property !== "") {
    console.log(property)

    response.writeHead(200);
    if(!globalCounter[property]) {
      response.end();
    } else {
      response.end(globalCounter[property].toString());
    } 
  } else {
    response.writeHead(404);

    response.end();
  }
});

// Do not edit this line
module.exports = server;

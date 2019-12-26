var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

console.log('here');

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
  
  // this will work only if we add the dog or cat as a key in the object, i don't know how to make the key daynamic, not hard coded 
  if (request.method === 'POST') {
    if(globalCounter[count]) {
      globalCounter[count]++;
      response.end('done');
    } else {
      globalCounter[count] = 1;
      response.end('done');
    }

  } else if (request.method === 'GET') {
    if(globalCounter[count]) {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end( JSON.stringify(globalCounter[count]) );
    } else {
      response.writeHead(400, {'Content-Type': 'text/plain'});
      response.end();
    }

  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

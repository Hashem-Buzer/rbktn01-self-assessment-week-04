var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {
  dogs :0,
  cats:0
};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
      if(property === ("/dogs")){
        globalCounter.dogs++

      }
      if(property === ("/cats")){
        globalCounter.cats++
      }

  } else if (request.method === 'GET') {
    if(property === ("/dogs")){
      response.send(globalCounter.dogs)
    }
    if(property === ("/cats")){
      response.send(globalCounter.cats)
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    if(endpoint === '/dogs'){
      if(globalCounter.dogs)
      globalCounter.dogs++;
      else
      globalCounter.dogs=1;
    }else if(endpoint === '/cats'){
      if(globalCounter.cats)
      globalCounter.cats++;
      else
      globalCounter.cats=1;
    }
  } else if (request.method === 'GET') {
    if(endpoint === '/dogs'){
      if(globalCounter.dogs){
        res.write(globalCounter.dogs);
      }
      else{
        res.write('');
      }
      
    }else if(endpoint === '/cats'){
      if(globalCounter.cats){
        res.write(globalCounter.cats);
      }
      else{
        res.write('');
      }
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

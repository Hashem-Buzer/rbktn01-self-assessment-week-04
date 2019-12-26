var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    if(property.includes('dogs')){
      if(globalCounter.dogs===undefined){
        globalCounter.dogs = 1
        response.statusCode = 201;
        response.end();
      }else{
        globalCounter.dogs++
        response.statusCode = 201;
        response.end();
      }
    }else if(property.includes('cats')){
      if(globalCounter.cats===undefined){
        globalCounter.cats = 1
        response.statusCode = 201;
        response.end();
      }else{
        globalCounter.cats++
        response.statusCode = 201;
        response.end();
      }
    }else{
      response.statusCode = 404;
      response.end();
    }
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    if(property.includes('dogs')){
      
      response.statusCode = 200;
      response.end(globalCounter.dogs.toString());
    } else if(property.includes('cats')){
      
      response.statusCode = 200;
      response.end(globalCounter.cats.toString());
    }else{
      response.statusCode = 404;
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

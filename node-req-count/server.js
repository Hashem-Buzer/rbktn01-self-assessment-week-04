var url = require('url');
var http = require('http');
var path = require('path');
const jetpack = require('fs-jetpack');
const parseJson = require('parse-json')
var qs = require('qs');

var globalCounter = {};
var counter = 0;
var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
  //install and require a library fs-jetpack
  if (request.method === 'POST') {
    // jetpack write method will create a file and pass he data to it as a stringified json
    // jet pack.write globalCounter 
    // and will return
    globalCounter.dogs = ++counter;
    jetpack.write('counter.txt',qs.stringify(globalCounter))
    .then((data) => {
     console.log(data,"post");
     response.send(parsed.dogs)
     response.end();
   });
  } else if (request.method === 'GET') {
    jetpack.readAsync('counter.txt')
    .then((data) => {
      console.log(data,"get");
      var parsed = qs.parse(data);
      response.send(parsed.dogs)
      response.end();
    });
    
    
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

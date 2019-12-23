var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
  //   let parsedUrl = url.parse(request.url, true); 
  //   for(var i = 0;i<Object.keys(globalCounter).length;i++ ){
  //   if(globalCounter[Object.keys(parsedUrl.Object)[0]]){
  //     globalCounter[Object.keys(parsedUrl.query)[0]] = globalCounter[Object.keys(parsedUrl.query)[0]] + 1;
  //   }else{
  //   globalCounter[Object.keys(parsedUrl.query)[0]] = parsedUrl.query[0]
  //   globalCounter[Object.keys(parsedUrl.query)[0]] = 1
  //   }
  // }
  //   console.log(globalCounter)
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

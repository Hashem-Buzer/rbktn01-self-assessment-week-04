var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
  var data = "";
 
  //console.log(endpoint, property)
  if (request.method === 'POST') {
    //response.writeHead(201 , {"Content-Type" : "text/plain"})
    if(globalCounter[property]){
      globalCounter[property]++;
      response.end()
    }
    
    else {
      globalCounter[property] = 1;
      response.end();
    }
   // console.log(globalCounter[property])
    
  } else if (request.method === 'GET') {
      if(globalCounter[property]){
        response.writeHead(200 , {"Content-Type" : "text/plain"})
        response.end(JSON.stringify(globalCounter[property]))
    }
    
    else {
      response.writeHead(404 ,{"Content-Type" : "text/plain"} )
      response.end(" 404 !! ERROR");
    }
    
  }
});

// Do not edit this line
module.exports = server;

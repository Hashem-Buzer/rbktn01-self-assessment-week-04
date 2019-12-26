var url = require('url');
var http = require('http');
var path = require('path');
const express = require('express');
const test = express();
var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
  console.log(endpoint);
  if (request.method === 'POST') {

     test.post(request.url, (req,res)=>{
       var reslut = globalCounter.req.url.pathname() = 1;
       res.send(result);
     })
    // YOUR CODE HERE
  } else if (request.method === 'GET') {
    test.get(request.url, (req,res)=>{
       res.send(globalCounter);
    })
    // YOUR CODE HERE
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

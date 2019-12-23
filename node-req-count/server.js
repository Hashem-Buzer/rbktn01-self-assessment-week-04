var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {
};

var server = http.createServer(function (request, response) {
  var endpoint = url.parse(request.url, true).pathname;

  if (request.method === 'POST') {
    if (request.url === '/dogs') {
      globalCounter.dogs += 1;
      response.statusCode = 201;
      response.end('done')
    }

  } else if (request.method === 'GET') {

    if (request.url === '/dogs') {
      response.writeHead(200)
      response.end(` counter  ${globalCounter.dogs}`)
    }
    ///////cat
    if (request.method === 'POST') {
      if (request.url === '/cats') {
        globalCounter.cats += 1;
        response.statusCode = 201;
        response.end('done')
      }

    } else if (request.method === 'GET') {

      if (request.url === '/cats') {
        response.writeHead(200)
        response.end(`cats counter  ${globalCounter.cats}`)

      } else {
        response.statusCode = 404;
        response.end();
      }
    });

// Do not edit this line
module.exports = server;

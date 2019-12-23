var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
    var endpoint = url.parse(request.url, true).pathname;
    var property = endpoint.replace(/^\//, '');

    if (request.method === 'POST') {
        // response.
    } else if (request.method === 'GET') {
        request.end(globalCounter[property]); // this will git the last globalecounter.dog or ..
    } else {
        response.statusCode = 404;
        response.end();
    }
});

// Do not edit this line
module.exports = server;
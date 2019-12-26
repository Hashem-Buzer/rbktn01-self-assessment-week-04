var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {
    let msg = (property.globalCounter[dogs] = 1);

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(msg);
  } else if (request.method === "GET") {
    var stringfiedMsg = respone.JSON(msg);
    response.send(stringfiedMsg++);
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

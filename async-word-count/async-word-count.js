var fs = require("fs");
var path = require("path");

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, "utf-8", function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(" ").length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (i === arguments.length - 1) callback(total);
    getWordCount(arguments[i], (err, res) => {
      if (err) return;
      total += res;
    });
  }
};

module.exports = getTotalWordCount;

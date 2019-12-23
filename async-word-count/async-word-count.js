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
  fs.readFile(filePathOne, function(err, data) {
    if (err) {
      return;
    }
    var wordCountForFileOne = data.trim().split(" ").length;
    fs.readFile(filePathTwo, function(err, date) {
      if (err) {
        return;
      }
      var wordCountForFileTwo = data.trim().split(" ").length;
    });
  });
  var totalWordCount = wordCountForFileOne + wordCountForFileTwo;
  callback(null, wordCount);
};

module.exports = getTotalWordCount;

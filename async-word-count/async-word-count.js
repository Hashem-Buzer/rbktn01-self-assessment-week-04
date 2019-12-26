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
  getWordCount(filePathOne, (err, wordCount1) => {
    if (!err) {
      getWordCount(filePathTwo, (err, wordCount2) => {
        if (!err) callback(null, wordCount1 + wordCount2);
        else callback(err);
      });
    } else {
      callback(err);
    }
  });
};

module.exports = getTotalWordCount;

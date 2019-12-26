var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  fs.readFile(filePathOne, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }
    else {
      callback(0, getWordCount(data));
    }
  })
  fs.readFile(filePathTwo, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }
    else {
      callback(0, getWordCount(data));
    }
  })
}

module.exports = getTotalWordCount;

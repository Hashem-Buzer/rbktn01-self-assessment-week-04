var fs = require('fs');
var path = require('path');

var getWordCount = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function (filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  getWordCount(filePathOne, (err, word1Count) => {
    getWordCount(filePathTwo, (err, word2Count) => {
      callback(err, word1Count + word2Count)
    });
  })
};

module.exports = getTotalWordCount;

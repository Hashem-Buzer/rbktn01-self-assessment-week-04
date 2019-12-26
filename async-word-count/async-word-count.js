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
  return getWordCount(filePathOne, (err, data1) => { // the result of the first word count will be stored at data1
    if (err) {
      throw "Cannot read file"; // Throw error
    }
    getWordCount(filePathTwo, (err, data2) => { // the result of the second word count will be stored at data2
      if (err) {
        throw "Cannot read file"; // Throw error
      }
      callback(null, data1 + data2)
    })
  })
};

module.exports = getTotalWordCount;

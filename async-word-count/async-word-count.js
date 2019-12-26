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
  var totalWordCount = 0;
  fs.readFile(filePathOne, function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }
    totalWordCount += data.trim().split(' ').length;
  });
  
  fs.readFile(filePathTwo, function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }
    totalWordCount += data.trim().split(' ').length;
  })

  callback(null, totalWordCount)
  
};

module.exports = getTotalWordCount;

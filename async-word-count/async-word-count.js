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
  fs.readFile('/async-word-count/files', (err, files) => {
    if (err) throw err;
    for (let index = 0; index < files.length; index++) {
      fs.readFile(files[i], (err,data )=> {
        if (err) throw err;
        callback(data)
      }
      
    }
  });
};

module.exports = getTotalWordCount;

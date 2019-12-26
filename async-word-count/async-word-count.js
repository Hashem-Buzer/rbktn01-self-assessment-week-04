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

// i hate callback :(, i didn't know how to even test the code,and i don't think that i can use return and callback, but i did anyways....

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  var fileOne = getWordCount(filePathOne, (err, words) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, words);
    }
  });
  var fileTwo = getWordCount(filePathTwo, (err, words) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, words);
    }
  });
  return fileOne + fileTwo;
};

module.exports = getTotalWordCount;

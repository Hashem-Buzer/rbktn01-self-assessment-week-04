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
  getWordCount(filePathOne, (err, data) => {
    if (err) {
      callback(err, null)
      return;
    } else {

      getWordCount(filePathTwo, (err) => {
        if (err) {
          callback(err, null)
          return;
        }
        else {

          callback(null, data)
        }
      })
    }
  })
};
//getTotalWordCount('./files/fileOne.txt', './files/fileTwo.txt', (a, b) => console.log(a, b))
module.exports = getTotalWordCount;

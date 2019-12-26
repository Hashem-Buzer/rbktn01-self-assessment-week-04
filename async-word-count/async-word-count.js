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
  // Pass the first file to the getWordCount function to count it.
  getWordCount(filePathOne, (err, data) => {
    // Check if there is an error.
    if (err) {
      callback(err, null)
    } else {
      // If there are no errors then move on to the second file.
      getWordCount(filePathTwo, (err, data) => {
        if (err) {
          callback(err, null)
        } else {
          //Apply the callback to the result.
          callback(null, data)
        }
      })
    }
  })
};

module.exports = getTotalWordCount;

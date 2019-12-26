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
  //invoke the getWordCount function and give it the fileOnePath
  getWordCount(filePathOne, (err, wordCount1) => {
    //check for error
    if (err) {
      //return the err and null value for the count
      callback(err, null)
    } else {
      //if no error invoke the function again with the fileTwoPath
      getWordCount(filePathTwo, (err, wordCount2) => {
        //check for error
        if (err) {
          //return the err with the first wordCount
          callback(err, wordCount1)
        } else {
          //if no error return the combined wordCounts
          callback(null, wordCount1 + wordCount2)
        }
      })
    }
  })
};

module.exports = getTotalWordCount;

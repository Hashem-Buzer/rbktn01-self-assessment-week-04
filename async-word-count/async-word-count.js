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
  // try {
  //   const data = fs.readFileSync('./files/fileOne.txt', 'utf8')
  //   console.log(data)
  // } catch (err) {
  //   console.error(err)
  // }

};

module.exports = getTotalWordCount;

getTotalWordCount(null,null,()=>{});
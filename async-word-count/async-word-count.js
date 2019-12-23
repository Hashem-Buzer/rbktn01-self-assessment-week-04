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
  // YOUR CODE HEREvar count = 0;
  getWordCount(filePathOne, (err, wordcount) => {
    if(err) {
      callback(err, null);
      return;
    }
    getWordCount(filePathTwo, (err, wordCount2) => {
      if(err) {
        callback(err, null);
        return;
      }
      callback(null, wordcount + wordCount2)
    });
  });
};
getTotalWordCount(__dirname + '/files/fileOne.txt', __dirname + '/files/fileTwo.txt', (err, word)=> {
	
  if (err) {
    console.log(err)
  } else {
    console.log(word)
  }
});

module.exports = getTotalWordCount;

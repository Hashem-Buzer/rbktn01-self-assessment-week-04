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
  fs.readFile(filePathOne, 'utf-8', (err, content1) => {
    if (err) {
      callback(err, null);
      return;
    }

    fs.readFile(filePathTwo, 'utf-8', (err, content2) => {
      if (err) {
        callback(err, null);
        return;
      }
      // Join the two files content together and add space between two paragraphs
      callback(null, (content1 + ' '+ content2).trim().split(' ').length);
    });
  });
};


let filePathOne = path.join(__dirname, 'files', 'fileOne.txt');
let filePathTwo = path.join(__dirname, 'files', 'fileTwo.txt');

getTotalWordCount(filePathOne, filePathTwo, (err, data)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

module.exports = getTotalWordCount;

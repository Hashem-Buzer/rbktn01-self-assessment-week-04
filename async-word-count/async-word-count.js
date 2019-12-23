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
  getWordCount(filepath1, (err,data)=>{
    if(err){
      throw new Error('ERORR!!');
    }else{
      getWordCount(filePathTwo,(err,data2)=>{
        if(err){
          throw new Error('ERRORR!!')
        }else{
          callback(data+data2);
        }
      })
    }
  })


};
var filepath1 = path.join(__dirname, 'files\\fileOne.txt');
var filepath2 = path.join(__dirname, 'files\\fileTwo.txt');
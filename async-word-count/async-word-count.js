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
filePathOne = path.join(__dirname,'files/fileOne.txt');
filePathOne = path.join(__dirname,'files/fileTow.txt');
  var result =0
  getWordCount(filePathOne ,(err,res1)=>{
     if(err){
       return err
     }else{
        result= result +res1
        getWordCount(filePathTwo,(err,res2)=>{
          if(err){
            return err

          }else{
            result= result +res2
            callback(result)
          }
        })
     }
  })
    

    
  
    
};

module.exports = getTotalWordCount;

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

    getWordCount(filePathOne, (err, fileDate1) => {
        if (err) {
            callback(err, null);
        }
        var wordcoun1 = fileDate1;
        callback(null, wordcoun1);
        // should return how many word do we have then we call it for the pathe to and save the countfileword one wuth two 
        var wordcount2 = fileDate2;
        getWordCount(filePathTwo, (err, fileDate2) => {
            if (err) {
                callback(null, err);
            }
            callback(null, wordcoun1 + wordcount2);
        })
    })



};

module.exports = getTotalWordCount;
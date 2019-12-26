

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
	
	//gets the first wordCount
	getWordCount( filePathOne, function( error, data1 ) {
		//handles error (data is null)
		if( data1 === null ) return;
	//gets the second wordCount
		getWordCount( filePathTwo, function( error, data2 ) {
			//handles error (data is null)
			if( data2 === null ) return;
	//passes the wordCounts to the callback
				callback( data1 + data2 );
		} );
	} );
	
};

module.exports = getTotalWordCount;

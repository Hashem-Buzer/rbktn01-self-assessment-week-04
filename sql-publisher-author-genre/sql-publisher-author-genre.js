var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

// [many-to-many]-->schema 06
// [one-to-many]-->schema 04
// [many-to-many]-->schema 06


// publisher, has many authors, has one genre [???]
var sqlPublisherAuthorSchema =  Schemas.FIX_ME; // TODO: Update this constant
// TODO: Write a comment here explaining your choice

// author, has many publishers, has many genres [many-to-many]
var sqlPublisherGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
	/*author can have multiple publishers with multiple genre
		thus to connect both tables we need a 'joint-table' with 
		primary keys in both tables and foreign keys pointing tto the publishers ID
	*/

// genre, has many publishers, has many authors [many-to-many]
var sqlAuthorGenreSchema =  Schemas.FIX_ME; // TODO: Update this constant
// TODO: Write a comment here explaining your choice





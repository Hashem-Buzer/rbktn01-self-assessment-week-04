var Schemas = {
  WRONG: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; 
// its many to many
//publisher, has many authors
// author, has many publishers


var sqlPublisherGenreSchema =  Schemas.OPTION_5; 
// its one to one
//publisher has one genre
//genre, has many publishers

var sqlAuthorGenreSchema =  Schemas.OPTION_6; 
// its many to many
  // author, has many genres
  // genre, has many authors
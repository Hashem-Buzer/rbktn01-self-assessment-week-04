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

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// the relation between publisher and author is many to many so we have to create a third table with both of their primary key as a forgein key and it's the only option like this
var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//the relation between publisher and genre is one to many so we have to add a new column with the primary key of the many side to one side as a forgein key
var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//the relation is many to many so we have to solve it as the first one 
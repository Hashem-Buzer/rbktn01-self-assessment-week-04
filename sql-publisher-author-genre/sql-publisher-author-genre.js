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
/*
 * i think that the relation here is many to many 
 * so we need a join table with the id's for both 
 * Authors and publisher
 */

var sqlPublisherGenreSchema =  Schemas.OPTION_5; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
/**
 * 1 publisher has 1 genre ==> 1 To 1 HERE
 * 1 genre has many publisher => 1 to many HERE
 * so in each  pubilsher there is an genre_id
 * and in each genre there is an publisher_id
 */
var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
/**
 * Many to many Here, so the best solution is to join
 * By Id's of both of them
 */

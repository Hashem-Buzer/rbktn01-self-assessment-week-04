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
// the relation publisher and Author is many to many so we should create a new table
// that contain the id of each one of the publisher Author

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// the publisher has one genre and the genre has many pusblisher 
// so the relation is many to one so we should put the id of genre
// in publisher table.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// the relation Athor and genre is many to many so we should 
// create a table that containe the id of both Author and genre and the id of this table .


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

// publisher, has many authors. author, has many publishers. the relationship is many to many so we need one more table (publisher_author) to handel this relationship. 

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice

// genre, has many publishers. publisher, has one genre. so the relationship is one to many so id_genre is a foreign in publisher table 

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice

// genre, has many author. author, has many genre. so the relationship is many to many so we need one more table (author_genre) to handel this relationship.

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

var sqlPublisherAuthorSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//each publisher has many authors and each author has many publishers ,this is a many to many relation ship so 
//we need a join table ;=>option6 

var sqlPublisherGenreSchema = Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//each publisher has only one genre and each genre has many publishers //
//so the publisher of a specific genre may be simply distigiuished by the id of the genre itself//
//that's why we choose the option 4

var sqlAuthorGenreSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//this is a many to many relationship 
//each author write many genres and each genre can be treated by many authors => so i choose the option 6
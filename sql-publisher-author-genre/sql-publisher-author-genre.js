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

//the publisher and the auther have a many to many relationship so we need a join table between the to to record the 
//relationships between the two like that in this new join table we have two foreign key which are
//pointing to the publisher and the auther to signify the relationship between the two

var sqlPublisherGenreSchema = Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice

//the genre has many publishers but the publisher have only one genre so it's a one to many relatioship
//for this case we need a foreign key in the publisher table that point to the id of the genre
//the opposite is not true because the genre has many publisher and for each genre we can have many foreign key in
// the same row which is not possible

var sqlAuthorGenreSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice

//the auther and genre have a many to many relationship to it is like for the publisher auther schema
//we need a new join table with the id of the genre and the id of the auther as foreign keys in this new table

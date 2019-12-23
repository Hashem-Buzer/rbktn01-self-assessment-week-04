var Schemas = {
  FIX_ME: "wrong answer",
  OPTION_0: "option 0",
  OPTION_1: "option 1",
  OPTION_2: "option 2",
  OPTION_3: "option 3",
  OPTION_4: "option 4",
  OPTION_5: "option 5",
  OPTION_6: "option 6"
};

var sqlPublisherAuthorSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// many to many relationship needs join table

var sqlPublisherGenreSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// many to many relationships requires join table

var sqlAuthorGenreSchema = Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// one to many relationships a genre has many authors while an author has only one genre
// when we have a one to many relationship the 'one' id goes to the 'many' table.

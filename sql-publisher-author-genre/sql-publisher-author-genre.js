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
// one auther has a lot of publishers and vise versa meaning it's a many to many  relation so we have to create a junction table

var sqlPublisherGenreSchema = Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// a publisher has only one genre but a genre has many publishers so it's a one to many relation thus we'll use option 4

var sqlAuthorGenreSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// one auther have many genres and one genre has many authers so just like sqlPublisherAuthorSchema we need to use a  junction table because it's a many to many relation

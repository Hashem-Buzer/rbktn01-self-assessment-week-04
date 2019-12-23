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

var sqlPublisherAuthorSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// One publisher can have many authors but an author can only have one publisher so it's one to many from the publisher's perspective.

var sqlPublisherGenreSchema =  Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// One genre can have many publishers but a publisher can only have one genre so it's one to many from the genre's perspective.

var sqlAuthorGenreSchema =  Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// One genre can have many authors but an author can only have one genre so it's one to many from the genre's perspective.

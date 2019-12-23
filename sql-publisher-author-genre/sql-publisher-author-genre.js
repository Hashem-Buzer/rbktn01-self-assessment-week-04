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

var sqlPublisherAuthorSchema = OPTION_3; // TODO: Update this constant
//one to many relation which we need to have an id for the authors /
var sqlPublisherGenreSchema = OPTION_3; // TODO: Update this constant
// many to many one relationship which we need to keep track of publisher id.
var sqlAuthorGenreSchema = OPTION_6; // TODO: Update this constant
// many to many relationship which requires a join table
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
// because the relationship is a MANY TO MANY we have to create other table the have both ids from both tables and other attributes of nassiry like TIME OR DATE or //others  we have to use this way to eliminate the ambiguity caused due to this relashiption and to create less repetitive tables
//

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// in the ONE TO MANY RELATIONSHIP we have to put the id of the MANY table into the ONE table to differentiate each what MANY records belongs to What ONE table 
// we use this approach to eliminate the need to create multiple repetitive records in the many table
var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// same as @(CODE) sqlPublisherAuthorSchema 

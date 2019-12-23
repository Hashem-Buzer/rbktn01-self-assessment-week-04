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
// publisher many =>  authors many
// author many => genres many
// genre many => one publisher

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; 
// because in many TO many, we need to create a separate table to hold the foreign keys, because that more efficient than putting the id for each table in the other table.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; 
// because in one TO many, we need to put the One Id into the many table 

var sqlAuthorGenreSchema =  Schemas.OPTION_6; 
// because in many TO many, we need to create a separate table to hold the foreign keys, because that more efficient than putting the id for each table in the other table.

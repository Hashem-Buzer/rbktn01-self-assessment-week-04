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
/* the relationshipe between table Publisher and Auther :
 is [ Many to Many ] and when the relationship be many to many we
  create new table to have the id form each table .

*/
var sqlPublisherGenreSchema =  Schemas.OPTION_3; // TODO: Update this constant
/*
 The relationship between Publisher and Gener is One to Many
 and when the relation is one to many the id of one should be forgin key table 
 thats have many in one so the id of publisher will be forgin key in many 

 */

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
/* the same realation in sqlPublisherAuthorSchema many to many .
 The relationshipe between table Auther and Gener :
 is [ Many to Many ] and when the relationship be many to many we
 create new table to have the id form each table .

*/

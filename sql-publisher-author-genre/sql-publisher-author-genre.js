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

var sqlPublisherAuthorSchema =  'option 2'; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//cause the relation between authors and publishers is many to many so i see that is the best way 


var sqlPublisherGenreSchema =  "Option 4"; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//because the relation between both is one to many so if we link them using the id of the genre will be the best way 
//to manage you data base where every publisher has his own genre 

var sqlAuthorGenreSchema =  'option 6'; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//the relation between both is many to many so i find that if we many the link outside the tables wil be better solution

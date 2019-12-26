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

var sqlPublisherAuthorSchema =  Schemas.OPTION_6;
/** 
 *  Each publisher has many author and vice versa.
 *  So we need an "join table" to map the relationship between them.
 */

var sqlPublisherGenreSchema =  Schemas.OPTION_4;
/**
 * Each publisher has one genere and each genere can have many publishers
 * So we need to use associate each publisher with a genere by adding a genere_id column
 * This will also reflect that each genere has many publishers relation
 */

var sqlAuthorGenreSchema =  Schemas.OPTION_6;
/**
 *  Each author has many generes and vice versa.
 *  So we need an "join table" to map the relationship between them.
 */

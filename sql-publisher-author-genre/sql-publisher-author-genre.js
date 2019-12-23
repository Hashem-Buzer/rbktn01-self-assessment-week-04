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
// A publisher can have multiple authors
// An author can have multiple publisher
// This is a Many-to-Many relatioship meaning that it needs to be modeled
// Using a join table containing the reference IDs of each author and publisher

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// A genre can have multiple publishers
// A publisher can only have one genre
// This is a One-to-Many relationship meaning that the the table that can only
// take one value (In our case "publisher") needs to have a foreign key referencing
// the other table's primary key (In our case, the id_genre)

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// A genre can have multiple authors
// An author can have multiple genres
// This is a Many-to-Many relatioship meaning that it needs to be modeled
// Using a join table containing the reference IDs of each author and genre

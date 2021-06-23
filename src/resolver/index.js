const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
const { houses, house } = require('./houses');
const { characters, character } = require('./characters');
const { books, book } = require('./books');

const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    Houses: houses,
    House: house,
    Characters: characters,
    Character: character,
    Books: books,
    Book: book
  }
}

module.exports = resolvers;
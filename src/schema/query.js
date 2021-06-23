const gql = require('graphql-tag');

const query = gql`
  type Query {
    Houses: [House]
    House(id: Int!): House
    Characters: [Character]
    Character(id: Int!): Character
    Books: [Book]
    Book(id: Int!): Book
  }
`;

module.exports = query;
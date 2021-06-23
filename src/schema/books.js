const gql = require('graphql-tag');

const books = gql`
  type Book {
    url: String
    name: String
    isbn: String
    authors: [String]
    numberOfPages: Int
    publisher: String
    country: String
    mediaType: String
    released: String
    characters: [String]
    povCharacters: [String]
  }
`;

module.exports = books;
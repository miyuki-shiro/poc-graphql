const gql = require('graphql-tag');

const characters = gql`
  type Character {
    url: String
    name: String
    gender: String
    culture: String
    born: String
    died: String
    titles: [String]
    aliases: [String]
    father: String
    mother: String
    spouse: String
    allegiances: [String]
    books: [String]
    povBooks: [String]
    tvSeries: [String]
    playedBy: [String]
  }
`;

module.exports = characters;
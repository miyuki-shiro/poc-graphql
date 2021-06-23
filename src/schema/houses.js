const gql = require('graphql-tag');

const houses = gql`
  type House {
    url: String
    name: String
    region: String
    coatOfArms: String
    words: String
    titles: [String]
    seats: [String]
    currentLord: String
    heir: String
    overlord: String
    founded: String
    founder: String
    diedOut: String
    ancestralWeapons: [String]
    cadetBranches: [String]
    swornMembers: [String]
  }
`;

module.exports = houses;
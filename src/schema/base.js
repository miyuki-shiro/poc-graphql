const gql = require('graphql-tag');

const base = gql`
  scalar JSON
  scalar JSONObject
`;

module.exports = base;
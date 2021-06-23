const express = require('express');
const graphqlHTTP = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;
const { makeExecutableSchema } = require('graphql-tools');

const config = require('./config/index');
const schema = require('./schema/index');
const resolver = require('./resolver/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  next();
});

app.use('/graphql', graphqlHTTP({
    schema: makeExecutableSchema({ typeDefs: schema, resolvers: resolver }),
    graphiql: true,
    validationRules: [],
  })
);

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.use('/health', () => { return { status: 'OK' } });

app.listen(config.port, () => {
  console.log('=====================================================');
  console.log(`🚀 GraphQl Server on http://localhost:${config.port}/graphql`);
  console.log('=====================================================');
});

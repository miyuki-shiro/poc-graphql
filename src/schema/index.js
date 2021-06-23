const base = require('./base');
const houses = require('./houses');
const characters = require('./characters');
const books = require('./books');
const query = require('./query');

const schema = [base, houses, characters, books, query];

module.exports = schema;
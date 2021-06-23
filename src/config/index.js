const config = {
  port: 4000,
  env: 'local',
  service: {
    housesUrl: 'https://www.anapioficeandfire.com/api/houses',
    charactersUrl: 'https://www.anapioficeandfire.com/api/characters',
    booksUrl: 'https://www.anapioficeandfire.com/api/books'
    // NOTE: Por defecto trae 10, para cambiarlo se puede usar esto:
    // pagination: '?page=1&pageSize=20'
  }
};

module.exports = config;
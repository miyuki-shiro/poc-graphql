const { getCharacters, getCharacter } = require('../service/charactersService');

const characters = async (_, data, context) => {
  const charactersData = await getCharacters();
  return charactersData;
}

const character = async (_, data, context) => {
  const characterData = await getCharacter(data.id);
  return characterData;
}

module.exports = { characters, character };
const axios = require('axios');
const config = require('../config/index');

async function getCharacters() {
  let response = {};
  try {
    const url = config.service.charactersUrl;
    console.log(`Consultando API: ${url}`);
    response = await axios.get(url);
    console.log(`Respuesta: ${response.status}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return response.data;
}

async function getCharacter(id) {
  let response = {};
  try {
    const url = `${config.service.charactersUrl}/${id}`;
    console.log(`Consultando API: ${url}`);
    response = await axios.get(url);
    console.log(`Respuesta: ${response.status}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return response.data;
}

module.exports = { getCharacters, getCharacter }
const axios = require('axios');
const config = require('../config/index');

async function getHouses() {
  let response = {};
  try {
    const url = config.service.housesUrl;
    console.log(`Consultando API: ${url}`);
    response = await axios.get(url);
    console.log(`Respuesta: ${response.status}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return response.data;
}

async function getHouse(id) {
  let response = {};
  try {
    const url = `${config.service.housesUrl}/${id}`;
    console.log(`Consultando API: ${url}`);
    response = await axios.get(url);
    console.log(`Respuesta: ${response.status}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return response.data;
}

module.exports = { getHouses, getHouse }
const axios = require('axios');
const config = require('../config/index');

async function getBooks() {
  let response = {};
  try {
    const url = config.service.booksUrl;
    console.log(`Consultando API: ${url}`);
    response = await axios.get(url);
    console.log(`Respuesta: ${response.status}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return response.data;
}

async function getBook(id) {
  let response = {};
  try {
    const url = `${config.service.booksUrl}/${id}`;
    console.log(`Consultando API: ${url}`);
    response = await axios.get(url);
    console.log(`Respuesta: ${response.status}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return response.data;
}

module.exports = { getBooks, getBook }
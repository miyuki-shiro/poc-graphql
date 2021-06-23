const { getHouses, getHouse } = require('../service/housesService');

const houses = async (_, data, context) => {
  const housesData = await getHouses();
  return housesData;
}

const house = async (_, data, context) => {
  const houseData = await getHouse(data.id);
  return houseData;
}

module.exports = { houses, house };
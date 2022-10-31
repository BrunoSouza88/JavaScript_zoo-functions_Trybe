const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .filter((element) => element.name === animal)[0].residents
  .every((element) => element.age >= age);

module.exports = getAnimalsOlderThan;

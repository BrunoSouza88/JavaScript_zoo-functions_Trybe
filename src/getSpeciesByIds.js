const data = require('../data/zoo_data');

const getSpeciesByIds = (...parameters) => data.species
  .filter(({ id }) => parameters
    .includes(id));

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;

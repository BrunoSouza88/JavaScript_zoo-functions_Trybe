const data = require('../data/zoo_data');

const getSpeciesByIds = (...parameters) => data.species
  .filter(({ id }) => parameters
    .includes(id));

module.exports = getSpeciesByIds;

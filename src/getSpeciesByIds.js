const data = require('../data/zoo_data');

function getSpeciesByIds(... parameters) {
  return data.species.filter(({id}) => parameters.includes(id))
}

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;

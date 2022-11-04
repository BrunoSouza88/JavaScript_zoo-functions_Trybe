const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieID = data.employees.find((element) =>
    id === element.id).responsibleFor[0];
  const specieX = data.species.find((element) => element.id === specieID).residents;
  specieX.sort((a, b) => b.age - a.age);
  return Object.values(specieX[0]);
}

module.exports = getOldestFromFirstSpecies;

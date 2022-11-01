const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalX = {};
  if (animal === undefined) {
    data.species.forEach((element) => {
      animalX[element.name] = element.residents.length;
    });
    return animalX;
  }
  if (animal.sex !== undefined) {
    const nomeAnimal = data.species.find((element) => element.name === animal.specie);
    const sexAnimal = nomeAnimal.residents.filter((element) => element.sex === animal.sex);

    const tamanho = sexAnimal.length;

    return tamanho;
  }
  const nomeAnimal = data.species.find((element) => element.name === animal.specie);
  const tamanho = nomeAnimal.residents.length;
  return tamanho;
}

module.exports = countAnimals;

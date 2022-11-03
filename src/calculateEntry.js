const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const users = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((elements) => {
    if (elements.age < 18) {
      users.child += 1;
    } else if (elements.age >= 18 && elements.age < 50) {
      users.adult += 1;
    } else {
      users.senior += 1;
    }
  });
  return users;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) { // https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery
    return 0;
  }

  const minorPrice = data.prices.child * countEntrants(entrants).child;
  const adultPrice = data.prices.adult * countEntrants(entrants).adult;
  const elderPrice = data.prices.senior * countEntrants(entrants).senior;

  return minorPrice + adultPrice + elderPrice;
}

module.exports = { calculateEntry, countEntrants };

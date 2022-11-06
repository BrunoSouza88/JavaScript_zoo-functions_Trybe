const data = require('../data/zoo_data');

const workDays = Object.keys(data.hours);
const animalsDays = data.species.map((element) => `${element.name}`);

const dayIsOpen = (day) => {
  const dayOpenMessage = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  return dayOpenMessage;
};
const animalOfTheDay = (day) => {
  const getSpecie = data.species
    .filter((element) => element.availability
      .some((element2) => element2 === day));
  return getSpecie.map((element) => `${element.name}`);
};
const getAllDaysSchedule = () => ({
  Tuesday: { officeHour: dayIsOpen('Tuesday'), exhibition: animalOfTheDay('Tuesday') },
  Wednesday: { officeHour: dayIsOpen('Wednesday'), exhibition: animalOfTheDay('Wednesday') },
  Thursday: { officeHour: dayIsOpen('Thursday'), exhibition: animalOfTheDay('Thursday') },
  Friday: { officeHour: dayIsOpen('Friday'), exhibition: animalOfTheDay('Friday') },
  Saturday: { officeHour: dayIsOpen('Saturday'), exhibition: animalOfTheDay('Saturday') },
  Sunday: { officeHour: dayIsOpen('Sunday'), exhibition: animalOfTheDay('Sunday') },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
});
const specificDay = (day) => {
  if (day === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const days = {};
  days[day] = { officeHour: dayIsOpen(day), exhibition: animalOfTheDay(day) };
  return days;
};
const returnAnimal = (animal) => {
  const chosedAnimal = data.species
    .find((specie) => specie.name === animal);
  return chosedAnimal.availability;
};
const paramAnimalorDay = (parameter) => {
  if (workDays.some((day) => day === parameter)) {
    return 'day';
  }
  if (animalsDays.some((animal) => animal === parameter)) {
    return 'animal';
  }
  return false;
};
function getSchedule(scheduleTarget) {
  const gotNoNameForVar = paramAnimalorDay(scheduleTarget);

  if (scheduleTarget === undefined) {
    return getAllDaysSchedule();
  } if (gotNoNameForVar === false) {
    return getAllDaysSchedule();
  } if (gotNoNameForVar === 'day') {
    return specificDay(scheduleTarget);
  } if (gotNoNameForVar === 'animal') {
    return returnAnimal(scheduleTarget);
  }
}

module.exports = getSchedule;

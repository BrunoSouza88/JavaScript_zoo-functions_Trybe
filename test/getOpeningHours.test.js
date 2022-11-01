const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Monday Schedule', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toEqual('The zoo is closed');
  });
  it('Tuesday Schedule', () => {
    expect(getOpeningHours('Tuesday', '11:00-AM')).toEqual('The zoo is open');
  });
  it('Thursday Schedule', () => {
    expect(getOpeningHours('Thursday', '11:00-PM')).toEqual('The zoo is closed');
  });
  it('Saturday Schedule', () => {
    expect(getOpeningHours('Saturday', '09:00-PM')).toEqual('The zoo is open');
  });
  it('If abbreviation is a AM or PM', () => {
    expect(() => getOpeningHours('Friday', '04:00-SM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('If hour is a number', () => {
    expect(() => getOpeningHours('Saturday', 'P3:00-PM')).toThrow('The hour should represent a number');
  });
  it('If hour is between 12 and 0', () => {
    expect(() => getOpeningHours('Monday', '18:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('If minutes is between 0 and 59', () => {
    expect(() => getOpeningHours('Monday', '11:80-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Days is complete', () => {
    expect(() => getOpeningHours('Mon', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Schedule Complete', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});

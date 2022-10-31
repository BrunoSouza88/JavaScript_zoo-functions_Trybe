const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Elephants Count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Elephants Names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Elephants Age Average', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Elephants Popularity', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Elephants Location', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Elephants availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Parameter not a String', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Parameter undefined', () => {
    expect(handlerElephants(undefined)).toEqual(undefined);
  });
  it('Parameter empty object', () => {
    expect(handlerElephants('{}')).toBe(null);
  });
});

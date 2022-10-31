const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('', () => {
    expect(handlerElephants('names')).toEqual('Ilana', 'Orval', 'Bea', 'Jefferson');
  });
  it('', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});

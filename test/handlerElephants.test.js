const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Elephants Count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Elephants Names', () => {
    expect(handlerElephants('names')).toEqual('Ilana', 'Orval', 'Bea', 'Jefferson');
  });
  it('Elephants Age Average', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});

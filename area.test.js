const area = require('./area')

test('Base de un triangulo que su altura es 4 y su base es 2 ', () => {
  expect(area(4, 2)).toBe(4);
});
test('Base de un triangulo que su altura es 10 y su base es 5 ', () => {
    expect(area(10, 5)).toBe(25);
  });

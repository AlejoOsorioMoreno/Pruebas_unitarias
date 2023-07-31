const cuadrado = require('./cuadrado')

test('5 al cuadrado = 25', () => {
  expect(cuadrado(5)).toBe(25);
});
test('10 al cuadrado = 100', () => {
  expect(cuadrado(10)).toBe(100);
});
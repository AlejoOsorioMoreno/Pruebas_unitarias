const multiplicacion = require('./multiplicacion')

test('10 multiplicado 2 = 20', () => {
  expect(multiplicacion(10, 2)).toBe(20);
});
test('7 multiplicado 3 = 21', () => {
  expect(multiplicacion(7, 3)).toBe(21);
});
const suma = require('./suma')

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
test('sumar 45 + 5 es igual a 50', () => {
  expect(suma(45, 5)).toBe(50);
});

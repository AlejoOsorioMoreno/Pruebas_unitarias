const division = require('./division')

test('10 dividido 2 = 5', () => {
  expect(division(10, 2)).toBe(5);
});
test('100 dividido 10 = 10', () => {
  expect(division(100, 10)).toBe(10);
});
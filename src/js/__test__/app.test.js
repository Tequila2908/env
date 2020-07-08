import sum from '../app';

test('Should be 1+2=3', () => {
  expect(sum(1, 2)).toBe(3);
});
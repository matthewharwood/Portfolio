import { shuffle } from "./shuffle.js";


test('should test shuffle', () => {
  const x = [1,2,3,4];
  expect(shuffle(x)).not.toEqual(x);
})
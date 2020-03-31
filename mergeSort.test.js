const mergeSort = require("./mergeSort");

it('works in empty array', () => {
  expect(mergeSort([])).toEqual([]);
});

it('works in 3 elements', () => {
  expect(mergeSort([3,1,2])).toEqual([1,2,3]);
});

it('works in 4 elements', () => {
  expect(mergeSort([1,4,2,3])).toEqual([1,2,3,4]);
});

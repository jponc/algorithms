const maxCountElementSum = require("./maxCountElementSum");

it("gets the max number of element in which n will be the sum of", () => {
  expect(maxCountElementSum([3,5,1,2,0], 3)).toEqual(3); // 3 elements -- 0, 1, 2
});

it("returns max number of element count even though it's didn't sum up to num", () => {
  expect(maxCountElementSum([5,9,15,2], 4)).toEqual(1); // [2]
});

it("returns 0 if no element is less than num", () => {
  expect(maxCountElementSum([3,7,5], 2)).toEqual(0); // []
});

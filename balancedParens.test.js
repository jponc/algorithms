const balancedParens = require("./balancedParens");

it("return true when matching", () => {
  expect(balancedParens("[(2)(3)]")).toEqual(true);
});

it("return false if not matching", () => {
  expect(balancedParens("[((3)]")).toEqual(false);
});

it("return false if not matching", () => {
  expect(balancedParens("[(((((")).toEqual(false);
});

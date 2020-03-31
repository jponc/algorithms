// Problem: Check if string passed in includes balanced parenthesis
// Solution: Use stack data structure, and check every pop
// O(n) worst case, where n = number of characters in string

const balancedParens = (str) => {
  let i = 0;

  const arr = [];
  const bracketsMapping = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  const openingSet = new Set(["{", "[", "("]);
  const closingSet = new Set(["}", "]", ")"]);

  // Iterating n
  while (str[i] != undefined) {
    const item = str[i];

    // O(1)
    if (openingSet.has(item)) {
      arr.push(item);
    // O(1)
    } else if (closingSet.has(item)) {
      // Not sure about internal implementation of Array#pop, assuming O(1)
      if (bracketsMapping[arr.pop()] != item) {
        return false;
      }
    }

    i++;
  }

  return arr.length == 0;
};

module.exports = balancedParens;

const assert = require('chai').assert;
const flatten   = require('../src/flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns ['3','4','6','2','5'] for ['3',['4','6'],'2','5']", () => {
    assert.deepEqual(flatten(['3',['4','6'],'2','5']), ['3','4','6','2','5']); 
  });
  it("returns undefined for []", () => {
    assert.deepEqual(flatten([]), []); 
  });
});
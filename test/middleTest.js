const assert = require('chai').assert;
const middle = require('../src/middle');

describe("#middle", () => {
  it("returns '[6]' for the input '[3,4,6,2,5]'", () => {
    assert.deepEqual(middle([3,4,6,2,5]), [6]); 
  });
  it("returns '[4,2]' for the input '[3,4,2,5]'", () => {
    assert.deepEqual(middle([3,4,2,5]), [4,2]); 
  });
  it("returns '['6']' for the input '['3','4','6','2','5']'", () => {
    assert.deepEqual(middle(['3','4','6','2','5']), ['6']); 
  });
  it("returns '['4','2']' for the input '['3','4','2','5']'", () => {
    assert.deepEqual(middle(['3','4','2','5']), ['4','2']); 
  });
});
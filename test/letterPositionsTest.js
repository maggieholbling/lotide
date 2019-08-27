const assert = require('chai').assert;
const letterPositions   = require('../src/letterPositions');

describe("#letterPositions", () => {
  it("returns { h: [0], e: [1], l: [2, 3], o: [4] } for 'hEllo'", () => {
    assert.deepEqual(letterPositions('hEllo'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
  it("returns { h: [0], i: [2] } for 'h i'", () => {
    assert.deepEqual(letterPositions('h i'), { h: [0], i: [2] }); 
  });
  it("returns {} for ''", () => {
    assert.deepEqual(letterPositions(''), {}); 
  });
});
const assert = require('chai').assert;
const tail = require('../src/tail');

describe("#tail", () => {
  it("returns '[]' for the input '[]'", () => {
    assert.deepEqual(tail([]), []); 
  });
  it("returns '['Lighthouse', 'Labs']' for the input '['Yo Yo', 'Lighthouse', 'Labs']'", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });
});
const assert = require('chai').assert;
const eqObjects = require('../src/eqObjects');

describe("#eqObjects", () => {
  it("returns true for {1 : 3, 2 : 3, 3 : 1}, {1 : 3, 2 : 3, 3: 1}", () => {
    assert.strictEqual(eqObjects({1 : 3, 2 : 3, 3 : 1}, {1 : 3, 2 : 3, 3: 1}), true);
  });
  it("returns false for {1 : 3, 2 : 3, 3 : 1}, {1 : 3, 2 : 3, 3 : 1}", () => {
    assert.strictEqual(eqObjects({1 : 3, 2 : 3, 3 : 1}, {1 : 3, 3 : 1}), false); 
  });
  it("returns true for {{2 : 1, 3 : 2}, {4 : 1}}, {{2 : 1, 3 : 1}, {4 : 2}}", () => {
    assert.strictEqual(eqObjects({ 1 : {2 : 1, 3 : 2}, 2 : {4 : 1}}, {1 : {2 : 1, 3 : 2}, 2 : {4 : 1}}), true);
  });
  it("returns false for {{2 : 1, 3 : 2}, {4 : 1}}, {{2 : 1, 3 : 1}, {4 : 2, 5 : 1}}", () => {
    assert.strictEqual(eqObjects({ 1 : {2 : 1, 3 : 2}, 2 : {4 : 1}}, { 1 :{2 : 1, 3 : 1}, 2 : {4 : 2, 5 : 1}}), false); 
  });
});
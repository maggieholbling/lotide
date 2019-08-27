const assert = require('chai').assert;
const countOnly   = require('../src/countOnly');

describe("#countOnly", () => {
  it("returns { 'Jason': 1, 'Fang': 2 } for ['Karl', 'Fang', 'Jason', 'Fang'], { 'Jason': true, 'Karima': true, 'Fang': true }", () => {
    assert.deepEqual(countOnly(['Karl', 'Fang', 'Jason', 'Fang'], { 'Jason': true, 'Karima': true, 'Fang': true }),
    { "Jason": 1, "Fang": 2 });
  });
  it("returns { 'Fang': 2 } for ['Karl', 'Fang', 'Jason', 'Fang'], { 'Jason': false, 'Fang': true }", () => {
    assert.deepEqual(countOnly(['Karl', 'Fang', 'Jason', 'Fang'], { 'Jason': false, 'Fang': true }),
    { "Fang": 2 }); 
  });
  it("returns {} for []", () => {
    assert.deepEqual(countOnly([]), {}); 
  });
});
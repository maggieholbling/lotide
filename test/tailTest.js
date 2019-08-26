// const assertEqual = require('../assertEqual');
// 

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words).length, 2);
// assertEqual(tail(words)[0], "Lighthouse");
// assertEqual(tail(words)[1], "Labs");

// const newArray = [];
// assertEqual(tail(newArray).length, 0);
// assertEqual(tail(newArray)[0], undefined);

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for the length of the result for the input ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns 'Lighthouse' as the first element of the result for the input ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse"); 
  });
  it("returns undefined as first element for the input []", () => {
    assert.strictEqual(tail([])[0], undefined); 
  });
  it("returns undefined as first element for the input []", () => {
    assert.strictEqual(tail([]).length, 0); 
  });
  it("returns '[]' for the input '[]'", () => {
    assert.deepEqual(tail([]), []); 
  });
  it("returns '['Lighthouse', 'Labs']' for the input '['Yo Yo', 'Lighthouse', 'Labs']'", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });
});
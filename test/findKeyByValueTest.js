const assert = require('chai').assert;
const findKeyByValue   = require('../src/findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns 'drama' for { 'sci_fi': 'The Expanse', 'comedy': 'Brooklyn Nine-Nine', 'drama:'  'The Wire', 'thriller':  'The Wire' }, 'The Wire'", () => {
    assert.deepEqual(findKeyByValue({
      'sci_fi': 'The Expanse',
      'comedy': 'Brooklyn Nine-Nine',
      'drama' :  'The Wire',
      'thriller':  'The Wire' }, 'The Wire'), 'drama');
  });
  it("returns undefined for { 'sci_fi': 'The Expanse', 'comedy': 'Brooklyn Nine-Nine', 'drama:'  'The Wire', 'thriller':  'The Wire' }, 'That '70s Show'", () => {
    assert.deepEqual(findKeyByValue({
      'sci_fi': 'The Expanse',
      'comedy': 'Brooklyn Nine-Nine',
      'drama' :  'The Wire',
      'thriller':  'The Wire' }, "That '70s Show"), undefined); 
  });
});
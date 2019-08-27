const assertArraysEqual = require('../src/assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,"2",3]);
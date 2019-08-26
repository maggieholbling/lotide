const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
assertArraysEqual(middle([3,4,6,2,5]), [6]);
assertArraysEqual(middle([3,4,2,5]), [4,2]);
assertArraysEqual(middle(["3","4","6","2","5"]), ["6"]);
assertArraysEqual(middle(["3","4","2","5"]), ["4","2"]);
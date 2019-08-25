const assertArraysEqual = require('./assertArraysEqual');

const map = function (array, cb) {
  let newArray = [];
  for (let elem of array) {
    newArray.push(cb(elem));
  }
  return newArray;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0] + word[word.length - 1]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["gd", "cl", "to", "mr", "tm"]);
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleArray = [];
  let middleIndex = array.length / 2;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleArray.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      middleArray.push(array[Math.floor(middleIndex)]);
    }
  }
  return middleArray;
};

assertArraysEqual(middle([3,4,6,2,5]), [6]);
assertArraysEqual(middle([3,4,2,5]), [4,2]);
assertArraysEqual(middle(["3","4","6","2","5"]), ["6"]);
assertArraysEqual(middle(["3","4","2","5"]), ["4","2"]);

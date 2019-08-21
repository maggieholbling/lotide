const eqArrays = function(array1, array2) {
  let isTrue = false;
  if (array1.length === array2.length) {//check if arrays are equal length
    for (let i = 0; i < array1.length; i++) {//loop for the length of array1
      if (array1[i] !== array2[i]) {//compare first and last elements
        return false;
      } else {
        isTrue = true;
      }
    }
  }
  return isTrue;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤕Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤕Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let isTrue = false;
  if (array1.length === array2.length) {//check if arrays are equal length
    for (let i = 0; i < array1.length; i++) {//loop for the length of array1
      console.log(array1[i], array2[i]);
      if (array1[i] !== array2[i]) {//compare first and last elements
        return false;
      } else {
        isTrue = true;
      }
    }
  }
  return isTrue;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1, 2, 3"], ["1, 2, 3"]), true);
assertEqual(eqArrays([1, 2, 3], ["1", "2", 3]), false); 
assertEqual(eqArrays([1, 2, 3, 5], ["1", "2", 3]), false); 
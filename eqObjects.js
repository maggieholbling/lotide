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
      if (array1[i] !== array2[i]) {//compare first and last elements
        return false;
      } else {
        isTrue = true;
      }
    }
  }
  return isTrue;
};

const eqObjects = function(actualObject, expectedObject) {
  let result = false;
  if (Object.keys(actualObject).length === Object.keys(expectedObject).length) {
    for (const key in actualObject) {
      if (!Array.isArray(actualObject[key])) {
        if(actualObject[key] === expectedObject[key]) {
          result = true;
        } else {
          result = false;
        }
      } else {
        result = eqArrays(actualObject[key], expectedObject[key]);
      }
    }
  }
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const result1 = eqObjects(ab, ba); // => true
const result2 = eqObjects(ab, abc); // => false
assertEqual(result1, true);
assertEqual(result2, false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const result3 = eqObjects(cd, dc); // => true
const result4 = eqObjects(cd, cd2); // => false

assertEqual(result3, true);
assertEqual(result4, false);
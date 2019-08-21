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

const flatten = function(outerArray) {
  let flattenedArray = [];
  for (let outerArrayElement of outerArray) {//loop through outer array
    if (Array.isArray(outerArrayElement)) {//check if element is an array
      for (let innerArrayElement of outerArrayElement) {//if yes - start loop for inner array
        flattenedArray.push(innerArrayElement);//add inner element to new array
      }
    } else {
      flattenedArray.push(outerArrayElement);//if no - add outer element to new array
    }
  }
  return flattenedArray;//return new array
};

//make new array
//loop through outer array
  //check if element is an array
    //if yes - start loop for inner array
      //add inner element to new array
    //if no - add outer element to new array
//return new array

//flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([3,4,[6,2],5]), [3,4,6,2,5]);
assertArraysEqual(flatten([3,[4,2,5],4,2,[2,3]]), [3,4,2,5,4,2,2,3]);
assertArraysEqual(flatten(["3",["4","6"],"2","5"]), ["3","4","6","2","5"]);
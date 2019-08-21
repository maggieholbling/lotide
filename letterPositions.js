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

const letterPositions = function(sentence) {
  const result = {};
  const sentenceInLetters = sentence.toLowerCase().split('');
  for (let i = 0; i < sentenceInLetters.length; i++) {
    const letter = sentenceInLetters[i];
    if (letter !== " ") {
      if (result[letter]) {
        result[letter].push(i);
      } else {
        result[letter] = [i];
      }
    }
  }
  console.log(result);
  return result;
};

const resultFromFunction = letterPositions("Sample sEntence");
//const resultFromFunction = letterPositions("lighthouse in the house");
console.log(resultFromFunction["t"]);
assertArraysEqual(resultFromFunction["t"], [10]);
assertArraysEqual(resultFromFunction["e"], [ 5, 8, 11, 14 ]);
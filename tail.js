const assertEqual = require('./assertEqual');

let resultArray;
const tail = function(array) {
  resultArray = array.slice(1,array.length);
  return resultArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(resultArray.length, 2);
assertEqual(resultArray[0], "Lighthouse");
assertEqual(resultArray[1], "Labs");

const newArray = [];
tail(newArray);
assertEqual(resultArray.length, 0);
assertEqual(resultArray[0], undefined);
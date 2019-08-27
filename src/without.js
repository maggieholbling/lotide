//const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let shorterArray = [];
  for (let sourceElement of source) {//loop through the source
    let foundMatch = false;
    for (let itemToRemove of itemsToRemove) {//loop through itemsToRemove
      if (!foundMatch) {//if foundmatch is still false
        if (sourceElement === itemToRemove) {//check if itemsToRemove[k] === source[i]
          foundMatch = true;//if yes, foundMatch = true
        }
      }
    }
    if (!foundMatch) { //if foundMatch = false,add element to new array
      shorterArray.push(sourceElement);
    }
  }
  return shorterArray;
};

module.exports = without;

// assertArraysEqual(without([3,4,6,2,5], [6,2]), [3,4,5]);
// assertArraysEqual(without([3,4,2,5,4,2,2,3], [4,2]), [3,5,3]);
// assertArraysEqual(without(["3","4","6","2","5"], ["6"]), ["3","4","2","5"]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
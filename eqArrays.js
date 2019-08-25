const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {

  if (!(Array.isArray(array1)) || !(Array.isArray(array2))) return false;
  
  if (array1.length !== array2.length) return false;//check if arrays are equal length
  
  for (let i = 0; i < array1.length; i++) {//loop for the length of array1
   
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) return false; //check for nested arrays

    } else if (array1[i] !== array2[i]) return false;//compare first array's and second array's elements 

  }
  return true;
};


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(["1, 2, 3"], ["1, 2, 3"]), true);
// assertEqual(eqArrays([1, 2, 3], ["1", "2", 3]), false); 
// assertEqual(eqArrays([1, 2, 3, 5], ["1", "2", 3]), false); 

//testing for nested arrayss
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
// assertEqual(eqArrays([[2, 3], [4]], 
//                      [[2, 3], [4, 5]]), false) // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
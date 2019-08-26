const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1, 2, 3"], ["1, 2, 3"]), true);
assertEqual(eqArrays([1, 2, 3], ["1", "2", 3]), false); 
assertEqual(eqArrays([1, 2, 3, 5], ["1", "2", 3]), false); 

//testing for nested arrayss
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], 
                     [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
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

module.exports = eqArrays;
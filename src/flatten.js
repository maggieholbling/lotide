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

module.exports = flatten;
const findKeyByValue = function(ourObject, valueOfKey) {
  let result = undefined;
  let count = 0;
  for (const key in ourObject) {
    if (ourObject[key] === valueOfKey) {
      result = Object.keys(ourObject)[count];
      return result;
    }
    count ++;
  }
  return result;
};

module.exports = findKeyByValue;
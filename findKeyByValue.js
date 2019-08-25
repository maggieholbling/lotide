const assertEqual = require('./assertEqual');

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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  thriller:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
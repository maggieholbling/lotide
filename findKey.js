const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  let result;
  for (const key in object) {
    //console.log(callback(object[key]));
    if (callback(object[key])) {
      result = key;
      break;
    }
  }
  return result;
};

let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
let result1 = findKey(object1, x => x.stars === 2);
assertEqual(result1, "noma");

object1 = {
  key1: "hey",
  key2: "there",
  key3: "man"
};
result1 = findKey(object1, x => x.length === 5);
assertEqual(result1, "key2");
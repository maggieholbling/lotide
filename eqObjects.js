const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  if (typeof object1 !== 'object' || typeof object2 !== 'object') return false;
  
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  
  for (const key in object1) {

    if (Array.isArray(object1[key])) return eqArrays(object1[key], object2[key]);

    if (typeof object1[key] === 'object') { //checking for nested objects

      if (!eqObjects(object1[key], object2[key])) return false;

    } else if (object1[key] !== object2[key]) return false;

  }
  return true;
};

module.exports = eqObjects;

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
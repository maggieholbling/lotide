const assertEqual = require('./assertEqual');

const head = function (array) {
  return array[0];
}

assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
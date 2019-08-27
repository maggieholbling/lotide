const middle = function(array) {
  let middleArray = [];
  let middleIndex = array.length / 2;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleArray.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      middleArray.push(array[Math.floor(middleIndex)]);
    }
  }
  return middleArray;
};

module.exports = middle;
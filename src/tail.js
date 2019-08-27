const tail = function(array) {
  let resultArray;
  resultArray = array.slice(1,array.length);
  return resultArray;
};

module.exports = tail;
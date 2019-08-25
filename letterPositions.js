const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const result = {};
  const sentenceInLetters = sentence.toLowerCase().split('');
  for (let i = 0; i < sentenceInLetters.length; i++) {
    const letter = sentenceInLetters[i];
    if (letter !== " ") {
      if (result[letter]) {
        result[letter].push(i);
      } else {
        result[letter] = [i];
      }
    }
  }
  console.log(result);
  return result;
};

const resultFromFunction = letterPositions("Sample sEntence");
//const resultFromFunction = letterPositions("lighthouse in the house");
console.log(resultFromFunction["t"]);
assertArraysEqual(resultFromFunction["t"], [10]);
assertArraysEqual(resultFromFunction["e"], [ 5, 8, 11, 14 ]);
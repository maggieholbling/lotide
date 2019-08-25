const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const result = {};
  const sentenceInLetters = sentence.toLowerCase().split('');
  for (const letter of sentenceInLetters) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const resultFromFunction = countLetters("This is a sample sentence");
assertEqual(resultFromFunction["t"], 2);
assertEqual(resultFromFunction["h"], 1);
assertEqual(resultFromFunction["x"], undefined);
assertEqual(resultFromFunction["e"], 4);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤕Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  const sentenceInLetters = sentence.split('');
  for (letter of sentenceInLetters) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
       result[letter] = 1;
      }
    }
  }
  console.log(result);
  return result;
};

const resultFromFunction = countLetters("This is a sample sentence");
assertEqual(resultFromFunction["t"], 2);
assertEqual(resultFromFunction["h"], 1);
assertEqual(resultFromFunction["x"], undefined);
assertEqual(resultFromFunction["e"], 4);
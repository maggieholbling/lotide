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
  return result;
};

module.exports = letterPositions;
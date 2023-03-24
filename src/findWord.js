// input, en lista med ord samt en siffra som anger önskad längd, samt en indikation på om unika bokstäver är tilllåtna eller ej
export function findWord(wordList, wordLength = 5, multiChars) {
    
  return multiChars === true
    ? randomizeWord(wordList.filter((e) => e.length === wordLength))
    : randomizeWord(
        wordList
          .filter((e) => !hasMultipleChars(e))
          .filter((e) => e.length === wordLength)
      );
    }
 
export const randomizeWord = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const hasMultipleChars = (word) => {
  const result = [];

  // Iterates and checks if word[i] appears in the rest of the word from word[i +1]
  for (let i = 0; i < word.length; i++) {
    const string = word.slice(i + 1, word.length);
    result.push(string.includes(`${word[i]}`));
  }
  // Returns true in case any letter is included more than once in result
  return result.includes(true);
};
// Hantera på något väldefinierat sätt när inget passande ord finns

// output, det slumpmässigt valda ordet

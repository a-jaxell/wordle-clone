export default class Ordel {
  constructor() {
    this.correctWord = [];
    this.guessedWord = [];
    this.formatCheck = (string) => {
      const regex = /^[a-zA-Z]+$/;
      return regex.test(string);
    };
  }
  input(correctWord, guessedWord) {
    if (correctWord.length !== guessedWord.length) {
      return "Submitted strings should be of the same length.";
    } else if (this.formatCheck(correctWord) && this.formatCheck(guessedWord)) {
      this.correctWord.push(...correctWord.toLowerCase().split(""));
      this.guessedWord.push(...guessedWord.toLowerCase().split(""));
    } else {
      return "Submitted strings may only contain letters and can't be empty.";
    }
    console.log(this.guessedWord.length);
  }
  match() {
      // Create an empty array to iterate and fill with data
      const result = new Array(this.correctWord.length).fill(null);

      for(let i = 0; i <= result.length; i++) {
        let currentLetter = this.guessedWord[i];
        if (!result[i]) {
          this.correctWord.indexOf(currentLetter) === -1
            ? { letter: currentLetter, result: "incorrect" }
            : () => {
                // Creates an array of indices of currentLetter matches in correctWord and guessWord
                const correctIndices = this.correctWord.reduce((a, c, i) => {
                  if (c === currentLetter) {
                    a.push(i);
                  }
                  return a;
                }, []);
                const guessIndices = this.guessWord.reduce((a, c, i) => {
                  if (c === currentLetter) {
                    a.push(i);
                  }
                  return a;
                }, []);

                // Matches indices against each other, since words are the same length. A match is a match in letters
                guessIndices.forEach((e, i) => {
                  if (correctIndices.includes(guessIndices[e])) {
                    return result[e] = {
                      letter: this.guessedWord[e],
                      result: "correct",
                    };

                    // If the amount of guessed letters are more than the amount contained in word. extra letters are incorrect.
                  } else if (guessIndices[i] + 1 > correctIndices.length) {
                    return result[e] = {
                      letter: this.guessedWord[e],
                      result: "incorrect",
                    };
                  } else {
                    return result[e] = {
                      letter: this.guessedWord[e],
                      result: "misplaced",
                    };
                  }
                });
              };

          // If letters in both strings match
        } else {
          //if(this.correctWord[index] === this.guessedWord[index]){
          return { letter: currentLetter, result: "correct" };
        }
      };
      return result;
  }
}

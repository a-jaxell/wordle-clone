export default class Ordel {
  constructor() {
    this.correctWord = [];
    this.guessedWord = [];
    this.formatCheck = (string) => {
      const regex = /^[a-zåäöA-ZÅÄÖ]+$/;
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
  }
  match() {
    // Create an empty array to iterate and fill with data
    const result = [];

    for (let i = 0; i < this.correctWord.length; i++) {
      let guess = this.guessedWord[i];
      let correct = this.correctWord[i];

      if (this.correctWord.indexOf(guess) === -1) {
        result.push({ letter: guess, result: "incorrect" });
    //   } else if (guess === correct) {
    //     result.push({ letter: guess, result: "correct" });
    //   } else {
    //     result.push({ letter: guess, result: "mismatched" });
    //   }
      }
      return result;
    }
 }
}

import { describe, expect } from "@jest/globals";
import Ordel from "../src/test";


describe("Class Ordel", () => {
  test("input method adds parameters to two seperate arrays, turns them to lower case and splits them", () => {
    
    const ordel = new Ordel();
    ordel.input("correctWord", "guessedWord");
      
      expect(ordel.guessedWord).toEqual([
          "g",
          "u",
          "e",
          "s",
          "s",
          "e",
          "d",
          "w",
          "o",
          "r",
          "d",
        ]);
        expect(ordel.correctWord).toEqual([
            "c",
            "o",
            "r",
            "r",
            "e",
            "c",
            "t",
            "w",
            "o",
            "r",
            "d",
        ]);
    });

    test("Match the letter in guessedWord against correctWord, push an object containing letter and outcome to an array", () => {
        const ordel = new Ordel;
        ordel.input("correctWord", "guessedWord");
        
        expect(ordel.match()).toEqual(
          [
            { letter: 'c', result: 'misplaced' },
            { letter: 'o', result: 'incorrect' },
            { letter: 'r', result: 'incorrect' },
            { letter: 'r', result: 'incorrect' },
            { letter: 'e', result: 'misplaced' },
            { letter: 'c', result: 'incorrect' },
            { letter: 't', result: 'incorrect' },
            { letter: 'w', result: 'correct' },
            { letter: 'o', result: 'correct' },
            { letter: 'r', result: 'correct' },
            { letter: 'd', result: 'correct' }
          ]
        )
    })
});

// expect(ordel('banana', 'alltså')).toBe(
//     [
//         {letter: "A", result: 'misplaced'},
//         {letter: "L", result: 'incorrect'},
//         {letter: "L", result: 'incorrect'},
//         {letter: "T", result: 'incorrect'},
//         {letter: "S", result: 'incorrect'},
//         {letter: "Å", result: 'incorrect'}
//     ]
//   )

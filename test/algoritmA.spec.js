import { jest, describe, expect } from "@jest/globals";
import Ordel from "../src/ordel.js";

describe("Class Ordel", () => {
  test("input method adds parameters to two seperate arrays and splits them", () => {
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
      "W",
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
      "W",
      "o",
      "r",
      "d",
    ]);
  });
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

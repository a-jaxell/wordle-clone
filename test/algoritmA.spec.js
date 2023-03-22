import { describe, expect } from "@jest/globals";
import Ordel from "../src/Maybe";

describe("Class Ordel", () => {
  test("input method adds parameters to two seperate arrays, turns them to lower case and splits them", () => {
    const ordel = new Ordel();
    ordel.input("Cykla", "Hallå");

    expect(ordel.guessedWord).toEqual(["h", "a", "l", "l", "å"]);
    expect(ordel.correctWord).toEqual(["c", "y", "k", "l", "a"]);
  });

  test("Match the letter in guessedWord against correctWord, push an object containing letter and outcome to an array", () => {
    const ordel = new Ordel();
    ordel.input("Cykla", "Hallå");

    expect(ordel.match()).toEqual([
      { letter: "h", result: "incorrect" },
      { letter: "a", result: "mismatched" },
      { letter: "l", result: "incorrect" },
      { letter: "l", result: "correct" },
      { letter: "å", result: "incorrect" },
    ]);
  });
  test("Test against several dupicate letters to not get errenous output", () => {
    const ordel = new Ordel();
    ordel.input("Cykla", "aaaaa");

    expect(ordel.match()).toEqual([
      { letter: "a", result: "incorrect" },
      { letter: "a", result: "incorrect" },
      { letter: "a", result: "incorrect" },
      { letter: "a", result: "incorrect" },
      { letter: "a", result: "correct" },
    ]);
  });
});

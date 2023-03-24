import { findWord, hasMultipleChars, randomizeWord } from '../src/findWord.js';
import { describe, expect } from "@jest/globals";

const randNum = () =>  Math.floor(Math.random()*6);

const mockArray = ['apple', 'banana', 'cherry', 'orange', 'grape', 'lemon', 'lime', 'kiwi', 'peach', 'pear'];
/**
 * Test Strategy:
 * 
 * In order to cover a
 */
describe("Class findWord", () =>{

    test("Handles no matching words", () => {
        expect(findWord(mockArray, 10, true)).toBe(
            "There isnt a matching word for 10 characters"
        )
    })

    test("Randomizes a word, returns a string greater than 0", () => {
        expect(typeof randomizeWord(mockArray)).toBe("string");
        expect(randomizeWord(mockArray).length).toBeGreaterThan(0);
    })
    test("Returns a string and of the correct length when such a parameter is supplied. Default is 5 characters long", () => {
        // The word returned should be a string and the same length as the length submitted.
        expect(typeof findWord(mockArray)).toBe("string");
        expect(findWord(mockArray).length).toEqual(5);
        expect(findWord(mockArray, 6).length).toEqual(6);
    })

    test('Returns true/false depending on if a word has multiple characters or not.', () => {
        // 'orange' should return false
        expect(hasMultipleChars(mockArray[3])).toEqual(
            false
        )
        //'apple' should return true
        expect(hasMultipleChars(mockArray[0])).toEqual(
            true
        )
    });
    // test('Accept the correct format, else return error message.', () => {
    //     expect(findWord(mockArray, 5, M)).toBe(
    //         {word: returnedWord, length: 5, multiChars: true}
    //     )
    //     expect(findWord('Mustard', a, true)).toBe(
    //         "Incorrect Input in findWord."
    //     )
    // });

});

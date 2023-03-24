import { findWord, hasMultipleChars } from '../src/findWord.js';
import { describe, expect } from "@jest/globals";

const mockArray = ['apple', 'banana', 'cherry', 'orange', 'grape', 'lemon', 'lime', 'kiwi', 'peach', 'pear'];

describe("Class findWord", () =>{

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
    test('Accept the correct format, else return error message.', () => {
        expect(findWord(mockArray, 5, M)).toBe(
            {word: returnedWord, length: 5, multiChars: true}
        )
        expect(findWord('Mustard', a, true)).toBe(
            "Incorrect Input in findWord."
        )
    });

});

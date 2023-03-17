export default class Ordel {
    constructor(){
        this.correctWord = [];
        this.guessedWord = [];
    }
    input(correctWord, guessedWord){
        this.correctWord.push(...correctWord.split(""));
        this.guessedWord.push(...guessedWord.split(""));
    }
    
}
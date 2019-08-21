/*
* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
   This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
  * An array of `new` Letter objects representing the letters of the underlying word
  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
*/

// Requiring the Letter constructor function was exported from letter.js
const Letter = require('./letter.js'); 

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// Constructor for Word

// 1. Method to changes selected word into an array of Letter objects  
let word = function(word) {
    this.word = word; 
    this.wordArr = []; 

    for (var i = 0; i < word.length; i++) {
      let letter = new Letter(word[i]); 
      this.word.push(letter); 
    }

    // 2. Method that utilizes the display() method in each Letter object in the Word object and returns
    //what the user will see in the game based on which letters are guessed correctly in the hidden word.
  this.show = function() {
      let wordShow = []; 
      for (var i = 0; i < wordArr.length; i++) {
        wordShow.push(this.wordArr.display()); 
      }
    }
  //  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

  //  3. Method to check if input matches a letter of the word
  this.match = function(guess) {
    for (var i = 0; i < this.wordArr.length; i++) {
      this.wordArr[i].check(guess);
    }
  }
}
// Exporting the Word constructor to use in index.js
module.exports = Word; 
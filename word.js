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
let Word = function(str) {
  // 1. Method to changes selected word into an array of Letter objects  
  this.

  // 2. Method to display Word
}; 
//  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

//  3. Method to check if input matches a letter of the word

// Exporting the Word constructor to use in index.js
module.exports = Word; 
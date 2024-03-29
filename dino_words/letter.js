
/* Contains a constructor, Letter. This constructor should be able to either 
display an underlying character or a blank placeholder (such as an underscore), 
depending on whether or not the user has guessed the letter. That means the constructor
 should define: */

let wordChecker = /^[a-z]$/

 // Constructor for letters
 let Letter = function(char) {
// * A string value to store the underlying character for the letter
  this.char = char; 
//  * A boolean value that stores whether that letter has been guessed yet

  this.guessed = false; 

  // Method to displays the character or underscore
  this.display = function() {
   if (this.guessed || !(wordCheck.test(this.char))) {
     return this.char.toLowerCase(); 
   } 
   else {
     return '_'; 
   }
 }; 

// Method to check if the input is the same this character 
  this.checker = function (guess) {
    if (guess === this.char) {
      this.gussed = true; 
    }
  }
 }

// Exporting the Letter constructor to use in word.js
module.exports = Letter;
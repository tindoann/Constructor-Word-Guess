
/* Contains a constructor, Letter. This constructor should be able to either 
display an underlying character or a blank placeholder (such as an underscore), 
depending on whether or not the user has guessed the letter. That means the constructor
 should define: */

 // Constructor for letters
 const Letter = function(char) {
// * A string value to store the underlying character for the letter
  this.char = char; 
//  * A boolean value that stores whether that letter has been guessed yet

  this.guessed = false; 
/*  * A function that returns the underlying character if the letter has been guessed, 
  or a placeholder (like an underscore) if the letter has not been guessed

  // Method to displays the character or underscore
*/this.display = function() {
 // If guess is true, return the character
   if (this.guessed){
     return this.char.toLowerCase(); 
   } 
 // else, return an underscore
   else {
     return '_'
   }
 }; 
/*  * A function that takes a character as an argument and checks it against the underlying 
  character, updating the stored boolean value to true if it was guessed correctly
*/

// Method to check if the input is the same theis character 
  this.Checker = function (guess) {

    // Switches guessed to true if guess matches this characther 
    if (guess.toLowerCase() === this.char.toLowerCase()) {
      this.guessed = true;
    } else {
      return false;
    }
  }; 
}; 

// Exporting the Letter constructor to use in word.js
module.exports = Letter; 
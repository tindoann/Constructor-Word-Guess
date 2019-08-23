// *index.js**: The file containing the logic for the course of the game, which depends on `Word.js`

const Word = require('./Word.js');
const inquirer = require('inquirer');

// Randomly selects a word and uses the `Word` constructor to store it

let losses = 0;
let guessesLeft;
const dinoArray = ['archaeopteryx', 'brachiosaurus', 'deinonychus', 'minmi', 'parasaurolophus', 'triceratops', 'triceratops', 'Velociraptor'];
const checker = /[a-zA-Z]/;

//Intro to game 

console.log(`DINO WORLD GAME`);

// Function to start a new game that creates a new word
function play() {
  let randPicker = dinoArray[Math.floor(Math.random() * dinoArray.length)];
  //let selectedWord = randPicker[selectedWord]; // random word selected
  let newWord = new Word(randPicker); // pick a new word randomly from the word array
  guessesLeft = 8;
  console.log('You have 8 guesses to figure out the dinosaur')


  //Displays the random word in underscore
  newWord.show();

  // Function will call itself until either the word is guessed or the user runs out of attemps
  function prompt() {
    inquirer.prompt([{
      type: 'input',
      message: 'Please select a letter',
      name: 'input'
    }]).then(function (response) {
      let letter = response.input.toLowerCase()
      //checks if the letter is in the word, then return to true or false
      if (checker.test(letter)) {
        // Program runs if there are guesses left
        if (guessesLeft >= 1) {
          newWord.match(letter);
          // set boolean for letters in the word
          let setWord = false;

          for (var i = 0; i < newWord.wordArr.length; i++) {
            if (letter === newWord.wordArr[i].char) {
              setWord = true;
            }
          }

          if (setWord) {
            console('\nCorrect!');
          } else {
            guessesLeft--;
            console.log(`You have ${guessesLeft} guesses left.`);
          }

        // Boolean that determine whether or not all the letter have been gussed
        let letterChecker = false;
        // Checks if any letters have yet to be guessed
        for (let j = 0; j < newWord.wordArr.length; j++) {
          if (newWord.wordArr[j].guessed === false) {
            letterChecker = true;
          }
        }

        // If all letters have been guessed
        if (letterChecker === false) {
          newWord.show();
          console.log('You won!');
          playAgain();
        } else {
          newWord.show();
          // If there are no guesses left, prompt user to play again or exit
          if (guessesLeft === 0) {
            console.log('You ran out of guesses');
            playAgain();
          } else {
            // If there are gusses left, prompt user to continue
            prompt();
          }
        }
      } else {
        process.exit();
      }
    } else {
      console.log('Not a valid character'); 
      prompt(); 
    }
  }); 
}
// Prompts user for the
prompt(); 
}
  function playAgain() {
    inquirer.prompt([{
      type: 'list',
      message: 'Would you like to play again',
      choices: ['Play Again', 'Exit'],
      name: 'again'
    }]).then(function (respond) {
      if (response.again === 'Play Again') {
        console.log(`Awesome, here's your next word.`)
        play();
      } else {
        console.log('See you again, space cowboy!'); 
    }
  }); 
}
play(); 

// *index.js**: The file containing the logic for the course of the game, which depends on `Word.js`

const word = require('./word.js');
const inquirer = require('inquirer');

// Randomly selects a word and uses the `Word` constructor to store it

let counter;
let wins = 0;
let losses = 0;
let guessesLeft;
let correctGuess = [];
let incorectGuess = [];
const dinoArray = ['archaeopteryx', 'brachiosaurus', 'deinonychus', 'minmi', 'parasaurolophus', 'triceratops', 'triceratops', 'Velociraptor'];
const letters = /[a-zA-Z]/;

//Intro to game 

console.log(`DINO WORLD GAME`);

// Function to start a new game that creates a new word
function reset() {
  let randPicker = dinoArray[Math.floor(Math.random() * dinoArray.length)];
  let selectedWord = randPicker[selectedWord]; // random word selected
  newWord = new Word(randPicker); // pick a new word randomly from the word array
  guessesLeft = 8;
  console.log('You have 8 guesses to figure out the dinosaur')
  guessWord(word, newWord)


  //Displays the random word in underscore
  newWord.display();

  // Function will call itself until either the word is guessed or the user runs out of attemps
  function prompt() {

    inquirer.prompt([{
      type: 'input',
      message: 'Please select a letter',
      name: input
    }]).then(function (response) {
      let letter = response.input.toLowerCase()
      //checks if the letter is in the word, then return to true or false
      if (check.test(char)) {
        newWord.match(char);
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
          console.log(`You have ${guessesLeft} guesses remaining.`);
        };

      }
    })
  }





  // Prompts the user for each guess and keeps track of the user's remaining guesses

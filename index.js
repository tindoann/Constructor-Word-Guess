// *index.js**: The file containing the logic for the course of the game, which depends on `Word.js`

const word = require('./word.js'); 
const inquirer = require('inquirer'); 
const letters = /[a-zA-Z]/;

// Randomly selects a word and uses the `Word` constructor to store it

let counter; 
let wins = 0;  
let losses = 0; 
let guessesLeft; 
let correctGuess = []; 
let incorectGuess = []; 
const dinoArray = ['archaeopteryx', 'brachiosaurus', 'deinonychus', 'minmi', 'parasaurolophus', 'triceratops', 'triceratops', 'Velociraptor'];


// Function to start a new game that creates a new word
function reset() {

  let randPicker = dinoArray[Math.floor(Math.random() * dinoArray.length)];
  let selectedWord = randPicker[selectedWord]; // random word selected
  newWord = new Word(randPicker); // pick a new word randomly from the word array
  guessesLeft = 8;
  console.log('You have 8 guesses to figure out the dinosaur')
}









// Prompts the user for each guess and keeps track of the user's remaining guesses


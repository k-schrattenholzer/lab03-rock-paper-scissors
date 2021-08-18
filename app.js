// import functions and grab DOM elements
import { getThrow } from './get-random-throw.js';

const submitButton = document.getElementById ('submit-button');
const guessEl = document.getElementById ('user-guess');
const correctAnswer = document.getElementById ('correct-answer');
const resultEl = document.getElementById ('result');
const winsEl = document.getElementById ('total-win');
const lossesEl = document.getElementById ('total-loss');
const percentEl = document.getElementById ('percent');

// initialize global state
let wins = 0;
let losses = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitButton.addEventListener('click', () => {
    getThrow();
});

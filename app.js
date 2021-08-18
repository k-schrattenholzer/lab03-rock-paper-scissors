

import { getThrow } from "./get-random-throw.js";

// import functions and grab DOM elements
const submitButton = document.getElementById('submit-button');
const guessEl = document.getElementById('user-guess');
const correctAnswer = document.getElementById('correct-answer');
const resultEl = document.getElementById('result');
const winsEl = document.getElementById('total-win');
const lossesEl = document.getElementById('total-loss');
const percentEl = document.getElementById('percent');

console.log(
    submitButton,
    guessEl,
    correctAnswer,
    resultEl,
    winsEl,
    lossesEl,
    percentEl);

// initialize global state
let wins = 0;
let losses = 0;

// set event listeners 

submitButton.addEventListener('click', () => {
    const selectedGuess = document.querySelector('input:checked');
    console.log(selectedGuess.value);
    getThrow();
});

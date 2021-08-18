

import { getThrow, checkUserGuess, } from './get-random-throw.js';

// import functions and grab DOM elements
const submitButton = document.getElementById('submit-button');
const guessEl = document.getElementById('user-guess');
const correctAnswer = document.getElementById('correct-answer');
const resultEl = document.getElementById('result');
const winsEl = document.getElementById('total-win');
const lossesEl = document.getElementById('total-loss');
const percentEl = document.getElementById('percent');

// initialize global state
let wins = 0;
let losses = 0;

// set event listeners 

submitButton.addEventListener('click', () => {
    const userThrow = document.querySelector('input:checked');
    const compThrow = getThrow();
    const throwResult = checkUserGuess(userThrow.value, compThrow);
    console.log(userThrow.value, compThrow, throwResult);
    if (throwResult === 'win') {
        wins++;
        resultEl.textContent = 'You won!';
    }
    if (throwResult === 'draw') {
        resultEl.textContent = `It's a draw`;
    } 
    if (throwResult === 'lose') {
        resultEl.textContent = 'The computer wins.';
        losses++;
    }
});
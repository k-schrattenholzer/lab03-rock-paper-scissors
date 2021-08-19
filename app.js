

import { getThrow, checkUserGuess, } from './get-random-throw.js';

// import functions and grab DOM elements
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset')
const userChoiceEl = document.getElementById('user-choice');
const correctAnswer = document.getElementById('correct-answer');
const resultEl = document.getElementById('result');
const winsEl = document.getElementById('total-win');
const lossesEl = document.getElementById('total-loss');
const drawsEl = document.getElementById('total-draw');
const totalEl = document.getElementById('total');
const percentEl = document.getElementById('percent');

// initialize global state
let wins = 0;
let losses = 0;
let draws = 0;

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
        draws++;
        console.log(draws);
        resultEl.textContent = `It's a draw`;
    } 
    if (throwResult === 'lose') {
        resultEl.textContent = 'The computer wins.';
        losses++;
    }
    const total = Number(wins) + Number(losses) + Number(draws);
    winsEl.textContent = `Wins: ${wins}`;
    lossesEl.textContent = `Losses: ${losses}`;
    drawsEl.textContent = `Draws: ${draws}`;
    totalEl.textContent = `Total: ${total}`;
    userChoiceEl.textContent = `You chose ${userThrow.value}`;
    correctAnswer.textContent = `The computer threw ${compThrow}`;
    percentEl.textContent = `Success percent: ${Math.round(wins/(total) * 100)}%`;
    resetButton.style.display = 'flex';
});

resetButton.addEventListener('click', () => {
    location.reload();
});

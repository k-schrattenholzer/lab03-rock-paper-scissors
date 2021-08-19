export function getThrow() {
    const randomNumber = Math.round(Math.random() * 2);
    if (randomNumber === 0) {
        return 'rock';
    }
    if (randomNumber === 1) {
        return 'paper';
    }
    if (randomNumber === 2) {
        return 'scissors';
    }
}

export function checkUserGuess(playerGuess, computerThrow) {
    if (playerGuess === 'rock' && computerThrow === 'rock') {
        return 'draw';}
    if (playerGuess === 'rock' && computerThrow === 'scissors') {
        return 'win';}
    if (playerGuess === 'rock' && computerThrow === 'paper') {
        return 'lose';}
    if (playerGuess === 'paper' && computerThrow === 'rock') {
        return 'win';}
    if (playerGuess === 'paper' && computerThrow === 'scissors') {
        return 'lose';}
    if (playerGuess === 'paper' && computerThrow === 'paper') {
        return 'draw';}
    if (playerGuess === 'scissors' && computerThrow === 'paper') {
        return 'win';}
    if (playerGuess === 'scissors' && computerThrow === 'scissors') {
        return 'draw';}
    if (playerGuess === 'scissors' && computerThrow === 'rock') {
        return 'lose';}   
    else {
        return 'uh-oh';}
}
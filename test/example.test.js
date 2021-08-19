// IMPORT MODULES under test here:
import { checkUserGuess } from "../get-random-throw.js";

const test = QUnit.test;

test ('checkUserGuess should display draw when rock and rock are thrown', (expect) => {
    const expected = 'draw';
    const actual = checkUserGuess('rock', 'rock');
    expect.equal(actual, expected);
});
test ('checkUserGuess should display win when rock and scissors are thrown', (expect) => {
    const expected = 'win';
    const actual = checkUserGuess('rock', 'scissors');
    expect.equal(actual, expected);
});
test ('checkUserGuess should display lose when rock and paper are thrown', (expect) => {
    const expected = 'lose';
    const actual = checkUserGuess('rock', 'paper');
    expect.equal(actual, expected);
});
test ('checkUserGuess should display win when paper and rock are thrown', (expect) => {
    const expected = 'win';
    const actual = checkUserGuess('paper', 'rock');
    expect.equal(actual, expected);
});
test ('checkUserGuess should display lose when paper and scissors are thrown', (expect) => {
    const expected = 'lose';
    const actual = checkUserGuess('paper', 'scissors');
    expect.equal(actual, expected);
});
test ('checkUserGuess should display draw when paper and paper are thrown', (expect) => {
    const expected = 'draw';
    const actual = checkUserGuess('paper', 'paper');
    expect.equal(actual, expected);
});
test ('checkUserGuess should display win when scissors and paper are thrown', (expect) => {
    const expected = 'win';
    const actual = checkUserGuess('scissors', 'paper');
    expect.equal(actual, expected);
});
test ('checkUserGuess should display draw when scissors and scissors are thrown', (expect) => {
    const expected = 'draw';
    const actual = checkUserGuess('scissors', 'scissors');
    expect.equal(actual, expected);
});
test ('checkUserGuess should display lose when scissors and rock are thrown', (expect) => {
    const expected = 'lose';
    const actual = checkUserGuess('scissors', 'rock');
    expect.equal(actual, expected);
});


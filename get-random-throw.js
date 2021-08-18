const computerChoiceArray = ['rock', 'paper', 'scissors'];

export function getThrow() {
    const randomNumber = Math.ceil(Math.random() * 2);
    const computerThrow = computerChoiceArray[randomNumber];
    console.log(computerThrow);
}


function runGame() {

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;
    
    do {
        guessString = prompt('I am thinking of a number between 1 and 100. \n\nWhat is the number?');
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert('You got it! The number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess it.');
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if(isNaN(guessNumber)) {
        alert('You have not entered a number. \n\nPlease enter a number between 1 and 100.');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integer between 1 and 100.');
    } else if (guessNumber > target) {
        alert('Your number is too large!');
    } else if (guessNumber < target) {
        alert('Your number is too small!');
    } else {
        correct = true;
    }
    return correct;
}
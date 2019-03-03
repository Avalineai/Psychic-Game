
var lettersList = ["a", "b", "c", "d", "e", "f", "g"]
var wins = 0;
var losses = 0;
var guessLeft = 10;

var userChoiceText = document.getElementById("userguess-text");
var psychicText = document.getElementById("psychic-text");
var winsText = document.getElementById("userwins-text");
var loseText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left");



document.onkeyup = function (event) {
    var userGuess = event.key;

    var lettersListRand = lettersList[Math.floor(Math.random() * lettersList.length)];

    var lowerCaseGuess = userGuess.toLowerCase();

    if (lettersList.indexOf(lowerCaseGuess) === -1) {
        alert("please choose a letter between a-g! You lost :(")
    }
    if (lowerCaseGuess === lettersListRand) {
        wins++;
        guessLeft = 10;
    }
    else if (guessLeft === 0) {
        alert("Game Over. Press any key to play again!")
        guessLeft = 10;
        wins = 0;
        losses = 0;
    }
    else {
        losses++;
        guessLeft--;
    }


    userChoiceText.textContent = newFunction() + userGuess;

    psychicText.textContent = "The letter was: " + lettersListRand;
    winsText.textContent = "Wins: " + wins;
    loseText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guessLeft;

};

function newFunction() {
    return "You guessed: ";
}

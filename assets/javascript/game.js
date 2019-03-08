
var lettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessLeft = 10;
var userLetters= [];

var lettersListRand = lettersList[Math.floor(Math.random() * lettersList.length)];

var winsText = document.getElementById("userwins-text");
var loseText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left");
var guessedLetters = document.getElementById("guessed-letters");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var lowerCaseGuess = userGuess.toLowerCase();

    function addUserInput() {
        userLetters.push(" " + userGuess);
        return userLetters;}

    if (lowerCaseGuess === lettersListRand) {
        wins++;
        beginGameAgain();
    }
    if (guessLeft === 0) {
        losses++;  
        beginGameAgain();   
    }
    else {
        guessLeft--;
    }

    winsText.textContent = "Wins: " + wins;
    loseText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guessLeft;
    guessedLetters.textContent = "You Guessed:" + addUserInput();
};

function beginGameAgain() {
    guessLeft = 10;
    userLetters= [];
    lettersListRand = lettersList[Math.floor(Math.random() * lettersList.length)];
}
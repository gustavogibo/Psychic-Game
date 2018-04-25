/*

Variables needed for the game:

- Wins
- Losses
- Guesses
- Guesses left
- Letter to be guessed = randomLetter

*/
/*
    Using three native functions to generate my random letter
    fromCharCode = Returns a string created from the specified sequence of UTF-16 code units.
    math.floor = Returns the largest integer less than or equal to a given number.
    math.random = Returns a floating-point, pseudo-random number in the range from 0 inclusive up to but not including 1
*/
var randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

// Declaring Wins, Losses, Guesses and Actual Guesses
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessList = [];

var divWin = document.getElementById("user-choice");
var divLoss = document.getElementById("user-losses");
var divGuess = document.getElementById("guess-number");
var divGuessLeft = document.getElementById("guess-left");
var divGuessSoFar = document.getElementById("guess-so-far");

document.onkeyup = function(event) {

    var userGuess = event.key;
        userGuess = userGuess.toLowerCase();

    if(userGuess != randomLetter) {

        guessesLeft--;
        
        if (guessesLeft == 0) {

            randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            losses++;
            guesses = 0;
            guessesLeft = 9;
            guessList = [];

            divLoss.textContent = losses;
            divGuess.textContent = guesses;
            divGuessLeft.textContent = guessesLeft;
            divGuessSoFar.textContent = "---";
            
        } else {
            
        }
        guessList.push(userGuess);
    }

};

// console.log(randomLetter);


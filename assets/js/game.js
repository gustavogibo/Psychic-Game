/*

Variables needed for the game:

- Wins
- Losses
- Guesses
- Guesses left
- Letter to be guessed = randomLetter

*/

// Declaring the var randomLetter (responsible for storaging the letter to be guesses)
var randomLetter = "";

/*
    Using three native functions to generate my random letter
    fromCharCode = Returns a string created from the specified sequence of UTF-16 code units.
    math.floor = Returns the largest integer less than or equal to a given number.
    math.random = Returns a floating-point, pseudo-random number in the range from 0 inclusive up to but not including 1
*/
randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

// Declaring Wins, Losses, Guesses and Actual Guesses
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessList = [];

var divWin = document.getElementById("user-choice");
var divLoss = document.getElementById("user-losses");
var divGuessLeft = document.getElementById("guess-left");
var divGuessSoFar = document.getElementById("guess-so-far");

// console.log(randomLetter);


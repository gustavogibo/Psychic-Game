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
var printGuessList = "";

var divWin = document.getElementById("user-wins");
var divLoss = document.getElementById("user-losses");
var divGuess = document.getElementById("guess-number");
var divGuessLeft = document.getElementById("guess-left");
var divGuessSoFar = document.getElementById("guess-so-far");

document.onkeyup = function(event) {

    var userGuess = event.key;
        userGuess = userGuess.toLowerCase();

    // If the user guesses wrong
    if(userGuess != randomLetter) {

        guessesLeft--;
        
        // If user has no more guesses left
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
        
        // Otherwise, increase the guess number, decrease the remaining guesses and increase the Guesses done so far
        } else {

            guesses++;
            guessList.push(userGuess);

            divGuess.textContent = guesses;
            divGuessLeft.textContent = guessesLeft;

            printGuessList = "";
            for (let i = 0; i < guessList.length; i++) {

                if (i == guessList.length-1) {
                
                    printGuessList+=" "+guessList[i];
                
                } else {
                    
                    printGuessList+=" "+guessList[i]+",";
                }
            }
            divGuessSoFar.textContent = printGuessList;
        }

        

    } else {

        wins++;
        guesses = 0;
        guessesLeft = 9;
        guessList = [];

        divWin.textContent = wins;
        divGuess.textContent = guesses;
        divGuessLeft.textContent = guessesLeft;
        divGuessSoFar.textContent = "---";

        randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

        console.log("You win! The letter was " +randomLetter);

    }

};

// console.log(randomLetter);


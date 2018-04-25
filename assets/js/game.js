/*

Variables needed for the game:

- Wins
- Losses
- Guesses
- Guesses left
- Letter to be guessed = randomLetter

*/

/*
    Function to make a div appear or disappear
    Arguments:
        statement = 1 - Div Appears
                    2 - Div Disappears
        divName = The div ID that you want to appear/disappear
*/
function toggleDiv(statement, divName) {

    var element = document.getElementById(divName);

    if(statement != 0) {

        element.classList.remove("invisible");

    } else {

        element.classList.add("invisible");

    }
    
}

function changeDivContent(divName, content) {

    var element = document.getElementById(divName);

    element.textContent = content;

}
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

            changeDivContent("user-losses", losses);
            changeDivContent("guess-number", guesses);
            changeDivContent("guess-left", guessesLeft);
            changeDivContent("guess-so-far", "---");

            // divLoss.textContent = losses;
            // divGuess.textContent = guesses;
            // divGuessLeft.textContent = guessesLeft;
            // divGuessSoFar.textContent = "---";
        
        // Otherwise, increase the guess number, decrease the remaining guesses and increase the Guesses done so far
        } else {

            guesses++;
            guessList.push(userGuess);

            changeDivContent("guess-number", guesses);
            changeDivContent("guess-left", guessesLeft);

            // divGuess.textContent = guesses;
            // divGuessLeft.textContent = guessesLeft;

            printGuessList = "";
            for (let i = 0; i < guessList.length; i++) {

                if (i == guessList.length-1) {
                
                    printGuessList+=" "+guessList[i];
                
                } else {
                    
                    printGuessList+=" "+guessList[i]+",";
                }
            }
            changeDivContent("guess-so-far", printGuessList);
            // divGuessSoFar.textContent = printGuessList;
        }

        

    } else {

        wins++;
        guesses = 0;
        guessesLeft = 9;
        guessList = [];

        changeDivContent("user-wins", wins);
        changeDivContent("guess-number", guesses);
        changeDivContent("guess-left", guessesLeft);
        changeDivContent("guess-so-far", "---");

        // divWin.textContent = wins;
        // divGuess.textContent = guesses;
        // divGuessLeft.textContent = guessesLeft;
        // divGuessSoFar.textContent = "---";

        toggleDiv(1, "box-victory");
        changeDivContent("misterious-letter", randomLetter);

        var audio = new Audio('../audio/ff7.mp3');
        audio.play();

        randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    }

};

// console.log(randomLetter);


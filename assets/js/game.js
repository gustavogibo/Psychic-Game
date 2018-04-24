/*

Variables needed for the game:

- Wins
- Losses
- Guesses
- Actual Guesses
- Letter to be guessed = randomLetter

*/

// Declaring the var randomLetter (responsible for putting )
var randomLetter = "";
randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

console.log(randomLetter);


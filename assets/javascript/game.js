// The purpose of this game is to have the computer pick a random letter and guess it.
// The user will have 9 guesses to pick the correct letter
// If the user picks the correct letter, a point will logged and counted.
// If the user does not guess the correct letter, a point for a loss will be counted and logged.


// first variable is setup as an array containing a string of alphabets
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Next set of variables  is for the counting and logging of the wins, losses, and remaining guesses.
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
// guessesSoFar is an array capture the users key strokes with the []
var guessesSoFar = [];
// null is used b/c there is no telling what the end user will select. It's undefined.
var userGuess = null;
// var letterToBeGuessed is defined byt the alphabet array which is using Math.Floor(Math.randon)*xxxx.length)] to pick random letters.
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
// console.log is going to output in console the wins, losses, remaining guesses,
console.log("Wins: " + wins + " Losses: " + losses + " GuessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// xxx.onkeyup records the outup as so as the key is lifted.
document.onkeyup = function(event) {

    // I have no idea how this string works, but when I take it out, the code breaks and doesn't function.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //I don't fully understand the && but, indexOf loops back to the first occurance of 9 guesses, as wells a the alphabet array resets.
    if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        // if it is a new letter then decrease remaining guesses by 1
        guessesRemaining--;
    }

    // if letterToBeGuessed is equal == to the userGuess, them wins++ will add 1 number value to the win output in console and the screen.
    // and then reset guessesRemaining to 9, and empty the guessesSoFar array and the computer will make a new selection.
    if (letterToBeGuessed == userGuess) {
        wins++;
        console.log("You won!");
        guessesRemaining = 9;
        guessesSoFar = [];
        letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }

    // this function is the same as the last, except losses++ will add one number value to the lost output in console and the screen.
    if (guessesRemaining == 0) {
        losses++;
        console.log("You lost!");
        guessesRemaining = 9;
        guessesSoFar = [];
        letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }

    // Displaying progress to HTML
    var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guesssss what letter I'm thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesRemaining + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
    // this links all the code back to the hmtl on line code 35 in the html
    document.querySelector("#game").innerHTML = html;

}

// put game logic here
//create a game where you must guess what letter the computer is thinking.
// You play by pressing random letters.
//The computer will either be thinking of the same letter or not.
//if it's guess of the same letter, you win.  If not you lose.
// You will have a finite (10) amount of guesses before you either log a win or loss.
//Your values will output on the screen
//There will be a visible log for wins and losses that output to the screen.
// The amount of guesses will count down from 10-0 and will also show one the screen underneath the win loss output-
//if you guess the right letter the game resets and logs a win.
//if you get to 0 without guessing the letter, a loss is logged and the game resets
// you will also be able to see your letter guesses used on the screen - up to ten characters.
var pychGame = document.getElementById('game');
console.log(pychGame);

pychGame.textContent = 'Suck it js';
//set define variables wins and losses
var wins, losses;
// define wins and losses as starting with 0.  The function states if iWin, add 1 to win.   If iLose add 1 to losses.
// and repeat.
var wins = 0,
    losses = 0;

function iWin() {
    wins += 1;
}

function iLose() {
    losses += 1;
}

////////////////////////////////////////////////////////////------------------------------------------------------------
// created an array of letters.  var is set to letters so, letters will use [Math.floor(Math.random() * letters.length)]
// to  something about randomly picking a letter value based off it's numeric place in the array.  I.e. it will
// randomly pick 2 or "c", and the next time it will randomly pic 9 or "j"
////////////////////////////////////////////////////////////------------------------------------------------------------

function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

('#letter').html(randLetter())

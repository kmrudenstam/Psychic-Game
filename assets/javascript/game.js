// How game works
// 1. Computer picks random letter
// 2. User guesses letter
// 3. Decide if user guess matches computer choice
//    - if yes, user wins
//    - if no, log letter as incorrect & subtract 1 from guesses left
// 4. Log wins/losses
// 5. Restart game with new letter


//Create array of letters to be guessed
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]


// Cerate variables for wins, losses, guesses left & guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var computerGuess = [];


// As page load, computer randomly picks a letter for player to guess
window.onload = function() {
  var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);

  // Function to run when player presses a key
  document.onkeyup = function(event) {
      var userGuess = event.key;
      guessedLetters.push (userGuess);
      console.log(userGuess)

      document.getElementById("guessedLetters").innerHTML = ("Guessed Letters: " + userGuess);
      console.log(guessedLetters);

      // Function to run when player guesses the RIGHT letter to reset game
      if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        guessedLetters.length = 0;
        computerGuess.length = 0;
        var compChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        computerGuess.push(compChoice);
        console.log(computerGuess);
        document.getElementById("wins").innerHTML = ("Wins: " + wins);
      }

      // Function to run if player guesses INCORRECT letter, subtract 1 guess & add incorrect letter to guessedLetters
      else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft-1;
        console.log(guessesLeft);
        document.getElementById("guessesLeft").innerHTML = ("Remaining Guesses: " + guessesLeft);

      }

      // Function to run if player makes NINE INCORRECT guesses & looses game
      else {
        losses++;
        guessesLeft = 9;
        guessedLetters.length = 0;
        computerGuess.length = 0;
        var compChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        computerGuess.push(compChoice);
        document.getElementById("losses").innerHTML = ("Losses: " + losses);
        console.log(computerGuess[0]);
      }

  };
      
};
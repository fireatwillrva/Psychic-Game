//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

// Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Allows the user 9 guesses
var updateGuessesLeft = function() {
  // Inserts how many guesses are left into the div
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};
// Updates the letter of the computer's choice 
var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Take the guesses the user has tried then display them as letters separated by commas. 
  document.querySelector('#guesses').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Reset function to return guesses to 0
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];
  // Update variables
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}
// Update new computer choice
updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
  // Reduce guesses left by 1
  guessesLeft--;
  // User guess determined by key being released
  var userGuess = event.key;
  // Append guessed letters to end of user's guesses
  guessedLetters.push(userGuess);
  // Update how many guesses are left
  updateGuessesLeft();
  // Update how many guesses have been guessed
  updateGuessesSoFar();
        // If guesses left is greater than 0
        if (guessesLeft > 0){
            // and the user guesses the computer's letter choice
            if (userGuess == letterToGuess){
                // amount of wins will increase by 1
                wins++;
                // Insert how many wins you have into the div
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                // Alerts that you are psychic
                alert("Yes, you are psychic!");
                // Game resets
                reset();
            }
        }
        // if there are no guesses left
        else if(guessesLeft == 0){
            // we will lose and increase amount of losses by 1
            losses++;
            // insert how many losses we have into the div
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            // Alert that you're not psychic
            alert("Sorry, you're not psychic. Try again?");
            // Game resets 
            reset();
        }
};

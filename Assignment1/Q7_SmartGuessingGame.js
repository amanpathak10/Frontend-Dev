// Q7. Smart Guessing Game (Number Range)
// This program enhances the guessing game by allowing range checking

// Generate a random secret number between 1-50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Let userGuess be a variable with a test value
const userGuess = 25; // Example guess

// Evaluate the guess
let result;
if (userGuess === secretNumber) {
    result = "Correct guess!";
} else if (Math.abs(userGuess - secretNumber) <= 3) {
    result = "Very close!";
} else if (userGuess > secretNumber) {
    result = "Too high";
} else {
    result = "Too low";
}

// Display results
console.log("Smart Guessing Game");
console.log("==================");
console.log(`Secret Number: ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);
console.log(`Result: ${result}`);
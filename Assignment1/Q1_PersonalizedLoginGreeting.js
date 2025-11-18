// Q1. Personalized Login Greeting
// This program greets users with time-based messages

// Declare variables for user name and current hour
const userName = "John"; // Example user name
const currentHour = new Date().getHours(); // Get current hour (0-23)

// Determine greeting based on time of day
let greeting;
if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

// Display the greeting
console.log(greeting);
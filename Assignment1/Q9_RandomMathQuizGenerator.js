// Q9. Random Math Quiz Generator
// This program generates random arithmetic challenges and evaluates user answers automatically

// Generate two random numbers between 1-20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Array of operators
const operators = ['+', '-', '*', '/'];

// Select a random operator
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

// Calculate the correct answer using switch statement
let correctAnswer;
switch (operator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        // For division, ensure we don't divide by zero and round to two decimals
        if (num2 !== 0) {
            correctAnswer = parseFloat((num1 / num2).toFixed(2));
        } else {
            // If second number is 0, regenerate it to be 1
            correctAnswer = num1;
        }
        break;
    default:
        correctAnswer = 0;
}

// Display question and correct answer
console.log("Random Math Quiz Generator");
console.log("========================");
console.log(`Question: ${num1} ${operator} ${num2} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);
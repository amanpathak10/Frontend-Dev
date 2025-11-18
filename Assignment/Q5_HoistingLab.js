"use strict";

// Q5 – Hoisting Lab: The Sequence Trap
console.log("=== Q5 – Hoisting Lab: The Sequence Trap ===\n");

console.log("1. Predicting the output before running:");

console.log("First console.log(score):");
console.log("  - Prediction: undefined (score is hoisted but not initialized)");
console.log("  - Explanation: var declarations are hoisted to the top of their scope");

console.log("announce():");
console.log("  - Prediction: 'Game started'");
console.log("  - Explanation: Function declarations are fully hoisted");

console.log("let status = 'ready':");
console.log("  - Prediction: ReferenceError if accessed before declaration");
console.log("  - Explanation: let variables are in Temporal Dead Zone before declaration");

console.log("startGame():");
console.log("  - Prediction: ReferenceError for accessing 'status' before initialization");
console.log("  - Explanation: Cannot access 'status' before initialization");

console.log("\n2. Actual output when running:");
try {
    console.log("First console.log(score):", score); // undefined due to hoisting
} catch (error) {
    console.log("Error:", error.message);
}

try {
    announce(); // Works fine due to function hoisting
} catch (error) {
    console.log("Error:", error.message);
}

var score = 50;

function announce() { 
    console.log("Game started"); 
}

try {
    console.log("let status:", status); // Would cause error if uncommented
} catch (error) {
    console.log("Error accessing status before declaration:", error.message);
}

let status = "ready";

try {
    startGame(); // Will cause error due to TDZ
} catch (error) {
    console.log("Error calling startGame():", error.message);
}

function startGame() {
    console.log(status);
}

console.log("\n3. Hoisted elements' memory state:");
console.log("- 'score' variable is hoisted and initialized with 'undefined'");
console.log("- 'announce' function is fully hoisted with its body");
console.log("- 'status' variable is hoisted but in Temporal Dead Zone");
console.log("- 'startGame' function is fully hoisted with its body");

console.log("\n4. Fixed code:");
var fixedScore = 50;
console.log("Fixed score:", fixedScore);

function fixedAnnounce() { 
    console.log("Game started"); 
}
fixedAnnounce();

let fixedStatus = "ready";
function fixedStartGame() {
    console.log("Fixed startGame status:", fixedStatus);
}
fixedStartGame();

console.log("\n5. Rewritten with arrow functions:");
const arrowAnnounce = () => { 
    console.log("Arrow function game started"); 
};
arrowAnnounce();

// Arrow functions are not hoisted the same way as function declarations
// They follow const/let hoisting rules (Temporal Dead Zone)

const arrowStartGame = () => {
    console.log("Arrow function startGame status:", fixedStatus);
};
arrowStartGame();

console.log("\n6. Hoisting differences:");
console.log("- Function declarations are fully hoisted and can be called before definition");
console.log("- Arrow functions are not hoisted as functions; they follow variable hoisting rules");
console.log("- var variables are hoisted and initialized with undefined");
console.log("- let/const variables are hoisted but remain in Temporal Dead Zone until declaration");
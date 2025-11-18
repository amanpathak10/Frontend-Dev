"use strict";

// Q4 – Debugging Mystery
console.log("=== Q4 – Debugging Mystery ===\n");

// Original code that throws an error under strict mode
console.log("1. Original code with error:");
try {
    function showMessage() {
        greeting = "Welcome"; // undeclared
        console.log(greeting);
    }
    showMessage();
} catch (error) {
    console.log("Error caught:", error.message);
    console.log("Type:", error.name);
}

console.log("\n2. Explanation:");
console.log("Under strict mode, assigning a value to an undeclared variable throws a ReferenceError.");
console.log("Without strict mode, this would create a global variable 'greeting' implicitly.");
console.log("Strict mode prevents accidental global variable creation.");

console.log("\n3. Fixed version:");
function showMessageFixed() {
    let greeting = "Welcome"; // properly declared
    console.log(greeting);
}
showMessageFixed();

console.log("\n4. Scope declaration rules explanation:");
console.log("- Without strict mode: Undeclared variables become global properties");
console.log("- With strict mode: Undeclared variables cause ReferenceError");
console.log("- Proper practice: Always declare variables with let, const, or var");

console.log("\n5. To debug with breakpoints in VS Code:");
console.log("- Set a breakpoint on the line with the variable assignment");
console.log("- Run the program in debug mode (F5)");
console.log("- Observe variable states in the Variables panel");
console.log("- Check the Call Stack panel to see function execution order");
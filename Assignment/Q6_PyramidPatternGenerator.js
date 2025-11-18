"use strict";

// Q6 – Pyramid Pattern Generator
console.log("=== Q6 – Pyramid Pattern Generator ===\n");

// Function to generate pyramid pattern
function generatePyramid(rows = 5) {
    console.log(`Generating pyramid with ${rows} rows:`);
    
    // Using let (proper block-scoped variable)
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
    console.log(""); // Empty line for spacing
}

// Using var (function-scoped variable) - observe differences
function generatePyramidWithVar(rows = 5) {
    console.log(`Generating pyramid with var (rows = ${rows}):`);
    
    for (var i = 1; i <= rows; i++) {
        var pattern = "";
        for (var j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
    console.log(""); // Empty line for spacing
    
    // Demonstrating var hoisting issue
    console.log("Value of i after loop (var):", i); // i is still accessible
    console.log("Value of j after loop (var):", j); // j is still accessible
}

// Generate default pyramid (5 rows)
generatePyramid();

// Generate pyramid with user input (4 rows as example)
generatePyramid(4);

// Generate pyramid with var to observe differences
generatePyramidWithVar(4);

console.log("=== Debugging Observations ===");
console.log("1. With 'let': Variables are block-scoped and not accessible outside their blocks");
console.log("2. With 'var': Variables are function-scoped and accessible throughout the function");
console.log("3. In debugger:");
console.log("   - Set breakpoints inside each loop");
console.log("   - Watch how 'i' and 'j' values change with each iteration");
console.log("   - Notice how 'let' variables are recreated in each loop iteration");
console.log("   - Notice how 'var' variables retain their last value");

// Demonstrate strict mode catching undeclared variables
console.log("\n=== Strict Mode Variable Checking ===");
try {
    // This would throw an error in strict mode if uncommented
    // undeclaredVariable = "This will cause an error in strict mode";
} catch (error) {
    console.log("Caught error:", error.message);
}

console.log("In strict mode, undeclared variables cause ReferenceError instead of creating globals");

// Example showing how strict mode catches undeclared loop variables
console.log("\nExample of strict mode catching undeclared loop variable:");
try {
    // The following would cause an error in strict mode if we forgot 'let'/'var'/'const'
    // for (index = 0; index < 3; index++) { // Missing declaration
    //     console.log(index);
    // }
    console.log("Commented out to prevent error, but in strict mode this would throw ReferenceError");
} catch (error) {
    console.log("Caught error:", error.message);
}
"use strict";

// Q8 – Strict Mode Showdown
console.log("=== Q8 – Strict Mode Showdown ===\n");

console.log("1. Running with 'use strict':");

// Function with strict mode violations
function demo(a, a) {  // Duplicate parameter names
    total = 10;        // Implicit global variable
    // delete total;   // REMOVED: Cannot delete identifiers in strict mode
    return a + total;
}

try {
    const result = demo(5, 10);
    console.log("Result:", result);
} catch (error) {
    console.log("Error caught:", error.message);
    console.log("Error type:", error.name);
}

console.log("\n2. Same code without strict mode:");
console.log("(Simulating by wrapping in a function without 'use strict')");

// Function without strict mode
function nonStrictDemo() {
    // Removing "use strict" directive
    function demo(a, a) {  // Duplicate parameter names - allowed in non-strict mode
        total = 10;        // Implicit global variable - creates global property
        // delete total;   // REMOVED: Cannot delete identifiers in strict mode
        return a + total;
    }
    
    try {
        const result = demo(5, 10);
        console.log("Result:", result);
        console.log("Global 'total' exists:", 'total' in globalThis);
    } catch (error) {
        console.log("Error caught:", error.message);
        console.log("Error type:", error.name);
    }
}

// Execute non-strict version
nonStrictDemo();

console.log("\n3. Errors and behavior differences:");
console.log("- Duplicate parameter names:");
console.log("  * Strict mode: SyntaxError - not allowed");
console.log("  * Non-strict mode: Last parameter value is used");

console.log("- Implicit global variables:");
console.log("  * Strict mode: ReferenceError - must declare variables");
console.log("  * Non-strict mode: Creates global property silently");

console.log("- Deleting variables:");
console.log("  * Strict mode: SyntaxError - cannot delete variables");
console.log("  * Non-strict mode: Silently fails or deletes in some cases");

console.log("\n4. Correct version using ES6 rules:");

// Corrected version using ES6+ rules
function correctDemo(a, b) {  // Unique parameter names
    let total = 10;           // Properly declared variable
    // delete total;          // Not deleting variables (would cause error in strict mode)
    return a + b + total;
}

try {
    const correctResult = correctDemo(5, 10);
    console.log("Correct version result:", correctResult);
} catch (error) {
    console.log("Error in correct version:", error.message);
}

console.log("\n5. Why strict mode makes these operations illegal:");
console.log("- Prevents accidental global variable creation");
console.log("- Catches common coding mistakes early");
console.log("- Eliminates silent failures");
console.log("- Improves performance by allowing JavaScript engines to optimize");
console.log("- Makes code more predictable and easier to debug");

console.log("\n6. Additional strict mode restrictions:");
console.log("- Assigning to undeclared variables throws ReferenceError");
console.log("- Assigning to read-only properties throws TypeError");
console.log("- Deleting undeletable properties throws TypeError");
console.log("- Duplicate parameter names in functions throw SyntaxError");
console.log("- Octal literals (e.g., 0123) throw SyntaxError");
console.log("- Using 'with' statement throws SyntaxError");
console.log("- Accessing 'arguments.caller' and 'arguments.callee' throws TypeError");
"use strict";

// Q10 – Nested Hoisting and Closures
console.log("=== Q10 – Nested Hoisting and Closures ===\n");

console.log("1. Original code prediction:");

console.log("outer() execution:");
console.log("- First console.log(count): undefined (hoisted var count)");
console.log("- count assigned value 5");
console.log("- inner() called:");
console.log("  * First console.log(count): undefined (hoisted var count in inner scope)");
console.log("  * count assigned value 10");
console.log("- inner() completes");

console.log("\n2. Actual execution:");

function outer() {
    console.log("outer - count:", count); // undefined due to hoisting
    var count = 5;
    
    function inner() {
        console.log("inner - count:", count); // undefined due to hoisting in inner scope
        var count = 10;
    }
    inner();
}
outer();

console.log("\n3. Explanation of output:");
console.log("- Both 'count' variables are hoisted to their respective function scopes");
console.log("- Each 'count' is initialized with 'undefined' initially");
console.log("- The inner 'count' shadows the outer 'count' within the inner function");
console.log("- Variable assignments happen after hoisting");

console.log("\n4. How hoisting creates separate memory contexts:");
console.log("- Outer function has its own execution context with 'count' variable");
console.log("- Inner function has its own execution context with its own 'count' variable");
console.log("- The inner 'count' is completely separate from the outer 'count'");
console.log("- This is an example of variable shadowing");

console.log("\n5. Fixed version with proper scoping:");

function fixedOuter() {
    var count = 5; // Declare and initialize first
    console.log("fixedOuter - count:", count); // Now shows 5
    
    function fixedInner() {
        var count = 10; // Declare and initialize first
        console.log("fixedInner - count:", count); // Now shows 10
    }
    fixedInner();
}
fixedOuter();

console.log("\n6. Version demonstrating closure (accessing outer variable):");

function closureOuter() {
    var count = 5;
    console.log("closureOuter - count:", count);
    
    function closureInner() {
        // Accessing outer scope's count (no var declaration here)
        console.log("closureInner - count:", count); // Shows 5 from outer scope
        count = 10; // Modifying outer scope's count
        console.log("closureInner - count after modification:", count); // Shows 10
    }
    closureInner();
    console.log("closureOuter - count after inner execution:", count); // Shows 10
}
closureOuter();

console.log("\n7. Converting inner function to arrow function:");

function arrowOuter() {
    console.log("arrowOuter - count:", count); // undefined due to hoisting
    var count = 5;
    
    // Arrow function version
    const arrowInner = () => {
        console.log("arrowInner - count:", count); // undefined due to hoisting
        var count = 10;
    };
    
    arrowInner();
}
arrowOuter();

console.log("\n8. Behavior changes with arrow functions:");
console.log("- Arrow functions don't have their own 'this' context");
console.log("- Arrow functions don't have 'arguments' object");
console.log("- In terms of hoisting, arrow functions behave like variables (not hoisted as functions)");
console.log("- Arrow functions are subject to Temporal Dead Zone if declared with let/const");

console.log("\n9. Closure with arrow function:");

function arrowClosureOuter() {
    var count = 5;
    console.log("arrowClosureOuter - count:", count);
    
    // Arrow function accessing outer scope
    const arrowClosureInner = () => {
        console.log("arrowClosureInner - count:", count); // Shows 5 from outer scope
        count = 10;
        console.log("arrowClosureInner - count after modification:", count); // Shows 10
    };
    
    arrowClosureInner();
    console.log("arrowClosureOuter - count after inner execution:", count); // Shows 10
}
arrowClosureOuter(); // Fixed: Call the correct function

console.log("\n10. Debug session and call stack flow:");
console.log("In VS Code debugger:");
console.log("- Set breakpoints on each console.log statement");
console.log("- Observe the Call Stack panel showing function execution order");
console.log("- Watch variables panel shows current values of 'count' in each scope");
console.log("- Local scope shows variables in current function");
console.log("- Closure scope shows variables from outer functions");
console.log("- Global scope shows global variables");

console.log("\nExecution order:");
console.log("1. outer() is called");
console.log("2. outer's execution context is created");
console.log("3. 'count' is hoisted in outer scope (value: undefined)");
console.log("4. First console.log executes (shows undefined)");
console.log("5. 'count' is assigned value 5");
console.log("6. inner() is called");
console.log("7. inner's execution context is created");
console.log("8. 'count' is hoisted in inner scope (value: undefined)");
console.log("9. Second console.log executes (shows undefined)");
console.log("10. 'count' is assigned value 10 in inner scope");
console.log("11. inner() completes and its execution context is destroyed");
console.log("12. outer() completes and its execution context is destroyed");
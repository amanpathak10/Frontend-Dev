"use strict";

// Q7 – Smart Calculator
console.log("=== Q7 – Smart Calculator ===\n");

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

// Custom error class
class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

// Calculator function
function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
            
        case "subtract":
            return a - b;
            
        case "multiply":
            return a * b;
            
        case "divide":
            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return a / b;
            
        case "power":
            return Math.pow(a, b);
            
        case "root":
            if (a < 0) {
                throw new Error("Cannot calculate square root of negative number");
            }
            return Math.sqrt(a);
            
        default:
            throw new InvalidOperationError(`Invalid operation: ${operation}`);
    }
}

// Process each operation
console.log("Processing operations:\n");

const results = [];
const errors = [];

operations.forEach(op => {
    try {
        let result;
        if (op === "root") {
            // Root operation only uses the first number
            result = calculate(op, num1, null);
            console.log(`${op}(${num1}) = ${result}`);
        } else {
            result = calculate(op, num1, num2);
            console.log(`${op}(${num1}, ${num2}) = ${result}`);
        }
        
        results.push({
            operation: op,
            num1: num1,
            num2: op === "root" ? null : num2,
            result: result
        });
    } catch (error) {
        console.log(`${op}(${num1}, ${num2}) => Error: ${error.message}`);
        errors.push({
            operation: op,
            error: error.message,
            type: error.name
        });
    }
});

// Test with an invalid operation
try {
    const invalidResult = calculate("modulo", num1, num2);
    console.log(`modulo(${num1}, ${num2}) = ${invalidResult}`);
} catch (error) {
    console.log(`modulo(${num1}, ${num2}) => Error: ${error.message}`);
    errors.push({
        operation: "modulo",
        error: error.message,
        type: error.name
    });
}

// Formatted summary
console.log("\n=== CALCULATION SUMMARY ===");
console.log("Successful Operations:");
results.forEach(item => {
    if (item.num2 === null) {
        console.log(`  ${item.operation}(${item.num1}) = ${item.result}`);
    } else {
        console.log(`  ${item.operation}(${item.num1}, ${item.num2}) = ${item.result}`);
    }
});

console.log("\nFailed Operations:");
errors.forEach(item => {
    console.log(`  ${item.operation}: ${item.error} (${item.type})`);
});

console.log(`\nTotal: ${results.length} successful, ${errors.length} failed operations.`);

// Additional test cases
console.log("\n=== ADDITIONAL TEST CASES ===");

// Test division by zero
try {
    const divResult = calculate("divide", 10, 0);
    console.log(`divide(10, 0) = ${divResult}`);
} catch (error) {
    console.log(`divide(10, 0) => Error: ${error.message}`);
}

// Test root of negative number
try {
    const rootResult = calculate("root", -25, null);
    console.log(`root(-25) = ${rootResult}`);
} catch (error) {
    console.log(`root(-25) => Error: ${error.message}`);
}

// Test valid operations
try {
    console.log(`add(10, 5) = ${calculate("add", 10, 5)}`);
    console.log(`subtract(10, 5) = ${calculate("subtract", 10, 5)}`);
    console.log(`power(2, 3) = ${calculate("power", 2, 3)}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
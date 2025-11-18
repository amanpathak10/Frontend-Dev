"use strict";

// Q9 – JSON Audit
console.log("=== Q9 – JSON Audit ===\n");

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

console.log("Processing raw data entries:\n");

const cleanData = [];
const errors = [];

rawData.forEach((entry, index) => {
    try {
        console.log(`Processing entry ${index + 1}: ${entry}`);
        
        // Parse JSON
        const parsed = JSON.parse(entry);
        
        // Check for required keys
        if (!parsed.hasOwnProperty('user')) {
            throw new Error(`Missing required key 'user' at line ${index + 1}`);
        }
        
        if (!parsed.hasOwnProperty('age')) {
            throw new Error(`Missing required key 'age' at line ${index + 1}`);
        }
        
        // Convert age to number
        const age = Number(parsed.age);
        if (isNaN(age)) {
            throw new Error(`Invalid age format at line ${index + 1}`);
        }
        
        // Add to clean data
        cleanData.push({
            user: parsed.user,
            age: age
        });
        
        console.log(`  ✓ Valid entry: ${parsed.user}, age ${age}\n`);
        
    } catch (error) {
        errors.push({
            line: index + 1,
            entry: entry,
            error: error.message
        });
        console.log(`  ✗ Error: ${error.message}\n`);
    }
});

console.log("=== CLEAN DATA REPORT ===");
cleanData.forEach((item, index) => {
    console.log(`${index + 1}. User: ${item.user}, Age: ${item.age}`);
});

console.log("\n=== ERROR REPORT ===");
errors.forEach((item, index) => {
    console.log(`${index + 1}. Line ${item.line}: ${item.error}`);
    console.log(`   Entry: ${item.entry}\n`);
});

// Filter under-18 users (bonus requirement)
console.log("=== USERS 18 AND OLDER ===");
const adultsOnly = cleanData.filter(user => user.age >= 18);
adultsOnly.forEach((user, index) => {
    console.log(`${index + 1}. ${user.user} (age ${user.age})`);
});

console.log(`\nSummary:`);
console.log(`- Total entries processed: ${rawData.length}`);
console.log(`- Valid entries: ${cleanData.length}`);
console.log(`- Invalid entries: ${errors.length}`);
console.log(`- Adults (18+): ${adultsOnly.length}`);

// Debug demonstration
console.log("\n=== DEBUGGING DEMONSTRATION ===");
console.log("To debug step-by-step:");
console.log("1. Set breakpoints at the start of the forEach loop");
console.log("2. Set breakpoints inside the try block");
console.log("3. Set breakpoints inside the catch block");
console.log("4. Observe how control flows when an error occurs");
console.log("5. Watch variables: entry, parsed, index");
console.log("6. Notice how execution jumps from try to catch on error");

// Additional test cases
console.log("\n=== ADDITIONAL TEST CASES ===");

const testCases = [
    '{"user":"Test","age":17}',     // Under 18
    '{"user":"Test2","age":"abc"}', // Invalid age
    '{"user":"Test3"}',             // Missing age
    '{"age":25}',                   // Missing user
    '{"user":"Test4","age":30}'     // Valid
];

const testClean = [];
const testErrors = [];

testCases.forEach((entry, index) => {
    try {
        const parsed = JSON.parse(entry);
        
        if (!parsed.hasOwnProperty('user')) {
            throw new Error(`Missing 'user' key`);
        }
        
        if (!parsed.hasOwnProperty('age')) {
            throw new Error(`Missing 'age' key`);
        }
        
        const age = Number(parsed.age);
        if (isNaN(age)) {
            throw new Error(`Invalid age format`);
        }
        
        testClean.push({user: parsed.user, age: age});
        console.log(`✓ Test ${index + 1}: Valid - ${parsed.user}, age ${age}`);
    } catch (error) {
        testErrors.push({entry: entry, error: error.message});
        console.log(`✗ Test ${index + 1}: Invalid - ${error.message}`);
    }
});

console.log(`\nTest Results: ${testClean.length} valid, ${testErrors.length} invalid`);
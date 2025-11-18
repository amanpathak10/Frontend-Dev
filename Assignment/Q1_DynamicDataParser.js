"use strict";

// Q1 – Dynamic Data Parser
// You receive mixed API data:
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid numeric data
const validNumbers = [];
const invalidNumbers = [];

console.log("=== Q1 – Dynamic Data Parser ===\n");

// Process each value in the apiData array
apiData.forEach((value, index) => {
    console.log(`Processing item ${index + 1}:`, value);
    
    // Convert to different types
    const asNumber = Number(value);
    const asBoolean = Boolean(value);
    const asString = String(value);
    
    console.log(`  As Number: ${asNumber} (${typeof asNumber})`);
    console.log(`  As Boolean: ${asBoolean} (${typeof asBoolean})`);
    console.log(`  As String: "${asString}" (${typeof asString})`);
    
    // Check if it's a valid number
    if (!isNaN(asNumber) && isFinite(asNumber) && asString.trim() !== "" && !asString.includes("px")) {
        validNumbers.push({
            originalValue: value,
            convertedNumber: asNumber
        });
        console.log("  Status: Valid number\n");
    } else {
        invalidNumbers.push({
            originalValue: value,
            reason: isNaN(asNumber) ? "Not a number" : 
                   asString.trim() === "" ? "Empty/whitespace" : 
                   asString.includes("px") ? "Contains non-numeric characters" : 
                   "Not finite"
        });
        console.log("  Status: Invalid number\n");
    }
});

// Print detailed report
console.log("=== VALID NUMBERS REPORT ===");
validNumbers.forEach((item, index) => {
    console.log(`${index + 1}. Original: ${item.originalValue} => Converted: ${item.convertedNumber}`);
});

console.log("\n=== INVALID NUMBERS REPORT ===");
invalidNumbers.forEach((item, index) => {
    console.log(`${index + 1}. Original: ${item.originalValue} => Reason: ${item.reason}`);
});

console.log(`\nSummary: ${validNumbers.length} valid numbers, ${invalidNumbers.length} invalid numbers.`);
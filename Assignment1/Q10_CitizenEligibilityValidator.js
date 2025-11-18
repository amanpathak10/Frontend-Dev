// Q10. Citizen Eligibility Validator
// This program evaluates if a person can vote, drive, and apply for a passport based on age and citizenship

// Input: age and isCitizen (boolean)
const age = 22; // Example age
const isCitizen = true; // Example citizenship status

// Use nested if-else and logical operators to determine eligibility
let eligibilityStatus;
if (isCitizen) {
    if (age >= 18) {
        eligibilityStatus = "Eligible for all services.";
    } else if (age >= 18 && age <= 20) {
        eligibilityStatus = "Eligible to vote only.";
    } else {
        eligibilityStatus = "Not eligible yet.";
    }
} else {
    if (age >= 18) {
        eligibilityStatus = "Only age criteria met.";
    } else {
        eligibilityStatus = "Not eligible yet.";
    }
}

// Display results
console.log("Citizen Eligibility Validator");
console.log("===========================");
console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen ? "Yes" : "No"}`);
console.log(`Status: ${eligibilityStatus}`);
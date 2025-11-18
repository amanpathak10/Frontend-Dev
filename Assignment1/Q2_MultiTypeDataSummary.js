// Q2. Multi-Type Data Summary
// This program simulates a database summary of various user data entries

// Declare variables of different data types
const name = "Alice"; // string
const age = 25; // number
const isStudent = true; // boolean
const hobbies = ["reading", "swimming", "coding"]; // array
const address = { street: "123 Main St", city: "New York" }; // object
const emptyValue = null; // null
const undefinedValue = undefined; // undefined

// Create an array of objects with label, value, and type information
const dataSummary = [
    { Label: "name", Value: name, Type: typeof name },
    { Label: "age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { Label: "address", Value: address, Type: typeof address },
    { Label: "emptyValue", Value: emptyValue, Type: typeof emptyValue },
    { Label: "undefinedValue", Value: undefinedValue, Type: typeof undefinedValue }
];

// Print the formatted report using console.table()
console.table(dataSummary);
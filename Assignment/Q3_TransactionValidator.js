"use strict";

// Q3 – Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store valid and invalid transactions
const validTransactions = [];
const invalidTransactions = [];

console.log("=== Q3 – Transaction Validator ===\n");

// Custom error classes
class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingPropertyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingPropertyError";
    }
}

class NullEntryError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullEntryError";
    }
}

// Process each transaction
transactions.forEach((transaction, index) => {
    try {
        console.log(`Processing transaction ${index + 1}:`, transaction);
        
        // Check for null entries
        if (transaction === null) {
            throw new NullEntryError(`Transaction at index ${index} is null`);
        }
        
        // Check for missing id
        if (transaction.id === undefined) {
            throw new MissingPropertyError(`Transaction at index ${index} is missing 'id' property`);
        }
        
        // Check for missing amount
        if (transaction.amount === undefined) {
            throw new MissingPropertyError(`Transaction ${transaction.id} is missing 'amount' property`);
        }
        
        // Check for negative amount
        if (transaction.amount < 0) {
            throw new NegativeAmountError(`Transaction ${transaction.id} has negative amount: ${transaction.amount}`);
        }
        
        // If all validations pass, add to valid transactions
        validTransactions.push(transaction);
        console.log(`  Transaction ${transaction.id} is valid\n`);
        
    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            error: error.message,
            type: error.name
        });
        console.log(`  Error: ${error.name} - ${error.message}\n`);
    }
});

// Print final reports
console.log("=== VALID TRANSACTIONS REPORT ===");
validTransactions.forEach(transaction => {
    console.log(`ID: ${transaction.id}, Amount: $${transaction.amount}`);
});

console.log("\n=== INVALID TRANSACTIONS REPORT ===");
invalidTransactions.forEach((item, index) => {
    console.log(`${index + 1}. Transaction: ${JSON.stringify(item.transaction)}`);
    console.log(`   Error Type: ${item.type}`);
    console.log(`   Message: ${item.error}\n`);
});

console.log(`Summary: ${validTransactions.length} valid transactions, ${invalidTransactions.length} invalid transactions.`);
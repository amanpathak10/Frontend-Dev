// Q3. Monthly Expense Tracker
// This script calculates total and average monthly expenses with dynamic updates

// Array of expenses for 5 categories
const expenses = {
    food: 350,
    travel: 200,
    rent: 1200,
    bills: 150,
    leisure: 100
};

// Calculate total expenses
let totalExpenses = 0;
for (const category in expenses) {
    totalExpenses += expenses[category];
}

// Calculate average expenses
const averageExpenses = totalExpenses / Object.keys(expenses).length;

// Add 10% tax to the total
const taxRate = 0.10;
const totalWithTax = totalExpenses + (totalExpenses * taxRate);

// Display results with proper formatting
console.log("Monthly Expense Tracker");
console.log("======================");
console.log(`Total Expenses: $${totalExpenses.toFixed(2)}`);
console.log(`Average Expenses: $${averageExpenses.toFixed(2)}`);
console.log(`Total with 10% Tax: $${totalWithTax.toFixed(2)}`);
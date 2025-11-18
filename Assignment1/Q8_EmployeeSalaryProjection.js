// Q8. Employee Salary Projection
// This program calculates a 5-year salary projection with yearly increments

// Declare current salary and annual increment rate
const currentSalary = 50000; // in dollars
const incrementRate = 5; // in percentage

// Create an array to store salary data for each year
const salaryProjection = [];

// Calculate salary for each of 5 years using a for loop
let salary = currentSalary;
for (let year = 1; year <= 5; year++) {
    // Add increment to salary
    salary = salary + (salary * incrementRate / 100);
    
    // Store year and salary in the array
    salaryProjection.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

// Print yearly salary in a formatted console table
console.log("Employee Salary Projection");
console.log("=========================");
console.log(`Current Salary: $${currentSalary}`);
console.log(`Annual Increment Rate: ${incrementRate}%`);
console.table(salaryProjection);
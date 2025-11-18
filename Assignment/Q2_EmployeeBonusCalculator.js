"use strict";

// Q2 – Employee Bonus Calculator
// Given employee data:
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Q2 – Employee Bonus Calculator ===\n");

// Process each employee
employees.forEach(employee => {
    try {
        // Convert salary and years to numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);
        
        // Validate conversion
        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid data for employee ${employee.name}`);
        }
        
        // Calculate bonus
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        
        // Print formatted details using template strings
        console.log(`Employee: ${employee.name}`);
        console.log(`  Salary: $${salary.toLocaleString()}`);
        console.log(`  Years of Service: ${years}`);
        console.log(`  Bonus: $${bonus.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
        console.log(`  Total Compensation: $${(salary + bonus).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`);
    } catch (error) {
        console.error(`Error processing employee ${employee.name}:`, error.message);
    }
});

// Test error handling with invalid data
console.log("--- Testing Error Handling ---");
const testEmployees = [
    { name: "Test1", salary: "invalid", years: "5" },  // Invalid salary
    { name: "Test2", salary: "40000" },               // Missing years
    { name: "Test3" }                                 // Missing both
];

testEmployees.forEach(employee => {
    try {
        const salary = Number(employee.salary) || 0;
        const years = Number(employee.years) || 0;
        
        if (!employee.salary) throw new Error("Missing salary");
        if (!employee.years) throw new Error("Missing years");
        if (isNaN(salary)) throw new Error("Invalid salary format");
        if (isNaN(years)) throw new Error("Invalid years format");
        
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        console.log(`${employee.name}: Bonus = $${bonus.toFixed(2)}`);
    } catch (error) {
        console.error(`Error for ${employee.name}:`, error.message);
    }
});
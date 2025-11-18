// Q4. Academic Performance Evaluator
// This program checks whether a student is promoted or not based on multiple subjects

// Input marks of 5 subjects
const subjectMarks = [85, 90, 78, 92, 88]; // Example marks

// Calculate total and average
let totalMarks = 0;
for (let i = 0; i < subjectMarks.length; i++) {
    totalMarks += subjectMarks[i];
}

const averageMarks = totalMarks / subjectMarks.length;
const percentage = (totalMarks / (subjectMarks.length * 100)) * 100;

// Check if any subject has less than 35 marks
let hasFailedSubject = false;
for (let i = 0; i < subjectMarks.length; i++) {
    if (subjectMarks[i] < 35) {
        hasFailedSubject = true;
        break;
    }
}

// Determine promotion status
let result;
if (hasFailedSubject) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

// Display results
console.log("Academic Performance Evaluation");
console.log("===============================");
console.log(`Subject Marks: ${subjectMarks.join(", ")}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
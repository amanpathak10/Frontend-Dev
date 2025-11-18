// Q6. Progressive Discount System
// This program applies dynamic discount tiers for shopping totals

// Input total purchase amount
const totalPurchase = 7500; // Example purchase amount

// Determine discount based on purchase amount
let discountPercentage;
if (totalPurchase >= 10000) {
    discountPercentage = 25;
} else if (totalPurchase >= 5000) {
    discountPercentage = 15;
} else if (totalPurchase >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount amount and final price
const discountAmount = (totalPurchase * discountPercentage) / 100;
const finalPrice = totalPurchase - discountAmount;

// Display results
console.log("Progressive Discount System");
console.log("==========================");
console.log(`Original Total: $${totalPurchase}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: $${Math.round(discountAmount)}`);
console.log(`Final Price: $${Math.round(finalPrice)}`);
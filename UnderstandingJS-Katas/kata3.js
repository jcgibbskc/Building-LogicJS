//Kata 3: Multiplication table using nested loops
// Commit 3: refactored for readability and spacing

// Outer loop controls the ROW (1 through 5)
for (let row = 1; row <= 5; row++) {

  // This string will hold all the values for one row
  let rowOutput = "";

  // Inner loop controls the COLUMN (1 through 5)
  for (let col = 1; col <= 5; col++) {

    // Multiply row by col and add a tab for spacing
    rowOutput += (row * col) + "\t";
  }

  // Print the completed row
  console.log(rowOutput);
}

// ---- Stretch Goal: Guard Clause Example ----
// A guard clause exits the function early if a condition isn't met
function printNumber(num) {
  // If the number is 0 or negative, stop here
  if (num <= 0) return console.log("Please enter a positive number.");

  // If we get here, the number is valid
  console.log("Number:", num);
}

// Test the guard clause
printNumber(5);
printNumber(-3);
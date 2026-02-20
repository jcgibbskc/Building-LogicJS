// Kata 1: Print the first 10 even numbers
// Commit 3: refactored variable names for clarity

// Start counter at 1, go up to 20
for (let counter = 1; counter <= 20; counter++) {
  // Check if the number is even using modulo
  if (counter % 2 === 0) {
    console.log(counter);
  }
}
// Kata 2: FizzBuzz from 1 to 20
// Commit 3: refactored with clear variables and comments

// Loop through every number from 1 to 20
for (let number = 1; number <= 20; number++) {

  // Check divisibility by both 3 and 5 first (most specific condition)
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");

  // Then check divisibility by 3 only
  } else if (number % 3 === 0) {
    console.log("Fizz");

  // Then check divisibility by 5 only
  } else if (number % 5 === 0) {
    console.log("Buzz");

  // Otherwise just print the number
  } else {
    console.log(number);
  }
}

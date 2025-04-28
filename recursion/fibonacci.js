// Iterative Version
function fibs(n) {
  // Return edge cases if n < 2
  if (n < 1) return [];
  else if (n === 1) return [0];

  // Initialise the first 2 values of the Fibonacci sequence
  const fibSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    // Add the new number in  the sequence by adding the two last values in the array
    let nextNum = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextNum);
  }

  return fibSequence;
}

// Testing the fibonacci sequence
console.log("\n----------------");
console.log("Testing Iterative");
console.log(`-2: ${fibs(-2)}`);
console.log(`0: ${fibs(0)}`);
console.log(`1: ${fibs(1)}`);
console.log(`8: ${fibs(8)}`);

// Recursive Version
function fibsRec(n, fibSequence = [0, 1]) {
  // Return edge cases if n < 2
  if (n < 1) return [];
  else if (n === 1) return [0];

  // Base Case -> When the fibSequence array hits the required length of n
  if (fibSequence.length === n) return fibSequence;

  // Recursive Case -> Add the new number in  the sequence by adding the two last values in the array and keep doing this till the base case is met
  let nextNum =
    fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
  fibSequence.push(nextNum);

  return fibsRec(n, fibSequence);
}

console.log("\n----------------");
console.log("Testing Recursive");
console.log(`-2: ${fibsRec(-2)}`);
console.log(`0: ${fibsRec(0)}`);
console.log(`1: ${fibsRec(1)}`);
console.log(`8: ${fibsRec(8)}`);

// Example: 4 * 3 * 2 * 1
// Example 2: 6 * 5 * 4 * 3 * 2 * 1

// iterative solution

// const factorialIterative = (num) => {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// };

// console.log(factorialIterative(3));

// recursively:

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5));

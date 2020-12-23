// Fizz Buzz
// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [];
  for (let i = 1; i<=n; i++){
    if (i % 3 === 0 && i % 5 === 0){
      result.push("FizzBuzz");
    }
    else if (i % 3 === 0){
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else result.push(i.toString());
  }
  return result;
};

// console.log(fizzBuzz(15));


// Count the number of prime numbers less than a non-negative number, n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

// boolean[] isPrime = new boolean[n];
//    for (int i = 2; i < n; i++) {
//       isPrime[i] = true;
//    }
//    // Loop's ending condition is i * i < n instead of i < sqrt(n)
//    // to avoid repeatedly calling an expensive function sqrt().
//    for (int i = 2; i * i < n; i++) {
//       if (!isPrime[i]) continue;
//       for (int j = i * i; j < n; j += i) {
//          isPrime[j] = false;
//       }
//    }
//    int count = 0;
//    for (int i = 2; i < n; i++) {
//       if (isPrime[i]) count++;
//    }
//    return count;

const countPrimes = n => {
  let isPrime = Boolean;
  for(let i = 2; i < n; i++){
    isPrime[i] = true;
  }
  for(let i = 2; i * i < n; i++){
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j+=i){
      isPrime[j] = false;
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++){
    if (isPrime[i]) count++;
  }
  return count;
}

console.log(countPrimes(10));


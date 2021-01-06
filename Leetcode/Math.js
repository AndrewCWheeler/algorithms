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
var fizzBuzz = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
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
  for (let i = 2; i < n; i++) {
    isPrime[i] = true;
  }
  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }
  return count;
};

// console.log(countPrimes(10));

// Power of Three

// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:
// Input: n = 27
// Output: true

// Example 2:
// Input: n = 0
// Output: false

// Example 3:
// Input: n = 9
// Output: true

// Example 4:
// Input: n = 45
// Output: false

// Constraints:
// -2^31 <= n <= 2^31 - 1

// Follow up: Could you do it without using any loop / recursion?

// How would I write this in recursion? Let's start with words:
// Taking the first example, the equation would look like this:

// n == 3^x
// 27 == 3^x

// In this case, x = 3 satisfies the condition and returns true in the function below.
// How would I calculate that x is 3 without simply knowing that 3 * 3 = 9 and 3 * 9 = 27?
// What is the relationship between n and x in this case? Put another way:
// The square root of n / 3? This works in this case, but does it work in other cases?
// It is only the square root of n in the case of n = 9, so the former equation is not consistent.
// In the case of n = 2, 2 is not a mulitple of 3. Is not being a multiple of 3 a neccessary condition?

// Necessary Condition: n must be a multiple 3, or n % 3 must === 0.

// But just because it is a multiple of 3 does necessarily satisfy isPowerOfThree. n = 45 is a case in point.
// 45 is a multiple of 3, but there is no number multiplied by itself and again by itself that equals 45.

// Let's stop and look up the formula for figuring out this equation is simple math terms (if such exist):

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
  if (n === 1) {
    return true;
  }
  for (let i = 1; i <= Math.pow(2, 31) - 1; i++) {
    let result = Math.pow(3, i);
    if (result === n) {
      return true;
    }
    if (result > n) {
      return false;
    }
  }
};
// console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(45));

const isPowerOfThreeVersion2 = n => {
  while (n > 1) {
    if (n % 3 === 0) {
      n /= 3;
    } else {
      break;
    }
  }
  return n === 1;
};
// console.log(isPowerOfThreeVersion2(27));
// console.log(isPowerOfThreeVersion2(90));

// Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3

// Example 2:
// Input: s = "IV"
// Output: 4

// Example 3:
// Input: s = "IX"
// Output: 9

// Example 4:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 5:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

const convert = char => {
  switch (char) {
    case 'I':
      char = 1;
      break;
    case 'V':
      char = 5;
      break;
    case 'X':
      char = 10;
      break;
    case 'L':
      char = 50;
      break;
    case 'C':
      char = 100;
      break;
    case 'D':
      char = 500;
      break;
    case 'M':
      char = 1000;
      break;
    default:
      break;
  }
  return char;
};

const reduce = pair => {
  let newVal = 0;
  switch (pair) {
    case 'IV':
      newVal = 4;
      break;
    case 'IX':
      newVal = 9;
      break;
    case 'XL':
      newVal = 40;
      break;
    case 'XC':
      newVal = 90;
      break;
    case 'CD':
      newVal = 400;
      break;
    case 'CM':
      newVal = 900;
      break;
    default:
      break;
  }
  return newVal;
};

const sumArr = a => {
  let total = 0;
  for (var i in a) {
    total += a[i];
  }
  return total;
};

const romanToInt = s => {
  let result = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let value = 0;
    if (s[i + 1] !== undefined) {
      let pair = s[i] + s[i + 1];
      if (
        pair === 'IV' ||
        pair === 'IX' ||
        pair === 'XL' ||
        pair === 'XC' ||
        pair === 'CD' ||
        pair === 'CM'
      ) {
        console.log(`This is your pair: ${pair}`);
        value = reduce(pair);
        arr.push(value);
        i++;
      } else {
        value = convert(s[i]);
        arr.push(value);
      }
    } else {
      value = convert(s[i]);
      arr.push(value);
    }
  }
  console.log(arr);
  result = sumArr(arr);
  return result;
};

console.log(romanToInt('MCMXCIV'));

// produced 1404. supposed to be 1994: why incorrect?

const romanToInt2 = s => {
  // create an object that assigns each string key to it's associated Roman numeral value
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // split the string s into an array and reduce the array by adding each value, accounting for exceptions by subtracting current from accumulator if the current value is less than the next value: which is the case for each of the 6 'exceptions'
  return s.split('').reduce((acc, ch, i) => {
    const current = symbols[ch];
    const next = symbols[s[i + 1]];

    if (current < next) return acc - current;
    return acc + current;
  }, 0);
};

console.log(romanToInt2('MCMXCIV'));

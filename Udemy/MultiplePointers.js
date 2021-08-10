// Multiple Pointers Pattern

// Creating powers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

// Very efficient for solving problems with minimal space complexity as well

// An Example:

// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// @slow @naive @working @inefficient
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// @working @correct @efficient
const sumZero2 = (arr) => {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    else arr[i] + arr[j] > 0 ? j-- : i++;
  }
};

const createArr = (n) => {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i);
  }
  return result;
};

// console.log(sumZero2([-4, -3, -1, 0, 7, 2, 5]));

// Count Unique Values
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers
// in the array, but it will always be sorted.

// @working @good @efficient
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0,
    j = 1;
  let count = 0;
  while (i < arr.length - 1) {
    if (arr[i] !== arr[j]) {
      if (j === arr.length - 1) {
        (count += 2), i++, j++;
      } else {
        count++;
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return count;
};

// let t1 = performance.now();
// console.log(countUniqueValues(createArr(100000000)));
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// @working @best @efficient @correct
const countUniqueValues2 = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

let t1 = performance.now();
console.log(countUniqueValues2(createArr(100000000)));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

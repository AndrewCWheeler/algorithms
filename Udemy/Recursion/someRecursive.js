// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// const isOdd = val => % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd // true
// someRecursive([4,6,8], isOdd) // false

const isOdd = (val) => val % 2 !== 0;

const someRecursive = (arr) => {
  if (arr.length < 1) return false;
  if (isOdd(arr[0])) return true;
  else return someRecursive(arr.slice(1));
};

console.log(someRecursive([1, 2, 3, 4]));

// Udemy answer:

// function someRecursive(array, callback) {
//   if (array.length === 0) return false;
//   if (callback(array[0])) return true;
//   return someRecursive(array.slice(1),callback);
// }

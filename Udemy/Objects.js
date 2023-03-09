// Frequency Counter Pattern

// This pattern uses objects or sets to collect values / frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// An Example:

// Write a function called same, which accepts two arrays. The function should return true if every value in the first array has its corresponding value squared in the second array. The frequency of values must be the same.

// @objects

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the first
// array has its corresponding value squared in the second array.
// The frequency of values must be the same.

// The slow "naive" way:
// @slow @working @inefficient
const sameSlow = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

// console.log(sameSlow([1, 2, 3, 2], [9, 1, 4, 4]));

// @best @working @correct @efficient
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  console.log(obj1);
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    console.log(`key: ${key}`);
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3], [1, 4, 9]));

// ANAGRAMS

// Given two strings, write a function to determine if the second
// string is an anagram of the first. An anagram is a word,
// phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.
// @working @correct @best
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let obj1 = {};

  for (let char of str1) {
    obj1[char] ? (obj1[char] += 1) : (obj1[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!obj1[letter]) return false;
    else obj1[letter] -= 1;
  }
  return true;
};

console.log(validAnagram("carc", "crac"));

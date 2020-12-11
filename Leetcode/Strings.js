// REVERSE STRING

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

const string1 = ["h","e","p","z","o","1"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let half = s.length/2;
    for (let i = 0; i < half; i++){
      let temp = s[i];
      s[i] = s[s.length - i - 1];
      s[s.length - i - 1] = temp;
    }
    return s;
};

// console.log(reverseString(string1));


// REVERSE INTEGER

// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0


const reverse = x => {
  x = x + '';
  let arrX = x.split('');
  if (x[0] === '-'){
    arrX.shift();
    arrX.reverse();
    arrX.unshift('-');
    let reversedNum = arrX.join('');
    if (Math.pow(-2, 31) > reversedNum){
      return 0;
    } else {
      return reversedNum;
    }

  } else {
    let reversedNum = arrX.reverse().join('');
    if (reversedNum > Math.pow(2,31) - 1){
      return 0;
    } else return reversedNum;
  }
}


// console.log(reverse(-334567));


// FIRST UNIQUE CHARACTER IN A STRING

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// return 2.

s = "loveleetcode"

const firstUniqChar = s => {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}
// console.log(firstUniqChar(s));

// const firstUniqChar2 = s => {
const firstUniqChar2 = s => {
  for(let i=0; i<s.length; i++){
    let char = s.charAt(i)
    if(s.indexOf(char) === s.lastIndexOf(char)){
      return i;
    }
  }
  return -1;
};

// console.log(firstUniqChar2(s));


// VALID ANAGRAM

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

const isAnagram = (s,t) => {
  // Edge case, comparing string lengths:
  if (s.length !== t.length){
    return false;
  }
  // Convert each string to an array, then sort the array in ascending order:
  let first = s.split('').sort();
  let second = t.split('').sort();
  // Compare each indexed value in both arrays. Return false if any do not match. Otherwise, return true.
  for (let i=0; i < first.length; i++){
    if (first[i] !== second[i]){
      return false;
    }
  }
  return true;
}
// console.log(isAnagram('rat', 'car'));


var isAnagram2 = function(s, t) {
  if(s.length !== t.length){
      return false;
  }
  const stringToObj = (str) => {
    let obj = {};
    for(let i = 0; i<str.length;i++){
      if(obj[str[i]] === undefined){
        obj[str[i]] = 1;
      }else{
        obj[str[i]]++
      }
    }
    return obj;
  }

  let sObj = stringToObj(s);
  let tObj = stringToObj(t);
  
  for(let char in sObj){
    if(sObj[char] !== tObj[char]){
      return false;
    }
  }
  return true;
};

// console.log(isAnagram2('rat', 'car'));


var isAnagram3 = function(s, t) {
  if (s.length !== t.length) { return false; }
  
  const charSet = new Array(26).fill(0);
  
  for(let i = 0; i < s.length; i++) {
      charSet[s.charCodeAt(i) - 97]++;
      charSet[t.charCodeAt(i) - 97]--;
  }
  
  for(let i = 0; i < charSet.length; i++){
      if(charSet[i] !== 0){ return false; }
  }
  
  return true;
};

// console.log(isAnagram3('rat', 'car'));


// VALID PALINDROME 

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

const example1 = "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

const example2 = "race a car"
// Output: false
var isPalindrome = function(string) {
  // Normalize string:
  let findUpperCase = /[A-Z]/g;
  let caseLowered = string.replace(findUpperCase, function(match) {
    return match.toLowerCase();
  })
  let newString = caseLowered.replace(/[^0-9a-z]/gi, '');
  // Convert string to array:
  let arr = newString.split('');
  // Compare array start and end moving incrementally toward the halfway point. 
  let end = arr.length - 1; 
  for (let start = 0; start < arr.length / 2; start++){
    if (arr[start] !== arr[end]){
      return false;
    }
    end--;
  }
  return true;
};

console.log(isPalindrome(example1));
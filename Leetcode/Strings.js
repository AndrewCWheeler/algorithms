// REVERSE STRING

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

const string1 = ['h', 'e', 'p', 'z', 'o', '1'];
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let half = s.length / 2;
  for (let i = 0; i < half; i++) {
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
  if (x[0] === '-') {
    arrX.shift();
    arrX.reverse();
    arrX.unshift('-');
    let reversedNum = arrX.join('');
    if (Math.pow(-2, 31) > reversedNum) {
      return 0;
    } else {
      return reversedNum;
    }
  } else {
    let reversedNum = arrX.reverse().join('');
    if (reversedNum > Math.pow(2, 31) - 1) {
      return 0;
    } else return reversedNum;
  }
};

// console.log(reverse(-334567));

// FIRST UNIQUE CHARACTER IN A STRING

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// return 2.

s = 'loveleetcode';

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
};
// console.log(firstUniqChar(s));

// const firstUniqChar2 = s => {
const firstUniqChar2 = s => {
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) === s.lastIndexOf(char)) {
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

const isAnagram = (s, t) => {
  // Edge case, comparing string lengths:
  if (s.length !== t.length) {
    return false;
  }
  // Convert each string to an array, then sort the array in ascending order:
  let first = s.split('').sort();
  let second = t.split('').sort();
  // Compare each indexed value in both arrays. Return false if any do not match. Otherwise, return true.
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};
// console.log(isAnagram('rat', 'car'));

var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const stringToObj = str => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] === undefined) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]]++;
      }
    }
    return obj;
  };

  let sObj = stringToObj(s);
  let tObj = stringToObj(t);

  for (let char in sObj) {
    if (sObj[char] !== tObj[char]) {
      return false;
    }
  }
  return true;
};

// console.log(isAnagram2('rat', 'car'));

var isAnagram3 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charSet = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charSet[s.charCodeAt(i) - 97]++;
    charSet[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < charSet.length; i++) {
    if (charSet[i] !== 0) {
      return false;
    }
  }

  return true;
};

// console.log(isAnagram3('rat', 'car'));

// VALID PALINDROME

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

const example1 = 'A man, a plan, a canal: Panama';
// Output: true
// Example 2:

const example2 = 'race a car';
// Output: false
var isPalindrome = function (string) {
  // Normalize string:
  let findUpperCase = /[A-Z]/g;
  let caseLowered = string.replace(findUpperCase, function (match) {
    return match.toLowerCase();
  });
  let newString = caseLowered.replace(/[^0-9a-z]/gi, '');
  // Convert string to array:
  let arr = newString.split('');
  // Compare array start and end moving incrementally toward the halfway point.
  let end = arr.length - 1;
  for (let start = 0; start < arr.length / 2; start++) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    end--;
  }
  return true;
};

// console.log(isPalindrome(example1));

// CONVERT STRING TO INTEGER

// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered a whitespace character.

// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, 231 − 1 or −231 is returned.

// Example 1:
const str1 = '42';
// Output: 42

// Example 2:
const str2 = '  -42';
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.

// Example 3:
const str3 = '4193 with words';
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

// Example 4:
const str4 = 'words and 987';
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.

// Example 5:
const str5 = '-91283472332';
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.

// Example 6:
const str6 = ' -+12   ';

const str7 = '3.14159';

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-' and '.'.

const myAtoi = s => {
  if (s === '') {
    return 0;
  }
  let period = s.match(/.+\b\w+\b/g);
  let secondCharCheck = s.trim();
  if (secondCharCheck.length >= 2) {
    if (secondCharCheck[0].match(/\d/) && secondCharCheck[1] === '.') {
      return parseInt(secondCharCheck[0]);
    } else if (!secondCharCheck[1].match(/\d/)) {
      return 0;
    }
  }
  let negOrPos = s.match(/-+\b\w+\b/g || /++\b\w+\b/g);
  let arr = s.match(/\b\w+\b/g);
  let result = 0;
  const valueIsNaN = v => {
    return v !== v;
  };
  const legitimate = n => {
    let lowest = Math.pow(-2, 31);
    let highest = Math.pow(2, 31) - 1;
    if (n > lowest && n < highest) {
      return n;
    } else if (n < lowest) {
      return lowest;
    } else if (n > highest) {
      return highest;
    }
  };
  if (period) {
    if (period[0][0] === '.') {
      return 0;
    }
  }
  if (negOrPos) {
    let result = parseInt(negOrPos[0]);
    if (valueIsNaN(result)) {
      return 0;
    } else {
      return legitimate(result);
    }
  } else if (arr) {
    if (arr[0][0].match(/\d+\b/) === false) {
      return 0;
    } else {
      let result = parseInt(arr[0]);
      if (valueIsNaN(result)) {
        return 0;
      } else {
        return legitimate(result);
      }
    }
  } else return result;
};

// console.log(myAtoi(str7));

const myAtoi2 = str => {
  let i = 0;
  let sign = 1;
  let res = 0;
  let INT_MAX = 2147483647;
  let INT_MIN = -INT_MAX - 1;

  while (str[i] === ' ') i++;

  if (str[i] === '+' || str[i] === '-') {
    sign = str[i] === '+' ? 1 : -1;
    i++;
  }

  while (str[i] >= '0' && str[i] <= '9') {
    res = res * 10 + (str[i] - 0);
    if (sign === 1 && res > INT_MAX) return INT_MAX;
    if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
    i++;
  }

  return res * sign;
};

console.log(myAtoi2(str1));

const myAtoi3 = s => {
  let z = s.trim().split(new RegExp(/^[a-zA-Z\s].*?./g));
  let k = parseInt(z.join(''));

  return z[0].length === 0 || isNaN(k)
    ? 0
    : k < (-2) ** 31
    ? (-2) ** 31
    : k > 2 ** 31 - 1
    ? 2 ** 31 - 1
    : k;
};

// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

var strStr = function (haystack, needle) {
  let hayLength = haystack.length;
  let needLength = needle.length;
  // If needle is an empty string:
  if (needLength === 0) return 0;
  // needle should be "part of" haystack, not equal to:
  if (needle === haystack) return 0;

  for (let i = 0; i <= hayLength - needLength; i++) {
    if (needle === haystack.substring(i, i + needLength)) {
      return i;
    }
  }
  return -1;
};

console.log(strStr('redberries', 'dber'));

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


console.log(reverse(-334567));

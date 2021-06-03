// NUMBER OF 1 <BITS>
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.

// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

// Example 1:
const binaryString1 = 00000000000000000000000000001011;
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
const binaryString2 = 00000000000000000000000010000000;
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
const binaryString3 = 11111111111111111111111111111101;
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

// Constraints:

// The input must be a binary string of length 32.

// Follow up: If this function is called many times, how would you optimize it?</BITS>

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  let bits = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & mask) !== 0) {
      bits++;
    }
    mask <<= 1;
  }
  return bits;
};
console.log(hammingWeight(binaryString1));
// Function to create a binary string from integer.
// Reference: https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
// Mozilla Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
function createBinaryString(nMask) {
  // nMask must be between -2147483648 and 2147483647
  if (nMask > 2 ** 31 - 1)
    throw "number too large. number shouldn't be > 2**31-1"; //added
  if (nMask < -1 * 2 ** 31)
    throw "number too far negative, number shouldn't be < 2**31"; //added
  for (
    var nFlag = 0, nShifted = nMask, sMask = '';
    nFlag < 32;
    nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1
  );
  sMask = sMask.replace(/\B(?=(.{8})+(?!.))/g, ''); // added
  return sMask;
}

console.log(createBinaryString(-1)); // "11111111 11111111 11111111 11111111"
console.log(createBinaryString(1024)); // "00000000 00000000 00000100 00000000"
console.log(createBinaryString(-2)); // "11111111 11111111 11111111 11111110"
console.log(createBinaryString(-1024)); // "11111111 11111111 11111100 00000000"

// VALID PARENTHESES

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// * @param {string} s
// * @return {boolean}

// Hint #1:
// An interesting property about a valid parenthesis expression is that a sub-expression of a valid expression should also be a valid expression. (Not every sub-expression) e.g.
// { { } [ ] [ [ [ ] ] ] } is VALID expression
//           [ [ [ ] ] ]    is VALID sub-expression
//   { } [ ]                is VALID sub-expression

// Hint #2:
// What if whenever we encounter a matching pair of parenthesis in the expression, we simply remove it from the expression? This would keep on shortening the expression. e.g.
// { { ( { } ) } }
//       |_|

// { { (      ) } }
//     |______|

// { {          } }
//   |__________|

// {                }
// |________________|

// VALID EXPRESSION!

// Hint #3:
// The stack data structure can come in handy here in representing this recursive structure of the problem. We can't really process this from the inside out because we don't have an idea about the overall structure. But, the stack can help us process this recursively i.e. from outside to inwards.

var isValid = function (str) {
  let items = [];
  for (let char of str) {
    let last = items.length - 1;
    if (char === '(' || char === '[' || char === '{') {
      items.push(char);
    } else if (char === ')') {
      if (items[last] === '(') {
        items.pop();
      } else {
        return false;
      }
    } else if (char === ']') {
      if (items[last] === '[') {
        items.pop();
      } else {
        return false;
      }
    } else if (char === '}') {
      if (items[last] === '{') {
        items.pop();
      } else {
        return false;
      }
    }
  }
  if (items.length === 0) {
    return true;
  } else {
    return false;
  }
};

// Interesting alternative approach: not as efficient;
// var isValid = function (s) {
//   if (s === null || s.length <= 0) return true;
//   let arr = s.split('');
//   let stack = [];
//   for (let i of arr) {
//     if (i === '[') stack.push(']');
//     else if (i === '{') stack.push('}');
//     else if (i === '(') stack.push(')');
//     else if (stack.length === 0 || i !== stack.pop()) return false;
//     console.log(stack);
//   }
//   return stack.length === 0;
// };

console.log(isValid('([)]'));

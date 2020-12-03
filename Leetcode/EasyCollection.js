// Best Time to Buy and Sell Stock II

// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// Constraints:

// 1 <= prices.length <= 3 * 10 ^ 4
// 0 <= prices[i] <= 10 ^ 4

// Java Solution:

// Time complexity: O(n) single pass
// Space complexity: O(1). Contstant space needed.

// class Solution {
//   public int maxProfit(int[] prices) {
//       int maxprofit = 0;
//       for (int i = 1; i < prices.length; i++) {
//           if (prices[i] > prices[i - 1])
//               maxprofit += prices[i] - prices[i - 1];
//       }
//       return maxprofit;
//   }
// }
const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let maxprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxprofit += prices[i] - prices[i - 1];
    }
  }
  return maxprofit;
};

// console.log(maxProfit(prices));

// Rotate Array

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// It's guaranteed that nums[i] fits in a 32 bit-signed integer.
// k >= 0

const nums = [-1, -100, 3, 99];
const k = 2;

const nums2 = [1, 2, 3, 4, 5, 6, 7];
const k2 = 3;
// This is very slow ...
var rotate = function (nums, k) {
  k %= nums.length;
  let temp = 0;
  let previous = 0;
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1];
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
  return nums;
};
// console.log(rotate(nums, k));
// console.log(rotate(nums2, k2));
// console.log(rotate([1, 2, 3], 2));

// Try to understand this one:

var rotate2 = function (nums, k) {
  k %= nums.length; // This means k = k % nums.length
  console.log(k);
  nums.reverse();
  console.log(nums);
  helper(nums, 0, k - 1);
  helper(nums, k, nums.length - 1);
};

var helper = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start++] = arr[end];
    arr[end--] = temp;
  }
};

// console.log(rotate2(nums, k));
// console.log(rotate2(nums2, k2));
// console.log(rotate2([1, 2, 3], 2));

// Contains Duplicate

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const input1 = [1, 2, 3, 1];
const input2 = [1, 2, 3, 4];

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      console.log(`This is nums[i]: ${nums[i]}`);
      console.log(`This is nums[j]: ${nums[j]}`);
      if (nums[j] === nums[i]) {
        return true;
      }
    }
  }
  return false;
};

// console.log(containsDuplicate(input1));
// console.log(containsDuplicate(input2));

// Single Number

// Solution
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

const arr5 = [2, 2, 1];
const arr6 = [4, 1, 2, 1, 2];
const arr7 = [-1, -1, -2];

var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b, 0);
};

// console.log(singleNumber(arr5));
// console.log(singleNumber(arr6));
// console.log(singleNumber(arr7));

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

const numbers1 = [1, 2, 2, 1];
const numbers2 = [2, 2];

const numbers3 = [4, 9, 5];
const numbers4 = [9, 4, 9, 8, 4];

var intersect = function (nums1, nums2) {
  const result = [];
  let temp = [];
  if (nums1.length > nums2.length) {
    temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  for (const num of nums1) {
    let idx = nums2.indexOf(num);
    if (~idx) result.push(nums2.splice(idx, 1));
  }
  return result;
};

// console.log(intersect(numbers1, numbers2));

// Plus One

// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:

// Input: digits = [0]
// Output: [1]

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

var plusOne = function (digits) {
  let i = digits.length - 1;
  if (digits[i] !== 9) {
    digits[i] = digits[i] + 1;
    return digits;
  } else {
    while (digits[i] === 9) {
      digits[i] = 0;
      i--;
      console.log(digits);
      console.log(i);
    }
    if (i === -1) {
      digits.push(0);
      digits[i + 1] = 1;
      return digits;
    }
    digits[i] = digits[i] + 1;
    return digits;
  }
};
// console.log(plusOne(digits));

// var plusOne2 = function (digits) {
//   return (BigInt(digits.join('')) + 1n).toString().split('');
// };
// console.log(plusOne2(digits));

// Valid Sudoku

// Solution
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:

const board = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.

const isValidSudoku = (board) => {
  let map = {};
  let temp = 0;
  for(let i=0; i<9; i++) {
    for(let j=0; j<9; j++){
      temp = board[i][j];
      if (temp === '.') continue;
      if (map['i' + i + temp] || map['j' + j + temp] || map['b' + Math.floor(i/3) + Math.floor(j/3) + temp]) return false;
      map['i' + i + temp] = 1;
      map['j' + j + temp] = 1;
      map['b' + Math.floor(i/3) + Math.floor(j/3) + temp] = 1;
    }
  }
  return true;
};

console.log(isValidSudoku(board));
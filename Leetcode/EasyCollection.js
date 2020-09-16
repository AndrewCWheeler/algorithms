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

var rotate = function (nums, k) {
  let temp = 0;
  let holdK = nums[k];
  let tempK = null;
  if (k === nums.length || nums.length === 1) {
    return nums;
  }
  if (k > nums.length) {
    tempK = k - nums.length;
    k = tempK;
  }
  if (k <= nums.length / 2) {
    for (let i = 0; i < k; i++) {
      temp = nums[i];
      nums[i] = nums[nums.length - k + i];
      nums[i + k] = temp;
    }
    if (nums.length / 2 > k) {
      nums[k + k] = holdK;
    }
  }
  if (k > nums.length / 2) {
    for (let i = 0; i < k; i++) {
      temp = nums[i];
      nums[i] = nums[nums.length - k - 1];
      nums[i + k] = temp;
    }
  }

  return nums;
};
console.log(rotate(nums, k));
console.log(rotate(nums2, k2));
console.log(rotate([1, 2, 3], 2));

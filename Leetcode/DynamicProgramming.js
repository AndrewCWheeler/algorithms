// CLIMBING STAIRS

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

//

// SOLUTION IN JAVA:

// Approach 3: Dynamic Programming

// Algorithm

// As we can see this problem can be broken into subproblems, and it contains the optimal substructure property i.e. its optimal solution can be constructed efficiently from optimal solutions of its subproblems, we can use dynamic programming to solve this problem.

// One can reach the i^{th} step in one of the two ways:

// 1. Taking a single step from (i-1)^{th} step.

// 2. Taking a step of 2 from (i-2)^{th} step.

// So, the total number of ways to reacth i^{th} is equal to the sume of ways of reaching (i-1)^{th} step and ways of reaching (i-2)^{th} step.

// Let dp[i] denotes the number of ways to reach on i^{th step:

// dp[i]=dp[i-1]+dp[i-2]dp[i]=dp[i−1]+dp[i−2]

// public class Solution {
//     public int climbStairs(int n) {
//         if (n == 1) {
//             return 1;
//         }
//         int[] dp = new int[n + 1];
//         dp[1] = 1;
//         dp[2] = 2;
//         for (int i = 3; i <= n; i++) {
//             dp[i] = dp[i - 1] + dp[i - 2];
//         }
//         return dp[n];
//     }
// }
// Complexity Analysis
// Time complexity : O(n)O(n). Single loop upto nn.
// Space complexity : O(n)O(n). dpdp array of size nn is used.

//  * @param {number} n
//  * @return {number}
const climbStairs = n => {
    if (n === 1) {
        return 1;
    }
    let dp = [n + 1];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

// console.log(climbStairs(6));

// Alternatively:

// var climbStairs = function(n) {
//     let dp = new Array(n+1).fill(0);
//     dp[1] = 1;
//     dp[2] = 2;
//     for(let i=3;i<=n;i++) {
//         dp[i] = dp[i-1] + dp[i-2];
//     }

//     return dp[n];
// };

/*
    n = 5;
    i = 5;
    cur = 8;
    prePrev = 5;
    prev = 8;
*/

// var climbStairs = function(n) {
//     let prev = 1;
//     let prevPrev = 0;
//     let cur = 1;
//     for (let i = 0; i < n; i++) {
//         cur = prev + prevPrev;
//         prevPrev = prev;
//         prev = cur;
//     }
//     return cur;
// };

// BEST TIME TO BUY AND SELL STOCK

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

//  * @param {number[]} prices
//  * @return {number}

// ** LESSON: THE following takes way too long and is too inefficient to work with a large array. See below for solution.
const maxProfitTimeFail = prices => {
    // I want to loop through the array, comparing each value to the remaining values in the array, looking for the max difference, and return that max.
    // I will set a variable to hold the return value:
    let min = 0;
    // I will set a variable to hold the difference between values:
    let difference = 0;
    // I will now loop through the array with a nested for loop:
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            difference = prices[i] - prices[j + 1];
            if (difference <= min) {
                min = difference;
            }
            console.log(`Inside the loops min: ${min}`);
        }
    }
    console.log(`Outside the loops max: ${min}`);
    if (min < 0) {
        return min * -1;
    }
    if (min >= 0) {
        return 0;
    }
};

// console.log(maxProfitTimeFail(pricesArr));
const pricesArr = [1, 2, 4];

const maxProfit = prices => {
    // What if I found the minimum and maximum values in the array, checked to ensure the minimum came first, then return their difference? This way, I don't have to loop through the array two times.
    console.log(Number.MAX_SAFE_INTEGER);
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }
    return max;
};

console.log(maxProfit(pricesArr));

// MAXIMUM SUBARRAY

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:
const nums = [-2];
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**

 * @param {number[]} nums

 * @return {number}

 */

const maxSubArray = nums => {
    let curr = -Infinity;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        curr = Math.max(0, curr);
        curr += nums[i];
        max = Math.max(max, curr);
    }
    return max;
};

console.log(maxSubArray(nums));

// My Explanation for comprehension:
// The key to this problem is understanding the role of negative numbers. If you add a negative number to another negative number, it will always be worse (or lower) than if you had a single negative number. However, if a negative number is sandwiched between other positive numbers, it is possible that the max contiguous sub array will contain this negative number, since the numbers surrounding could offset what it subtracts.
// Create two variables, currSum and maxSum, and set both = -Infinity. The value to return will be maxSum. currSum will be redefined each time through the loop. If at any point it's value is brought below zero, it will be reset to zero. This will ensure no negative numbers are added to negative numbers. The last comparison is maxSum compared to currSum, always keeping track of the maximum sum as the for loop runs.

// Big O Analysis:
// Time: O(n)
// A simple linear scan through an array.
// Space: O(1)
// No memory does not scale based on input.

// Reference: https://medium.com/@silasburger/maximum-subarray-leetcode-javascript-walkthrough-484b060c1bba

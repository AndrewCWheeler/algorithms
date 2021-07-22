// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

const array1 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
const array2 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
/**
 * @param {number[]} nums
 * @return {number}
 */

// This works but it is too slow.
const removeDuplicates = (nums) => {
  for (let i = 0, j = i + 1; i < nums.length - 1; i++) {
    while (nums[i] === nums[j]) {
      nums.splice(j, 1);
    }
    j++;
  }
  return nums;
};
// console.log(removeDuplicates(array1));

const removeDuplicates2 = (nums) => {
  let a = 0;
  for (let b = 1; b < nums.length; b++) {
    if (nums[a] !== nums[b]) {
      nums[++a] = nums[b];
    }
  }
  return a + 1;
};

// console.log(removeDuplicates2(array2));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
/**
 * @param {number[]} prices
 * @return {number}
 */

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

const maxProfit = (prices) => {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      max += prices[i] - prices[i - 1];
    }
    console.log(max);
  }
  return max;
};

// console.log(maxProfit(prices2));

// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// this is too slow but makes sense and works:
// var rotate = function (nums, k) {
//   const rotateOnce = (arr, l) => {
//     let temp = arr[l - 1];
//     for (let i = l - 1; i > 0; i--) {
//       arr[i] = arr[i - 1];
//     }
//     arr[0] = temp;
//     return arr;
//   };
//   while (k > 0) {
//     rotateOnce(nums, nums.length);
//     k--;
//   }
//   return nums;
// };

// this is better, but it's a bit confusing...:
// const rotate = (nums, k) => {
//   k %= nums.length; // This means k = k % nums.length
//   console.log(k);
//   nums.reverse();
//   console.log(nums);
//   rearrange(nums, 0, k - 1);
//   console.log(`nums after 1st helper ran: ${nums}`);
//   rearrange(nums, k, nums.length - 1);
//   console.log(`nums after 2nd helper ran: ${nums}`);
// };

// var rearrange = (arr, start, end) => {
//   while (start < end) {
//     console.log(`start: ${start}`);
//     console.log(`end: ${end}`);
//     let temp = arr[start];
//     console.log(`temp: ${temp}`);
//     arr[start++] = arr[end];
//     console.log(arr);
//     arr[end--] = temp;
//     console.log(arr);
//   }
// };

// console.log(rotate([1, 2, 3, 4, 5, 8], 2));

// This is solution is similar to the previous one. It's clear, clean, and efficient. It uses a single custom helper function: reverse():
const rotate = (nums, k) => {
  k %= nums.length;

  const reverse = (i, j) => {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1); // reverse the original array;
  reverse(0, k - 1); // reverse the first part of the array, relative to k;
  reverse(k, nums.length - 1); // reverse the last part of the array, relative to k;
};

// using Set();
const containsDuplicate = (nums) => {
  let mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      return true;
    }
    mySet.add(nums[i]);
  }
  return mySet;
};

// console.log(containsDuplicate([1, 2, 2, 4, 5]));

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
  return nums.reduce((a, b) => a ^ b, 0);
};

// console.log(singleNumber([1, 2, 4, 1, 2]));

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

// QuickSort & Partition for Intersection of Two Arrays II (below):

// HASH MAP IS FAR MORE EFFICIENT!

const Partition = (arr, left = 0, right = arr.length - 1) => {
  let pivot = right;
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] <= arr[pivot]) {
      // swap
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
    }
  }
  // move the pivot
  [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
  return i;
};

const QuickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return arr;

  let i = Partition(arr, left, right);
  QuickSort(arr, left, i - 1);
  return QuickSort(arr, i + 1, right);
};

var intersect = function (nums1, nums2) {
  const Swap = (a, b) => {
    let t = a;
    a = b;
    b = t;
  };
  nums1 = QuickSort(nums1);
  nums2 = QuickSort(nums2);
  let l1 = nums1.length;
  let l2 = nums2.length;
  if (l1 > l2) {
    Swap(l1, l2);
  }
  let i = 0,
    j = 0,
    k = 0;
  let results = [];
  while (i < l1 && j < l2) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      results[k++] = nums1[i++];
      j++;
    }
  }
  return results;
};

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

// console.log(intersect(nums1, nums2));

// console.log(Array7.sort());
// console.log(QuickSort(Array7));

// Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const IntersectII = (nums1, nums2) => {
  const obj = {};
  const result = [];
  if (nums1.length > nums2.length) {
    return IntersectII(nums2, nums1);
  }
  nums1.forEach((el) => {
    if (!obj[el]) obj[el] = 0;
    obj[el] += 1;
  });
  nums2.forEach((el) => {
    if (obj[el] && obj[el] > 0) {
      result.push(el);
      obj[el] -= 1;
    }
  });
  return result;
};

// console.log(IntersectII(nums1, nums2));

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

const plusOne = (digits) => {
  let i = digits.length - 1;
  if (digits[i] !== 9) {
    digits[i] = digits[i] + 1;
    return digits;
  } else {
    while (digits[i] === 9) {
      digits[i] = 0;
      i--;
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

console.log(plusOne(digits));

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === 0 && nums[j] !== 0) {
      nums[i] = nums[j];
      nums[j] = 0;
      i++;
    } else if (nums[i] !== 0) {
      i++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 2, 0, 0, 0, 3, 4]));

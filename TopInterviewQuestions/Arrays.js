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
var removeDuplicates = function (nums) {
  for (let i = 0, j = i + 1; i < nums.length - 1; i++) {
    while (nums[i] === nums[j]) {
      nums.splice(j, 1);
    }
    j++;
  }
  return nums;
};
console.log(removeDuplicates(array1));

var removeDuplicates2 = function (nums) {
  let a = 0;
  for (let b = 1; b < nums.length; b++) {
    if (nums[a] !== nums[b]) {
      nums[++a] = nums[b];
    }
  }
  return a + 1;
};

console.log(removeDuplicates2(array2));

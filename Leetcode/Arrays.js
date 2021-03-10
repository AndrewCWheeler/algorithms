// August 21, 2020
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, follwed by all the odd elements of A. You may return any answer array that satisfies this condition.

// Example 1:
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

var sortArrayByParity = function (A) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            result.push(A[i]);
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 !== 0) {
            result.push(A[i]);
        }
    }
    return result;
};
// console.log(sortArrayByParity([3, 1, 2, 4]));

// 485. Consecutive Ones
// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            current++;
        } else {
            if (current > max) {
                max = current;
            }
            if (max >= nums.length / 2) {
                return max;
            }
            current = 0;
        }
    }
    return Math.max(max, current);
};

// console.log(findMaxConsecutiveOnes([1, 1]));

// 486. Predict the Winner
// Given an array of scores that are non-negative integers. Player 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on. Each time a player picks a number, that number will not be available for the next player. This continues until all the scores have been chosen. The player with the maximum score wins.

// Given an array of scores, predict whether player 1 is the winner. You can assume each player plays to maximize his score.

// Example 1:

// Input: [1, 5, 2]
// Output: False
// Explanation: Initially, player 1 can choose between 1 and 2.
// If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2).
// So, final score of player 1 is 1 + 2 = 3, and player 2 is 5.
// Hence, player 1 will never be the winner and you need to return False.

// Example 2:

// Input: [1, 5, 233, 7]
// Output: True
// Explanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
// Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.

// Constraints:

// 1 <= length of the array <= 20.
// Any scores in the given array are non-negative integers and will not exceed 10,000,000.
// If the scores of both players are equal, then player 1 is still the winner.

// This is not complete. It may or may not pass all test cases.
// var PredictTheWinner = function (nums) {
//   player1 = 0;
//   player2 = 0;
//   for (let i = 0; i < nums.length; i) {
//     console.log('nums = ' + nums);
//     if (nums[i + 1] < nums[nums.length - 2]) {
//       player1 += nums[i];
//       nums.shift(nums[i]);
//       console.log('player1 + nums[i] = player1 is now at: ' + player1);
//     } else {
//       player1 += nums[nums.length - 1];
//       nums.pop(nums[i]);
//       console.log('player1 + nums.length-1 = player1 is now at: ' + player1);
//     }
//     console.log("end of player1's turn. nums is now: " + nums);
//     if (nums[i + 1] < nums[nums.length - 2]) {
//       player2 += nums[i];
//       nums.shift(nums[i]);
//       console.log('player2 + nums[i] = player2 is now at: ' + player2);
//     } else {
//       player2 += nums[nums.length - 1];
//       nums.pop(nums[i]);
//       console.log('player2 + nums.length-1 = player2 is now at: ' + player2);
//     }
//     console.log("end of player2's turn. nums is now: " + nums);
//   }
//   if (player1 > player2) {
//     return true;
//   } else return false;
// };

// console.log(PredictTheWinner([1, 34, 56, 78, 80, 0]));

// ***************************************
// Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

var findNumbers = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 10 && nums[i] < 100) {
            count++;
        }
        if (nums[i] >= 1000 && nums[i] < 10000) {
            count++;
        }
        if (nums[i] >= 100000 && nums[i] < 1000000) {
            count++;
        }
    }
    return count;
};

// console.log(
//   findNumbers([12, 345, 2, 6, 7896, 88, 10000, 10398, 1000890, 4509])
// );

// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

const A = [-4, -1, 0, 3, 10];

const sortedSquares = A => {
    let newArr = [];
    for (let i = 0; i < A.length; i++) {
        newArr.push(A[i] * A[i]);
    }
    newArr.sort((a, b) => a - b);
    return newArr;
};

// console.log(sortedSquares(A));

// Duplicate Zeros

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Note:

// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9

const arr = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i++;
        }
        console.log(arr);
    }
};

// console.log(duplicateZeros(arr));

// Merge Sorted Array

// Solution
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// Constraints:

// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n

var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
var m = 3;
var n = 3;

var merge = function (nums1, m, nums2, n) {
    const len = m + n;
    nums1.splice(len - n, n);
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i]);
    }
    nums1.sort((a, b) => a - b);
    return nums1;
};

// console.log(merge(nums1, m, nums2, n));

// Same problem, answered far more efficiently:

var a = [1, 2, 3, 5, 6, 0, 0, 0];
var b = [2, 5, 6];
var m = 5;
var n = 3;

var merge2 = function (a, m, b, n) {
    let i = m - 1,
        j = n - 1,
        c = a.length - 1;

    while (i >= 0 && j >= 0) {
        if (a[i] >= b[j]) {
            a[c--] = a[i--];
        } else {
            a[c--] = b[j--];
        }
    }

    while (c >= 0) {
        a[c--] = i >= 0 ? a[i--] : b[j--];
    }
    return a;
};

// console.log(merge2(a, m, b, n));

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example 1:

// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,1,2,2,3,0,4,2], val = 2,

// Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

// Note that the order of those five elements can be arbitrary.

// It doesn't matter what values are set beyond the returned length.
// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

var nums = [3, 2, 2, 3];

var val = 3;

var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

// console.log(removeElement(nums, val));

// Remove Duplicates from Sorted Array

// Solution
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.
// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

var duplicateNums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
    let i = 0;
    while (nums[i] <= nums.length) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};

// console.log(removeDuplicates(duplicateNums));

// Check If N and Its Double Exist
// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
// Example 2:

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
// Example 3:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

// Constraints:

// 2 <= arr.length <= 500
// -10^3 <= arr[i] <= 10^3

arrayA = [7, 1, 0, 14, 11];
arrayB = [3, 1, 7, 11];
arrayC = [1];
arrayD = [-2, 0, 10, -19, 4, 6, -8];
arrayE = [-20, 8, -6, -14, 0, -19, 14, 4];

var checkIfExist = function (arr) {
    if (arr.length < 2) {
        return false;
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log('****This is 1ST FOR LOOP arr[i]****: ' + arr[i]);
            if (arr[i] === 0) {
                i++;
            }
            for (let j = arr.length - 1; j >= 0; j--) {
                console.log(
                    'This is arr[i]*2 compared to arr[j]: ' +
                        arr[i] * 2 +
                        ' ? ' +
                        arr[j]
                );
                if (arr[j] === arr[i] * 2) {
                    return true;
                }
            }
        }
        return false;
    }
};
// console.log(checkIfExist(arrayD));

// Given an array A of integers, return true if and only if it is a valid mountain array.

// Recall that A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]

// Example 1:
// Input: [2,1]
// Output: false

// Example 2
// Input: [3,5,5]
// Output: false

// Example 3:
// Input: [0,3,2,1]
// Output: true

// Note:
// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000

const ex1 = [2, 1];
const ex2 = [3, 5, 6];
const ex3 = [0, 3, 2, 1];
const ex4 = [3, 7, 6, 4, 3, 0, 1, 0];
const ex5 = [3, 6, 5, 6, 7, 6, 5, 3, 0];

var validMountainArray = function (A) {
    if (A.length < 3) {
        console.log('Your array is not long enough.');
        return false;
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i] === A[i + 1]) {
            return false;
        }
        if (A[0] > A[1]) {
            return false;
        }
        if (A[A.length - 1] > A[A.length - 2]) {
            return false;
        }
        if (A[i] < A[i - 1] && A[i + 1] > A[i]) {
            return false;
        }
        // if (A[i] < A[i + 1] > A[i + 2] && A[i + 3] > A[i + 2]) {
        //   return false;
        // }
        // if (A[i] < A[i + 1] > A[i + 2] && A[i + 3] === undefined) {
        //   return false;
        // }
    }
    return true;
};
// console.log(validMountainArray(ex4));

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// Constraints:

// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5

const arrB = [17, 18, 5, 4, 6, 1];

var replaceElements = function (arr) {
    if (arr.length === 1) {
        arr[0] = -1;
        return arr;
    }
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    let temp = 0;
    for (let i = arr.length - 2; i >= 0; i--) {
        temp = arr[i];
        arr[i] = max;
        if (max < temp) {
            max = temp;
        }
    }

    return arr;
};

// console.log(replaceElements(arrB));

// Remove Duplicates from Sorted Array

// Solution
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.
// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

let numsArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4];

var removeDuplicates = function (nums) {
    if (nums === 0) {
        return 0;
    }
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};

// console.log(removeDuplicates(numsArray));

// Move Zeroes

// Solution
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var zeroArray = [0, 1, 0, 3, 12];
var testCase = [1, 0, 1];

var moveZeroes = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let walker = 0;
    for (let runner = 1; runner < nums.length; runner++) {
        if (nums[walker] === 0 && nums[runner] != 0) {
            nums[walker] = nums[runner];
            nums[runner] = 0;
            walker++;
        } else if (nums[walker] != 0) {
            walker++;
        }
    }
    return nums;
};
// console.log(moveZeroes(testCase));

// Height Checker
// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// Current array : [1,1,4,2,1,3]
// Target array  : [1,1,1,2,3,4]
// On index 2 (0-based) we have 4 vs 1 so we have to move this student.
// On index 4 (0-based) we have 1 vs 3 so we have to move this student.
// On index 5 (0-based) we have 3 vs 4 so we have to move this student.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5

// Example 3:
// Input: heights = [1,2,3,4,5]
// Output: 0

// Constraints:

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

var heights = [1, 1, 4, 2, 1, 3];
var heights2 = [5, 1, 2, 3, 4];

var heightChecker = function (heights) {
    let count = 0;
    let mirror = [...heights].sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (mirror[i] != heights[i]) {
            count++;
        }
    }
    return count;
};
// console.log(heightChecker(heights2));

// Third Maximum Number

// Solution
// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

const thirdMaxArr = [5, 2, 2];

var thirdMax = function (nums) {
    let count = 0;
    let sorted = [...nums].sort((a, b) => a - b);
    let max3 = null;
    const originalMax = sorted[sorted.length - 1];
    if (sorted.length <= 2) {
        return originalMax;
    }
    for (let i = sorted.length - 2; i >= 0; i--) {
        if (sorted[i + 1] > sorted[i]) {
            max3 = sorted[i];
            count++;
        }
        if (count === 2) {
            return max3;
        } else if (i === 0 && count < 2) {
            return originalMax;
        }
    }
};
// console.log(thirdMax(thirdMaxArr));

// Find All Numbers Disappeared in an Array

// Solution
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

var disappearingArray = [2, 2];

var findDisappearedNumbers = function (nums) {
    if (nums.length === 0) {
        return nums;
    }
    let result = [];
    let difference = 0;
    let sorted = [...nums].sort((a, b) => a - b);
    console.log(sorted);
    if (sorted[sorted.length - 1] === sorted.length && sorted[0] != 1) {
        difference = sorted[0] - 1;
        while (difference >= 1) {
            result.push(difference);
            difference--;
        }
    }
    for (let i = sorted.length - 1; i >= 0; i--) {
        if (sorted[i] - sorted[i - 1] >= 2) {
            difference = sorted[i] - sorted[i - 1];
            while (difference >= 2) {
                result.push(sorted[i] - difference + 1);
                difference--;
            }
        }
    }
    if (sorted.length - sorted[sorted.length - 1] >= 2) {
        difference = sorted.length - sorted[sorted.length - 1];
        while (difference >= 2) {
            result.push(sorted.length - difference + 1);
            difference--;
        }
    }
    if (sorted[sorted.length - 1] != sorted.length) {
        result.push(sorted.length);
    }
    return result;
};
// console.log(findDisappearedNumbers(disappearingArray));

// Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Input:
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
//
// Output = [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

// Example 2:
// Input:
let matrix2 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
];
//
// Output = [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11],
// ];

// Example 3:
let matrix3 = [[1]];
// Output = [[1]]

// Example 4:
let matrix4 = [
    [1, 2],
    [3, 4],
];
// Output = [
//   [3, 1],
//   [4, 2],
// ];

// Constraints:

// matrix.length == n
// matrix[i].length == n
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000
// JavaScript

//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
// let matrix1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Output = [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

// a = x;
// x = y;
// y = a;

let matrix5 = [
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35],
];

const rotate = matrix => {
    let n = matrix.length;
    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            // initially set temp equal to "bottom left":
            let temp = matrix[n - 1 - j][i];
            // set "bottom left" equal to "bottom right":
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
            // set "bottom right" equal to "top right"
            matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
            // set "top right" equal to "top left":
            matrix[j][n - 1 - i] = matrix[i][j];
            // set "top left" equal to temp:
            matrix[i][j] = temp;
        }
    }
};

// console.log(rotate2(matrix5));
// console.log(rotate2(matrix1));

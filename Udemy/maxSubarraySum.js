// 33: Sliding Window Pattern - maxSubarraySum

// This pattern involves creating a window which can either be an array or number from one position to another.

// Depending on a certain condition, the window either increases or closes (and a new window is created)

// Very useful for keeping track of a subset of data in an array/string etc.

// An Example:

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10

// @correct @working @efficient
const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    let currentMax = maxSum;
    for (let i = num; i < arr.length; i++) {
        currentMax += arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, currentMax);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.


const arrayMaxConsecutiveSum = (arr, k) => {
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        tempSum = tempSum - arr[i - k] + arr[i];
        console.log(tempSum);
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 4, 10, 1], 2));
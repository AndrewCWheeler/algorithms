// Given array of integers, remove each kth element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].


const removeEachKth = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % k === 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

console.log(removeEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// Write a function to perform bubble sort.

// The basic idea for bubble sort is that you want to iterate through
// the entire array, looking at 2 elements, and swapping them if the left
// one is greater than the right one. Basically, we're having each element
// "bubble up" until the array is sorted.

// Bubble Sort with a do while loop:
var Array1 = [4, 6, 2, 10, 5, 8];

function bubbleSort(arr) {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort(Array1));

// Bubble Sort with a nested for loop:
var Array2 = [7, 12, 8, 10, 2, 4];

bubbleSort2 = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort2(Array2));

// Write a function to perform selection sort:
// arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
// 11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
// 11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
// 11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
// 11 12 22 25 64

var Array4 = [64, 25, 25, 22, 12, 11];
function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}
console.log(selectionSort(Array4));

// Write a function that performs an insertion sort.
// The way insertion sort works is you loop through each index i
// and at each i, we should have arr[0] through arr[i-1] be sorted.
// Then at i, we "insert" that element wherever it belongs in [0, ..., i-1].

var Array3 = [2, 4, 5, 8, 1, 7, 6, 3];

function insertionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var host = i;
    var guest = i + 1;
    while (arr[guest] < arr[host]) {
      var temp = arr[guest];
      arr[guest] = arr[host];
      arr[host] = temp;
      host--;
      guest--;
    }
  }
  return arr;
}

console.log(insertionSort(Array3));

// Write a function that will merge 2 sorted arrays
function mergeArrays(arr1, arr2) {
  const sortedArray1 = selectionSort(arr1);
  const sortedArray2 = selectionSort(arr2);
  const merger = sortedArray1.concat(sortedArray2);
  return merger;
}

console.log("This is the mergeArrays function output:");
console.log(mergeArrays(Array1, Array2));

Array5 = [5, 2, 9, 10, 12, 11];
// Write a function that will perform merge sort.
function mergeSort(arr) {
  // No need to sort the array if the array only has one element or empty
  if (arr.length <= 1) {
    return arr;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(arr.length / 2);

  // This is where we will be dividing the array into left and right
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Using recursion to combine the left and right
  return mergeArrays(mergeSort(left), mergeSort(right));
}

console.log("This is the mergeSort function output:");
console.log(mergeSort(Array5));

// Split the array into halves and merge them recursively
function mergeSorter(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSorter(left), mergeSorter(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSorter(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

// Write an algorithm for the partition portion of Quick Sort

// It should take an array, and potentially a left index, and a right index. But left and right will
// have default values of 0 and the last index of the array. In return, it should
// rearrange so that the elements greater than (or equal to) the element at your initial pivot index
// (for simplicity's sake let's just choose the rightmost element) are to its right,
// and those less than that element are to its left.

var Array6 = [2, 4, 5, 8, 1, 7, 6, 3];

function partition(arr, left = 0, right = arr.length - 1) {
  let pivot = right;
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] <= arr[pivot]) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
    }
  }
  [arr[i], arr[pivot]] = [arr[pivot], arr[i]];

  return i;
}

console.log(partition(Array6));

// Write an algorithm that performs quick sort. It will take an array, and potentially a left
// index and right index. The left and right will have a default of 0 and the last index of the
// array.
// HINT: This will consist of a break case, 2 recursive calls, and a call
// to the partition function (not necessarily in that order!!!!);

var Array7 = [2, 4, 5, 8, 1, 7, 6, 3];
console.log("This is Array7 BEFORE quickSort:");
console.log(Array7);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  let i = partition(arr, left, right);
  quickSort(arr, left, i - 1);
  return quickSort(arr, i + 1, right);
}
console.log("This is Array7 AFTER quickSort:");
console.log(quickSort(Array7));

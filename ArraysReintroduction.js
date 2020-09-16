// 1. Given an array and a value Y, count and print the number of array values greater than Y.

function countAndPrint(arr, Y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  return count;
}
console.log(countAndPrint([2, 3, 5, 8, 9], 4));

// 2. Given an array, print the max, min and average values for that array.

function maxMinAvg(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  console.log('max: ' + max);
  console.log('min: ' + min);
  avg = sum / arr.length;
  console.log('avg: ' + avg);
  result.push(max, min, avg);
  return result;
}
console.log(maxMinAvg([2, 3, 4, 5, 6]));

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’. For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
const replaceNegatives = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
};
console.log(replaceNegatives([1, 2, -3, -5, 5]));

// 4. Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

const removeVals = (arr, start, end) => {
  let deleteCount = end - start + 1;
  console.log('deleteCount: ' + deleteCount);

  arr.splice(start, deleteCount);

  return arr;
};
console.log(removeVals([20, 30, 40, 50, 60, 70], 1, 4));

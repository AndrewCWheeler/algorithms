// 1. Write a function that returns an array with all the numbers from 1 to 255.
const getArr = () => {
  const Arr = [];
  for (let i = 1; i <= 255; i++) {
    Arr.push(i);
  }
  return Arr;
};
// console.log(getArr());

// 2. Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
const sumEvens = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumEvens(1, 1000));

// 3. Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
const sumOdds = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumOdds(1, 5000));

// 4. Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
const sumVals = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
// console.log(sumVals([2, 4, 5, 6]));

// import React, { useState, useEffect } from 'react';

// 5. Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

const maxNum = arr => {
  let max = arr[0];
  console.log(max);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maxNum([-2, 3, 6, 3, 1]));
maxNum = 7;
console.log(maxNum);

// 6. Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
const avg = arr => {
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
};
// console.log(avg([1, 3, 5, 7, 20]));

// 7. Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
const getOdds = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
};
// console.log(getOdds(1, 50));

// 8. Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
const Y = 3;
const greaterThanY = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  return count;
};
// console.log(greaterThanY([1, 3, 5, 7]));

// 9. Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
const valSquared = arr => {
  let newArr = [];
  let product = 0;
  for (let i = 0; i < arr.length; i++) {
    product = arr[i] * arr[i];
    newArr.push(product);
  }
  return newArr;
};
// console.log(valSquared([1, 5, 10, -2]));

// 10. Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
const noNegatives = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
};
// console.log(noNegatives([1, 5, 10, -2, 1, -5]));

// 11. Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
const maxMinAvg = arr => {
  let max = arr[0];
  let min = arr[0];
  let avg = 0;
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  newArr.push(max, min, avg);
  return newArr;
};
// console.log(maxMinAvg([1, 5, 10, -2, -5, 4]));

// 12. Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
const swapFirstLast = arr => {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};
// console.log(swapFirstLast([1, 5, 10, -2]));

// 13. Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
const dojoReplace = arr => {
  const x = 'Dojo';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = x;
    }
  }
  return arr;
};
// console.log(dojoReplace([-1, -3, 2]));

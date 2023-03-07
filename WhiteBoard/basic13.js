// BASIC 13

// 1. Write a function that returns an array with all the numbers from 1 to 255.
const nums1_255 = () => {
  let results = [];
  for (let i = 1; i <= 255; i++) {
    results.push(i);
  }
  return results;
};
console.log(nums1_255());

// 2. Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
const sumEvens = () => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumEvens());

// 3. Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
const sumOdds = () => {
  let sum = 0;
  for (let i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumOdds());

// 4. Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumArr([1, 2, 3, 4, 5]));

// 5. Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
const findMax = (arr) => {
  var max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMax([1, 2, -10, 20]));

// 6. Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

// 7. Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

// 8. Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

// 9. Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// 10. Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

// 11. Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

// 12. Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

// 13. Write a functiton that takes an array of numbers and replaces any negative values within the array with the string ‘Buzz’. For example if array = [-1,-3,2], your function will return [‘Buzz,’Buzz’,2].

// Reverse a string of words, reversing each word in place:

const sentence = "This was a successful interview, I think.";

const reverseWordsInPlace = (str) => {
  let wordsArray = str.split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    let wordArray = wordsArray[i].split("");
    wordArray.reverse();
    wordsArray[i] = wordArray.join("");
  }
  return wordsArray.join(" ");
};

console.log(reverseWordsInPlace(sentence));

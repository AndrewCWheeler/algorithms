// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// example:
// reverse('awesome') // 'emosewa'

const reverse = (str) => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

console.log(reverse('awesome'));

// Array.prototype.slice()

// The slice() method return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// JavaScript Demo: Array.slice()

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ['camel', 'duck', 'elephant']

console.log(animals.slice(2, 4));
// expected output: Array ['camel', 'duck'];

console.log(animals.slice(1, 5));
// expected output: Array ['bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(-2));
// expected output: Array ['duck', 'elephant']

console.log(animals.slice(2, -1));
// expected output: Array ['camel', 'duck']

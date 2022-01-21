// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']);
// ['Car','Taco','Banana']

const capitalizeFirst = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i][0].toUpperCase();
    console.log(arr[i][0]);
  }
  return arr;
};

console.log(capitalizeFirst(['car', 'taco', 'banana']));

// 1. Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
const resetNegatives = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
};
console.log(resetNegatives([1, 2, -1, -3]));

// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].
const moveForward = arr => {
  // let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
};
console.log(moveForward([1, 2, 3]));

// 3. Given an array, return an array with values in a reversed order. For example, returnReversed([1,2,3]) should return [3,2,1].
function returnReversed(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(returnReversed([1, 2, 3]));

const array2 = [1, 2, 3, 4, 5, 6, 7];
function returnReversed2(arr) {
  let temp = 0;
  for (let i = 0; i <= arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}
console.log(returnReversed2(array2));

// 4. Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

const array3 = [4, 'Ulysses', 42, false];

function repeatTwice(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i], arr[i]);
  }
  return newArray;
}
console.log(repeatTwice(array3));

// Write a function that takes 2 sorted arrays and finds the intersection of those arrays.
// The intersection is just a fancy term for the elements that are in both arrays.

// EXAMPLE:
// arr1 = [1,3,4,6]
// arr2 = [3,5,6,7]
// return = [3,6]

function intersection(arr1, arr2) {
  let dict = {};
  let toReturn = [];
  for (let i = 0; i < arr1.length; i++) {
    dict[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (dict[arr2[i]] == true) {
      toReturn.push(arr2[i]);
      dict[arr2[i]] = false;
    }
  }

  return toReturn;
}

// Write a function that finds the union of 2 arrays.
// The union of 2 arrays is ALL elements that exist in the arrays,
// with no duplicates. Think the total set of data in a venn diagram.

// EXAMPLE:
// The union of:
// [1,3,4,7,9]
// [3,5,8,9,11]
// would be: [1,3,4,5,7,8,9,11]

function union(arr1, arr2) {
  var joined = arr1.concat(arr2);
  var dict = {};
  toReturn = [];
  for (let i = 0; i < joined.length; i++) {
    if (dict[joined[i]] != true) {
      dict[joined[i]] = true;
      toReturn.push(joined[i]);
    }
  }
  return toReturn.sort((a, b) => a - b);
}

console.log(union([1, 8, 3, 11, 4], [5, 11, 4, 3, 6]));

// Write a function that calculates the difference of
// diagonals of a 2D array.

// EXAMPLE:
let arr9 = [
  [8, 2, 6],
  [4, 1, 3],
  [5, 9, 7],
];

// Diagonal 1 sum: 8 + 1 + 7 = 16
// Diagonal 2 sum: 6 + 1 + 5 = 12

// Difference => |16-12| = 4
function diagDiff(arr) {
  let range = arr[0].length - 1;
  var i = 0;
  let sum1 = 0;
  let sum2 = 0;
  while (i <= range) {
    sum1 += arr[i][i];
    sum2 += arr[i][range - i];
    i++;
  }
  // let sum1 = arr[0][0] + arr[1][1] + arr[2][2]
  // console.log(sum1)
  // let sum2 = arr[0][2] + arr[1][1] + arr[2][0]
  // console.log(sum2)
  var dif = sum1 - sum2;
  return dif;
}

console.log(diagDiff(arr9));

// Dictionaries are cool
// let dict = {};
// let arr = [1, 3, 3, 5, 6, 7, 7, 9];
// for (let i = 0; i < arr.length; i++) {
//   if (!dict[arr[i]]) {
//     dict[arr[i]] = 1;
//   } else if (dict[arr[i]]) {
//     dict[arr[i]]++;
//   }
// }
// console.log(dict);

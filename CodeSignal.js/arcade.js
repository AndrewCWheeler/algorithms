const shapeArea = (n) => {
  let first = n ** 2;
  let second = first + (n - 1) ** 2;

  return second;
  // return n ** 2 + (n - 1) ** 2;
};

// console.log(shapeArea(1) === 1);
// console.log(shapeArea(2) === 5);
// console.log(shapeArea(3) === 13);
// console.log(shapeArea(4) === 25);

function almostIncreasingSequence(sequence) {
  // let count = 0;
  // let maxNum = sequence[0];
  // for (let i = 0; i < sequence.length; i++) {
  //   if (count === 1 && sequence[i] < maxNum) {
  //     console.log('exited here 19');
  //     return false;
  //   }
  //   if (sequence.length === 2 && sequence[i] === sequence[i + 1]) {
  //     console.log('exited here 23');
  //     return false;
  //   }
  //   if (sequence[i] >= sequence[i + 1]) {
  //     count++;
  //     maxNum = sequence[i - 1];
  //     sequence.splice(i, 1);
  //     if (count === 1 && sequence[i] < maxNum) {
  //       console.log('exited here 31');
  //       return false;
  //     }
  //     if (sequence[i] === sequence[i - 1]) {
  //       console.log('exited here 35');
  //       return false;
  //     }
  //     if (sequence[i] === sequence[i + 1]) {
  //       console.log('exited here 39');
  //       return false;
  //     }
  //   }
  // }
  // if (count > 1) {
  //   console.log('exited here 45');
  //   return false;
  // } else if (
  //   count === 1 &&
  //   sequence[sequence.length - 2] > sequence[sequence.length - 1]
  // ) {
  //   console.log('exited here 51');
  //   return false;
  // } else return true;

  let count = 0;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (count > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  }

  return true;
}
const arr1 = [1, 2, 3, 4, 3, 6];
console.log(almostIncreasingSequence(arr1));

let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function matrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // change the value below a zero value to zero
      if (matrix[i][j] === 0 && i + 1 < matrix.length) {
        matrix[i + 1][j] = 0;
      }
      sum += matrix[i][j];
    }
  }
  return sum;
}

console.log(matrixElementsSum(matrix));

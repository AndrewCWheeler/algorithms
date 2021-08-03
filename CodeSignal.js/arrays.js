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
// console.log(almostIncreasingSequence(arr1));

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

// console.log(matrixElementsSum(matrix));

function allLongestStrings(inputArray) {
  let maxLength = Number.MIN_SAFE_INTEGER;
  let obj = {};
  let result = [];
  Object.assign(obj, inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLength) {
      obj = { [i]: inputArray[i] };
      maxLength = inputArray[i].length;
    } else if (inputArray[i].length === maxLength) {
      obj = {
        ...obj,
        [i]: inputArray[i],
      };
    }
    console.log(obj);
    result = console.log(Object.values(obj));
  }
  return result;
}

// console.log(
//   allLongestStrings([
//     'a',
//     'abc',
//     'cbd',
//     'zzzzzz',
//     'a',
//     'abcdef',
//     'asasa',
//     'aaaaaa',
//   ])
// );

function commonCharacterCount(s1, s2) {
  const obj = {};
  const result = [];
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  if (s1.length > s2.length) {
    return commonCharacterCount(s2, s1);
  }
  arr1.forEach((el) => {
    if (!obj[el]) obj[el] = 0;
    obj[el] += 1;
  });
  arr2.forEach((el) => {
    if (obj[el] && obj[el] > 0) {
      result.push(el);
      obj[el] -= 1;
    }
  });
  return result.length;
}
const s1 = 'aabcc';
const s2 = 'adcaa';
// console.log(commonCharacterCount(s1, s2));

const luckyNum1 = 1230;
const luckyNum2 = 239017;

function isLucky(n) {
  const numArr = n.toString().split('');
  let l = numArr.length;
  let sumLeft = 0;
  let sumRight = 0;
  for (let i = 0, j = l - 1; i < l / 2; i++, j--) {
    sumLeft += parseInt(numArr[i]);
    sumRight += parseInt(numArr[j]);
  }
  return sumLeft === sumRight;
}

// console.log(isLucky(luckyNum2));

const a = [-1, 150, 190, 170, -1, -1, 160, 180];

// sort all numbers in the array !== -1 in non-descending order

function sortByHeight(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] !== -1) {
          if (a[i] > a[j]) {
            [a[i], a[j]] = [a[j], a[i]];
          }
        }
      }
    }
  }
  return a;
}

// console.log(sortByHeight(a));

const str = 'foo(bar)baz(blim)';
const str2 = 'foo(bar(baz))Blim';
// const literalRegex = /\([^()]+\)/g;
// const capturingRegex = /\(([^()]*)\)/g;
// const flatRegex = /\(([^]+)\)/g;
const removeParenthRegex = / *\([^)]*\) */g;
const openingParenthRegex = /^[^\(]+/g;
const inbetweenParenthRegex = /^[^\)]+/g;
const closingParenthRegex = /[^\)]*$/g;

// function reverseInParentheses(inputString) {
//   const firstString = inputString.match(openingParenthRegex);
//   const middleString = inputString.match(inbetweenParenthRegex);
//   const lastString = inputString.match(closingParenthRegex);
//   console.log(firstString);
//   console.log(middleString);
//   console.log(lastString);
//   const getMatches = (str) => {
//     const reMatch = /\(([^]+)\)/g;
//     return [...str.matchAll(reMatch)].flat();
//   };

//   const reverse = (arr, i, j) => {
//     while (i < j) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       i++;
//       j--;
//     }
//     return arr;
//   };
//   const reverseStrings = (arr) => {
//     let newResult = [];
//     for (let j = 0; j < arr.length; j++) {
//       let charArr = arr[j].split('');
//       let newLen = charArr.length - 1;
//       newResult.push(reverse(charArr, 0, newLen));
//     }
//     return newResult;
//   };
//   let results = [];
//   const concatMatches = (matches) => {
//     if (matches.length !== 0) {
//       for (let i = 0; i < matches.length; i++) {
//         if (i % 2 !== 0) {
//           results.push(matches[i]);
//           return concatMatches(getMatches(matches[i]));
//         }
//       }
//     } else return results;
//   };
//   let allMatches = concatMatches(getMatches(inputString));
//   if (allMatches.length > 1) {
//     [allMatches[0], allMatches[1]] = [allMatches[1], allMatches[0]];
//   }
//   const removeParenth = (arr) => {
//     let result = [];
//     for (let k = 0; k < arr.length; k++) {
//       result.push(arr[k].replace(removeParenthRegex, ''));
//     }
//     return result;
//   };
//   let stripped = removeParenth(allMatches);

//   let reversedStrings = reverseStrings(stripped);

//   const orderedStrings = (arr) => {
//     let result = [];
//     for (let y = 0; y < arr.length; y++) {
//       result.push(arr[y].join(''));
//     }
//     return result;
//   };
//   let ordered = orderedStrings(reversedStrings);
//   console.log(ordered);
//   // return results;
// }

function reverseInParentheses(inputString) {
  console.log('InputString: ', inputString);
  if (inputString.match(/\([A-Za-z0-9_]*\)/)) {
    return reverseInParentheses(
      inputString.replace(
        /\([A-Za-z0-9_]*\)/,
        Array.from(
          inputString.match(/\([A-Za-z0-9_]*\)/)[0].replace(/\(|\)/g, '')
        )
          .reverse()
          .join('')
      )
    );
  } else return inputString;
}

// console.log(reverseInParentheses(str2));

const inputWeights = [50, 60, 60, 45, 70];

function alternatingSums(a) {
  let results = [];
  let sumA = 0,
    sumB = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sumA += a[i];
    } else {
      sumB += a[i];
    }
  }
  results.push(sumA, sumB);
  return results;
}

// console.log(alternatingSums(inputWeights));

const picture = ['a'];

function addBorder(picture) {
  // value to be returned:
  let framedPicture = [];
  // function to add single stars before and after strings in the picture array
  const addStars = (str) => {
    // convert string to array:
    let t = str.split('');
    // add stars to front and back of array:
    t.unshift('*');
    t.push('*');
    // convert array back to string and return:
    let r = t.join('');
    return r;
  };
  // add top and bottom border of stars:
  let h = picture.length; // current "height"
  let w = picture[0].length; // current "width"
  let newWidth = w + 2; // new "width" with stars
  let starRow = '*'.repeat(newWidth); // creates a line of stars equal to the new width
  framedPicture.unshift(starRow); // adds top frame
  // for as many original strings in the picture array, addStars, checking first for single item arrays:
  for (let i = 0; i < h; i++) {
    framedPicture.push(addStars(picture[i]));
  }
  // push a bottom border of starRow:
  framedPicture.push(starRow);
  return framedPicture;
}

// console.log(addBorder(picture));

function areSimilar(a, b) {}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));

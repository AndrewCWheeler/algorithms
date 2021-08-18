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
  let arr1 = s1.split("");
  let arr2 = s2.split("");
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
const s1 = "aabcc";
const s2 = "adcaa";
// console.log(commonCharacterCount(s1, s2));

const luckyNum1 = 1230;
const luckyNum2 = 239017;

function isLucky(n) {
  const numArr = n.toString().split("");
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

const str = "foo(bar)baz(blim)";
const str2 = "foo(bar(baz))Blim";
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
  console.log("InputString: ", inputString);
  if (inputString.match(/\([A-Za-z0-9_]*\)/)) {
    return reverseInParentheses(
      inputString.replace(
        /\([A-Za-z0-9_]*\)/,
        Array.from(
          inputString.match(/\([A-Za-z0-9_]*\)/)[0].replace(/\(|\)/g, "")
        )
          .reverse()
          .join("")
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

const picture = ["a"];

function addBorder(picture) {
  // value to be returned:
  let framedPicture = [];
  // function to add single stars before and after strings in the picture array
  const addStars = (str) => {
    // convert string to array:
    let t = str.split("");
    // add stars to front and back of array:
    t.unshift("*");
    t.push("*");
    // convert array back to string and return:
    let r = t.join("");
    return r;
  };
  // add top and bottom border of stars:
  let h = picture.length; // current "height"
  let w = picture[0].length; // current "width"
  let newWidth = w + 2; // new "width" with stars
  let starRow = "*".repeat(newWidth); // creates a line of stars equal to the new width
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

function areSimilar(a, b) {
  if (a.toString() === b.toString()) return true;
  let copyA = [],
    copyB = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      copyA.push(a[i]);
      copyB.push(b[i]);
    }
  }
  copyB = copyB.reverse();
  if (copyA.length === 2 && copyA.toString() === copyB.toString()) {
    return true;
  }
  return false;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));

function arrayChange(inputArray) {}
// console.log(arrayChange([3, 4, 2, 5]));

const s = "ab12c";
const t = "1zz456";

function removeOneDigit(s, t) {
  let result = 0;
  let temp = "";
  if (s.length > t.length) {
    return removeOneDigit(t, s);
  }
  let numRegex = /\d/;

  for (let i = 0; i < s.length; i++) {
    let m = s[i].match(numRegex);
    console.log(m);
    if (s[i] > t[i] && m) {
      console.log(s[i], t[i]);

      console.log("isNumber");
      console.log(s);
      console.log(`Before splice: ${s < t}`);
      temp = s.split("").splice(i, 1).join();
      console.log(temp);
      console.log(`After splice: ${s < t}`);
    } else if (s[i] < t[i] && m) {
      console.log(`Before splice: ${s < t}`);
      t.split("").splice(t[i], 1).join();
      console.log(`After splice: ${s < t}`);
    }
  }
}

// console.log(removeOneDigit(s, t));

// const sampleArr = [2, 1, 2, 3, 3, 4];
// function divideArray(a) {
//   let result = [];
//   let objA = {};
//   let objB = {};
//   for (let i = 0; i < a.length; i++) {
//     if (a[i])
//     objA = {
//       ...objA,
//       [i]: {
//         count: 1,
//         value: a[i],
//       },
//     };
//   }
//   for (let i = 0, j = a.length - 1; i < a.length / 2; j--){
//     if ()
//   }
//   console.log(objA);
//   objB = objA;
//   for (let j = 0; j < a.length; j++) {
//     for (let k = j + 1; k < a.length; k++) {
//       if (objA[j] === objB[k]) {
//         objA = {
//           ...objA,
//           [j]: {
//             count: (objA[j].count += 1),
//             value: a[j],
//           },
//         };
//       }
//     }
//   }
//   console.log(objA);
// }

// console.log(divideArray(sampleArr));

const pString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc";
function palindromeRearranging(inputString) {
  // My Solution: works for all but the hidden test cases:
  // ********************************
  // if (inputString.length === 1) {
  //   return true;
  // }
  // let t = [];
  // let s = inputString.split('').sort();
  // console.log(s);
  // let spaces = [];
  // for (let i = 0, j = s.length - 1, k = 0; i < s.length; i += 2, j--, k++) {
  //   if (s[i] === ' ') {
  //     console.log('adding space');
  //     spaces.push(' ');
  //     --i;
  //     ++j;
  //   } else {
  //     t[k] = s[i];
  //     t[j] = s[i + 1];
  //   }
  // }
  // console.log(spaces.length);
  // t.splice(Math.ceil(t.length / 2), 0, ...spaces);
  // let p = t.join('');
  // console.log(p);
  // for (let x = 0, y = p.length - 1; x <= Math.floor(p.length / 2); x++, y--) {
  //   if (p[x] !== p[y]) {
  //     return false;
  //   }
  // }
  // return true;
  // ********************************
}

const palindromeRearranging2 = (inputString) => {
  if (inputString.length === 1) return true;

  let obj = {};

  for (let i = 0; i < inputString.length; i++) {
    let key = inputString[i];
    if (obj[key] !== undefined) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }

  if (inputString.length % 2 === 0) {
    for (const key of Object.keys(obj)) {
      let x = obj[key] % 2;
      console.log(`obj[key] % 2: ${obj[key]}, result: ${x}`);
      if (obj[key] % 2) return false;
    }
  } else {
    let uniqueOdd = 0;
    for (const key of Object.keys(obj)) {
      let x = obj[key] % 2;
      console.log(`obj[key] % 2: ${obj[key]}, result: ${x}`);
      if (obj[key] % 2) uniqueOdd++;
      if (uniqueOdd > 1) return false;
    }
  }
  return true;
};

// console.log(palindromeRearranging2(pString));

function areEquallyStrong(a, b, c, d) {
  if (a === c && b === d) return true;
  if (a === d && b === c) return true;
  return false;
}

const maxDiffAdjacent = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    let absDiff = Math.sqrt(diff * diff);
    if (absDiff > max) {
      max = absDiff;
    }
  }
  return max;
};

// console.log(maxDiffAdjacent([2, 28, 1, -9, -39]));

// Return the char count of each alpha numeric character in the given string
// If char is uppercase, make it lower case;

const re = /[a-zA-Z0-9]/g;

const charCount = (str) => {
  let lowered = str.toLowerCase();
  lowered = lowered.match(re);
  console.log(lowered);
  // creat obj to hold char count
  let obj = {};
  // loop over str
  for (let i = 0; i < lowered.length; i++) {
    let char = lowered[i];

    // if char exists in obj, increase it's count by 1;
    // otherwise add each char to obj as a key
    if (obj[char] > 0) {
      obj[char] += 1;
    } else obj[char] = 1;
    console.log(obj);
  }
  // return obj
  return obj;
};

// console.log(charCount('hEllo 903 ./='));

// should return { h: 1, e: 1, l: 2, o: 1 }

// This checks to see if the char is alpha numeric, and is much faster than regex:

const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
};

// Same function charCount above refactored:

const charCount2 = (str) => {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

// console.log(charCount2('hellijfkj >xxcv.m;j 928490'));

function isIPv4Address(str) {
  const isDigit = (char) => {
    let code = char.charCodeAt(0);
    console.log(char, code);
    if (!(code > 47 && code < 58) && !(code === 46)) {
      console.log("Broke at isDigit");
      return false;
    }
    return true;
  };

  let l = str.length;
  if (!(l >= 8 && l <= 12)) return false;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    // if (char === '-') return false;
    if (char === ".") count++;
    if (count > 3) return false;
    if (char === " ") return false;
    if (char === 0 && str[i + 1] === 0) return false;
  }
  if (!(count === 3)) return false;

  for (let c of str) {
    console.log(c);
    if (isDigit(c) === false) {
      return false;
    }
  }

  const arr = str.split(".");
  let topCount = 0;
  let lowCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    // let num = parseInt(char);
    if (char === 255) {
      topCount++;
    }

    if (char === 0) {
      lowCount++;
    }

    if (!(char >= 0 && char <= 255)) {
      console.log("Broke at for loop");
      return false;
    }
  }
  if (topCount === 4) return true;
  if (lowCount === 4) return true;
  const regex =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (regex.test(str)) return true;
  return false;
}

// console.log(isIPv4Address('1.1.1.1a'));

const isIPv4Address2 = (str) => {
  // \b matches a word boundary
  // (?:x) is a non-capturing group: it matches x but does not remember the match
  // 25[0-5] matches a 3 digit number between 250-255;
  // | this is the or operator
  // 2[0-4][0-9] matches a 3 digit number between 200 - 249
  // [01]? matches a 0 or 1 exactly 0 or 1 times
  // [0-9][0-9]? matches 0-9 and 0-9 exactly 0 or 1 times
  // The above two match numbers 0-199
  // \. matches a period to follow the inner matching group
  // {3} matches the preceding needs to be matched 3 times
  // the final segment indicates a repitition of the above, looking for numbers 0-255 exactly once, followed by no period and ending with a word break
  let l = str.length;
  if (!(l >= 8 && l <= 12)) {
    return false;
  }
  let count = 0;
  for (let char of str) {
    if (char === ".") {
      count++;
    }
    if (count > 3) {
      return false;
    }
  }
  const regex =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(str);
};

// console.log(isIPv4Address('255.255.255.255'));

function avoidObstacles(arr) {
  // input: arr of ints = coordinates of obstacles
  // start: index 0 of arr
  // only allowed to make jumps to the right of the same length rep by some int
  // find the minimal length of jump
  arr.sort((a, b) => a - b);
  // the first possible shortest step to get over the mines
  // test this step to see if it would get to the end evenly
  // if I put each of the data points in an object, I could test these steps against that
  // I would need to put each of these potential steps into an object and compare
  // if I did all of this, I wouldn't need to sort the array;
  const findStart = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] - arr[i] > 1) {
        return arr[i] + 1;
      }
    }
  };
  let mines = {};
  let end = arr[arr.length - 1];
  let start = findStart() || 1;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    mines[el] = 1;
  }

  console.log(mines);

  let mineKeys = Object.keys(mines);

  const generateAndTestSteps = (n) => {
    let steps = {};

    for (let i = n; i <= end; i += n) {
      steps = {
        ...steps,
        [i]: 0,
      };
    }

    console.log(steps);
    let stepKeys = Object.keys(steps);

    for (let key of mineKeys) {
      console.log(steps.hasOwnProperty(key));
      // let x = Math.pow(n, 2);
      if (steps.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };

  for (let i = start; i; i += 1) {
    console.log(i);
    console.log(generateAndTestSteps(i));
    // console.log(Math.log(i));
    if (generateAndTestSteps(i)) {
      return i;
    }
  }
}

console.log(avoidObstacles([2, 3]));

function avoidObstacles(arr) {
  // input: arr of ints = coordinates of obstacles
  // start: index 0 of arr
  // only allowed to make jumps to the right of the same length rep by some int
  // find the minimal lenght of jump
  // create two objects, assign keys to each.
  // the first will contain all the "mines" or obstacles
  // the second will contain all the possible steps, starting at 1 point past the first element in the arr;
  arr.sort((a, b) => a - b);
  let mines = {};
  let end = arr[arr.length - 1];
  let start = 1;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    mines[el] = 1;
  }

  let mineKeys = Object.keys(mines);

  const generateAndTestSteps = (n) => {
    let steps = {};
    for (let i = n; i <= end; i += n) {
      steps = {
        ...steps,
        [i]: 0,
      };
    }
    for (let key of mineKeys) {
      // if there is a matching key, the step won't work
      if (steps.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };
  // the primary engine of the function;
  // it begins by testing the first step past the first element in the array;
  // it increases only by one each test, so that the first test case it passes will be the least possible steps;
  for (let i = start; i; i += 1) {
    if (generateAndTestSteps(i)) {
      return i;
    }
  }
}

const boxBlur = (image) => {
  let blurredImage = [];

  // y is in reference to y-axis, and x to x-axis
  for (let y = 0; y < image.length - 2; y++) {
    let row = [];
    for (let x = 0; x < image[y].length - 2; x++) {
      let sum = 0;
      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
        }
      }
      row.push(Math.floor(sum / 9));
    }
    blurredImage.push(row);
  }
  return blurredImage;
};

console.log(
  boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
  ])
);
// starting with boxBlur[1][1];
// let b = boxBlur;
// let temp = 0;

// if(b[x-1][x-1] !== null)
// b[x-1][x] = 4;
// b[x-1][x+1] = 0;

// b[x][x-1] = 5;
// 6
// b[x][x+1]

const minesweeper = (matrix) => {
  let mines = [];

  const sweep = (m, y, x) => {
    let temp = 0;
    let l = m[y].length;
    console.log(m[y].length);
    if (m[y - 1] !== undefined) {
      if (x > 0 && m[y - 1][x - 1]) temp++, console.log("830");
      if (m[y - 1][x] !== undefined && m[y - 1][x] === true)
        temp++, console.log("831");
      if (m[y - 1][x + 1] !== undefined && m[y - 1][x + 1] === true)
        temp++, console.log("832");
    }
    if (m[y] !== undefined) {
      if (m[y][x - 1] !== undefined && m[y][x - 1] === true)
        temp++, console.log("835");
      if (m[y][x + 1] !== undefined && m[y][x + 1] === true)
        temp++, console.log("836");
    }
    if (m[y + 1] !== undefined) {
      if (m[y + 1][x - 1] !== undefined && m[y + 1][x - 1] === true)
        temp++, console.log("839");
      if (m[y + 1][x] !== undefined && m[y + 1][x] === true)
        temp++, console.log("840");
      if (m[y + 1][x + 1] !== undefined && m[y + 1][x + 1] === true)
        temp++, console.log("841");
    }
    console.log(temp);
    let final = temp;
    temp = 0;
    return final;
  };
  for (let y = 0; y < matrix.length; y++) {
    mines[y] = [];
    for (let x = 0; x < matrix[y].length; x++) {
      console.log(y, x);
      mines[y].push(sweep(matrix, y, x));
      console.log(mines);
      console.log(matrix);
    }
  }
  return mines;
};

// console.log(
//   minesweeper([
//     [true, false, false, true],
//     [false, false, true, false],
//     [true, true, false, true],
//   ])
// );

function arrayReplace(arr, x, y) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) arr[i] = y;
  }
  return arr;
}

// console.log(arrayReplace([1, 3, 1], 1, 2));

function evenDigitsOnly(n) {
  let arr = n.toString().split("");
  for (let x of arr) {
    if (x % 2 !== 0) return false;
  }
  return true;
}

console.log(evenDigitsOnly(6428086));

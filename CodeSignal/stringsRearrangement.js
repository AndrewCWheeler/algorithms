// Given an array of equal-length strings, you'd like to know if it's
// possible to rearrange the order of the elements in such a way that
// each consecutive pair of strings differ by exactly one character.
// Return true if it's possible, and false if not.

// Note: You're only rearranging the order of the strings, not the
// order of the letters within the strings!

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.

// There are 6 possible arrangements for these strings:

// ["aba", "bbb", "bab"]
// ["aba", "bab", "bbb"]
// ["bbb", "aba", "bab"]
// ["bbb", "bab", "aba"]
// ["bab", "bbb", "aba"]
// ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing
// by 1 character, so the answer is false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// It's possible to arrange these strings in a way that each consecutive
// pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb",
// "ab", "aa"), so return true.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 15.

// [output] boolean

// Return true if the strings can be reordered in such a way that
// each neighbouring pair of strings differ by exactly one character
// (false otherwise).

const stringsRearrangement = (arr) => {
  let x = false;
  let solution = [];
  const rearrange = () => {
    for (let i = 0; i < arr.length; i++) {
      if (x) break;
      solution.push(arr.splice(i, 1)[0]);
      console.log('This is the solution:');
      console.log(solution);
      console.log('This is arr:');
      console.log(arr);
      if (arr.length === 0) {
        console.log('if going to check():');
        x = x || check();
      } else {
        console.log('else rearrange();');
        rearrange();
      }
      arr.splice(i, 0, solution.pop());
    }
  };
  const check = () => {
    for (let i = 0; i < solution.length - 1; i++) {
      let diff = 0;
      for (let j = 0; j < solution[i].length; j++) {
        if (solution[i][j] !== solution[i + 1][j]) {
          diff++;
        }
      }
      if (diff !== 1) {
        return false;
      }
    }
    return true;
  };
  rearrange();
  return x;
};

console.log(stringsRearrangement(['bb', 'aa', 'ab']));

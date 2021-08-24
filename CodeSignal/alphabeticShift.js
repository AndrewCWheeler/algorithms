// Given a string, your task is to replace each of its characters
// by the next one in the English alphabet; i.e. replace a with b,
// replace b with c, etc (z would be replaced by a).

// Example:

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz"

let inputString = "crazy";

const alphabeticShift = (str) => {
  let result = [],
    temp,
    code;
  for (let char of str) {
    code = char.charCodeAt(0);
    if (code === 122) {
      code = 97;
      temp = String.fromCharCode(code);
    } else {
      temp = String.fromCharCode((code += 1));
    }
    result.push(temp);
  }
  let final = result.join("");
  return final;
};

console.log(alphabeticShift(inputString));

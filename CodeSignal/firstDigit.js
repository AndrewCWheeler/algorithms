//  Find the leftmost digit that occurs in a given string.

//      Example

//  For inputString = "var_1__Int", the output should be
//  firstDigit(inputString) = '1';
//  For inputString = "q2q-q", the output should be
//  firstDigit(inputString) = '2';
//  For inputString = "0ss", the output should be
//  firstDigit(inputString) = '0'.

const firstDigit = (str) => {
    const isDigit = /\d/;
    for (let char of str) {
        if (isDigit.test(char)) {
            return char;
        }
    }
}

console.log(firstDigit("var_1__Int"));
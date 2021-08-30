// Given a string, output its longest prefix which 
// contains only digits.

// Example

// For inputString = "123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

const longestDigitsPrefix = (str) => {
    const isDigit = /^\d*/;
    let matches = str.match(isDigit);
    console.log(matches);
    
    let result = '';
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].length > result.length) {
            result = matches[i];
        }
    }
    return result;
}

console.log(longestDigitsPrefix("  3) always check for whitespaces"));
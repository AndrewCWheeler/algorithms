// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.


const differentSymbolsNaive = (str) => {
    let obj = {};
    for (let char of str) {
        obj[char] = obj[char] ? obj[char] += 1 : 1;
    }
    return Object.keys(obj).length;
}

console.log(differentSymbolsNaive("@@BBCCDD8899"));
// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)


function sameFrequency(a, b) {
    let obj = {};
    let obj2 = {};
    a = a.toString().split("");
    b = b.toString().split("");
    for (let n of a) {
        obj[n] = obj[n] ? obj[n] += 1 : 1;
    }
    for (let n of b) {
        obj2[n] = obj2[n] ? obj2[n] += 1 : 1;
    }
    for (let key in obj) {
        if (!(key in obj2)) return false;
        if (obj[key] !== obj2[key]) return false;
    }
    return true;
}


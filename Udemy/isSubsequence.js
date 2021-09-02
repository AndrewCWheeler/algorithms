// Multiple Pointer - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the 
// characters in the second string. In other words, the function should check
// whether the characters in the first string appear somewhere in the second
// string, without their order changing.

// examples: 
// isSubsequence('hello', 'hello world'): // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb');

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity: O(N+M)
// Space Complexity: O(1)


const isSubsequence = (a, b) => {
    let j = 0;
    let goodCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[j]) {
            j++;
            goodCount+=1;
        }
        else {
            i--;
            j++;
        }
        if (i === a.length && goodCount !== a.length) {
            return false;
        }
        else if (j === b.length && goodCount !== a.length) {
            return false;
        }
    }
    return true;
}

console.log(isSubsequence('abc', 'abc'));
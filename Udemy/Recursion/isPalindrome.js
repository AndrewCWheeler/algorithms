// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true

const isPalindrome = (str) => {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else return false;
};
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('awesome')); // false

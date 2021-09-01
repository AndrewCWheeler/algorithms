const buildPalindrome = (str) => {
    let pal = str;
    let last = str.length - 1;
    while (pal.split('').reverse().join('') !== pal) {
        pal = str + str.slice(0, -last).split('').reverse().join('');
        last--;
    }
    return pal;
}

console.log(buildPalindrome("race"));

